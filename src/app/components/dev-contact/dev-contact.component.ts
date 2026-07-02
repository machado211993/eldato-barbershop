import { Component } from '@angular/core';

@Component({
  selector: 'app-dev-contact',
  standalone: true,
  template: `
    <a
      href="https://wa.me/5493795694391?text=Hola%20MJ%20Solutions!%20Vi%20tu%20trabajo%20en%20El%20Dato%20Barbershop%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20una%20web."
      target="_blank"
      class="dev-btn"
      title="¿Necesitás una web? Contactá a MJ Solutions"
    >
      <i class="fas fa-laptop-code"></i>
      <span class="dev-tooltip">
        <span class="dev-tooltip__title">¿Necesitás una web?</span>
        <span class="dev-tooltip__sub">MJ Solutions →</span>
      </span>
    </a>
  `,
  styles: [`
    .dev-btn {
      position: fixed;
      bottom: 30px;
      left: 30px;
      z-index: 2000;
      width: 62px;
      height: 62px;
      background: linear-gradient(135deg, #6c3fc5 0%, #3b82f6 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(108, 63, 197, 0.50);
      animation: devPulse 3.5s ease-in-out infinite;
      transition: transform 0.3s ease;
      text-decoration: none;

      i {
        color: #fff;
        font-size: 26px;
      }

      &:hover {
        transform: scale(1.12);

        .dev-tooltip {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }
      }
    }

    .dev-tooltip {
      position: absolute;
      left: 72px;
      background: #0f0a1e;
      border: 1px solid rgba(108, 63, 197, 0.45);
      padding: 10px 16px;
      border-radius: 10px;
      white-space: nowrap;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      gap: 2px;

      &::before {
        content: '';
        position: absolute;
        left: -6px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        background: #0f0a1e;
        border-left: 1px solid rgba(108, 63, 197, 0.45);
        border-bottom: 1px solid rgba(108, 63, 197, 0.45);
        transform: translateY(-50%) rotate(45deg);
      }
    }

    .dev-tooltip__title {
      font-family: 'Montserrat', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: #fff;
    }

    .dev-tooltip__sub {
      font-family: 'Montserrat', sans-serif;
      font-size: 10px;
      letter-spacing: 0.4px;
      color: rgba(168, 139, 250, 0.9);
    }

    @keyframes devPulse {
      0%, 100% {
        box-shadow: 0 8px 24px rgba(108, 63, 197, 0.45);
      }
      50% {
        box-shadow:
          0 8px 40px rgba(108, 63, 197, 0.75),
          0 0 0 12px rgba(108, 63, 197, 0.10);
      }
    }

    @media (max-width: 480px) {
      .dev-btn {
        width: 52px;
        height: 52px;
        bottom: 20px;
        left: 20px;

        i { font-size: 22px; }
      }
    }
  `],
})
export class DevContactComponent {}
