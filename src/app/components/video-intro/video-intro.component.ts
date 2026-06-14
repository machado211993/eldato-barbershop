import { CommonModule } from '@angular/common';
import { Component, EventEmitter, AfterViewInit, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-video-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.scss'],
})
export class VideoIntroComponent implements AfterViewInit, OnDestroy {
  @Output() introDone = new EventEmitter<void>();

  showContent = false;
  showButtons  = false;
  isLeaving    = false;

  private introTimer: ReturnType<typeof setTimeout> | null = null;

  ngAfterViewInit(): void {
    document.body.style.overflow = 'hidden';
    // Mostrar imagen 1 segundo, luego revelar brand y botones
    this.introTimer = setTimeout(() => this.revealContent(), 1000);
  }

  ngOnDestroy(): void {
    if (this.introTimer) clearTimeout(this.introTimer);
  }

  skipIntro(): void {
    this.revealContent();
  }

  private revealContent(): void {
    if (this.showContent) return;
    if (this.introTimer) {
      clearTimeout(this.introTimer);
      this.introTimer = null;
    }
    this.showContent = true;
    setTimeout(() => { this.showButtons = true; }, 1800);
  }

  goToSection(id: string): void {
    this.startLeave();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 850);
  }

  openWhatsApp(): void {
    window.open(
      'https://wa.me/5493794716331?text=Hola! Quiero reservar un turno en El Dato Barbershop',
      '_blank'
    );
    this.startLeave();
  }

  private startLeave(): void {
    if (this.isLeaving) return;
    this.isLeaving = true;
    setTimeout(() => {
      document.body.style.overflow = '';
      this.introDone.emit();
    }, 800);
  }
}
