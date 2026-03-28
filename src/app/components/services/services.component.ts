import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

export interface Service {
  icon: string;
  name: string;
  description: string;
  price: string;
  image: string; // ← nuevo campo
}

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: "fa-solid fa-scissors",
      name: "Corte Clásico",
      description: "",
      price: "10.000",
      image: "assets/images/barberia1.jpeg",
    },
    {
      icon: "fa-solid fa-sparkles",
      name: "Corte Clásico",
      description: "",
      price: "10.000",
      image: "assets/images/barberia5.jpeg",
    },
    {
      icon: "fa-solid fa-star",
      name: "Corte Clásico",
      description: "",
      price: "10.000",
      image: "assets/images/corteclasico.jpeg",
    },
    {
      icon: "fa-solid fa-star",
      name: "Corte Clásico",
      description: "",
      price: "10.000",
      image: "assets/images/corteclasico4.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      name: "Corte + Barba",
      description: "",
      price: "13.000",
      image: "assets/images/corteybarba.jpeg",
    },
    {
      icon: "fa-solid fa-user-tie",
      name: "Solo Barba",
      description: "",
      price: "5.000",
      image: "assets/images/solobarba.png",
    },
    {
      icon: "fa-solid fa-brush",
      name: "Mecha Normal",
      description: "",
      price: "30.000",
      image: "assets/images/mechanormal.jpeg",
    },
    {
      icon: "fa-solid fa-razor",
      name: "Mecha Vip",
      description: "",
      price: "35.000",
      image: "assets/images/mechavip.jpeg",
    },

    {
      icon: "fa-solid fa-user-tie",
      name: "Global",
      description: "",
      price: "45.000",
      image: "assets/images/barberia18.jpeg",
    },
  ];
}
