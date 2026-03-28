import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-oferta-carousel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./oferta-carousel.component.html",
  styleUrls: ["./oferta-carousel.component.scss"],
})
export class OfertaCarouselComponent {
  ofertasBase = [
    {
      imagen: "assets/images/barberia1.jpeg",
      titulo: "Corte Clásico",
      subtitulo: "",
    },
    {
      imagen: "assets/images/barberia5.jpeg",
      titulo: "Corte Clásico",
      subtitulo: "",
    },
    {
      imagen: "assets/images/corteclasico.jpeg",
      titulo: "Corte Clásico",
      subtitulo: "",
    },
    {
      imagen: "assets/images/corteclasico4.jpeg",
      titulo: "Corte Clásico",
      subtitulo: "",
    },
    {
      imagen: "assets/images/corteybarba.jpeg",
      titulo: "Corte + Barba",
      subtitulo: "",
    },
    {
      imagen: "assets/images/solobarba.png",
      titulo: "Solo Barba",
      subtitulo: "",
    },
    {
      imagen: "assets/images/mechanormal.jpeg",
      titulo: "Mecha Normal",
      subtitulo: "",
    },
    {
      imagen: "assets/images/mechavip.jpeg",
      titulo: "Mecha Vip",
      subtitulo: "",
    },
    {
      imagen: "assets/images/barberia18.jpeg",
      titulo: "Global",
      subtitulo: "",
    },
  ];

  // Duplicamos para que el loop sea continuo
  ofertas = [
    ...this.ofertasBase,
    ...this.ofertasBase,
    ...this.ofertasBase,
    ...this.ofertasBase,
  ];
}
