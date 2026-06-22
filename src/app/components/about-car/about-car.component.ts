import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about-car',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './about-car.component.html',
  styleUrl: './about-car.component.scss',
})
export class AboutCarComponent {
  featureKeys = [
    'about.f1','about.f2','about.f3','about.f4',
    'about.f5','about.f6','about.f7','about.f8',
  ];
}
