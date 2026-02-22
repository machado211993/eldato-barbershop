import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

export interface BookingForm {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

@Component({
  selector: "app-booking",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
})
export class BookingComponent implements OnInit {
  form: BookingForm = {
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  };

  minDate = "";
  showToast = false;
  toastMsg = "";
  toastError = false;

  services = [
    "Corte Clásico",
    "Afeitado Navaja",
    "Corte + Barba",
    "Diseño de Barba",
    "Tratamiento Capilar",
    "El Dato VIP (pack completo)",
  ];

  timeSlots = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  contactInfo = [
    {
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      value: "+54 9 379 486-2502",
      link: "https://wa.me/5493794716331",
    },
    {
      icon: "fa-solid fa-location-dot",
      label: "Ubicación",
      value: "Corrientes, Argentina",
      link: null,
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      value: "@eldatobarbershop",
      link: "https://www.instagram.com/eldatobarbershop",
    },
    {
      icon: "fa-solid fa-envelope",
      label: "Email",
      value: "eldato@barbershop.com",
      link: "mailto:eldato@barbershop.com",
    },
  ];

  ngOnInit(): void {
    this.minDate = new Date().toISOString().split("T")[0];
  }

  submitBooking(): void {
    if (
      !this.form.name ||
      !this.form.service ||
      !this.form.date ||
      !this.form.time
    ) {
      this.toast("⚠️ Completá los campos requeridos.", true);
      return;
    }

    const msg =
      `Hola! Quiero reservar un turno en *El Dato Barbershop* ✂️\n\n` +
      `👤 *Nombre:* ${this.form.name}\n` +
      `📞 *Teléfono:* ${this.form.phone || "No indicado"}\n` +
      `✂️ *Servicio:* ${this.form.service}\n` +
      `📅 *Fecha:* ${this.form.date}\n` +
      `🕐 *Hora:* ${this.form.time}\n` +
      `📝 *Notas:* ${this.form.notes || "Ninguna"}`;

    window.open(
      `https://wa.me/5493794862502?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    this.toast("¡Redirigiendo a WhatsApp! Tu turno está casi listo. 🔥");
    this.resetForm();
  }

  private resetForm(): void {
    this.form = {
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    };
  }

  private toast(msg: string, error = false): void {
    this.toastMsg = msg;
    this.toastError = error;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3500);
  }
}
