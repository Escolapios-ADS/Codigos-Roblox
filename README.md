# 🎮 Códigos Roblox 2026 / Roblox Codes Hub

Plataforma ultra-rápida construida con **Astro 5+**, **Tailwind CSS v4** y **TypeScript**, optimizada para capturar tráfico masivo orgánico de búsquedas sobre códigos y recompensas de Roblox.

---

## ⚡ Características Principales

- **Arquitectura i18n Nativa:** Rutas independientes en **Español (`/es/`)** e **Inglés (`/en/`)** con etiquetas `hreflang` automáticas para posicionar tanto en el mercado hispanohablante como en el anglosajón.
- **Rendimiento Máximo (Core Web Vitals 100/100):** Salida estática (SSG) sin sobrecarga de frameworks cliente pesados, lo que otorga la máxima ventaja en el algoritmo móvil de Google.
- **Botón Copiar en 1 Clic (`1-Click Copy`):** Copia instantánea al portapapeles con respuesta visual háptica y toast notification.
- **Buscador y Filtros en Tiempo Real:** Filtrado instantáneo por texto (con atajo `Ctrl + K`) y por categorías (Anime, RPG, Acción, Moda, Promo Codes).
- **SEO Avanzado con Schema.org:**
  - Microdatos `FAQPage` para conseguir Rich Snippets (acordeones en los resultados de Google).
  - Marcado `BreadcrumbList` y `WebSite` con `SearchAction`.
  - Badges de frescura dinámica ("Verificado hoy / Verified Today").
  - Sitemap XML (`/sitemap-index.xml`) y `robots.txt` autogenerados.
- **Catálogo de Juegos Top Integrados:**
  - Blox Fruits
  - Blade Ball
  - Dress to Impress (DTI)
  - Anime Defenders
  - King Legacy
  - Roblox Promo Codes (Mascotas y Accesorios de Avatar)
  - Brookhaven RP (Music IDs)

---

## 📂 Estructura del Proyecto

```text
Codigos-Roblox/
├── public/
│   ├── favicon.svg          # Favicon vectorial cúbico Roblox
│   └── robots.txt           # Configuración de rastreo y enlace al sitemap
├── src/
│   ├── components/
│   │   ├── CodeCard.astro   # Tarjeta interactiva de código con 1-click copy
│   │   ├── FaqSection.astro # Acordeón de preguntas frecuentes con Schema
│   │   ├── Footer.astro     # Enlaces SEO y disclaimer de Roblox Corp
│   │   ├── GameCard.astro   # Card de juego con conteo de códigos y métricas
│   │   ├── Header.astro     # Navbar con selector de idioma dinámico
│   │   ├── Hero.astro       # Hero con buscador interactivo y filtros
│   │   └── RedeemGuide.astro# Guía paso a paso para canjear recompensas
│   ├── data/
│   │   └── games.ts         # Base de datos tipada de juegos y códigos
│   ├── i18n/
│   │   └── translations.ts  # Diccionario bilingüe (ES / EN)
│   ├── layouts/
│   │   └── Layout.astro     # Layout con OpenGraph, Twitter Cards y hreflang
│   ├── pages/
│   │   ├── en/              # Versión en inglés
│   │   ├── es/              # Versión en español
│   │   └── index.astro      # Redirección inteligente según idioma del navegador
│   └── types/
│       └── game.ts          # Interfaces de TypeScript
├── astro.config.mjs
└── package.json
```

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción (genera HTML estático en ./dist/)
npm run build

# Previsualizar el build de producción
npm run preview
```

---

## ➕ Cómo Añadir un Nuevo Juego o Códigos

Todo el contenido se gestiona de forma centralizada y tipada en [`src/data/games.ts`](src/data/games.ts). Para añadir un juego nuevo o actualizar códigos, simplemente añade un objeto siguiendo la interfaz `GameItem`.

---

## 🚀 Despliegue Recomendado

El proyecto compila a archivos estáticos puros (`dist/`), lo que permite desplegarlo de forma 100% gratuita y con CDN global en:
- **Cloudflare Pages**
- **Vercel**
- **Netlify**
- **GitHub Pages**
