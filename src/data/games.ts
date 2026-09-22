import type { GameItem } from '../types/game';

export const gamesData: GameItem[] = [
  {
    id: 'blox-fruits',
    slug: 'blox-fruits',
    title: 'Blox Fruits',
    tagline: {
      es: 'Consigue reinicio de estadísticas, 2x EXP boosts y millones de Beli gratis.',
      en: 'Get free stat resets, 2x EXP boosts, titles, and millions of Beli.',
    },
    badge: {
      es: '🔥 #1 Más Buscado',
      en: '🔥 #1 Most Searched',
    },
    category: 'anime',
    categoryLabel: {
      es: 'Anime / RPG',
      en: 'Anime / RPG',
    },
    developer: 'Gamer Robot Inc',
    likes: '6.8M+',
    visits: '38.5B+',
    activePlayers: '550,000+',
    robloxUrl: 'https://www.roblox.com/games/2753915549/Blox-Fruits',
    accentColor: 'indigo',
    iconGradient: 'from-blue-600 via-indigo-600 to-purple-600',
    emoji: '🍎',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Lista actualizada de códigos activos de Blox Fruits en Roblox. Canjea 2x de experiencia, reinicio de stats y títulos exclusivos.',
      en: 'Updated list of active Blox Fruits codes in Roblox. Redeem 2x EXP boosts, stat resets, and exclusive titles.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en Blox Fruits paso a paso',
        steps: [
          'Abre Blox Fruits en Roblox y elige tu bando (Piratas o Marines).',
          'En el lado izquierdo de la pantalla, pulsa el pequeño icono azul de Twitter (pájaro blanco) o caja de regalo.',
          'Copia uno de los códigos de nuestra lista y pégalo exactamente igual en la caja de texto.',
          'Presiona el botón "Try" o "Canjear" para recibir tu 2x EXP o reinicio de estadísticas al instante.'
        ],
        tip: 'Los códigos de 2x EXP no se acumulan en multiplicador (sigue siendo 2x), pero sí suman tiempo adicional.',
      },
      en: {
        title: 'How to Redeem Codes in Blox Fruits Step-by-Step',
        steps: [
          'Launch Blox Fruits on Roblox and choose your faction (Pirates or Marines).',
          'Locate and click the small blue Twitter bird icon (or gift box) on the left side of your screen.',
          'Copy an active code from our verified table above and paste it into the redemption box.',
          'Click "Try" or "Redeem" to instantly claim your 2x EXP boost or stat reset.'
        ],
        tip: 'EXP boosts stack their duration, so using multiple codes will extend your 2x boost timer!',
      },
    },
    activeCodes: [
      {
        code: 'KITT_RESET',
        reward: {
          es: 'Reinicio gratuito de estadísticas (Stat Reset)',
          en: 'Free Stat Reset',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'Sub2Fer999',
        reward: {
          es: '20 minutos de 2x EXP Boost',
          en: '20 minutes of 2x EXP Boost',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'SUB2GAMERROBOT_RESET1',
        reward: {
          es: 'Reinicio de estadísticas gratuito',
          en: 'Free Stat Reset',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'SUB2GAMERROBOT_EXP1',
        reward: {
          es: '30 minutos de 2x Experiencia Boost',
          en: '30 minutes of 2x Experience Boost',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'StrawHatMaine',
        reward: {
          es: '20 minutos de 2x EXP Boost',
          en: '20 minutes of 2x EXP Boost',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'Sub2OfficialNoobie',
        reward: {
          es: '20 minutos de 2x EXP Boost',
          en: '20 minutes of 2x EXP Boost',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'THEGREATACE',
        reward: {
          es: '20 minutos de 2x EXP Boost',
          en: '20 minutes of 2x EXP Boost',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'AXIORE',
        reward: {
          es: '20 minutos de 2x EXP Boost',
          en: '20 minutes of 2x EXP Boost',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'BIGNEWS',
        reward: {
          es: 'Título exclusivo para tu personaje',
          en: 'Exclusive in-game title',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'FUDD10',
        reward: {
          es: '1 Beli en el juego',
          en: '1 Beli in-game currency',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'CHANDLER',
        reward: {
          es: '0 Beli (código de broma)',
          en: '0 Beli (troll code)',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'DRAGONABUSE', reward: { es: '20 mins 2x EXP', en: '20 mins 2x EXP' } },
      { code: 'SEATROLLING', reward: { es: '20 mins 2x EXP', en: '20 mins 2x EXP' } },
      { code: 'ADMIN_STRENGTH', reward: { es: '20 mins 2x EXP', en: '20 mins 2x EXP' } },
      { code: 'NOOB2PRO', reward: { es: '20 mins 2x EXP', en: '20 mins 2x EXP' } },
      { code: 'JULYUPDATE_RESET', reward: { es: 'Stat Reset', en: 'Stat Reset' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Por qué no funciona mi código de Blox Fruits?',
          a: 'Los códigos de Blox Fruits son sensibles a las mayúsculas y minúsculas (Case Sensitive). Asegúrate de no copiar espacios en blanco al inicio o al final. Si aún así no funciona, es probable que haya expirado.',
        },
        {
          q: '¿Con qué frecuencia salen nuevos códigos?',
          a: 'Gamer Robot suele lanzar nuevos códigos con cada gran actualización de Blox Fruits (Updates de frutas como Dragón, Reworks) o al alcanzar metas de millones de likes.',
        },
        {
          q: '¿El 2x EXP se gasta si salgo del juego?',
          a: 'No, el temporizador del potenciador de experiencia se pausa automáticamente cuando desconectas y continuará la próxima vez que entres al servidor.',
        },
      ],
      en: [
        {
          q: 'Why is my Blox Fruits code not working?',
          a: 'Blox Fruits codes are case-sensitive. Make sure you do not include extra spaces before or after the code. If it still fails, the developer may have retired it.',
        },
        {
          q: 'How often are new codes released?',
          a: 'New codes are typically released during major game updates (such as fruit reworks, level cap increases) or when hitting community milestone likes.',
        },
        {
          q: 'Does the 2x EXP timer run while offline?',
          a: 'No! The 2x EXP timer automatically pauses when you leave the game and resumes when you log back into any Blox Fruits server.',
        },
      ],
    },
  },
  {
    id: 'blade-ball',
    slug: 'blade-ball',
    title: 'Blade Ball',
    tagline: {
      es: 'Tiradas de ruleta gratis, monedas y skins de espada exclusivas.',
      en: 'Free wheel spins, coins, tickets, and exclusive sword skins.',
    },
    badge: {
      es: '⚡ Tendencia Viral',
      en: '⚡ Viral Trending',
    },
    category: 'action',
    categoryLabel: {
      es: 'Acción / Dodgeball',
      en: 'Action / Dodgeball',
    },
    developer: 'Wiggity.',
    likes: '4.2M+',
    visits: '5.1B+',
    activePlayers: '140,000+',
    robloxUrl: 'https://www.roblox.com/games/13772394625/Blade-Ball',
    accentColor: 'rose',
    iconGradient: 'from-rose-600 via-pink-600 to-amber-600',
    emoji: '⚔️',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Códigos activos de Blade Ball para Roblox. Consigue tiradas de ruleta gratis (Spins) y monedas para desbloquear espadas y explosiones.',
      en: 'Active Blade Ball codes for Roblox. Claim free wheel spins and coins to unlock swords and finisher explosions.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en Blade Ball',
        steps: [
          'Entra a Blade Ball en Roblox.',
          'En la parte superior de la pantalla, haz clic en el botón "EXTRA" o icono de regalo.',
          'Selecciona la opción "CÓDIGOS" en el menú desplegable.',
          'Introduce el código y pulsa la marca de verificación verde para recibir tu recompensa.'
        ],
        tip: '¡Usa las tiradas de ruleta en cuanto las reclames para obtener habilidades legendarias!',
      },
      en: {
        title: 'How to Redeem Codes in Blade Ball',
        steps: [
          'Open Blade Ball on Roblox.',
          'Click the "EXTRA" button located near the top of the interface.',
          'Select the "CODES" option in the drop-down menu.',
          'Enter the code in the text box and press the green checkmark to claim.'
        ],
        tip: 'Redeem your wheel spins right away to roll for legendary abilities and finishes!',
      },
    },
    activeCodes: [
      {
        code: 'ELEMENTSFRESH',
        reward: {
          es: '1 Tirada de Ruleta de Elementos gratis',
          en: '1 Free Elements Wheel Spin',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'FROZENFALL',
        reward: {
          es: 'Tirada gratis + 500 Monedas',
          en: 'Free Spin + 500 Coins',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'BBSUMMER',
        reward: {
          es: '1 Tirada de Ruleta gratis',
          en: '1 Free Wheel Spin',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'TOURNAMENTS',
        reward: {
          es: '1 Entrada de Torneo gratis + Monedas',
          en: '1 Free Tournament Ticket + Coins',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'UPD2.9',
        reward: {
          es: '1 Tirada de Ruleta especial',
          en: '1 Special Wheel Spin',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'FREESPINS',
        reward: {
          es: '1 Tirada gratis para la ruleta',
          en: '1 Free Wheel Spin',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'SHARKATTACK', reward: { es: 'Free Spin', en: 'Free Spin' } },
      { code: 'GALAXYSEASON', reward: { es: '150 Coins', en: '150 Coins' } },
      { code: 'FALLINGLUCK', reward: { es: 'Free Spin', en: 'Free Spin' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Para qué sirven las tiradas (spins) en Blade Ball?',
          a: 'Las tiradas te permiten girar la ruleta de recompensas en el lobby para conseguir espadas raras, efectos de golpe únicos y monedas.',
        },
        {
          q: '¿Hay un límite de códigos que puedo canjear?',
          a: 'No hay límite, puedes canjear todos los códigos activos una vez por cuenta.',
        },
      ],
      en: [
        {
          q: 'What do spins do in Blade Ball?',
          a: 'Spins allow you to roll the lobby prize wheel for a chance at legendary sword skins, explosion finishes, and extra currency.',
        },
        {
          q: 'Can I redeem codes more than once?',
          a: 'No, each code can only be claimed once per Roblox account.',
        },
      ],
    },
  },
  {
    id: 'dress-to-impress',
    slug: 'dress-to-impress',
    title: 'Dress to Impress (DTI)',
    tagline: {
      es: 'Vestidos de pasarela exclusivos, bolsos de diseño, accesorios y zapatos gratis.',
      en: 'Exclusive runway dresses, designer handbags, accessories, and shoes.',
    },
    badge: {
      es: '✨ Fenómeno Global',
      en: '✨ Global Sensation',
    },
    category: 'fashion',
    categoryLabel: {
      es: 'Moda / Pasarela',
      en: 'Fashion / Runway',
    },
    developer: 'Dress To Impress Group',
    likes: '3.9M+',
    visits: '4.8B+',
    activePlayers: '280,000+',
    robloxUrl: 'https://www.roblox.com/games/15101393044/Dress-To-Impress',
    accentColor: 'purple',
    iconGradient: 'from-fuchsia-600 via-purple-600 to-pink-600',
    emoji: '👗',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Todos los códigos secretos de Dress to Impress (DTI) en Roblox. Desbloquea ropa exclusiva, vestidos de gala y zapatos sin gastar Robux.',
      en: 'All secret Dress to Impress (DTI) codes in Roblox. Unlock exclusive dresses, runway outfits, and heels without spending Robux.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en Dress to Impress',
        steps: [
          'Entra a Dress to Impress en Roblox.',
          'En el lado izquierdo de la pantalla, busca el botón rosado con el icono de un bolso / bolso de compras.',
          'Haz clic en el icono para abrir el menú de códigos secretos.',
          'Pega el código deseado y pulsa la marca de verificación para añadir la prenda a tu armario permanente.'
        ],
        tip: 'Las prendas desbloqueadas con código se guardan para siempre en tu estantería de códigos dentro del vestidor.',
      },
      en: {
        title: 'How to Redeem Codes in Dress to Impress',
        steps: [
          'Launch Dress to Impress on Roblox.',
          'On the left side of the screen, tap the pink handbag / shopping bag icon.',
          'A pop-up titled "DTI Codes" will appear.',
          'Type or paste the code and click the checkmark button to add the item permanently to your closet.'
        ],
        tip: 'Items redeemed through codes will be waiting on your exclusive code racks inside the dressing room.',
      },
    },
    activeCodes: [
      {
        code: 'M3GAN',
        reward: {
          es: 'Conjunto completo de muñeca M3GAN (Vestido + Cabello)',
          en: 'Complete M3GAN doll outfit (Dress + Hair)',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'BELALASLAY',
        reward: {
          es: 'Chaqueta corta brillante y accesorios de fiesta',
          en: 'Sparkly cropped jacket and party accessories',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'KITTYGAMES',
        reward: {
          es: 'Gorro kawaii de gato y bolso temático',
          en: 'Kawaii cat beanie and matching purse',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'KREEK',
        reward: {
          es: 'Gorra de béisbol especial de edición limitada',
          en: 'Special limited edition gamer baseball cap',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'LANATUDO',
        reward: {
          es: 'Vestido glamuroso y calentadores de pierna',
          en: 'Glamorous dress and leg warmers',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'SUBM15CY',
        reward: {
          es: 'Collar de perlas gargantilla y pestañas',
          en: 'Pearl choker necklace and custom lashes',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'TEKKYOO2',
        reward: {
          es: 'Bolso de diseñador plateado',
          en: 'Silver metallic designer handbag',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'LABOOTS',
        reward: {
          es: 'Botas altas de tacón estilo pasarela',
          en: 'Runway high heel stiletto boots',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'CHOOPIE100K', reward: { es: 'Dress set', en: 'Dress set' } },
      { code: 'THEGIRLNEKOMA', reward: { es: 'Accessories', en: 'Accessories' } },
      { code: 'REWARD4ALL', reward: { es: 'Dress', en: 'Dress' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Dónde encuentro la ropa que canjeé con los códigos?',
          a: 'Dentro de la sala de vestuario, dirígete a las estanterías especiales situadas junto a las cabinas de prueba. Todas las prendas de código tienen su propia sección identificada.',
        },
        {
          q: '¿Puedo cambiar de color las prendas obtenidas por código?',
          a: '¡Sí! Puedes usar la paleta de colores y las texturas VIP o estándar sobre cualquier prenda canjeada.',
        },
      ],
      en: [
        {
          q: 'Where do I find my redeemed code items?',
          a: 'Inside the dressing room, walk over to the dedicated code racks next to the fitting stalls. All code items are grouped together for quick styling.',
        },
        {
          q: 'Can I recolor code clothes in DTI?',
          a: 'Yes! All code clothing pieces fully support the color wheel and custom pattern textures.',
        },
      ],
    },
  },
  {
    id: 'anime-defenders',
    slug: 'anime-defenders',
    title: 'Anime Defenders',
    tagline: {
      es: 'Gemas gratis, Cristales de Rasgos y Cápsulas de Deseos para invocar unidades míticas.',
      en: 'Free gems, Trait Crystals, and Wish Capsules to summon mythical units.',
    },
    badge: {
      es: '💥 Top Tower Defense',
      en: '💥 Top Tower Defense',
    },
    category: 'anime',
    categoryLabel: {
      es: 'Anime / Tower Defense',
      en: 'Anime / Tower Defense',
    },
    developer: 'Anime Defenders',
    likes: '1.9M+',
    visits: '1.4B+',
    activePlayers: '95,000+',
    robloxUrl: 'https://www.roblox.com/games/17017769292/Anime-Defenders',
    accentColor: 'amber',
    iconGradient: 'from-amber-500 via-orange-600 to-red-600',
    emoji: '🛡️',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Códigos activos de Anime Defenders en Roblox. Consigue miles de gemas gratis y cristales para tirar por unidades míticas y secretas.',
      en: 'Active Anime Defenders codes for Roblox. Claim thousands of free gems and trait crystals to roll for mythic and secret units.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en Anime Defenders',
        steps: [
          'Inicia Anime Defenders en Roblox.',
          'En la esquina superior izquierda, haz clic en el icono de los tres puntos (...) o rueda de opciones.',
          'Pulsa sobre el botón "Códigos" (Codes).',
          'Escribe el código en el cuadro y presiona "Canjear" para recibir tus gemas de invocación.'
        ],
        tip: 'Necesitas alcanzar el nivel 8 para poder canjear algunos de los códigos más grandes de actualización.',
      },
      en: {
        title: 'How to Redeem Codes in Anime Defenders',
        steps: [
          'Launch Anime Defenders on Roblox.',
          'Tap the three dots (...) or settings icon in the top left corner.',
          'Select the "Codes" button from the drop-down menu.',
          'Enter the code into the text field and click "Redeem" to grab your gems.'
        ],
        tip: 'Some major update codes require you to reach account level 8 before redeeming.',
      },
    },
    activeCodes: [
      {
        code: 'RAIDSUPDATE',
        reward: {
          es: '1,000 Gemas + 5 Cristales de Rasgos',
          en: '1,000 Gems + 5 Trait Crystals',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'NEWERA',
        reward: {
          es: '850 Gemas gratis',
          en: '850 Free Gems',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'DEFENDERS',
        reward: {
          es: '500 Gemas para invocaciones',
          en: '500 Summoning Gems',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'MEGAUPDATE',
        reward: {
          es: '1,200 Gemas + 3 Cápsulas de Deseos',
          en: '1,200 Gems + 3 Wish Capsules',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'SUB2SENO',
        reward: {
          es: '150 Gemas gratis',
          en: '150 Free Gems',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'RELEASE', reward: { es: '500 Gems', en: '500 Gems' } },
      { code: 'TYFORSUPPORT', reward: { es: 'Gems', en: 'Gems' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Por qué me dice que mi nivel es muy bajo para canjear un código?',
          a: 'Para evitar bots de spam, los desarrolladores de Anime Defenders requieren que juegues un par de partidas de la historia hasta llegar al nivel 5 u 8 antes de poder reclamar ciertas recompensas.',
        },
      ],
      en: [
        {
          q: 'Why does it say my level is too low to redeem?',
          a: 'To combat bot rerollers, Anime Defenders requires player accounts to reach level 5 or 8 through story missions before unlocking certain high-tier gem codes.',
        },
      ],
    },
  },
  {
    id: 'roblox-promo-codes',
    slug: 'roblox-promo-codes',
    title: 'Roblox Promo Codes (Global)',
    tagline: {
      es: 'Accesorios oficiales de avatar gratis para usar en todos los juegos de la plataforma.',
      en: 'Official free avatar accessories to equip across all platform experiences.',
    },
    badge: {
      es: '👑 Oficial Roblox',
      en: '👑 Official Roblox',
    },
    category: 'promo',
    categoryLabel: {
      es: 'Global / Avatar',
      en: 'Global / Avatar',
    },
    developer: 'Roblox Corporation',
    likes: '10M+',
    visits: '100B+',
    activePlayers: 'All',
    robloxUrl: 'https://www.roblox.com/redeem',
    accentColor: 'cyan',
    iconGradient: 'from-cyan-500 via-blue-600 to-indigo-700',
    emoji: '🎁',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Lista completa de códigos promocionales de Roblox (Roblox Promo Codes). Consigue mascotas de hombro gratis, mochilas y alas para tu avatar.',
      en: 'Complete list of active Roblox Promo Codes. Claim free shoulder pets, backpacks, and accessories for your avatar.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos promocionales oficiales de Roblox',
        steps: [
          'Visita la página oficial de canje en tu navegador: roblox.com/redeem',
          'Inicia sesión con tu cuenta de Roblox.',
          'Pega el código en la casilla blanca que dice "Ingresar código".',
          'Haz clic en el botón verde "Canjear" (Redeem). El objeto aparecerá inmediatamente en tu inventario de avatar.'
        ],
        tip: 'Los códigos de Island of Move y Mansion of Wonder se canjean dentro de sus respectivos juegos oficiales en Roblox.',
      },
      en: {
        title: 'How to Redeem Official Roblox Promo Codes',
        steps: [
          'Head to the official redemption web page: roblox.com/redeem',
          'Log in to your active Roblox account.',
          'Paste the code into the text input box labeled "Enter Code".',
          'Click the green "Redeem" button. Your new accessory will be ready to equip in your Avatar inventory!'
        ],
        tip: 'Island of Move and Mansion of Wonder codes are entered inside their specific game experiences rather than the website.',
      },
    },
    activeCodes: [
      {
        code: 'SPIDERCOLA',
        reward: {
          es: 'Mascota de hombro Spider Cola (Lata de araña robótica)',
          en: 'Spider Cola shoulder pet',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'TWEETROBLOX',
        reward: {
          es: 'Mascota de hombro The Bird Says (Pajarito azul de Twitter)',
          en: 'The Bird Says shoulder pet',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'StrikeAPose',
        reward: {
          es: 'Gorra deportiva Hustle Hat (Canjear en Island of Move)',
          en: 'Hustle Hat cap (Redeem in Island of Move)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'SettingTheStage',
        reward: {
          es: 'Mochila Build It Backpack (Canjear en Island of Move)',
          en: 'Build It Backpack (Redeem in Island of Move)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'DIY',
        reward: {
          es: 'Bastón Kinetic Staff (Canjear en Island of Move)',
          en: 'Kinetic Staff (Redeem in Island of Move)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'WorldAlive',
        reward: {
          es: 'Compañero Crystalline (Canjear en Island of Move)',
          en: 'Crystalline Companion (Redeem in Island of Move)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'ThingsGoBoom',
        reward: {
          es: 'Accesorio de cintura Ghastly Aura (Mansion of Wonder)',
          en: 'Ghastly Aura waist accessory (Mansion of Wonder)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'Glimmer',
        reward: {
          es: 'Diadema Head Slime (Mansion of Wonder)',
          en: 'Head Slime hat (Mansion of Wonder)',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'TARGETMINTHAT2021', reward: { es: 'Peppermint Hat', en: 'Peppermint Hat' } },
      { code: 'AMAZONFRIEND2021', reward: { es: 'Snow Friend', en: 'Snow Friend' } },
      { code: 'SMYTHSCAT2021', reward: { es: 'King Cat Hat', en: 'King Cat Hat' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Estos códigos funcionan en móvil, PC y consolas?',
          a: 'Sí. Una vez canjeado en roblox.com/redeem, el objeto queda vinculado a tu cuenta global y podrás equiparlo desde cualquier dispositivo (iOS, Android, PC, Xbox, PlayStation).',
        },
        {
          q: '¿Son permanentes los objetos obtenidos?',
          a: 'Sí, una vez canjeados se quedan para siempre en tu inventario de avatar.',
        },
      ],
      en: [
        {
          q: 'Do these promo code items work on mobile, PC, and consoles?',
          a: 'Yes! Once claimed on roblox.com/redeem, the accessory belongs to your account forever and works seamlessly on mobile, PC, Xbox, and PlayStation.',
        },
        {
          q: 'Do Roblox promo code items ever expire from my inventory?',
          a: 'No, once an item is in your inventory, it stays in your closet permanently.',
        },
      ],
    },
  },
  {
    id: 'king-legacy',
    slug: 'king-legacy',
    title: 'King Legacy',
    tagline: {
      es: 'Gemas gratis, millones de Beli y reinicios de estadísticas para convertirte en el rey pirata.',
      en: 'Free gems, millions of Beli, and stat resets to conquer the high seas.',
    },
    badge: {
      es: '⚓ Clásico Anime',
      en: '⚓ Anime Classic',
    },
    category: 'anime',
    categoryLabel: {
      es: 'Anime / RPG',
      en: 'Anime / RPG',
    },
    developer: 'Venture Lagoons',
    likes: '2.5M+',
    visits: '3.1B+',
    activePlayers: '65,000+',
    robloxUrl: 'https://www.roblox.com/games/4520749081/King-Legacy',
    accentColor: 'emerald',
    iconGradient: 'from-emerald-500 via-teal-600 to-blue-700',
    emoji: '👑',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Códigos válidos de King Legacy en Roblox. Reclama gemas, millones de Beli gratis y reinicio de estadísticas para maximizar tu fruta.',
      en: 'Valid King Legacy codes in Roblox. Claim gems, millions of free Beli, and stat resets to master your fruit powers.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en King Legacy',
        steps: [
          'Inicia King Legacy en Roblox.',
          'Haz clic en el botón de Menú debajo de tu barra de vida.',
          'Selecciona el icono de Ajustes (engranaje).',
          'Escribe el código en la casilla que dice "Enter Code" y pulsa Enter para recibir tus gemas.'
        ],
        tip: '¡Usa las gemas para tirar por frutas raras en el gacha del juego!',
      },
      en: {
        title: 'How to Redeem Codes in King Legacy',
        steps: [
          'Launch King Legacy on Roblox.',
          'Click the Menu button right under your health bar.',
          'Click on the Settings gear icon.',
          'Type or paste the code into the "Enter Code" text area and hit Enter to claim.'
        ],
        tip: 'Save your gems to spin for mythical fruits at the in-game gacha dealer!',
      },
    },
    activeCodes: [
      {
        code: 'Update7.0',
        reward: {
          es: '5 Gemas + 500,000 Beli',
          en: '5 Gems + 500,000 Beli',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'RainbowDragon',
        reward: {
          es: '3 Gemas + 30 minutos de 2x EXP',
          en: '3 Gems + 30 mins 2x EXP',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'DinoxLive',
        reward: {
          es: '100,000 Beli gratis',
          en: '100,000 Free Beli',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'Peodiz',
        reward: {
          es: '100,000 Beli gratis',
          en: '100,000 Free Beli',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: 'SKGames',
        reward: {
          es: 'Reinicio de Estadísticas (Stat Reset)',
          en: 'Free Stat Reset',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'Halloween2024', reward: { es: 'Gems', en: 'Gems' } },
      { code: 'Sub2Krazy', reward: { es: 'Beli', en: 'Beli' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Para qué sirven las gemas en King Legacy?',
          a: 'Las gemas son la moneda premium del juego. Se usan para comprar frutas raras en el vendedor de mercado negro o para comprar estilos de combate y accesorios legendarios.',
        },
      ],
      en: [
        {
          q: 'What are gems used for in King Legacy?',
          a: 'Gems are the premium currency used to purchase mythical fruits from the black market dealer and unlock legendary swords or fighting styles.',
        },
      ],
    },
  },
  {
    id: 'brookhaven-rp',
    slug: 'brookhaven-rp',
    title: 'Brookhaven RP (Music IDs)',
    tagline: {
      es: 'Códigos de música ID para la radio y equipo de música de vehículos y casas.',
      en: 'Music ID codes for vehicle radios, home stereos, and boomboxes.',
    },
    badge: {
      es: '🎵 Más Jugado',
      en: '🎵 Most Played',
    },
    category: 'simulator',
    categoryLabel: {
      es: 'Roleplay / Social',
      en: 'Roleplay / Social',
    },
    developer: 'Wolfpaq',
    likes: '6.5M+',
    visits: '52.0B+',
    activePlayers: '420,000+',
    robloxUrl: 'https://www.roblox.com/games/4924922222/Brookhaven-RP',
    accentColor: 'indigo',
    iconGradient: 'from-blue-500 via-indigo-600 to-purple-700',
    emoji: '🏡',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Lista de códigos de música ID para Brookhaven RP en Roblox. Canciones en español, hits virales de TikTok y temas de moda para tu coche.',
      en: 'Music ID codes for Brookhaven RP in Roblox. Viral TikTok songs, trending beats, and top music IDs for your car stereo.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo poner códigos de música ID en Brookhaven',
        steps: [
          'Entra a Brookhaven RP y súbete a cualquier coche o activa tu radio personal.',
          'Toca el icono del altavoz o reproductor de música.',
          'Pega el código numérico ID de la canción que quieras escuchar.',
          'Pulsa Play y la canción empezará a sonar para ti y los demás jugadores.'
        ],
        tip: 'Puedes guardar tus canciones favoritas en la lista de reproducción de tu vehículo.',
      },
      en: {
        title: 'How to Play Music IDs in Brookhaven RP',
        steps: [
          'Enter Brookhaven RP and step inside any vehicle or equip a boombox.',
          'Click the speaker or music note icon.',
          'Paste the numerical Music ID code into the track field.',
          'Hit Play and the tune will broadcast to everyone nearby!'
        ],
        tip: 'You can save multiple favorite track IDs into your vehicle radio presets.',
      },
    },
    activeCodes: [
      {
        code: '1843399042',
        reward: {
          es: 'Billie Eilish - Ocean Eyes (Remix)',
          en: 'Billie Eilish - Ocean Eyes (Remix)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: '7081437616',
        reward: {
          es: 'Lil Nas X - Industry Baby',
          en: 'Lil Nas X - Industry Baby',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: '5253604010',
        reward: {
          es: 'Capone - Oh No (TikTok viral sound)',
          en: 'Capone - Oh No (Viral TikTok sound)',
        },
        verifiedDate: 'Hoy',
      },
      {
        code: '1837050903',
        reward: {
          es: 'Bizarrap x Quevedo - Bzrp Music Sessions #52 (Intro)',
          en: 'Bizarrap x Quevedo - Bzrp Music Sessions #52 (Intro)',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: '5925841720',
        reward: {
          es: 'Phonk Brazil Drift Beat',
          en: 'Phonk Brazil Drift Beat',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [],
    faqs: {
      es: [
        {
          q: '¿Por qué algunas canciones de Brookhaven se quedan en silencio?',
          a: 'Roblox elimina periódicamente audios que reciben reclamos de derechos de autor. Mantenemos esta lista al día con IDs que siguen funcionando.',
        },
      ],
      en: [
        {
          q: 'Why are some Brookhaven music codes muted?',
          a: 'Roblox occasionally takes down copyrighted music tracks. We constantly check and replace muted IDs with working audio streams.',
        },
      ],
    },
  },
  {
    id: 'fisch',
    slug: 'fisch',
    title: 'Fisch',
    tagline: {
      es: 'Monedas C$, cebos legendarios, cañas y títulos para el simulador de pesca RPG.',
      en: 'Free C$ currency, legendary baits, bobbers, and exclusive titles for the viral fishing RPG.',
    },
    badge: {
      es: '🎣 Viral #1',
      en: '🎣 #1 Viral Hit',
    },
    category: 'simulator',
    categoryLabel: {
      es: 'RPG / Pesca',
      en: 'RPG / Fishing',
    },
    developer: 'Woozy Nite',
    likes: '1.8M+',
    visits: '1.2B+',
    activePlayers: '220,000+',
    robloxUrl: 'https://www.roblox.com/games/16732694052/Fisch',
    accentColor: 'cyan',
    iconGradient: 'from-cyan-600 via-teal-600 to-emerald-600',
    emoji: '🐟',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Lista actualizada de códigos activos de Fisch en Roblox. Canjea C$ gratis, cebos especiales y títulos exclusivos para pescar criaturas míticas.',
      en: 'Active Fisch codes for Roblox. Claim free C$ cash, bait crates, and unique bobbers to catch mythical fish.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en Fisch',
        steps: [
          'Entra a Fisch en Roblox.',
          'En la parte superior de la pantalla, pulsa el botón de Menú.',
          'Baja hasta el final del menú donde verás la casilla que dice "Enter code here".',
          'Pega el código de nuestra web y pulsa Enter para recibir tus monedas y cebos al instante.'
        ],
        tip: 'Usa los cebos de alta calidad en zonas profundas como Moosewood o Roslit Bay para pescar peces mutados.',
      },
      en: {
        title: 'How to Redeem Codes in Fisch',
        steps: [
          'Launch Fisch on Roblox.',
          'Press the Menu button at the top of the game screen.',
          'Scroll all the way down to the bottom where the "Enter code here" box is situated.',
          'Paste our code and hit Enter to claim your free C$ and rare bait crates.'
        ],
        tip: 'Save rare baits for deep trench expeditions to catch high-tier mutated fish!',
      },
    },
    activeCodes: [
      {
        code: 'FISCHTASTIC',
        reward: {
          es: '5,000 C$ + 3 Cajas de Cebo Raras',
          en: '5,000 C$ + 3 Rare Bait Crates',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'THEDEPEN',
        reward: {
          es: '2,500 C$ gratis',
          en: '2,500 Free C$',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'GOLDENROD',
        reward: {
          es: 'Flotador dorado y 1,000 C$',
          en: 'Golden Bobber and 1,000 C$',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'RELEASE', reward: { es: '1,000 C$', en: '1,000 C$' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Qué es C$ en Fisch?',
          a: 'C$ es la moneda principal del juego con la que puedes comprar cañas mejores, barcos más rápidos, planeadores y cebos avanzados en la tienda de Moosewood.',
        },
      ],
      en: [
        {
          q: 'What is C$ in Fisch?',
          a: 'C$ is the primary in-game currency used to purchase advanced rods, offshore speedboats, gliders, and premium bait from vendors.',
        },
      ],
    },
  },
  {
    id: 'anime-vanguards',
    slug: 'anime-vanguards',
    title: 'Anime Vanguards',
    tagline: {
      es: 'Gemas gratis, Cristales de Rasgos y Tiradas Super Rerolls para invocar unidades monarca.',
      en: 'Free gems, Trait Rerolls, and Super Rerolls to summon monarch-tier anime defenders.',
    },
    badge: {
      es: '⭐ Top Estrategia',
      en: '⭐ Top Strategy',
    },
    category: 'anime',
    categoryLabel: {
      es: 'Anime / Tower Defense',
      en: 'Anime / Tower Defense',
    },
    developer: 'Kitawari',
    likes: '1.6M+',
    visits: '980M+',
    activePlayers: '110,000+',
    robloxUrl: 'https://www.roblox.com/games/16146832113/Anime-Vanguards',
    accentColor: 'rose',
    iconGradient: 'from-red-600 via-rose-600 to-amber-600',
    emoji: '⛩️',
    lastUpdated: '2026-09-22',
    metaDescription: {
      es: 'Códigos activos de Anime Vanguards en Roblox. Consigue miles de gemas y super rerolls para desbloquear personajes míticos.',
      en: 'Active Anime Vanguards codes for Roblox. Claim thousands of free gems and super rerolls to unlock mythic anime heroes.',
    },
    howToRedeem: {
      es: {
        title: 'Cómo canjear códigos en Anime Vanguards',
        steps: [
          'Inicia Anime Vanguards en Roblox.',
          'En el lobby principal, acércate al NPC de "Codes" o haz clic en el icono de códigos a la derecha.',
          'Pega el código en la casilla de texto.',
          'Pulsa el botón "Redeem" para reclamar tus gemas de invocación.'
        ],
        tip: 'Ahorra tus gemas para cuando haya un evento de x2 probabilidad de míticos en el banner.',
      },
      en: {
        title: 'How to Redeem Codes in Anime Vanguards',
        steps: [
          'Launch Anime Vanguards on Roblox.',
          'In the central spawn lobby, walk up to the Codes NPC or tap the Codes icon on the right.',
          'Paste your active code into the text input.',
          'Click Redeem to instantly receive your summoning gems and trait rerolls.'
        ],
        tip: 'Save your gems for special 2x Mythic rate-up summon banners!',
      },
    },
    activeCodes: [
      {
        code: 'AVUPDATE',
        reward: {
          es: '1,000 Gemas + 3 Super Rerolls',
          en: '1,000 Gems + 3 Super Rerolls',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'ROKUSHIKI',
        reward: {
          es: '500 Gemas gratis',
          en: '500 Free Gems',
        },
        isNew: true,
        verifiedDate: 'Hoy',
      },
      {
        code: 'STANDPROUD',
        reward: {
          es: '800 Gemas + 1 Cristal de Rasgo',
          en: '800 Gems + 1 Trait Crystal',
        },
        verifiedDate: 'Hoy',
      },
    ],
    expiredCodes: [
      { code: 'RELEASE', reward: { es: '500 Gems', en: '500 Gems' } },
    ],
    faqs: {
      es: [
        {
          q: '¿Para qué sirven los Super Rerolls en Anime Vanguards?',
          a: 'Te permiten volver a tirar las habilidades pasivas de tus personajes de torre para intentar conseguir estadísticas secretas como Solar o Monarca.',
        },
      ],
      en: [
        {
          q: 'What do Super Rerolls do in Anime Vanguards?',
          a: 'They allow you to re-roll character traits to aim for elusive game-changing perks like Monarch, Solar, or Blitz.',
        },
      ],
    },
  },
];

export function getGameBySlug(slug: string): GameItem | undefined {
  return gamesData.find((game) => game.slug === slug);
}

export function getAllGameSlugs(): string[] {
  return gamesData.map((game) => game.slug);
}
