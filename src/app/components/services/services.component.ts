import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  icon: string;
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fa-solid fa-scissors',
      name: 'Corte Clásico',
      description: 'Corte a tijera o máquina con terminación prolija. Para el hombre que sabe lo que quiere.',
      price: '2.500'
    },
    {
      icon: 'fa-solid fa-razor',
      name: 'Afeitado Navaja',
      description: 'Experiencia de barbería clásica con toalla caliente, crema premium y navaja afilada.',
      price: '3.000'
    },
    {
      icon: 'fa-solid fa-user-tie',
      name: 'Corte + Barba',
      description: 'El combo perfecto. Corte + arreglo de barba con perfilado preciso y productos top.',
      price: '4.500'
    },
    {
      icon: 'fa-solid fa-brush',
      name: 'Diseño de Barba',
      description: 'Perfilado, definición y modelado de barba según tu estilo y estructura facial.',
      price: '2.000'
    },
    {
      icon: 'fa-solid fa-sparkles',
      name: 'Tratamiento Capilar',
      description: 'Hidratación profunda, mascarillas y tratamientos para un cabello saludable y fuerte.',
      price: '3.500'
    },
    {
      icon: 'fa-solid fa-star',
      name: 'El Dato VIP',
      description: 'Experiencia completa: corte + barba + tratamiento + masaje capilar. Para el hombre exigente.',
      price: '7.000'
    }
  ];
}
