import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutCarComponent } from '../../components/about-car/about-car.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { AdditionalServicesComponent } from '../../components/additional-services/additional-services.component';
import { WhyChooseComponent } from '../../components/why-choose/why-choose.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutCarComponent,
    PackagesComponent,
    AdditionalServicesComponent,
    WhyChooseComponent,
    GalleryComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
