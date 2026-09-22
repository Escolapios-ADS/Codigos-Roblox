import type { DeviceType, FpsIssue, OptimizationProfile } from '../types/fps-optimizer';

export interface DeviceOption {
  id: DeviceType;
  label: { es: string; en: string };
  emoji: string;
}

export interface IssueOption {
  id: FpsIssue;
  label: { es: string; en: string };
  emoji: string;
}

export const deviceOptions: DeviceOption[] = [
  { id: 'low-pc', label: { es: 'PC / Laptop de Gama Baja', en: 'Low-End PC / Laptop' }, emoji: '💻' },
  { id: 'gaming-pc', label: { es: 'PC Gamer (Monitor 144Hz+)', en: 'Gaming PC (144Hz+ Monitor)' }, emoji: '🖥️' },
  { id: 'mobile', label: { es: 'Teléfono Móvil / Tablet', en: 'Mobile Phone / Tablet' }, emoji: '📱' },
  { id: 'console', label: { es: 'Consola (Xbox / PS5)', en: 'Console (Xbox / PS5)' }, emoji: '🎮' },
];

export const issueOptions: IssueOption[] = [
  { id: 'under-30', label: { es: 'Menos de 30 FPS / Tirones Graves', en: 'Under 30 FPS / Heavy Stuttering' }, emoji: '🔴' },
  { id: '30-60', label: { es: 'Entre 30 y 60 FPS Inestables', en: '30 to 60 FPS Fluctuations' }, emoji: '🟡' },
  { id: 'cap-60', label: { es: 'Bloqueado a 60 FPS (Quiero 144/240)', en: 'Capped at 60 FPS (Want 144/240)' }, emoji: '⚡' },
  { id: 'high-ping', label: { es: 'Ping Alto (>150ms) / Desconexiones', en: 'High Ping (>150ms) / Lag Spikes' }, emoji: '📡' },
];

