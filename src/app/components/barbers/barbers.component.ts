import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Barber {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  badge?: string;
}

@Component({
  selector: 'app-barbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barbers.component.html',
  styleUrls: ['./barbers.component.scss']
})
export class BarbersComponent {
  barbers: Barber[] = [
    {
      name: 'El Dato',
      role: 'Master Barber · Fundador',
      bio: 'Con más de 9 años de experiencia, El Dato lidera con pasión y técnica impecable. Especialista en degradados y diseños exclusivos que marcan tendencia.',
      skills: ['Degradado', 'Diseño', 'Navaja', 'Clásico'],
      badge: 'Fundador'
    },
    {
      name: 'Lucas M.',
      role: 'Senior Barber',
      bio: 'Especialista en cortes clásicos y afeitado con navaja. Conocido por su precisión quirúrgica y su trato cálido con cada cliente.',
      skills: ['Clásico', 'Barba', 'Afeitado']
    },
    {
      name: 'Martín R.',
      role: 'Barber Specialist',
      bio: 'Experto en tendencias actuales y cortes modernos. Siempre actualizado en las últimas técnicas internacionales del mundo de la barbería.',
      skills: ['Moderno', 'Texturas', 'Color']
    }
  ];
}
