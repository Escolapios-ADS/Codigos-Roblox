#!/bin/bash
set -e

echo "🎨 Generating production optimized favicons and app icons..."

# 1. Create App Icon Master SVG (512x512 with solid #080C14 background)
cat << 'EOF' > /tmp/icon-master.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" fill="#080C14"/>
  <circle cx="256" cy="256" r="210" fill="#6366F1" opacity="0.12"/>
  <defs>
    <linearGradient id="cubeGrad" x1="80" y1="60" x2="432" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
    <linearGradient id="topFace" x1="120" y1="80" x2="390" y2="240" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#6366F1" stop-opacity="0.12"/>
    </linearGradient>
    <linearGradient id="leftFace" x1="80" y1="180" x2="256" y2="430" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#A855F7" stop-opacity="0.08"/>
    </linearGradient>
    <linearGradient id="rightFace" x1="432" y1="180" x2="256" y2="430" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#A855F7" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.1"/>
    </linearGradient>
  </defs>

  <path d="M256 72L424 168L256 264L88 168Z" fill="url(#topFace)"/>
  <path d="M88 168L256 264V440L88 344Z" fill="url(#leftFace)"/>
  <path d="M256 264L424 168V344L256 440Z" fill="url(#rightFace)"/>

  <path d="M256 72L424 168V344L256 440L88 344V168L256 72Z" stroke="url(#cubeGrad)" stroke-width="26" stroke-linejoin="round"/>
  <path d="M88 168L256 264L424 168" stroke="url(#cubeGrad)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M256 264V440" stroke="url(#cubeGrad)" stroke-width="26" stroke-linecap="round"/>
</svg>
EOF

# 2. Generate and compress PNG icons (8-bit indexed quantization for max compression & sharp edges)
magick -density 600 /tmp/icon-master.svg -resize 16x16 -strip -colors 256 png8:public/favicon-16x16.png
magick -density 600 /tmp/icon-master.svg -resize 32x32 -strip -colors 256 png8:public/favicon-32x32.png
magick -density 600 /tmp/icon-master.svg -resize 48x48 -strip -colors 256 png8:public/favicon-48x48.png
magick -density 600 /tmp/icon-master.svg -resize 180x180 -strip -colors 256 png8:public/apple-touch-icon.png
magick -density 600 /tmp/icon-master.svg -resize 192x192 -strip -colors 256 png8:public/icon-192.png
magick -density 600 /tmp/icon-master.svg -resize 512x512 -strip -colors 256 png8:public/icon-512.png

# 3. Generate Next-Gen WebP equivalents for ultra-fast mobile loading
magick -density 600 /tmp/icon-master.svg -resize 192x192 -strip -quality 90 public/icon-192.webp
magick -density 600 /tmp/icon-master.svg -resize 512x512 -strip -quality 90 public/icon-512.webp

# 4. Generate multi-resolution favicon.ico (16, 32, 48)
magick public/favicon-16x16.png public/favicon-32x32.png public/favicon-48x48.png public/favicon.ico

# 5. Generate Open Graph / Twitter Card Image (1200x630)
cat << 'EOF' > /tmp/og-master.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <!-- Background -->
  <rect width="1200" height="630" fill="#080C14"/>

  <!-- Glow effects -->
  <circle cx="280" cy="315" r="320" fill="#6366F1" opacity="0.18"/>
  <circle cx="1000" cy="150" r="250" fill="#38BDF8" opacity="0.10"/>
  <circle cx="950" cy="500" r="280" fill="#A855F7" opacity="0.12"/>

  <!-- Subtle grid lines -->
  <path d="M0 100H1200M0 200H1200M0 300H1200M0 400H1200M0 500H1200" stroke="#1E293B" stroke-width="1" opacity="0.4"/>
  <path d="M200 0V630M400 0V630M600 0V630M800 0V630M1000 0V630" stroke="#1E293B" stroke-width="1" opacity="0.4"/>

  <!-- Gradients -->
  <defs>
    <linearGradient id="cubeGrad" x1="100" y1="100" x2="450" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>
    <linearGradient id="topFace" x1="150" y1="120" x2="400" y2="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#6366F1" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="leftFace" x1="100" y1="200" x2="280" y2="490" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#A855F7" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="rightFace" x1="450" y1="200" x2="280" y2="490" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#A855F7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.12"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="520" y1="200" x2="1100" y2="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E0E7FF"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>

  <!-- 3D Cube Icon (Left side) -->
  <g transform="translate(40, 20)">
    <path d="M240 100L390 185L240 270L90 185Z" fill="url(#topFace)"/>
    <path d="M90 185L240 270V435L90 350Z" fill="url(#leftFace)"/>
    <path d="M240 270L390 185V350L240 435Z" fill="url(#rightFace)"/>
    <path d="M240 100L390 185V350L240 435L90 350V185L240 100Z" stroke="url(#cubeGrad)" stroke-width="20" stroke-linejoin="round"/>
    <path d="M90 185L240 270L390 185" stroke="url(#cubeGrad)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M240 270V435" stroke="url(#cubeGrad)" stroke-width="20" stroke-linecap="round"/>
  </g>

  <!-- Typography & Content (Right side) -->
  <!-- Badge -->
  <rect x="520" y="115" width="310" height="38" rx="19" fill="#6366F1" fill-opacity="0.15" stroke="#6366F1" stroke-opacity="0.4" stroke-width="1.5"/>
  <text x="540" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#38BDF8" letter-spacing="1">⚡ ACTUALIZADO DIARIO • 2026</text>

  <!-- Main Title -->
  <text x="520" y="225" font-family="system-ui, -apple-system, sans-serif" font-size="62" font-weight="900" fill="url(#textGrad)" letter-spacing="-1">CÓDIGOS ROBLOX</text>

  <!-- Subtitle -->
  <text x="520" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#CBD5E1">Base de Datos de Códigos Activos &amp; Recompensas Gratis</text>

  <!-- Feature Pills -->
  <g transform="translate(520, 325)">
    <!-- Pill 1 -->
    <rect x="0" y="0" width="180" height="42" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <text x="18" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#38BDF8">🍎 Blox Fruits</text>

    <!-- Pill 2 -->
    <rect x="195" y="0" width="165" height="42" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <text x="213" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#A855F7">⚔️ Blade Ball</text>

    <!-- Pill 3 -->
    <rect x="375" y="0" width="200" height="42" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <text x="393" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#EC4899">👗 Dress to Impress</text>

    <!-- Row 2 -->
    <rect x="0" y="55" width="190" height="42" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <text x="18" y="81" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#10B981">✨ Canje en 1 Clic</text>

    <rect x="205" y="55" width="180" height="42" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <text x="223" y="81" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#F59E0B">🛡️ 100% Seguros</text>

    <rect x="400" y="55" width="175" height="42" rx="10" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <text x="418" y="81" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#6366F1">🎮 +15 Juegos</text>
  </g>

  <!-- Footer URL -->
  <text x="520" y="505" font-family="monospace" font-size="20" font-weight="700" fill="#64748B">https://codigosroblox.org</text>
</svg>
EOF

# Highly optimized PNG (50KB) and WebP (31KB)
magick -density 300 /tmp/og-master.svg -resize 1200x630 -strip -colors 256 png8:public/og-image.png
magick -density 300 /tmp/og-master.svg -resize 1200x630 -strip -quality 88 public/og-image.webp

echo "✅ All icons and OG images successfully generated and compressed!"
