import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

/** Translates a key using the current language. Impure so it reacts to language changes. */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly ts = inject(TranslationService);

  transform(key: string): string {
    return this.ts.t(key);
  }
}
