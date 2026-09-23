import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Default to checking every 6 hours (configurable via env var INTERVAL_HOURS)
const INTERVAL_HOURS = Number(process.env.INTERVAL_HOURS) || 6;
const INTERVAL_MS = INTERVAL_HOURS * 60 * 60 * 1000;

console.log('======================================================');
console.log('🤖 DAEMON DE ACTUALIZACIÓN AUTOMÁTICA DE CÓDIGOS ROBLOX');
console.log(`⏰ Frecuencia de sincronización: cada ${INTERVAL_HOURS} horas`);
console.log(`📂 Directorio del proyecto: ${ROOT_DIR}`);
console.log('======================================================\n');

function runCycle() {
  const now = new Date().toISOString();
  console.log(`\n[${now}] 🔄 Iniciando ciclo de comprobación de códigos...`);
  try {
    const scriptPath = path.join(ROOT_DIR, 'scripts', 'auto-sync.sh');
    execSync(`bash "${scriptPath}"`, {
      cwd: ROOT_DIR,
      stdio: 'inherit',
    });
    console.log(`[${new Date().toISOString()}] ✅ Ciclo completado con éxito.`);
  } catch (err: any) {
    console.error(`[${new Date().toISOString()}] ❌ Error en el ciclo de sincronización:`, err?.message || err);
  }
}

// 1. Run immediately on start
runCycle();

// 2. Schedule recurring intervals
setInterval(runCycle, INTERVAL_MS);
