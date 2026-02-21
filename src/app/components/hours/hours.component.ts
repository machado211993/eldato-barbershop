import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent {
  hours = [
    { day: 'Lunes',     time: '9:00 – 20:00', closed: false },
    { day: 'Martes',    time: '9:00 – 20:00', closed: false },
    { day: 'Miércoles', time: '9:00 – 20:00', closed: false },
    { day: 'Jueves',    time: '9:00 – 20:00', closed: false },
    { day: 'Viernes',   time: '9:00 – 21:00', closed: false },
    { day: 'Sábado',    time: '9:00 – 18:00', closed: false },
    { day: 'Domingo',   time: 'Cerrado',       closed: true  }
  ];
}
