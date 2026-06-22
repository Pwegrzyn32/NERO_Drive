import { Component, inject } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { BookingService } from '../../services/booking.service';

interface PackageItem {
  id: string;
  name: string;
  price: string;
  currency: string;
  descKey: string;
  featured: boolean;
  itemKeys: string[];
}

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslatePipe],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
})
export class PackagesComponent {
  private readonly booking = inject(BookingService);

  selectPackage(packageName: string): void {
    this.booking.select(packageName);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  packages: PackageItem[] = [
    {
      id: 'intro',
      name: 'INTRO',
      price: '600',
      currency: 'PLN',
      descKey: 'pkg.intro.desc',
      featured: false,
      itemKeys: ['pkg.i1','pkg.i2','pkg.i3','pkg.i4','pkg.i5','pkg.i6','pkg.i7'],
    },
    {
      id: 'gold',
      name: 'GOLD',
      price: '900',
      currency: 'PLN',
      descKey: 'pkg.gold.desc',
      featured: true,
      itemKeys: ['pkg.g1','pkg.g2','pkg.g3','pkg.g4','pkg.g5','pkg.g6','pkg.g7','pkg.g8','pkg.g9','pkg.g10'],
    },
    {
      id: 'nero',
      name: 'NERO',
      price: '1 300',
      currency: 'PLN',
      descKey: 'pkg.nero.desc',
      featured: false,
      itemKeys: ['pkg.n1','pkg.n2','pkg.n3','pkg.n4','pkg.n5','pkg.n6','pkg.n7'],
    },
  ];
}
