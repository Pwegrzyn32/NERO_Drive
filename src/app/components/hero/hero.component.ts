import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly platformId = inject(PLATFORM_ID);

  scrollTo(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
