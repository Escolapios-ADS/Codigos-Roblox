import type { GuideItem } from '../types/guide';

export const guidesData: GuideItem[] = [
  {
    id: 'blox-fruits-tier-list',
    slug: 'blox-fruits-tier-list-frutas',
    title: {
      es: 'Tier List Definitiva de Frutas en Blox Fruits (2026): Mejores Frutas para PvP y Grinding',
      en: 'Ultimate Blox Fruits Tier List (2026): Best Fruits for PvP, Grinding & Raids',
    },
    excerpt: {
      es: 'Análisis detallado de las mejores frutas de Blox Fruits clasificadas desde Tier S+ hasta Tier D. Descubre cuáles maximizan tu farmeo y cuáles dominan el combate.',
      en: 'Detailed ranking of all Blox Fruits from Tier S+ down to Tier D. Find out which fruits maximize your grinding speed and rule PvP battles.',
    },
    readTime: '8 min',
    category: 'tier-list',
    categoryLabel: {
      es: 'Tier List / Guía',
      en: 'Tier List / Guide',
    },
    author: {
      name: 'Carlos "Kuro" Méndez',
      role: {
        es: 'Especialista en RPGs de Roblox & Max Level en Blox Fruits',
        en: 'Roblox RPG Specialist & Max Level Blox Fruits Veteran',
      },
      avatar: '🗡️',
    },
    publishedDate: '2026-09-15',
    updatedDate: '2026-09-22',
    emoji: '🍈',
    badge: {
      es: '🔥 Guía Destacada',
      en: '🔥 Featured Guide',
    },
    sections: [
      {
        heading: {
          es: '1. Criterios de Clasificación: Grinding vs PvP',
          en: '1. Ranking Methodology: Grinding vs. PvP Performance',
        },
        content: {
          es: [
            'En Blox Fruits, una fruta excelente para subir de nivel (Grinding) no siempre es la mejor para enfrentamientos contra otros jugadores (Bounty Hunting / PvP). Para esta clasificación de 2026, evaluamos el daño en área (AoE), la movilidad, la facilidad para romper Instinto (Ken Haki), el coste de energía y la resistencia al daño elemental (Logia).',
            'Las frutas tipo Bestia (Zoan) y Logia (Elemental) dominan generalmente el contenido PvE, mientras que las frutas Paramecia y Zoan Despertadas tienen la ventaja en combos de aturdimiento en el Tercer Mar.',
          ],
          en: [
            'In Blox Fruits, an outstanding fruit for leveling up (grinding) might be sub-optimal for player-versus-player combat (bounty hunting). In this 2026 ranking, we measure area-of-effect damage (AoE), aerial mobility, Ken Haki breaking capabilities, energy cost, and elemental intangibility.',
            'Beast (Zoan) and Elemental (Logia) fruits universally rule PvE and Sea Events, while awakened Paramecia and mythicals hold the upper hand in stunlock combos in the Third Sea.',
          ],
        },
      },
      {
        heading: {
          es: '2. Tabla Clasificatoria Completa (Tier S+ a Tier B)',
          en: '2. Complete Fruit Tier Ranking (Tier S+ to Tier B)',
        },
        content: {
          es: [
            'A continuación tienes el desglose de las frutas más poderosas del meta actual, clasificadas por su utilidad integral en el juego:',
          ],
          en: [
            'Below is the full breakdown of the most influential fruits in the current meta, evaluated for their total in-game utility:',
          ],
        },
        table: {
          headers: {
            es: ['Nivel (Tier)', 'Fruta', 'Tipo', 'Mejor Para', 'Calificación'],
            en: ['Tier', 'Fruit', 'Type', 'Best For', 'Rating'],
          },
          rows: {
            es: [
              ['Tier S+', 'Kitsune / Dragón (Rework)', 'Bestia (Mythic)', 'PvP extremo, movilidad infinita y velocidad', '10 / 10'],
              ['Tier S+', 'Buda (Buddha V2)', 'Bestia (Legendary)', 'El rey absoluto de subir de nivel, Raids y Sea Events', '10 / 10'],
              ['Tier S', 'Masa (Dough V2)', 'Elemental / Especial', 'Combos infinitos de PvP y aturdimiento (Stun)', '9.7 / 10'],
              ['Tier S', 'Magma (Awakened)', 'Elemental', 'Mayor DPS por segundo contra jefes y monstruos marinos', '9.5 / 10'],
              ['Tier A', 'Portal', 'Natural', 'Teletransporte global instantáneo y evasión en combate', '9.2 / 10'],
              ['Tier A', 'T-Rex', 'Bestia (Mythic)', 'Transformación veloz y robo de vida pasivo constante', '9.0 / 10'],
              ['Tier B', 'Luz (Light)', 'Elemental', 'Excelente para el Primer y Segundo Mar gracias al vuelo ultra-rápido', '8.4 / 10'],
              ['Tier B', 'Hielo (Ice V2)', 'Elemental', 'Fácil de usar, caminar sobre el agua y congelación garantizada', '8.1 / 10'],
            ],
            en: [
              ['Tier S+', 'Kitsune / Dragon (Rework)', 'Beast (Mythic)', 'Extreme PvP, infinite speed and top aerial mobility', '10 / 10'],
              ['Tier S+', 'Buddha (V2 Awakened)', 'Beast (Legendary)', 'Undisputed king of leveling, raids, and sea events', '10 / 10'],
              ['Tier S', 'Dough (V2 Awakened)', 'Special Paramecia', 'Infinite one-shot stun combos in PvP battles', '9.7 / 10'],
              ['Tier S', 'Magma (V2 Awakened)', 'Elemental', 'Highest single-target DPS in game against sea beasts and raid bosses', '9.5 / 10'],
              ['Tier A', 'Portal', 'Natural', 'Instant map-wide teleportation and dimensional escape', '9.2 / 10'],
              ['Tier A', 'T-Rex', 'Beast (Mythic)', 'Aggressive slash attack chain with passive life leech', '9.0 / 10'],
              ['Tier B', 'Light (Awakened)', 'Elemental', 'Best early game fruit for First and Second Sea due to light-speed flight', '8.4 / 10'],
              ['Tier B', 'Ice (Awakened)', 'Elemental', 'Stun locks, freeze combos, and effortless water walking', '8.1 / 10'],
            ],
          },
        },
      },
      {
        heading: {
          es: '3. Consejos para Optimizar tus Estadísticas',
          en: '3. Stat Allocation Strategy for Maximum Efficiency',
        },
        content: {
          es: [
            'Si usas la fruta Buda, NO inviertas puntos en Blox Fruit. La estrategia óptima es maximizar Cuerpo a Cuerpo (Melee) para obtener energía y Defensa para salud, canalizando el resto de puntos a Espada (Sword).',
            'Para frutas mágicas como Kitsune, Magma o Dough, distribuye 2,550 puntos en Defensa, 2,550 en Melee y 2,550 en Blox Fruit para maximizar el multiplicador de daño de tus habilidades.',
          ],
          en: [
            'If you run Buddha, DO NOT put points into Blox Fruit. The optimal build allocates max points into Melee (energy & hit speed) and Defense (health pool), placing all remaining stat points into Sword mastery.',
            'For caster fruits like Kitsune, Magma, or Dough, distribute max 2,550 stat points across Defense, Melee, and Blox Fruit to unleash devastating skill multipliers.',
          ],
        },
        callout: {
          type: 'tip',
          text: {
            es: 'Recuerda usar los códigos activos de Blox Fruits de nuestra web para conseguir 2x EXP y reinicios de stats gratuitos sin gastar Fragmentos ni Robux.',
            en: 'Remember to grab active Blox Fruits codes from our homepage to enjoy free 2x EXP boosts and instant stat resets without spending fragments or Robux.',
          },
        },
      },
    ],
  },
  {
    id: 'como-conseguir-robux-gratis',
    slug: 'como-conseguir-robux-gratis-seguro',
    title: {
      es: 'Cómo Conseguir Robux Gratis en Roblox de Forma 100% Legal y Segura (Evita Estafas)',
      en: 'How to Get Free Robux Safely & Legally in Roblox (Scam Prevention Guide)',
    },
    excerpt: {
      es: 'Guía oficial para ganar Robux legítimos mediante Microsoft Rewards, creación de ropa, Roblox Studio y donaciones en PLS DONATE, sin poner en riesgo tu cuenta.',
      en: 'Official methods to earn legitimate Robux through Microsoft Rewards, clothing creation, Roblox Studio games, and PLS DONATE without risking account bans.',
    },
    readTime: '6 min',
    category: 'safety',
    categoryLabel: {
      es: 'Seguridad / Finanzas',
      en: 'Safety / Guides',
    },
    author: {
      name: 'Sofía Valdés',
      role: {
        es: 'Especialista en Ciberseguridad y Moderación en Comunidades de Gaming',
        en: 'Cybersecurity & Community Moderation Specialist',
      },
      avatar: '🛡️',
    },
    publishedDate: '2026-09-10',
    updatedDate: '2026-09-22',
    emoji: '💎',
    badge: {
      es: '🛡️ Guía Esencial',
      en: '🛡️ Essential Guide',
    },
    sections: [
      {
        heading: {
          es: '1. La Verdad Sobre los "Generadores de Robux"',
          en: '1. The Truth About "Free Robux Generators"',
        },
        content: {
          es: [
            'Lo primero y más importante que todo jugador debe saber: NO existen generadores de Robux, hacks ni aplicaciones mágicas que te den monedas gratis pulsando un botón. Cualquier página o vídeo que prometa "10,000 Robux gratis introduciendo tu contraseña" es una estafa de phishing diseñada para robar cuentas o instalar malware.',
            'Roblox gestiona los Robux en servidores seguros en la nube. No existe ningún archivo local ni truco de navegador (inspeccionar elemento) que modifique tu saldo real.',
          ],
          en: [
            'First and foremost: there is NO SUCH THING as a Robux generator, hack, or automatic script. Any site or video claiming to give you "10,000 free Robux if you type your password" is a phishing scam built to steal accounts or install malicious extensions.',
            'Roblox balances are stored strictly on encrypted central servers. Client-side browser inspection tricks ("Inspect Element") only change local visual text and vanish upon refreshing.',
          ],
        },
        callout: {
          type: 'warning',
          text: {
            es: 'Nunca introduzcas tu contraseña de Roblox en páginas externas ni instales extensiones de navegador desconocidas. Activa la verificación en dos pasos (2FA) en los ajustes de tu cuenta.',
            en: 'Never enter your Roblox password on external websites or install unverified browser plugins. Always enable 2-Factor Authentication (2FA) in your account security tab.',
          },
        },
      },
      {
        heading: {
          es: '2. Los 4 Métodos Legítimos y Oficiales para Ganar Robux',
          en: '2. The 4 Legitimate & Official Ways to Earn Robux',
        },
        content: {
          es: [
            'Afortunadamente, existen formas 100% legales y avaladas por Roblox Corporation para conseguir saldo en tu cuenta:',
          ],
          en: [
            'Fortunately, there are official, authorized paths backed by Roblox Corporation to earn currency lawfully:',
          ],
        },
        table: {
          headers: {
            es: ['Método', 'Requisitos', 'Dificultad', 'Potencial'],
            en: ['Method', 'Requirements', 'Difficulty', 'Earning Potential'],
          },
          rows: {
            es: [
              ['Microsoft Rewards Oficial', 'Cuenta Microsoft gratuita y búsquedas en Bing', 'Muy Fácil', '100 a 1,000 Robux mensuales garantizados'],
              ['PLS DONATE / Hazme Donar', 'Poner puestos con pases de juego (Gamepasses)', 'Fácil', 'Variable (50 a 5,000+ Robux según tu creatividad)'],
              ['Crear y Vender Ropa en Avatar', 'Camisas y pantalones diseñados en Canva/Photoshop', 'Media', 'Ingresos pasivos continuos con cada venta'],
              ['Desarrollar Experiencias en Roblox Studio', 'Crear un minijuego sencillo con mecánicas divertidas', 'Avanzada', 'Millones de Robux convertibles a dinero real (DevEx)'],
            ],
            en: [
              ['Microsoft Rewards Official', 'Free Microsoft account and daily Bing searches', 'Very Easy', '100 to 1,000 guaranteed monthly digital codes'],
              ['PLS DONATE & Art Games', 'Setting up stands with custom Gamepasses', 'Easy', 'Variable (50 to 5,000+ Robux based on engagement)'],
              ['Designing & Selling Avatar Clothing', 'Original shirts and pants made in design apps', 'Medium', 'Continuous passive royalties on every sale'],
              ['Building Experiences in Roblox Studio', 'Create interactive minigames or simulators', 'Advanced', 'Thousands to millions of Robux convertible to cash (DevEx)'],
            ],
          },
        },
      },
      {
        heading: {
          es: '3. Cómo Canjear Tarjetas de Regalo de Microsoft Rewards',
          en: '3. Redeeming Microsoft Rewards Digital Roblox Cards',
        },
        content: {
          es: [
            'Microsoft tiene un acuerdo oficial con Roblox. Al realizar búsquedas cotidianas en Bing y completar cuestionarios de trivia diarios, acumulas puntos que puedes canjear por códigos de 100, 200, 400 o 1,000 Robux.',
            'Una vez canjeado el código en la web de Microsoft, dirígete a roblox.com/redeem, pega el PIN digital de 10 dígitos y el saldo se abonará instantáneamente a tu cuenta sin gastar un solo céntimo.',
          ],
          en: [
            'Microsoft holds an official partnership with Roblox. By doing simple everyday searches on Bing and answering quick trivia quizzes, you earn points redeemable for official Roblox digital gift cards.',
            'Once you unlock your digital code, visit roblox.com/redeem, paste your unique 10-digit PIN, and your balance updates immediately without spending a dime.',
          ],
        },
      },
    ],
  },
  {
    id: 'guia-blade-ball',
    slug: 'guia-blade-ball-habilidades-espadas',
    title: {
      es: 'Guía Completa de Blade Ball: Mejores Habilidades, Clases y Estrategias para Ganar',
      en: 'Complete Blade Ball Guide: Best Abilities, Classes & Winning Strategies',
    },
    excerpt: {
      es: 'Aprende a dominar el timing de bloqueo, las habilidades meta como Raging Deflect y Rapture, y cómo ganar todas las partidas de dodgeball con espada.',
      en: 'Master block timing, curve deflects, top-tier abilities like Raging Deflect and Rapture, and dominate the fast-paced dodgeball arena.',
    },
    readTime: '7 min',
    category: 'mechanics',
    categoryLabel: {
      es: 'Estrategia / Acción',
      en: 'Strategy / Action',
    },
    author: {
      name: 'Marcos "BladeMaster" Gil',
      role: {
        es: 'Jugador competitivo top 500 en Blade Ball',
        en: 'Competitive Top 500 Blade Ball Duelist',
      },
      avatar: '⚡',
    },
    publishedDate: '2026-09-18',
    updatedDate: '2026-09-22',
    emoji: '⚔️',
    sections: [
      {
        heading: {
          es: '1. El Secreto del Timing: Bloqueo Normal vs Stand-off',
          en: '1. The Secret to Parrying: Normal Deflects vs. Stand-offs',
        },
        content: {
          es: [
            'El error número uno de los principiantes en Blade Ball es spamear la tecla de bloqueo (F o clic izquierdo). Cuando pulsas el botón antes de tiempo, tu personaje entra en una ventana de enfriamiento de medio segundo donde queda completamente vulnerable.',
            'Para ganar contra bolas que superan los 100 km/h, no mires a tu personaje: mantén la vista fija en el resplandor de la pelota y bloquea en el instante en que el aura cambie de blanco a rojo hacia ti.',
          ],
          en: [
            'The number one beginner mistake in Blade Ball is panic-clicking the block key (F or left mouse). If you click too early, your sword incurs a half-second parry recovery cooldown, leaving you wide open to a fatal hit.',
            'When ball speeds exceed 100 km/h, stop watching your avatar: keep your focus glued to the ball and deflect the moment the targeting reticle flashes towards your position.',
          ],
        },
      },
      {
        heading: {
          es: '2. Tier List de Habilidades en Blade Ball (2026)',
          en: '2. Blade Ball Ability Tier List (2026)',
        },
        content: {
          es: [
            'Las habilidades marcan la diferencia entre un jugador promedio y un campeón del lobby. A continuación clasificamos las mejores habilidades según su tasa de victoria:',
          ],
          en: [
            'Abilities separate casual players from lobby champions. Here is our breakdown of top abilities by competitive win rate:',
          ],
        },
        table: {
          headers: {
            es: ['Habilidad', 'Nivel', 'Efecto Clave', 'Estilo de Juego'],
            en: ['Ability', 'Tier', 'Key Effect', 'Playstyle'],
          },
          rows: {
            es: [
              ['Raging Deflect', 'Tier S+', 'Acelera la bola drásticamente en duelos cerrados', 'Agresivo / Clutches'],
              ['Rapture', 'Tier S+', 'Lanza la bola al aire eliminando el ángulo del oponente', 'Control de campo'],
              ['Infinity', 'Tier S', 'Detiene la bola en el aire y la redirige a voluntad', 'Estratégico'],
              ['Pull', 'Tier A', 'Atrae la pelota hacia ti para sorprender a rivales desprevenidos', 'Emboscada'],
              ['Dash / Super Dash', 'Tier B', 'Movilidad rápida para salvarte de errores de posición', 'Defensivo'],
            ],
            en: [
              ['Raging Deflect', 'Tier S+', 'Drastically accelerates ball velocity in close clashing', 'Aggressive / Clutch duels'],
              ['Rapture', 'Tier S+', 'Launches ball sky-high, completely nullifying enemy angles', 'Spatial control'],
              ['Infinity', 'Tier S', 'Freezes the ball mid-air and redirects with pinpoint aim', 'Tactical trickery'],
              ['Pull', 'Tier A', 'Yanks the ball straight to you to catch opponents off guard', 'Surprise counter'],
              ['Dash / Super Dash', 'Tier B', 'Fast burst of repositioning to recover from missed steps', 'Defensive fallback'],
            ],
          },
        },
      },
    ],
  },
  {
    id: 'dress-to-impress-trucos',
    slug: 'dress-to-impress-trucos-temas',
    title: {
      es: 'Dress to Impress (DTI): Guía de Temas de Pasarela, Estilos y Ropa Secreta VIP Gratis',
      en: 'Dress to Impress (DTI): Runway Themes, VIP Styling & Secret Free Outfits Guide',
    },
    excerpt: {
      es: 'Cómo clavar cada tema de pasarela, combinar colores y texturas de manera profesional y conseguir 5 estrellas en cada votación de Dress to Impress.',
      en: 'How to ace every runway theme, layer clothes with advanced texture hacks, and secure 5-star podium ratings in Dress to Impress.',
    },
    readTime: '6 min',
    category: 'tips',
    categoryLabel: {
      es: 'Moda / Pasarela',
      en: 'Fashion / Runway',
    },
    author: {
      name: 'Elena "ChicGamer" Ross',
      role: {
        es: 'Top Model & Diseñadora de Ropa en Roblox',
        en: 'Roblox Top Model & Fashion Designer',
      },
      avatar: '💅',
    },
    publishedDate: '2026-09-17',
    updatedDate: '2026-09-22',
    emoji: '👗',
    sections: [
      {
        heading: {
          es: '1. El Arte de las Capas (Layering): El Secreto de las Pasarelas',
          en: '1. The Art of Clothing Layering: The Secret to High Scores',
        },
        content: {
          es: [
            'En Dress to Impress, los looks más votados nunca son un solo vestido simple. La clave del éxito en las puntuaciones de 5 estrellas es el "Layering": combinar tops cortos con vestidos sin mangas, superponer chaquetas de código y usar calentadores de pierna con tacones altos.',
            'No olvides que los accesorios de los códigos (como el conjunto M3GAN, la bolsa plateada o el gorro de gato) añaden un toque único que los jugadores corrientes sin códigos no pueden tener.',
          ],
          en: [
            'In Dress to Impress, winning podium looks never feature just a single standalone dress. The true secret to consistent 5-star ratings is master layering: pairing cropped jackets over strapless tops, stacking skirts, and styling leg warmers with stiletto heels.',
            'Exclusive code items (like the M3GAN set, silver handbag, or custom lash chokers) give your runway model a distinct flair that regular players without codes simply cannot access.',
          ],
        },
      },
      {
        heading: {
          es: '2. Interpretación de Temas Difíciles de Pasarela',
          en: '2. Nailing Confusing & Complex Runway Themes',
        },
        content: {
          es: [
            'Muchos jugadores pierden votos por no entender el significado exacto de temas en inglés como "Avant-Garde", "Y2K", "Dark Academia" o "Coquette". Aquí tienes la guía rápida para cada uno:',
          ],
          en: [
            'Many contestants lose precious stars because they misunderstand thematic terms like "Avant-Garde", "Y2K", "Dark Academia", or "Coquette". Here is your quick styling cheat sheet:',
          ],
        },
        table: {
          headers: {
            es: ['Tema', 'Paleta de Color', 'Prendas Clave', 'Peluquería & Maquillaje'],
            en: ['Theme', 'Color Palette', 'Signature Garments', 'Hair & Makeup'],
          },
          rows: {
            es: [
              ['Coquette', 'Rosa pastel, blanco y crema', 'Encaje, lazos grandes, faldas abullonadas y perlas', 'Moños con lazo, rubor marcado y labios brillo'],
              ['Y2K (Años 2000)', 'Plateado metálico, rosa chicle y turquesa', 'Pantalones de tiro bajo, tops brillantes y gafas de sol', 'Dos coletas altas con mechones sueltos'],
              ['Dark Academia', 'Marrón café, verde bosque, burdeos y negro', 'Blazers de cuadros, faldas plisadas y mocasines', 'Recogido clásico sobrio y gafas redondas'],
              ['Cyberpunk / Sci-Fi', 'Negro mate con neón cian o violeta', 'Botas militares altas, abrigos de cuero y accesorios robóticos', 'Cabello brillante con degradado y delineado futurista'],
            ],
            en: [
              ['Coquette', 'Pastel pink, white, and cream', 'Lace ruffles, bows, puffy mini-skirts, and pearl chokers', 'Twin braids or messy bun with hair ribbons, soft glossy blush'],
              ['Y2K (2000s)', 'Metallic silver, hot pink, and cyan', 'Low-rise denim, glitter cropped tees, and chunky sunglasses', 'High pigtails with front face-framing strands'],
              ['Dark Academia', 'Espresso brown, forest green, burgundy, black', 'Plaid blazers, pleated tennis skirts, and trench coats', 'Neat chignon bun with vintage round frame spectacles'],
              ['Cyberpunk / Sci-Fi', 'Matte black with neon cyan or violet streaks', 'Tactical boots, trench duster coats, and futuristic belts', 'Sharp angled bob with glowing neon roots and cyber eyeliner'],
            ],
          },
        },
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return guidesData.find((guide) => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guidesData.map((guide) => guide.slug);
}
