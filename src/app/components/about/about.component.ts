import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    { icon: 'fa-solid fa-scissors',  text: 'Técnicas premium de corte y afeitado' },
    { icon: 'fa-solid fa-medal',      text: 'Productos de alta calidad' },
    { icon: 'fa-solid fa-clock',      text: 'Turnos puntuales, sin esperas' },
    { icon: 'fa-solid fa-heart',      text: 'Atención personalizada garantizada' }
  ];
}
