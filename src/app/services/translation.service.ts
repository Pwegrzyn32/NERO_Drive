import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TRANSLATIONS, Lang } from '../i18n/translations';

const STORAGE_KEY = 'nero-lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly platformId = inject(PLATFORM_ID);

  lang = signal<Lang>(this.readStoredLang());

  constructor() {
    // Persist the choice and keep <html lang> in sync for a11y / SEO.
    effect(() => {
      const current = this.lang();
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(STORAGE_KEY, current);
        document.documentElement.lang = current;
      }
    });
  }

  private readStoredLang(): Lang {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pl' || stored === 'en') return stored;
    }
    return 'pl';
  }

  toggle(): void {
    this.lang.update((l) => (l === 'pl' ? 'en' : 'pl'));
  }

  t(key: string): string {
    return TRANSLATIONS[key]?.[this.lang()] ?? key;
  }
}
