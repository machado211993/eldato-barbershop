import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, AfterViewInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.scss'],
})
export class VideoIntroComponent implements AfterViewInit {
  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;
  @Output() introDone = new EventEmitter<void>();

  showContent = false;
  showButtons  = false;
  isLeaving    = false;

  ngAfterViewInit(): void {
    document.body.style.overflow = 'hidden';

    const video = this.videoEl.nativeElement;

    // Cuando termina el video → revelar brand y botones
    video.addEventListener('ended', () => this.revealContent());
    video.addEventListener('error', () => this.revealContent());
  }

  // Salta el video y muestra el contenido directamente
  skipVideo(): void {
    const video = this.videoEl.nativeElement;
    video.pause();
    this.revealContent();
  }

  private revealContent(): void {
    if (this.showContent) return;
    this.showContent = true;
    // Botones aparecen un poco después del brand
    setTimeout(() => { this.showButtons = true; }, 1800);
  }

  // Llamado al hacer clic en un botón de acción → cierra el intro
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
