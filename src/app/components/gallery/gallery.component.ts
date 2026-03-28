import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent {
  galleryItems = [
    {
      icon: "fa-solid fa-scissors",
      label: "Corte Clásico",
      span: true,
      image: "assets/images/corteclasico4.jpeg",
    },
    {
      icon: "fa-solid fa-user",
      label: "Corte + Barba",
      span: false,
      image: "assets/images/corteybarba.jpeg",
    },
    {
      icon: "fa-solid fa-razor",
      label: "Solo Barba",
      span: false,
      image: "assets/images/solobarba.png",
    },
    {
      icon: "fa-solid fa-brush",
      label: "Mecha Normal",
      span: false,
      image: "assets/images/mechanormal.jpeg",
    },
    {
      icon: "fa-solid fa-star",
      label: "Mecha Vip",
      span: false,
      image: "assets/images/mechavip.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Global",
      span: false,
      image: "assets/images/barberia18.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Corte Clásico",
      span: false,
      image: "assets/images/barberia2.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Corte Clásico",
      span: false,
      image: "assets/images/barberia4.jpeg",
    },
    {
      icon: "fa-solid fa-star",
      label: "Mecha Vip",
      span: false,
      image: "assets/images/barberia6.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Corte Clásico",
      span: false,
      image: "assets/images/barberia7.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Corte Clásico",
      span: false,
      image: "assets/images/barberia8.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Corte Clásico",
      span: false,
      image: "assets/images/barberia12.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      label: "Corte Clásico",
      span: false,
      image: "assets/images/barberia13.jpeg",
    },
    {
      icon: "fa-solid fa-star",
      label: "Mecha Vip",
      span: false,
      image: "assets/images/barberia15.jpeg",
    },
  ];

  openInstagram(): void {
    window.open("https://www.instagram.com/eldatobarbershop", "_blank");
  }
}
