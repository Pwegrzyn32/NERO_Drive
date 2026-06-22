import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Reason {
  number: string;
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss',
})
export class WhyChooseComponent {
  reasons: Reason[] = [
    { number: '01', titleKey: 'why.r1.title', descKey: 'why.r1.desc' },
    { number: '02', titleKey: 'why.r2.title', descKey: 'why.r2.desc' },
    { number: '03', titleKey: 'why.r3.title', descKey: 'why.r3.desc' },
    { number: '04', titleKey: 'why.r4.title', descKey: 'why.r4.desc' },
    { number: '05', titleKey: 'why.r5.title', descKey: 'why.r5.desc' },
    { number: '06', titleKey: 'why.r6.title', descKey: 'why.r6.desc' },
  ];
}
