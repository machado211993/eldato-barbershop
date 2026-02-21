import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryItems = [
    { icon: 'fa-solid fa-scissors', label: 'Foto Destacada', span: true },
    { icon: 'fa-solid fa-user',     label: 'Corte', span: false },
    { icon: 'fa-solid fa-razor',    label: 'Afeitado', span: false },
    { icon: 'fa-solid fa-brush',    label: 'Barba', span: false },
    { icon: 'fa-solid fa-star',     label: 'VIP', span: false }
  ];

  openInstagram(): void {
    window.open('https://www.instagram.com/eldatobarbershop', '_blank');
  }
}