export const optimizationMatrix: Record<`${DeviceType}_${FpsIssue}`, OptimizationProfile> = {
  // Low-end PC combinations
  'low-pc_under-30': {
    title: {
      es: 'Perfil Ultra Rendimiento (Potato PC)',
      en: 'Ultra Performance Profile (Potato PC)',
    },
    fpsGain: '+70% a +120% FPS',
    pingGain: '-15ms Latencia',
    recommendedSlider: 1,
    summary: {
      es: 'Diseñado para ordenadores antiguos o con gráfica integrada (Intel HD / Vega). Desactiva sombras volumétricas pesadas, post-procesamiento y reduce el búfer de renderizado para alcanzar 60 FPS estables.',
      en: 'Engineered for older laptops and integrated GPUs. Disables heavy volumetric shadows, post-processing, and downsizes render overhead to reach solid 60 FPS.',
    },
    steps: {
      es: [
        'Abre Roblox > Menú Esc > Ajustes: cambia el "Modo de Gráficos" a Manual y baja la barra a Nivel 1 o 2.',
        'Activa el "Modo de Juego" de Windows en Configuración > Juegos > Modo de juego: Activado.',
        'Crea el archivo ClientAppSettings.json en la carpeta de versión de Roblox para desactivar sombras y post-fx.',
        'En el Administrador de tareas, finaliza procesos pesados en segundo plano como Chrome, Discord o Spotify.',
      ],
      en: [
        'Open Roblox > Esc Menu > Settings: set Graphics Mode to Manual and drop the slider to Level 1 or 2.',
        'Turn on Windows Game Mode in Windows Settings > Gaming > Game Mode: On.',
        'Create a ClientAppSettings.json in your Roblox version folder to disable shadows and post-processing.',
        'Close background memory hogs in Task Manager such as web browsers, Discord, or Spotify.',
      ],
    },
    fastFlagsSnippet: JSON.stringify(
      {
        DFIntTaskSchedulerTargetFps: 60,
        FFlagDisablePostFx: 'True',
        FIntRenderShadowIntensity: '0',
        FFlagDebugGraphicsDisableDirect3D11: 'False',
        DFFlagTextureQualityOverrideEnabled: 'True',
        DFIntTextureQualityOverride: 1,
      },
      null,
      2
    ),
  },

  'low-pc_30-60': {
    title: {
      es: 'Perfil Balanceado Fluidez & Estabilidad',
      en: 'Balanced Smoothness & Stability Profile',
    },
    fpsGain: '+40% a +60% FPS',
    pingGain: '-20ms Latencia',
    recommendedSlider: 3,
    summary: {
      es: 'Ideal para estabilizar fotogramas en momentos de mucha acción o explosiones en Blox Fruits y Blade Ball.',
      en: 'Ideal for eliminating micro-stutters during heavy skill animations in Blox Fruits and Blade Ball.',
    },
    steps: {
      es: [
        'Ajusta la calidad gráfica manual entre Nivel 2 y 3 para mantener buena visibilidad de ataques.',
        'Desactiva la sincronización vertical (V-Sync) en el panel de control de tu tarjeta gráfica.',
        'Aplica el desbloqueador de FPS ligero en ClientAppSettings.json.',
        'Ejecuta Roblox en modo pantalla completa exclusiva (Alt + Enter).',
      ],
      en: [
        'Set manual graphics quality between Level 2 and 3 to maintain clear visual attack range.',
        'Disable vertical synchronization (V-Sync) in your GPU control center.',
        'Apply the lightweight frame unblocker FastFlag in ClientAppSettings.json.',
        'Launch Roblox in borderless fullscreen mode (Alt + Enter).',
      ],
    },
    fastFlagsSnippet: JSON.stringify(
      {
        DFIntTaskSchedulerTargetFps: 75,
        FFlagDisablePostFx: 'True',
        FIntRenderShadowIntensity: '1',
      },
      null,
      2
    ),
  },

  'low-pc_cap-60': {
    title: {
      es: 'Desbloqueo Seguro de FPS (Hardware Básico)',
      en: 'Safe FPS Cap Removal (Basic Hardware)',
    },
    fpsGain: '+20% FPS',
    pingGain: '-10ms Latencia',
    recommendedSlider: 2,
    summary: {
      es: 'Desbloquea el tope de 60 FPS nativo de Roblox sin sobrecalentar procesadores modestos.',
      en: 'Removes the default 60 FPS cap without pushing basic CPUs into thermal throttling.',
    },
    steps: {
      es: [
        'Coloca la variable DFIntTaskSchedulerTargetFps en 120 dentro de ClientAppSettings.json.',
        'Comprueba las temperaturas de tu CPU con HWMonitor para evitar estrangulamiento térmico.',
        'Usa una base refrigeradora o eleva la parte trasera de tu portátil.',
      ],
      en: [
        'Set the DFIntTaskSchedulerTargetFps variable to 120 inside ClientAppSettings.json.',
        'Monitor CPU temperatures to avoid thermal throttling.',
        'Elevate the rear of your laptop to allow proper airflow.',
      ],
    },
    fastFlagsSnippet: JSON.stringify(
      {
        DFIntTaskSchedulerTargetFps: 120,
      },
      null,
      2
    ),
  },

  'low-pc_high-ping': {
    title: {
      es: 'Optimización de Red & Reducción de Latencia',
      en: 'Network Tuning & Latency Reducer',
    },
    fpsGain: '+10% FPS',
    pingGain: '-40ms a -80ms Ping',
    recommendedSlider: 2,
    summary: {
      es: 'Resuelve problemas de pérdida de paquetes UDP y picos de ping mediante optimización de DNS y limpieza de cola de red.',
      en: 'Eliminates UDP packet dropouts and latency spikes via gaming DNS optimization and network buffer flushing.',
    },
    steps: {
      es: [
        'Cambia tus DNS en el adaptador de red a Cloudflare Gaming (1.1.1.1 y 1.0.0.1) o Google (8.8.8.8).',
        'Abre CMD como Administrador y ejecuta "ipconfig /flushdns".',
        'Conecta un cable Ethernet directo al router en lugar de jugar por Wi-Fi de 2.4 GHz.',
        'Cierra descargas de Steam, Torrent o actualizaciones de Windows en segundo plano.',
      ],
      en: [
        'Switch network DNS to Cloudflare Gaming (1.1.1.1 & 1.0.0.1) or Google DNS (8.8.8.8).',
        'Open CMD as Admin and execute "ipconfig /flushdns".',
        'Switch to a wired Ethernet cable connection instead of 2.4 GHz Wi-Fi.',
        'Pause Steam updates, torrent clients, or Windows update background jobs.',
      ],
    },
  },

  // Gaming PC combinations
  'gaming-pc_under-30': {
    title: {
      es: 'Reparación de Conflicto de GPU / Driver',
      en: 'GPU Driver Conflict Fix',
    },
    fpsGain: '+300% FPS',
    pingGain: '-10ms Latencia',
    recommendedSlider: 7,
    summary: {
      es: 'Si un PC potente da menos de 30 FPS en Roblox, significa que el juego se está ejecutando en la gráfica integrada del procesador en lugar de tu tarjeta NVIDIA o AMD dedicada.',
      en: 'If a gaming rig runs Roblox below 30 FPS, Windows is mistakenly running the client on integrated CPU graphics instead of your dedicated NVIDIA/AMD GPU.',
    },
    steps: {
      es: [
        'Abre Configuración de Windows > Sistema > Pantalla > Gráficos.',
        'Busca RobloxPlayerBeta.exe, pulsa "Opciones" y elige "Alto rendimiento (Tu tarjeta NVIDIA/AMD)".',
        'En el Panel de control de NVIDIA: Administrar configuración 3D > Modo de control de energía > Máximo rendimiento preferido.',
        'Actualiza tus controladores gráficos con GeForce Experience o AMD Adrenalin.',
      ],
      en: [
        'Open Windows Settings > System > Display > Graphics.',
        'Locate RobloxPlayerBeta.exe, click "Options" and select "High performance (NVIDIA/AMD GPU)".',
        'In NVIDIA Control Panel: Manage 3D Settings > Power Management Mode > Prefer Maximum Performance.',
        'Update graphics drivers via GeForce Experience or AMD Adrenalin software.',
      ],
    },
  },

  'gaming-pc_30-60': {
    title: {
      es: 'Desactivación de Sincronización Vertical (V-Sync)',
      en: 'V-Sync Uncap & Frame Pacing',
    },
    fpsGain: '+100% FPS',
    pingGain: '-15ms Latencia',
    recommendedSlider: 8,
    summary: {
      es: 'Corrige la limitación forzada por el panel de control a 60 Hz cuando tu pantalla es de 144Hz o 240Hz.',
      en: 'Resolves forced 60 Hz driver limitations when paired with high refresh rate gaming monitors.',
    },
    steps: {
      es: [
        'Verifica en Windows > Pantalla > Configuración avanzada de pantalla que la frecuencia de refresco esté en 144Hz, 165Hz o 240Hz.',
        'Desactiva la sincronización vertical para la aplicación Roblox en el panel de control de tu GPU.',
        'Añade el FastFlag DFIntTaskSchedulerTargetFps configurado a la tasa nativa de tu monitor.',
      ],
      en: [
        'Verify in Windows > Display > Advanced Display Settings that refresh rate is set to 144Hz, 165Hz, or 240Hz.',
        'Disable vertical sync for Roblox in your GPU driver settings.',
        'Add the DFIntTaskSchedulerTargetFps FastFlag calibrated to your monitor’s native rate.',
      ],
    },
    fastFlagsSnippet: JSON.stringify(
      {
        DFIntTaskSchedulerTargetFps: 240,
        FFlagDebugGraphicsDisableDirect3D11: 'False',
      },
      null,
      2
    ),
  },

  'gaming-pc_cap-60': {
    title: {
      es: 'Desbloqueo Nativo 144Hz / 240Hz / 360Hz Ultra Fluido',
      en: 'Native 144Hz / 240Hz / 360Hz High-Refresh Unlock',
    },
    fpsGain: '+140 FPS a +180 FPS',
    pingGain: '-12ms Input Lag',
    recommendedSlider: 10,
    summary: {
      es: 'El estándar competitivo para jugadores de PvP en Rivals, Blade Ball y Da Hood. Reduce el input lag a la mitad y permite una respuesta milimétrica del ratón.',
      en: 'The competitive gold standard for PvP in Rivals, Blade Ball, and Da Hood. Cuts input latency in half for surgical aim response.',
    },
    steps: {
      es: [
        'Crea una carpeta llamada "ClientSettings" dentro de la carpeta de versión activa de Roblox (%localappdata%\\Roblox\\Versions\\version-xxxxx).',
        'Dentro, crea el archivo "ClientAppSettings.json" y pega el código FastFlag con 240 o 360 FPS.',
        'Reinicia Roblox. Pulsa Shift + F5 dentro del juego para verificar que el contador de FPS supera los 60.',
      ],
      en: [
        'Create a "ClientSettings" folder inside your active Roblox version directory (%localappdata%\\Roblox\\Versions\\version-xxxxx).',
        'Inside, create "ClientAppSettings.json" and paste the FastFlag target FPS code (240 or 360).',
        'Restart Roblox and press Shift + F5 in-game to verify your frame rate exceeds 60.',
      ],
    },
    fastFlagsSnippet: JSON.stringify(
      {
        DFIntTaskSchedulerTargetFps: 240,
      },
      null,
      2
    ),
  },

  'gaming-pc_high-ping': {
    title: {
      es: 'Optimización de Enrutamiento & Servidor Regional',
      en: 'Regional Server Routing & Adapter Polish',
    },
    fpsGain: '+10% FPS',
    pingGain: '-50ms Ping',
    recommendedSlider: 8,
    summary: {
      es: 'Optimiza el adaptador de red Ethernet eliminando colas de ahorro de energía y seleccionando servidores geográficamente cercanos.',
      en: 'Fine-tunes Ethernet NIC adapter settings, disabling power-saving queues and locking low-latency regional nodes.',
    },
    steps: {
      es: [
        'En el Administrador de dispositivos > Adaptadores de red > Propiedades de tu tarjeta Ethernet: desactiva "Energy Efficient Ethernet" y "Green Ethernet".',
        'Usa la pestaña de "Servidores" de la experiencia de Roblox para unirte manualmente a servidores con menor ping.',
        'Configura DNS Cloudflare 1.1.1.1.',
      ],
      en: [
        'In Device Manager > Network Adapters > Ethernet Properties: disable "Energy Efficient Ethernet" and "Green Ethernet".',
        'Use the experience’s "Servers" browser tab to manually join sub-servers hosted closest to your country.',
        'Configure Cloudflare 1.1.1.1 DNS.',
      ],
    },
  },

  // Mobile combinations
  'mobile_under-30': {
    title: {
      es: 'Optimización Extrema para Móviles / Tablets',
      en: 'Extreme Mobile & Tablet Optimization',
    },
    fpsGain: '+50% FPS',
    pingGain: '-15ms Latencia',
    recommendedSlider: 1,
    summary: {
      es: 'Evita el calentamiento del procesador móvil y la caída abrupta de fotogramas por estrangulamiento térmico.',
      en: 'Prevents SoC thermal throttling, battery drain, and sudden frame drops on iOS and Android.',
    },
    steps: {
      es: [
        'Abre Roblox > Menú Esc > Ajustes: baja los gráficos a Nivel 1 manual.',
        'Desactiva el "Modo de ahorro de batería" del teléfono (este modo reduce la potencia del procesador a la mitad).',
        'Retira la funda del móvil mientras juegas sesiones largas para facilitar la disipación del calor.',
        'Cierra todas las aplicaciones abiertas en segundo plano (TikTok, Instagram, WhatsApp).',
      ],
      en: [
        'Open Roblox > Esc Menu > Settings: set Graphics to Manual Level 1.',
        'Turn off "Battery Saver Mode" in phone settings (it throttles CPU performance by half).',
        'Remove phone case during extended gaming sessions to facilitate heat dissipation.',
        'Close all background apps (TikTok, Instagram, WhatsApp).',
      ],
    },
  },

  'mobile_30-60': {
    title: {
      es: 'Perfil Móvil Fluido 60 FPS',
      en: 'Smooth 60 FPS Mobile Profile',
    },
    fpsGain: '+30% FPS',
    pingGain: '-10ms Latencia',
    recommendedSlider: 3,
    summary: {
      es: 'Equilibrio perfecto entre fidelidad visual y 60 FPS sostenidos en smartphones modernos.',
      en: 'Perfect balance between visual fidelity and sustained 60 FPS on modern smartphones.',
    },
    steps: {
      es: [
        'Ajusta la calidad gráfica manual a Nivel 2 o 3.',
        'En Ajustes de Roblox: desactiva "Movimiento de cámara" (Camera Shake) para reducir renderizado innecesario.',
        'Conecta el móvil a una red Wi-Fi de 5 GHz en lugar de datos móviles con poca cobertura.',
      ],
      en: [
        'Set manual graphics quality to Level 2 or 3.',
        'In Roblox Settings: disable Camera Shake to reduce unnecessary render calculations.',
        'Connect to a 5 GHz Wi-Fi band instead of spotty cellular data.',
      ],
    },
  },

  'mobile_cap-60': {
    title: {
      es: 'Desbloqueo 120Hz en Móviles Compatibles (iPad Pro / Galaxy Ultra)',
      en: '120Hz Display Activation on Supported Devices',
    },
    fpsGain: '+60 FPS',
    pingGain: '-10ms Input Lag',
    recommendedSlider: 4,
    summary: {
      es: 'Para dispositivos con pantalla de 120Hz (ProMotion en iPad/iPhone 13 Pro+ o pantallas AMOLED de 120Hz en Android).',
      en: 'For devices equipped with 120Hz high refresh displays (Apple ProMotion or 120Hz AMOLED on Android).',
    },
    steps: {
      es: [
        'Verifica que la pantalla de tu móvil tenga activada la "Tasa de refresco fluida (120Hz)" en los ajustes de pantalla del sistema.',
        'En los ajustes de Roblox, desactiva el límite de fotogramas si la versión del cliente de tu tienda lo soporta.',
        'Mantén el brillo de la pantalla al 60% para evitar que el dispositivo reduzca los FPS por calentamiento.',
      ],
      en: [
        'Ensure "Smooth Motion / 120Hz" is enabled in system display settings.',
        'Lower screen brightness to 60% to prevent thermal protection lockups.',
        'Play in a cool room to keep the 120Hz refresh rate active without downclocking.',
      ],
    },
  },

  'mobile_high-ping': {
    title: {
      es: 'Solución de Lag de Red en Móvil',
      en: 'Mobile Network Lag Solution',
    },
    fpsGain: '+10% FPS',
    pingGain: '-40ms Ping',
    recommendedSlider: 2,
    summary: {
      es: 'Reduce el ping y la pérdida de paquetes provocada por interferencias de ondas Wi-Fi o cambio entre antenas móviles.',
      en: 'Eliminates mobile latency spikes and packet loss caused by crowded Wi-Fi spectrums.',
    },
    steps: {
      es: [
        'Asegúrate de conectarte a la banda de 5 GHz del router (suele llamarse "NombreRed_5G").',
        'Juega cerca del router para evitar interferencias de paredes gruesas.',
        'Desactiva las descargas automáticas de aplicaciones en Google Play o App Store.',
        'Usa la aplicación oficial 1.1.1.1 de Cloudflare (WARP) para enrutar tus paquetes por la red más veloz.',
      ],
      en: [
        'Connect to the 5 GHz Wi-Fi band on your router (usually named "YourNetwork_5G").',
        'Play within clear line of sight of your wireless access point.',
        'Turn off automatic background app updates in Google Play or App Store.',
        'Download the official Cloudflare 1.1.1.1 (WARP) app to streamline packet routes.',
      ],
    },
  },

  // Console combinations
  'console_under-30': {
    title: {
      es: 'Optimización de Caché en Consola (Xbox / PS5)',
      en: 'Console Cache Flush (Xbox / PS5)',
    },
    fpsGain: '+40% FPS',
    pingGain: '-10ms Latencia',
    recommendedSlider: 3,
    summary: {
      es: 'Limpia la memoria residual acumulada en la consola que causa caídas de frames en títulos masivos.',
      en: 'Flushes residual temporary cache on consoles that triggers frame drops in massive experiences.',
    },
    steps: {
      es: [
        'Apaga la consola por completo, desconéctala de la corriente durante 60 segundos y vuelve a encenderla.',
        'En los ajustes del juego en Roblox: desactiva gráficos automáticos y fija un valor manual moderado.',
        'Libera espacio en el disco SSD interno si está lleno a más del 90%.',
      ],
      en: [
        'Power down the console completely, unplug power cord for 60 seconds, and reboot.',
        'In Roblox in-game settings: disable automatic graphics and set a moderate manual slider.',
        'Free up internal SSD storage if drive capacity exceeds 90% full.',
      ],
    },
  },

  'console_30-60': {
    title: {
      es: 'Perfil 60 FPS Fijo en Consolas',
      en: 'Locked 60 FPS Console Profile',
    },
    fpsGain: '+20% FPS',
    pingGain: '-10ms Latencia',
    recommendedSlider: 5,
    summary: {
      es: 'Mantiene 60 FPS estables sin fluctuaciones en Xbox Series X/S y PlayStation 5.',
      en: 'Maintains rock-solid 60 FPS without frame drops on Xbox Series X/S and PS5.',
    },
    steps: {
      es: [
        'En los ajustes de vídeo de la consola, activa el modo de baja latencia automática (ALLM).',
        'Usa un puerto HDMI 2.1 en tu televisor o monitor con modo "Juego" activado.',
        'Desactiva el desenfoque de movimiento en los ajustes de Roblox.',
      ],
      en: [
        'In console display settings, enable Auto Low Latency Mode (ALLM).',
        'Connect via HDMI 2.1 with TV Game Mode activated.',
        'Disable camera motion blur in Roblox settings.',
      ],
    },
  },

  'console_cap-60': {
    title: {
      es: 'Ajuste de Salida 120Hz en Consolas Next-Gen',
      en: 'Next-Gen 120Hz Output Calibration',
    },
    fpsGain: '+60 FPS',
    pingGain: '-8ms Input Lag',
    recommendedSlider: 6,
    summary: {
      es: 'Configuración para pantallas compatibles con 120Hz en Xbox Series X y PS5.',
      en: 'Configuration for 120Hz-capable monitors and TVs on Xbox Series X and PS5.',
    },
    steps: {
      es: [
        'Ve a Configuración de la consola > Pantalla y vídeo > activa "Salida de 120 Hz: Automática".',
        'Activa la tasa de refresco variable (VRR / FreeSync) para eliminar el tearing en pantalla.',
      ],
      en: [
        'Go to Console Settings > Display & Video > enable "120 Hz Output: Automatic".',
        'Enable Variable Refresh Rate (VRR / FreeSync) to eliminate screen tearing.',
      ],
    },
  },

  'console_high-ping': {
    title: {
      es: 'Optimización de Conexión en Consola',
      en: 'Console Network Optimization',
    },
    fpsGain: '+10% FPS',
    pingGain: '-35ms Ping',
    recommendedSlider: 4,
    summary: {
      es: 'Reduce el ping en consola cambiando las DNS del sistema y conectando cable de red.',
      en: 'Reduces console ping by tuning system DNS and switching to hardwired Ethernet.',
    },
    steps: {
      es: [
        'Conecta un cable Ethernet directo de la consola al router.',
        'En Configuración de red de la consola > Ajustes avanzados > DNS: introduce 1.1.1.1 (Primario) y 1.0.0.1 (Secundario).',
        'Comprueba que el tipo de NAT sea "Abierta" (Tipo 1 o 2).',
      ],
      en: [
        'Connect a direct Ethernet cable from your console to your router.',
        'In Console Network Settings > Advanced > DNS: set Primary to 1.1.1.1 and Secondary to 1.0.0.1.',
        'Verify your NAT Type reports as "Open" (Type 1 or Type 2).',
      ],
    },
  },
};
