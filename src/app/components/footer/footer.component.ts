import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  readonly currentYear = new Date().getFullYear();
  readonly email = 'nerodrive.giulia@gmail.com';

  /** Navigate home (if needed) and smooth-scroll to a section. */
  goToContact(event: Event): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;

    const scroll = () => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    if (this.router.url.split(/[?#]/)[0] === '/') {
      scroll();
    } else {
      this.router.navigate(['/']).then(() => setTimeout(scroll, 100));
    }
  }
}
