import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  ts = inject(TranslationService);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 60);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(sectionId: string): void {
    this.closeMenu();
    if (!isPlatformBrowser(this.platformId)) return;

    const scroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Section anchors only exist on the home route. If we are elsewhere
    // (e.g. the privacy policy page), navigate home first, then scroll.
    if (this.router.url.split(/[?#]/)[0] === '/') {
      scroll();
    } else {
      this.router.navigate(['/']).then(() => setTimeout(scroll, 100));
    }
  }
}
