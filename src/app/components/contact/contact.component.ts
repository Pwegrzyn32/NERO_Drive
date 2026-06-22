import { Component, signal, inject, effect } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { BookingService } from '../../services/booking.service';
import { TranslationService } from '../../services/translation.service';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_b1qyuzm';
const EMAILJS_TEMPLATE_ID = 'template_5xyejkr';
const EMAILJS_PUBLIC_KEY  = 'imHOdKGkwEsInEkaY';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  message: string;
  /** Honeypot field – must stay empty; bots tend to fill it. */
  website: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollAnimateDirective, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly booking = inject(BookingService);
  private readonly ts = inject(TranslationService);

  submitted = signal(false);
  isLoading = signal(false);
  sendError = signal(false);
  selectedPackageLabel = signal<string>('');

  constructor() {
    effect(() => {
      const pkg = this.booking.selectedPackage();
      if (pkg) {
        this.selectedPackageLabel.set(pkg);
        this.formData.eventType = 'Wesele';
        this.formData.message =
          this.ts.lang() === 'en'
            ? `I would like to book the ${pkg} package.`
            : `Chciałbym/Chciałabym zarezerwować pakiet ${pkg}.`;
      }
    });
  }

  currentYear = new Date().getFullYear();

  eventTypeKeys = [
    { key: 'evt.wedding',   value: 'Wesele' },
    { key: 'evt.prom',      value: 'Studniówka / Bal' },
    { key: 'evt.corporate', value: 'Event Korporacyjny' },
    { key: 'evt.photo',     value: 'Produkcja Foto / Video' },
    { key: 'evt.private',   value: 'Event Prywatny' },
    { key: 'evt.other',     value: 'Inne' },
  ];

  formData: ContactForm = {
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    message: '',
    website: '',
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    // Honeypot: silently "succeed" for bots without sending anything.
    if (this.formData.website.trim() !== '') {
      this.submitted.set(true);
      return;
    }

    this.isLoading.set(true);
    this.sendError.set(false);

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  this.formData.name,
        from_email: this.formData.email,
        phone:      this.formData.phone,
        event_date: this.formData.eventDate,
        event_type: this.formData.eventType,
        message:    this.formData.message,
      },
      EMAILJS_PUBLIC_KEY,
    ).then(() => {
      this.isLoading.set(false);
      this.submitted.set(true);
      form.reset();
      this.formData = { name: '', phone: '', email: '', eventDate: '', eventType: '', message: '', website: '' };
    }).catch(() => {
      this.isLoading.set(false);
      this.sendError.set(true);
    });
  }

  resetForm(): void {
    this.submitted.set(false);
    this.sendError.set(false);
  }
}
