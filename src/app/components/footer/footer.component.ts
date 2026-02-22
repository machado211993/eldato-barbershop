import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/eldatobarbershop",
      label: "Instagram",
    },
    {
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/eldatobarbershop",
      label: "Facebook",
    },
    {
      icon: "fab fa-whatsapp",
      url: "https://wa.me/5493794716331",
      label: "WhatsApp",
    },
    {
      icon: "fab fa-tiktok",
      url: "https://www.tiktok.com/@eldatobarbershop",
      label: "TikTok",
    },
    {
      icon: "fa-solid fa-envelope",
      url: "mailto:eldato@barbershop.com",
      label: "Email",
    },
  ];

  services = [
    "Corte Clásico",
    "Afeitado Navaja",
    "Corte + Barba",
    "Diseño de Barba",
    "Tratamiento Capilar",
    "Pack VIP",
  ];

  navLinks = [
    { label: "Nosotros", id: "nosotros" },
    { label: "El Equipo", id: "barberos" },
    { label: "Galería", id: "galeria" },
    { label: "Reviews", id: "testimonios" },
    { label: "Horarios", id: "horarios" },
    { label: "Reservar Turno", id: "reservar" },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
