import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      href="https://wa.me/5493794000000?text=Hola!%20Quiero%20reservar%20un%20turno%20en%20El%20Dato%20Barbershop%20✂️"
      target="_blank"
      class="wa-btn"
      title="Chateá con nosotros"
    >
      <i class="fab fa-whatsapp"></i>
      <span class="wa-tooltip">Chateá con nosotros</span>
    </a>
  `,
  styles: [`
    .wa-btn {
      position: fixed;
      bottom: 30px; right: 30px;
      z-index: 2000;
      width: 62px; height: 62px;
      background: #25D366;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
      animation: waPulse 3s ease-in-out infinite;
      transition: transform 0.3s ease;

      i {
        color: #fff;
        font-size: 30px;
      }

      &:hover {
        transform: scale(1.12);
        .wa-tooltip { opacity: 1; transform: translateX(0); }
      }
    }

    .wa-tooltip {
      position: absolute;
      right: 72px;
      background: #1A1A1A;
      color: #F5F0E8;
      padding: 8px 16px;
      font-size: 11px;
      letter-spacing: 1px;
      white-space: nowrap;
      border: 1px solid rgba(201, 168, 76, 0.2);
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.3s ease;
      pointer-events: none;
      font-family: 'Montserrat', sans-serif;
    }

    @keyframes waPulse {
      0%, 100% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4); }
      50%       { box-shadow: 0 8px 40px rgba(37, 211, 102, 0.7), 0 0 0 12px rgba(37, 211, 102, 0.1); }
    }
  `]
})
export class WhatsappButtonComponent {}
