import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Service {
  titleKey: string;
  descKey: string;
}

@Component({
  selector: 'app-additional-services',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './additional-services.component.html',
  styleUrl: './additional-services.component.scss',
})
export class AdditionalServicesComponent {
  services: Service[] = [
    { titleKey: 'svc.s1.title', descKey: 'svc.s1.desc' },
    { titleKey: 'svc.s2.title', descKey: 'svc.s2.desc' },
    { titleKey: 'svc.s3.title', descKey: 'svc.s3.desc' },
    { titleKey: 'svc.s4.title', descKey: 'svc.s4.desc' },
    { titleKey: 'svc.s5.title', descKey: 'svc.s5.desc' },
  ];
}

