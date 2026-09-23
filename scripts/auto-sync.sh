#!/usr/bin/env bash
# ==============================================================================
# Script de sincronización automática y despliegue para Codigos-Roblox
# ==============================================================================
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$DIR"

echo "======================================================"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Ejecutando sincronizador de códigos Roblox..."
echo "======================================================"

# 1. Ejecutar sincronizador inteligente
node --experimental-strip-types scripts/sync-codes.ts

# 2. Comprobar si hay cambios en src/data/games.ts
if [ -n "$(git status --porcelain src/data/games.ts)" ]; then
  echo "⚡ Se han detectado nuevos códigos o estadísticas actualizadas."
  echo "🔨 Compilando sitio para verificar integridad..."
  
  npm run build
  
  echo "🚀 Realizando commit y push a producción en GitHub..."
  git add src/data/games.ts
  git commit -m "chore(codes): auto-sync latest Roblox codes and live stats [skip ci]"
  git push origin main
  
  echo "✅ ¡Actualización subida y desplegada correctamente a las $(date '+%H:%M:%S')!"
else
  echo "✨ Todos los códigos y estadísticas ya están al día. No se requieren cambios en git."
fi
