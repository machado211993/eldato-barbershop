import { CommonModule } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { AboutComponent } from "./components/about/about.component";
import { BarbersComponent } from "./components/barbers/barbers.component";
import { BookingComponent } from "./components/booking/booking.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeroComponent } from "./components/hero/hero.component";
import { HoursComponent } from "./components/hours/hours.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ServicesComponent } from "./components/services/services.component";
import { StatsComponent } from "./components/stats/stats.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { WhatsappButtonComponent } from "./components/whatsapp-button/whatsapp-button.component";
import { VideoIntroComponent } from "./components/video-intro/video-intro.component";
import { DevContactComponent } from "./components/dev-contact/dev-contact.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    AboutComponent,
    ServicesComponent,
    BarbersComponent,
    GalleryComponent,
    TestimonialsComponent,
    HoursComponent,
    BookingComponent,
    FooterComponent,
    WhatsappButtonComponent,
    VideoIntroComponent,
    DevContactComponent,
  ],
  template: `
    <app-video-intro *ngIf="showIntro" (introDone)="showIntro = false"></app-video-intro>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-stats></app-stats>
      <app-about></app-about>
      <app-services></app-services>
      <app-barbers></app-barbers>
      <app-gallery></app-gallery>
      <app-testimonials></app-testimonials>
      <app-hours></app-hours>
      <app-booking></app-booking>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
    <app-dev-contact></app-dev-contact>
  `,
  styles: [
    `
      main {
        display: block;
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit {
  showIntro = true;

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    // Observe elements after a tick to ensure DOM is ready
    setTimeout(() => {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));
    }, 100);
  }
}
