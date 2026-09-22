import type { RobloxErrorItem } from '../types/roblox-error';

export const robloxErrorsData: RobloxErrorItem[] = [
  {
    code: 279,
    category: 'connection',
    severity: 'high',
    frequency: 'very_common',
    title: {
      es: 'Error 279: Fallo de Conexión (ID=17)',
      en: 'Error 279: Connection Attempt Failed (ID=17)',
    },
    officialMessage: {
      es: 'Failed to connect to the Game. (ID=17: Connection attempt failed.)',
      en: 'Failed to connect to the Game. (ID=17: Connection attempt failed.)',
    },
    cause: {
      es: 'Tu cliente de Roblox no logra comunicarse con el servidor del juego debido a un bloqueo en el Firewall de Windows, puertos UDP cerrados (49152-65535) o problemas de caché DNS en tu router.',
      en: 'Your Roblox client cannot communicate with the game server due to Windows Firewall blocks, blocked UDP ports (49152-65535), or corrupted DNS cache.',
    },
    quickSolution: {
      es: 'Permite Roblox en el Firewall de Windows y cambia tus DNS a Google (8.8.8.8) o Cloudflare (1.1.1.1).',
      en: 'Allow Roblox through Windows Defender Firewall and switch DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1).',
    },
    steps: {
      es: [
        'Abre Windows Defender Firewall > "Permitir que una aplicación se comunique a través de Firewall".',
        'Busca Roblox y asegúrate de que las casillas "Privada" y "Pública" estén marcadas.',
        'Vacía la caché DNS en tu PC: abre CMD (Símbolo del sistema) como administrador y escribe "ipconfig /flushdns".',
        'Si usas navegador, desactiva temporalmente extensiones de bloqueo de anuncios o scripts como AdBlock o Tampermonkey.',
      ],
      en: [
        'Open Windows Defender Firewall > "Allow an app or feature through Windows Defender Firewall".',
        'Locate Roblox Player and verify both "Private" and "Public" boxes are checked.',
        'Flush DNS cache: open Command Prompt as Administrator and run "ipconfig /flushdns".',
        'Temporarily disable browser ad-blockers or script extensions if launching via web.',
      ],
    },
    platforms: ['PC / Windows', 'Mac', 'Móvil'],
  },
  {
    code: 267,
    category: 'kick',
    severity: 'medium',
    frequency: 'very_common',
    title: {
      es: 'Error 267: Expulsado por el Juego (Kicked)',
      en: 'Error 267: You Have Been Kicked from This Game',
    },
    officialMessage: {
      es: 'Disconnected: You have been kicked from this game [Reason]',
      en: 'Disconnected: You have been kicked from this game [Reason]',
    },
    cause: {
      es: 'Un script interno del juego ejecutó una orden de expulsión. Las causas más habituales son: cuenta demasiado nueva (muchos juegos de anime exigen tener más de 15 o 30 días de antigüedad para evitar bots), sospecha de autofarm/macros, o problemas con el anti-cheat del creador.',
      en: 'An internal game script triggered a kick command. Typical causes include account age restrictions (many anime titles require 15-30 days to deter bots), suspected macros/autoclickers, or creator anti-cheat flags.',
    },
    quickSolution: {
      es: 'Cierra cualquier autoclicker de fondo, comprueba la antigüedad de tu cuenta y vuelve a unirte tras 5 minutos.',
      en: 'Close background autoclickers or overlay tools, check account age requirements, and rejoin after 5 minutes.',
    },
    steps: {
      es: [
        'Lee el motivo exacto que aparece entre corchetes [] tras el mensaje de error.',
        'Cierra herramientas de terceros como TinyTask, OP Auto Clicker o grabadoras de macros.',
        'Comprueba la antigüedad de tu cuenta de Roblox; si es menor a 30 días, juega a otros títulos hasta cumplir el requisito.',
        'Si fuiste baneado por un administrador del juego, acude al servidor oficial de Discord del título para apelar el castigo.',
      ],
      en: [
        'Read the exact reason inside brackets [] appended to the error prompt.',
        'Shut down third-party background software such as TinyTask, OP Auto Clicker, or macro tools.',
        'Verify your Roblox account age; if under 30 days, play general experiences until mature.',
        'If banned by game moderators, submit a ban appeal ticket on the official Discord server.',
      ],
    },
    platforms: ['PC / Windows', 'Móvil', 'Consola'],
  },
  {
    code: 277,
    category: 'connection',
    severity: 'medium',
    frequency: 'very_common',
    title: {
      es: 'Error 277: Pérdida de Conexión a Internet',
      en: 'Error 277: Lost Internet Connection',
    },
    officialMessage: {
      es: 'Please check your internet connection and try again.',
      en: 'Please check your internet connection and try again.',
    },
    cause: {
      es: 'Tu dispositivo experimentó una pérdida repentina de paquetes o micro-corte de red mientras transmitía datos con los servidores de Roblox.',
      en: 'Your device suffered sudden packet loss or network dropouts during data interchange with Roblox servers.',
    },
    quickSolution: {
      es: 'Reinicia tu router de fibra/ADSL y borra los archivos temporales de registro de Roblox en %localappdata%\\Roblox\\logs.',
      en: 'Reboot your network router and wipe temporary Roblox log files located in %localappdata%\\Roblox\\logs.',
    },
    steps: {
      es: [
        'Desconecta el router de la corriente durante 30 segundos y vuelve a encenderlo.',
        'Si estás por Wi-Fi, conecta tu PC o consola con cable Ethernet para evitar pérdida de paquetes.',
        'Presiona Windows + R, escribe "%temp%" y elimina los archivos basura temporales.',
        'En móviles (iOS/Android), desactiva el modo de ahorro de energía y usa conexión Wi-Fi de 5 GHz.',
      ],
      en: [
        'Unplug your network router for 30 seconds and plug it back in.',
        'Switch from Wi-Fi to a wired Ethernet connection to prevent packet loss.',
        'Press Windows + R, type "%temp%" and delete cached temporary clutter.',
        'On mobile devices, turn off battery saver mode and ensure a 5 GHz Wi-Fi band is active.',
      ],
    },
    platforms: ['Todas las plataformas'],
  },
  {
    code: 524,
    category: 'auth',
    severity: 'medium',
    frequency: 'very_common',
    title: {
      es: 'Error 524: No Autorizado para Unirse',
      en: 'Error 524: Not Authorized to Join This Game',
    },
    officialMessage: {
      es: 'Not authorized to join this game (Error Code: 524)',
      en: 'Not authorized to join this game (Error Code: 524)',
    },
    cause: {
      es: 'Intentaste acceder a un Servidor VIP / Privado cuyo dueño no te ha dado permisos, el servidor ya no existe o tu configuración de privacidad de Roblox bloquea invitaciones.',
      en: 'Attempted to join a VIP/Private Server without granted guest permissions, the link expired, or account privacy settings block party invites.',
    },
    quickSolution: {
      es: 'Cambia en Configuración > Privacidad la opción "¿Quién puede unirse a mí en experiencias?" a "Todos".',
      en: 'Go to Settings > Privacy and set "Who can join me in experiences?" to "Everyone".',
    },
    steps: {
      es: [
        'Abre Roblox y dirígete al menú de Ajustes (icono de engranaje) > Privacidad.',
        'Desplázate hasta "Otras configuraciones" y asegúrate de que "¿Quién puede unirme a experiencias?" esté en "Todos" o "Amigos".',
        'Pide al dueño del servidor VIP que verifique tu nombre de usuario en la lista de jugadores permitidos del servidor privado.',
        'Comprueba que no tienes una sanción temporal o baneo en esa experiencia específica.',
      ],
      en: [
        'Open Roblox and navigate to Settings (Gear icon) > Privacy.',
        'Scroll down to "Other Settings" and ensure "Who can join me in experiences?" is set to "Everyone" or "Friends".',
        'Ask the private server owner to add your exact username to the VIP whitelist.',
        'Ensure you are not currently banned or flagged inside that specific place.',
      ],
    },
    platforms: ['PC / Windows', 'Móvil', 'Consola'],
  },
  {
    code: 529,
    category: 'server',
    severity: 'critical',
    frequency: 'common',
    title: {
      es: 'Error 529: Problemas Técnicos en Servidores de Roblox',
      en: 'Error 529: Roblox Servers Experiencing Technical Difficulties',
    },
    officialMessage: {
      es: 'A HTTP 529 error has occurred. We are experiencing technical difficulties. Please try again later.',
      en: 'A HTTP 529 error has occurred. We are experiencing technical difficulties. Please try again later.',
    },
    cause: {
      es: 'Los servidores centrales de Roblox Corporation están caídos o sobrecargados por una actualización masiva, evento global o problema en la infraestructura en la nube.',
      en: 'Roblox Corporation core servers are down, experiencing widespread outages, or under heavy load during major game updates.',
    },
    quickSolution: {
      es: 'No es fallo de tu ordenador. Revisa status.roblox.com y espera a que los ingenieros de Roblox restablezcan el servicio.',
      en: 'Not a client-side issue. Check status.roblox.com and wait for Roblox engineering to restore stability.',
    },
    steps: {
      es: [
        'Visita la web oficial de estado de servidores: status.roblox.com.',
        'Comprueba en redes sociales (@Roblox en X/Twitter) si hay una caída masiva reportada.',
        'Evita desinstalar el juego o cambiar configuraciones locales mientras el servicio esté caído.',
        'Espera entre 15 y 45 minutos antes de volver a intentar iniciar sesión.',
      ],
      en: [
        'Check the official Roblox status page at status.roblox.com.',
        'Look up recent outage reports on Twitter/X (@Roblox).',
        'Do not uninstall Roblox or change system settings, as the issue is purely server-side.',
        'Wait 15 to 45 minutes for engineers to bring data centers back online.',
      ],
    },
    platforms: ['Todas las plataformas'],
  },
  {
    code: 268,
    category: 'kick',
    severity: 'high',
    frequency: 'common',
    title: {
      es: 'Error 268: Comportamiento Inesperado del Cliente (Hyperion)',
      en: 'Error 268: Unexpected Client Behavior (Hyperion / Anti-Cheat)',
    },
    officialMessage: {
      es: 'You have been kicked due to unexpected client behavior (Error Code: 268)',
      en: 'You have been kicked due to unexpected client behavior (Error Code: 268)',
    },
    cause: {
      es: 'El sistema anti-trampas Byfron Hyperion de Roblox detectó archivos de juego modificados, shaders no autorizados (ReShade/Roshade), memoria manipulada o interferencia de software antivirus.',
      en: 'Roblox Hyperion (Byfron) anti-cheat detected modified game executables, custom shaders (ReShade), memory hooks, or aggressive antivirus interference.',
    },
    quickSolution: {
      es: 'Desinstala completamente mods o shaders y reinstala el cliente oficial limpio de Roblox.',
      en: 'Uninstall third-party shaders or injector utilities and perform a clean reinstallation of Roblox.',
    },
    steps: {
      es: [
        'Desinstala shaders como RoShade o ReShade que modifican las DLL de Roblox.',
        'Desactiva temporalmente el antivirus agresivo o agrega la carpeta de Roblox a las exclusiones.',
        'Presiona Windows + R, entra en %localappdata% y elimina por completo la carpeta "Roblox".',
        'Descarga e instala la última versión oficial desde roblox.com/download.',
      ],
      en: [
        'Uninstall graphic injector mods like RoShade or ReShade that replace core DLLs.',
        'Add the Roblox app folder to your antivirus exclusion directory.',
        'Press Windows + R, navigate to %localappdata%, and delete the "Roblox" folder.',
        'Download and perform a fresh install from roblox.com/download.',
      ],
    },
    platforms: ['PC / Windows'],
  },
  {
    code: 610,
    category: 'server',
    severity: 'medium',
    frequency: 'common',
    title: {
      es: 'Error 610: No se Puede Unir a la Experiencia (HTTP 400)',
      en: 'Error 610: Can’t Join Place (HTTP 400)',
    },
    officialMessage: {
      es: 'Can’t join place [PlaceID]: HTTP 400 (Error Code: 610)',
      en: 'Can’t join place [PlaceID]: HTTP 400 (Error Code: 610)',
    },
    cause: {
      es: 'Conflicto de autenticación en la sesión web de Roblox o el servidor al que intentas entrar se acaba de reiniciar o cerrar.',
      en: 'Account authentication desync in web cookies, or the targeted sub-server was shut down/restarted.',
    },
    quickSolution: {
      es: 'Cierra sesión en Roblox en todos tus navegadores y vuelve a iniciar sesión con tu contraseña.',
      en: 'Log out of Roblox on all browser tabs, clear cookies, and log back in.',
    },
    steps: {
      es: [
        'Cierra la sesión de tu cuenta de Roblox y vuelve a iniciarla.',
        'Borra las cookies de tu navegador web para el dominio "roblox.com".',
        'Intenta unirte a un servidor diferente desde la pestaña "Servidores" de la página del juego.',
        'Reinicia la aplicación cliente de Roblox desde el Administrador de tareas.',
      ],
      en: [
        'Log out of your Roblox account and log back in.',
        'Clear browser cache and cookies for the roblox.com domain.',
        'Join a different server instance from the game page’s "Servers" tab.',
        'Force quit the Roblox process in Task Manager and restart the app.',
      ],
    },
    platforms: ['PC / Windows', 'Mac', 'Móvil'],
  },
  {
    code: 273,
    category: 'auth',
    severity: 'high',
    frequency: 'common',
    title: {
      es: 'Error 273: Misma Cuenta Iniciada en Otro Dispositivo',
      en: 'Error 273: Same Account Launched Game From Different Device',
    },
    officialMessage: {
      es: 'Same account launched game from different device. Reconnect if you prefer to use this device.',
      en: 'Same account launched game from different device. Reconnect if you prefer to use this device.',
    },
    cause: {
      es: 'Alguien abrió una experiencia de Roblox con tu misma cuenta en otro móvil, PC o consola. Si tú no lo hiciste, tu cuenta podría estar comprometida.',
      en: 'Another device launched an active session using your login credentials. If unexpected, your account security may be compromised.',
    },
    quickSolution: {
      es: 'Cierra todas las demás sesiones desde Configuración > Seguridad y cambia tu contraseña de inmediato.',
      en: 'Go to Settings > Security > "Log out of all other sessions" and change your password immediately.',
    },
    steps: {
      es: [
        'Entra a Configuración de Roblox > pestaña "Seguridad".',
        'Baja hasta la sección "Dónde has iniciado sesión" y pulsa "Cerrar sesión en todas las demás sesiones".',
        'Cambia tu contraseña de Roblox inmediatamente por una segura.',
        'Activa la verificación en dos pasos (2FA) mediante aplicación autenticadora (Google Authenticator).',
      ],
      en: [
        'Go to Roblox Settings > "Security" tab.',
        'Scroll to "Where You’re Logged In" and click "Log Out of All Other Sessions".',
        'Immediately change your Roblox account password to a strong new secret.',
        'Enable Two-Factor Authentication (2FA) via an authenticator app.',
      ],
    },
    platforms: ['Todas las plataformas'],
  },
  {
    code: 773,
    category: 'server',
    severity: 'low',
    frequency: 'very_common',
    title: {
      es: 'Error 773: Fallo de Teletransporte entre Lugares',
      en: 'Error 773: Teleport Failed',
    },
    officialMessage: {
      es: 'Teleport Failed. This area cannot be accessed. (Error Code: 773)',
      en: 'Teleport Failed. This area cannot be accessed. (Error Code: 773)',
    },
    cause: {
      es: 'Fallo al teletransportar a tu personaje entre submódulos del juego (muy frecuente en Blox Fruits al viajar del Primer al Segundo o Tercer Mar, o en incursiones/raids de Anime Defenders).',
      en: 'Failure when teleporting between game sub-places (frequent in Blox Fruits when sailing between Sea 1, Sea 2, and Sea 3, or during dungeon raids).',
    },
    quickSolution: {
      es: 'Sal al menú principal de Roblox y vuelve a entrar en un servidor público diferente.',
      en: 'Leave to the main menu and rejoin a fresh public server.',
    },
    steps: {
      es: [
        'Espera 10 segundos para que el servidor de destino libere tu plaza.',
        'Vuelve a la página del juego y pulsa el botón verde de "Jugar".',
        'Si persiste, prueba a unirte a través de un amigo que ya esté en el servidor de destino.',
        'Comprueba que tu personaje cumple los requisitos de nivel para acceder a esa zona (ej. nivel 700+ para Sea 2 en Blox Fruits).',
      ],
      en: [
        'Wait 10 seconds to allow the target sub-place to clear your previous queue.',
        'Return to the experience page and click the green Play button.',
        'Try joining via a friend already loaded inside the destination realm.',
        'Check that your character meets required milestone levels (e.g. level 700+ for Sea 2 in Blox Fruits).',
      ],
    },
    platforms: ['PC / Windows', 'Móvil', 'Consola'],
  },
  {
    code: 103,
    category: 'system',
    severity: 'medium',
    frequency: 'rare',
    title: {
      es: 'Error 103: Configuración de Privacidad en Consolas (Xbox / PS5)',
      en: 'Error 103: Privacy Settings Block Game Content on Consoles',
    },
    officialMessage: {
      es: 'Unable to join. Your privacy settings do not allow you to play user-created games. (Error Code: 103)',
      en: 'Unable to join. Your privacy settings do not allow you to play user-created games. (Error Code: 103)',
    },
    cause: {
      es: 'El control parental o los ajustes de seguridad familiar de tu consola Xbox o PlayStation tienen bloqueado el contenido creado por otros usuarios.',
      en: 'Parental controls or family safety filters on Xbox / PlayStation consoles are blocking user-generated content.',
    },
    quickSolution: {
      es: 'Permite contenido de usuarios en los ajustes de privacidad de tu perfil de Xbox Live o PlayStation Network.',
      en: 'Permit user-created content inside your Xbox Live or PSN account privacy settings.',
    },
    steps: {
      es: [
        'En Xbox: Configuración > Cuenta > Privacidad y seguridad en línea > Privacidad de Xbox Live.',
        'Selecciona "Ver detalles y personalizar" > "Contenido de los juegos" > Permitir "Puedes ver y compartir creaciones".',
        'Asegúrate de que la fecha de nacimiento de la cuenta tenga al menos 13 años.',
        'Reinicia la aplicación de Roblox en la consola.',
      ],
      en: [
        'On Xbox: Settings > Account > Privacy & online safety > Xbox Live privacy.',
        'Select "View details & customize" > "Game content" > Allow "You can see and share creations".',
        'Ensure the account age on file is 13+ or parent permission is authorized.',
        'Restart the Roblox console app.',
      ],
    },
    platforms: ['Xbox One / Series', 'PlayStation 4 / 5'],
  },
  {
    code: 918,
    category: 'system',
    severity: 'low',
    frequency: 'rare',
    title: {
      es: 'Error 918: Fallo al Conectar con el Grupo o Chat de Voz',
      en: 'Error 918: Failed to Connect to Party / Spatial Voice',
    },
    officialMessage: {
      es: 'Failed to connect to party. (Error Code: 918)',
      en: 'Failed to connect to party. (Error Code: 918)',
    },
    cause: {
      es: 'Fallo al sincronizar el chat espacial de voz (Spatial Voice) o la fiesta con tus amigos debido a permisos de micrófono denegados o restricción de edad no verificada.',
      en: 'Voice chat (Spatial Voice) or party sync error due to denied microphone permissions or unverified age status.',
    },
    quickSolution: {
      es: 'Verifica los permisos de micrófono en el sistema operativo y activa el chat de voz en Configuración > Privacidad.',
      en: 'Allow microphone access in OS permissions and toggle Voice Chat in Roblox Settings > Privacy.',
    },
    steps: {
      es: [
        'Comprueba que tu cuenta tiene la edad verificada con DNI/pasaporte si usas Spatial Voice.',
        'En Windows: Configuración > Privacidad > Micrófono > Permitir que las aplicaciones accedan al micrófono.',
        'Desactiva y vuelve a activar la opción "Chat de voz" en la app de Roblox.',
        'Reinicia el grupo o pide al líder que vuelva a enviarte la invitación de fiesta.',
      ],
      en: [
        'Verify your account has 13+ ID verification completed if utilizing Spatial Voice.',
        'On Windows: Settings > Privacy > Microphone > Allow apps to access your microphone.',
        'Toggle Voice Chat off and back on in Roblox account settings.',
        'Disband and re-create the party group session.',
      ],
    },
    platforms: ['PC / Windows', 'Móvil'],
  },
  {
    code: 403,
    category: 'auth',
    severity: 'high',
    frequency: 'common',
    title: {
      es: 'Error 403: Acceso Denegado / Prohibido (Forbidden)',
      en: 'Error 403: Forbidden / Access Denied',
    },
    officialMessage: {
      es: 'Authentication Failed / Forbidden (Error Code: 403)',
      en: 'Authentication Failed / Forbidden (Error Code: 403)',
    },
    cause: {
      es: 'Roblox bloquea el acceso de tu cliente debido a archivos de instalación residuales corruptos en AppData o una dirección IP bloqueada temporalmente por exceso de solicitudes.',
      en: 'Roblox denies connection due to corrupted registry keys in AppData or temporary IP rate limiting.',
    },
    quickSolution: {
      es: 'Borra la carpeta AppData\\Local\\Roblox y reinicia tu router para obtener una nueva dirección IP.',
      en: 'Delete AppData\\Local\\Roblox and restart your modem/router to cycle your public IP.',
    },
    steps: {
      es: [
        'Abre el Administrador de tareas (Ctrl + Shift + Esc) y finaliza cualquier proceso "RobloxPlayerBeta.exe".',
        'Presiona Windows + R, escribe "%localappdata%" y elimina la carpeta "Roblox".',
        'Reinicia el router para obtener una IP pública limpia.',
        'Descarga de nuevo el instalador de Roblox y ejecútalo como Administrador.',
      ],
      en: [
        'Open Task Manager (Ctrl + Shift + Esc) and terminate any lingering "RobloxPlayerBeta.exe" tasks.',
        'Press Windows + R, enter "%localappdata%", and wipe the "Roblox" folder.',
        'Power cycle your router to obtain a fresh public IP address.',
        'Run the official Roblox installer as Administrator.',
      ],
    },
    platforms: ['PC / Windows'],
  },
];
