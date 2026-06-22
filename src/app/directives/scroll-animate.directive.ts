import { Directive, ElementRef, inject, Input, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds the 'visible' CSS class when the host element enters the viewport.
 * Works with the .reveal / .reveal-left / .reveal-right global classes.
 * SSR-safe: does nothing on the server.
 */
@Directive({
  selector: '[scrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  /** Fraction of element that must be visible before animating (default 0.12) */
  @Input() animateThreshold = 0.12;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: this.animateThreshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
