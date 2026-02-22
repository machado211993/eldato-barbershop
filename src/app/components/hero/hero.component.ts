import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  openWhatsApp(): void {
    window.open(
      "https://wa.me/5493794716331?text=Hola! Quiero reservar un turno en El Dato Barbershop",
      "_blank",
    );
  }
}
