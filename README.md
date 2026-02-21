# ✂️ El Dato Barbershop — Angular 18

Sitio web profesional para **El Dato Barbershop**, construido con Angular 18 standalone components.

---

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js 18+ → https://nodejs.org
- npm 9+

### 1. Instalá las dependencias
```bash
npm install
```

### 2. Iniciá el servidor de desarrollo
```bash
npm start
# o
ng serve
```

### 3. Abrí el navegador en
```
http://localhost:4200
```

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/           → Barra de navegación fija con scroll + mobile
│   │   ├── hero/             → Sección principal con animaciones
│   │   ├── stats/            → Barra de estadísticas dorada
│   │   ├── about/            → Sección "Nosotros"
│   │   ├── services/         → Grid de servicios con precios
│   │   ├── barbers/          → Cards del equipo de barberos
│   │   ├── gallery/          → Galería de trabajos
│   │   ├── testimonials/     → Carrusel de testimonios infinito
│   │   ├── hours/            → Horarios de atención
│   │   ├── booking/          → Formulario de reserva → WhatsApp
│   │   ├── footer/           → Footer con redes sociales
│   │   └── whatsapp-button/  → Botón flotante de WhatsApp
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss               → Estilos globales y variables CSS
└── index.html
```

---

## ⚙️ Personalización

### 📞 Cambiar el número de WhatsApp
Buscá y reemplazá `5493794000000` por tu número real en:
- `src/app/components/booking/booking.component.ts`
- `src/app/components/footer/footer.component.html`
- `src/app/components/whatsapp-button/whatsapp-button.component.ts`
- `src/app/components/hero/hero.component.ts`

### 📸 Agregar el logo real
En `src/app/components/hero/hero.component.html`, reemplazá el bloque `.hero-logo` con:
```html
<img src="assets/images/logo.png" alt="El Dato Barbershop" class="hero-logo-img">
```
Y copiá tu logo PNG/WEBP a `src/assets/images/logo.png`.

### 📷 Agregar fotos de barberos
En `src/app/components/barbers/barbers.component.html`, reemplazá el `<i>` por:
```html
<img src="assets/images/barbero-1.jpg" alt="El Dato">
```

### 💰 Cambiar precios
En `src/app/components/services/services.component.ts`, editá el array `services`.

### 🕐 Cambiar horarios
En `src/app/components/hours/hours.component.ts`, editá el array `hours`.

### 📱 Cambiar redes sociales
En `src/app/components/footer/footer.component.ts`, editá el array `socialLinks`.

---

## 🎨 Paleta de Colores

| Variable      | Color     | Uso                    |
|---------------|-----------|------------------------|
| `--gold`      | `#C9A84C` | Acento principal       |
| `--gold-light`| `#F0C040` | Hover dorado           |
| `--gold-dark` | `#9A7A2E` | Dorado oscuro          |
| `--black`     | `#0A0A0A` | Fondo principal        |
| `--dark`      | `#111111` | Secciones oscuras      |
| `--dark2`     | `#1A1A1A` | Cards y formularios    |
| `--white`     | `#F5F0E8` | Texto principal        |

---

## 📦 Build para Producción

```bash
npm run build
```

Los archivos quedan en `dist/eldato-barbershop/`.

---

## 🛠️ Tecnologías

- **Angular 18** — Standalone Components
- **TypeScript 5.4**
- **SCSS** — Estilos modulares
- **Font Awesome 6** — Íconos
- **Google Fonts** — Playfair Display + Bebas Neue + Montserrat

---

Hecho con 🔥 para El Dato Barbershop
