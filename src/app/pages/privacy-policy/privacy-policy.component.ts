import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  private readonly ts = inject(TranslationService);

  /** Current UI language – drives which localized policy text is shown. */
  readonly lang = this.ts.lang;

  /** Last substantive update of this policy. */
  readonly lastUpdated = '07.07.2026';

  readonly controllerEmail = 'nerodrive.giulia@gmail.com';
}
