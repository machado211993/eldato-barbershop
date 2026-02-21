import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  initials: string;
  name: string;
  date: string;
  text: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    { initials: 'AG', name: 'Agustín G.',  date: 'Febrero 2026',   stars: 5, text: 'El mejor corte que me hice en Corrientes. La atención es increíble y el resultado siempre supera mis expectativas.' },
    { initials: 'MR', name: 'Marcos R.',   date: 'Enero 2026',     stars: 5, text: 'Fui por primera vez y quedé enamorado. Ambiente top, atención profesional y el corte exactamente como lo pedí.' },
    { initials: 'FS', name: 'Federico S.', date: 'Diciembre 2025', stars: 5, text: 'El afeitado con navaja es una experiencia de otro nivel. Toalla caliente, crema premium, lo mejor que probé.' },
    { initials: 'JL', name: 'Jorge L.',    date: 'Noviembre 2025', stars: 5, text: 'Nunca más voy a otra barbería. El Dato y su equipo son unos maestros. Siempre salgo feliz y con buena onda.' },
    { initials: 'PA', name: 'Pablo A.',    date: 'Enero 2026',     stars: 5, text: 'El combo corte + barba es lo mejor. Precio justo, calidad premium. Muy recomendado a todos.' }
  ];

  get starsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }
}
