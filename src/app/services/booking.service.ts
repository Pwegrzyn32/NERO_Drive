import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
  selectedPackage = signal<string>('');

  select(packageName: string): void {
    this.selectedPackage.set(packageName);
  }
}
