import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="stats" class="stats-bar">
      <div class="stat-item" *ngFor="let stat of stats">
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  `,
  styles: [`
    .stats-bar {
      background: var(--gold);
      padding: 28px 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
    }
    .stat-item { text-align: center; }
    .stat-number {
      font-family: var(--font-bebas);
      font-size: 44px;
      color: var(--black);
      line-height: 1;
    }
    .stat-label {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(0,0,0,0.6);
      font-weight: 600;
      margin-top: 4px;
    }
  `]
})
export class StatsComponent {
  stats = [
    { number: '+5K',  label: 'Clientes Satisfechos' },
    { number: '9+',   label: 'Años de Experiencia' },
    { number: '3',    label: 'Barberos Expertos' },
    { number: '★ 5.0', label: 'Rating Promedio' }
  ];
}
