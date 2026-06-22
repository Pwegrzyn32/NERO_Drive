import { Component, signal, inject, PLATFORM_ID, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../services/translation.service';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  span?: 'wide' | 'tall' | 'normal';
  video?: boolean;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  ts = inject(TranslationService);

  activeFilter = signal('all');
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  videoMuted = signal(true);
  carouselIndex = signal(0);

  @ViewChild('galleryGrid') galleryGridRef!: ElementRef<HTMLElement>;
  @ViewChild('lightboxDialog') lightboxDialogRef!: ElementRef<HTMLDialogElement>;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const videos = this.galleryGridRef?.nativeElement?.querySelectorAll('video');
    if (videos) {
      Array.from(videos).forEach((v: HTMLVideoElement) => { v.muted = true; });
    }
  }

  toggleMute(event: MouseEvent, video: HTMLVideoElement): void {
    event.stopPropagation();
    video.muted = !video.muted;
    this.videoMuted.set(video.muted);
  }

  /** Re-mute every tile video and reset the mute indicator (e.g. after a filter change). */
  private resetVideoMute(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.videoMuted.set(true);
    const videos = this.galleryGridRef?.nativeElement?.querySelectorAll('video');
    if (videos) {
      Array.from(videos).forEach((v: HTMLVideoElement) => { v.muted = true; });
    }
  }

  // Filter keys for translation
  filterKeys = [
    { key: 'gal.all', value: 'all' },
    { key: 'gal.ext', value: 'exterior' },
    { key: 'gal.int', value: 'interior' },
    { key: 'gal.det', value: 'detail' },
  ];

  images: GalleryImage[] = [
    { src: 'images/gallery-1.jpg',  alt: 'Alfa Romeo Giulia - widok z przodu w ruchu, zlote slonce',  category: 'exterior', span: 'wide' },
    { src: 'images/gallery-4.jpg',  alt: 'Alfa Romeo Giulia - widok z przodu, aleja drzew o swicie',  category: 'exterior' },
    { src: 'images/gallery-5.jpg',  alt: 'Alfa Romeo Giulia - jazda w mglisty poranek',               category: 'exterior' },
    { src: 'images/gallery-8.jpg',  alt: 'Alfa Romeo Giulia - dynamiczna jazda, szerokie ujecie',     category: 'exterior' },
    { src: 'images/gallery-9.jpg',  alt: 'Alfa Romeo Giulia - jazda miejska, motion blur',            category: 'exterior' },
    { src: 'images/gallery-6.jpg',  alt: 'Alfa Romeo Giulia - profil, laka i most w tle',             category: 'exterior' },
    { src: 'images/interior.jpg',   alt: 'Alfa Romeo Giulia - wnetrze premium',                       category: 'interior' },
    { src: 'images/gallery-2.jpg',  alt: 'Alfa Romeo Giulia - tylne swiatla, detal nocny',            category: 'detail' },
    { src: 'images/gallery-3.jpg',  alt: 'Alfa Romeo Giulia - tyl o swicie, dym z wydechu',           category: 'detail' },
    { src: 'images/gallery-7.jpg',  alt: 'Alfa Romeo Giulia - tyl w jesiennym lesie',                 category: 'detail' },
    { src: 'images/drive.mp4',      alt: 'Alfa Romeo Giulia - jazda w akcji',                        category: 'exterior', video: true },
  ];

  get filteredPhotos(): GalleryImage[] {
    const f = this.activeFilter();
    return f === 'all' ? this.images : this.images.filter((img) => img.category === f);
  }

  setFilter(value: string): void {
    this.activeFilter.set(value);
    this.carouselIndex.set(0);
    setTimeout(() => {
      if (this.galleryGridRef?.nativeElement) {
        this.galleryGridRef.nativeElement.scrollLeft = 0;
      }
      this.resetVideoMute();
    }, 0);
  }

  onCarouselScroll(el: HTMLElement): void {
    const index = Math.round(el.scrollLeft / el.clientWidth);
    this.carouselIndex.set(index);
  }

  scrollToSlide(index: number): void {
    if (this.galleryGridRef?.nativeElement) {
      this.galleryGridRef.nativeElement.scrollTo({
        left: index * this.galleryGridRef.nativeElement.clientWidth,
        behavior: 'smooth',
      });
    }
  }

  openLightbox(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      this.lightboxIndex.set(index);
      this.lightboxOpen.set(true);
      document.body.style.overflow = 'hidden';
      // Show as a true modal: native focus trap + focus restore on close.
      setTimeout(() => this.lightboxDialogRef?.nativeElement?.showModal(), 0);
    }
  }

  closeLightbox(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.lightboxDialogRef?.nativeElement?.close();
    }
  }

  /** Fired by the native dialog 'close' event (button, Escape, or backdrop). */
  onDialogClose(): void {
    this.lightboxOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  prevImage(): void {
    const imgs = this.filteredPhotos;
    this.lightboxIndex.update((i) => (i - 1 + imgs.length) % imgs.length);
  }

  nextImage(): void {
    const imgs = this.filteredPhotos;
    this.lightboxIndex.update((i) => (i + 1) % imgs.length);
  }

  onImgError(event: Event, parentClass: string): void {
    (event.target as HTMLElement).closest('.' + parentClass)?.classList.add('no-img');
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    // Escape is handled natively by <dialog>; only handle arrow navigation here.
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }
}


