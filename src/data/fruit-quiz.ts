import type { QuizQuestion, FruitResult, FruitId } from '../types/fruit-quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      es: '¿Cuál es tu máxima prioridad cuando juegas a Blox Fruits?',
      en: 'What is your number one priority when playing Blox Fruits?',
    },
    options: [
      {
        text: {
          es: 'Subir a nivel máximo lo más rápido posible y farmear dinero/Beli.',
          en: 'Reach max level as fast as humanly possible and farm endless Beli.',
        },
        emoji: '⚡',
        scores: { buddha: 4, magma: 3 },
      },
      {
        text: {
          es: 'Cazar Bounty (30M) y dominar todos los combates PvP en el Tercer Mar.',
          en: 'Hunt Bounty (30M) and dominate every PvP duel in Third Sea.',
        },
        emoji: '⚔️',
        scores: { dough: 4, kitsune: 4, leopard: 3 },
      },
      {
        text: {
          es: 'Tener movilidad absoluta para teletransportarme por islas y sorprender rivales.',
          en: 'Have infinite mobility to teleport across islands and ambushing enemies.',
        },
        emoji: '🌀',
        scores: { portal: 4, kitsune: 2 },
      },
      {
        text: {
          es: 'Tener una transformación imponente y destrozar barcos y Sea Beasts.',
          en: 'Possess a colossal transformation to annihilate ships and Sea Beasts.',
        },
        emoji: '🐉',
        scores: { dragon: 4, magma: 3, leopard: 2 },
      },
    ],
  },
  {
    id: 2,
    question: {
      es: '¿Qué tipo de arma o estilo de combate prefieres usar principalmente?',
      en: 'Which weapon or combat style do you prefer wielding as your primary tool?',
    },
    options: [
      {
        text: {
          es: 'Espadas Legendarias (Cursed Dual Katana, True Triple Katana o Hallow Scythe).',
          en: 'Legendary Swords (Cursed Dual Katana, True Triple Katana, Hallow Scythe).',
        },
        emoji: '🗡️',
        scores: { portal: 4, buddha: 3 },
      },
      {
        text: {
          es: 'Los ataques mágicos y habilidades propias de la Fruta del Diablo.',
          en: 'Pure Devil Fruit spells and raw elemental devastation.',
        },
        emoji: '🔮',
        scores: { dragon: 4, magma: 3, dough: 2 },
      },
      {
        text: {
          es: 'Estilos de Lucha cuerpo a cuerpo a máxima velocidad (Godhuman, Electric Claw).',
          en: 'High-speed melee fighting styles (Godhuman, Electric Claw, Sanguine Art).',
        },
        emoji: '👊',
        scores: { kitsune: 4, leopard: 4, buddha: 2 },
      },
      {
        text: {
          es: 'Combos híbridos encadenados (Stun con fruta + remate con espada y Soul Guitar).',
          en: 'Hybrid chain combos (Fruit stun locked into sword finisher & Soul Guitar).',
        },
        emoji: '🎯',
        scores: { dough: 4, portal: 3 },
      },
    ],
  },
  {
    id: 3,
    question: {
      es: 'Cuando un enemigo peligroso te ataca por sorpresa mientras estás desprevenido:',
      en: 'When a dangerous enemy ambushes you out of nowhere while you are unprepared:',
    },
    options: [
      {
        text: {
          es: 'Me transformo en un gigante dorado y absorbo todo el daño sin retroceder.',
          en: 'I shift into a giant golden colossus and shrug off the burst without flinching.',
        },
        emoji: '🛡️',
        scores: { buddha: 4 },
      },
      {
        text: {
          es: 'Abro una brecha dimensional para esquivar el combo y reaparezco a su espalda.',
          en: 'I slip into a dimensional rift to avoid the combo and flank behind them.',
        },
        emoji: '🌌',
        scores: { portal: 4, kitsune: 2 },
      },
      {
        text: {
          es: 'Lo atrapo en un combo de aturdimiento continuo (Stun Lock) antes de que pueda huir.',
          en: 'I catch them in a continuous stun lock string before they can dash away.',
        },
        emoji: '⛓️',
        scores: { dough: 4, leopard: 3 },
      },
      {
        text: {
          es: 'Libero una tormenta de fuego o magma que incendia todo el escenario.',
          en: 'I unleash a cataclysm of fire or molten magma scorching the entire area.',
        },
        emoji: '💥',
        scores: { magma: 4, dragon: 4 },
      },
    ],
  },
  {
    id: 4,
    question: {
      es: '¿Qué opinas sobre hacer Raids para "Despertar" (Awaken) el poder de tu fruta?',
      en: 'What is your stance on doing Raids to Awaken your fruit abilities?',
    },
    options: [
      {
        text: {
          es: '¡Me encanta! El proceso de despertar da las mejores habilidades del juego.',
          en: 'Love it! The awakening process unlocks the single strongest abilities in the game.',
        },
        emoji: '✨',
        scores: { dough: 4, magma: 4, buddha: 3 },
      },
      {
        text: {
          es: 'Prefiero una fruta Mítica que ya sea imparable desde el primer minuto sin raids.',
          en: 'I prefer a Mythical fruit that is top-tier right out of the box without raids.',
        },
        emoji: '💎',
        scores: { kitsune: 4, leopard: 4, dragon: 3 },
      },
      {
        text: {
          es: 'Solo necesito el primer despertar para el rango de golpe o prefiero utilidad pura.',
          en: 'I only need the Z shift move or prefer pure utility and mobility.',
        },
        emoji: '👌',
        scores: { buddha: 3, portal: 4 },
      },
    ],
  },
  {
    id: 5,
    question: {
      es: '¿Cuál es tu actividad favorita en el mar abierto de Blox Fruits?',
      en: 'What is your favorite activity out on the open sea of Blox Fruits?',
    },
    options: [
      {
        text: {
          es: 'Cazar Reyes del Mar (Sea Beasts), Barcos Fantasma y conseguir fragmentos rápidos.',
          en: 'Hunting Sea Beasts, Ghost Ships, and racking up rapid Fragments.',
        },
        emoji: '🌊',
        scores: { magma: 4, dragon: 3 },
      },
      {
        text: {
          es: 'Pelear en la arena de coliseo o duelos de espadas en Mansion / Hydra Island.',
          en: 'Colosseum duels and PvP arena brawls at Mansion or Hydra Island.',
        },
        emoji: '🏟️',
        scores: { dough: 4, leopard: 4, kitsune: 3 },
      },
      {
        text: {
          es: 'Completar eventos de Luna Llena, Trials de Raza V4 y puzzles místicos.',
          en: 'Full Moon events, Race V4 trials, and mysterious ancient puzzle quests.',
        },
        emoji: '🌕',
        scores: { portal: 4, kitsune: 3, buddha: 2 },
      },
      {
        text: {
          es: 'Farmear cofres y subir niveles con mis amigos en servidores privados.',
          en: 'Chest farming and powering through quest levels alongside my crew.',
        },
        emoji: '💰',
        scores: { buddha: 4, magma: 2 },
      },
    ],
  },
  {
    id: 6,
    question: {
      es: 'Si tuvieras que elegir tu velocidad de movimiento ideal en combate:',
      en: 'If you had to pick your ideal movement velocity during skirmishes:',
    },
    options: [
      {
        text: {
          es: 'Velocidad de Dios: Correr sobre el agua a velocidades absurdas y esquivar todo.',
          en: 'Godly Speed: Sprint across open water at sonic speed and dodge every hit.',
        },
        emoji: '🦊',
        scores: { kitsune: 4, leopard: 3 },
      },
      {
        text: {
          es: 'Teletransporte instantáneo entre cualquier lugar del mapa sin caminar.',
          en: 'Instant dimensional teleportation to any place across the whole sea.',
        },
        emoji: '🌀',
        scores: { portal: 4 },
      },
      {
        text: {
          es: 'Velocidad normal pero con un alcance de ataque y espada gigantesco.',
          en: 'Standard foot speed but backed by massive reach and towering hitbox.',
        },
        emoji: '🏯',
        scores: { buddha: 4 },
      },
      {
        text: {
          es: 'Movilidad aérea y vuelo para bombardear a los enemigos desde el cielo.',
          en: 'Aerial flight and soaring angles to rain devastation from the skies.',
        },
        emoji: '🦅',
        scores: { dragon: 4, magma: 2 },
      },
    ],
  },
  {
    id: 7,
    question: {
      es: '¿Cuál es la estética visual que mejor te representa como pirata o marine?',
      en: 'Which visual aesthetic best represents your pirate or marine captain persona?',
    },
    options: [
      {
        text: {
          es: 'Zorro celestial sagrado con llamas azules místicas y colas ardientes.',
          en: 'Sacred celestial kitsune fox with mystical blue flames and glowing tails.',
        },
        emoji: '✨',
        scores: { kitsune: 4 },
      },
      {
        text: {
          es: 'Masa dulce elástica que atrapa a todo el mundo (estilo Katakuri de One Piece).',
          en: 'Stretchy sweet dough that traps everything (Katakuri style from One Piece).',
        },
        emoji: '🍩',
        scores: { dough: 4 },
      },
      {
        text: {
          es: 'Dragón del Este legendario que desata tormentas de fuego y meteoros.',
          en: 'Mythical Eastern Dragon summoning meteoric infernos and storm blasts.',
        },
        emoji: '🐲',
        scores: { dragon: 4 },
      },
      {
        text: {
          es: 'Depredador felino letal con garras despiadadas (estilo Rob Lucci).',
          en: 'Lethal feline apex predator with ruthless claw strikes (Rob Lucci style).',
        },
        emoji: '🐆',
        scores: { leopard: 4 },
      },
    ],
  },
];

export const fruitResults: Record<FruitId, FruitResult> = {
  buddha: {
    id: 'buddha',
    name: 'Buddha (Buda)',
    emoji: '🧘‍♂️',
    rarity: 'Legendary',
    archetype: {
      es: 'La Máquina Definitiva de Grindeo & Raids',
      en: 'The Ultimate Grinding & Raid Engine',
    },
    tagline: {
      es: 'Invencible en PvE, alcance colosal y reducción masiva de daño.',
      en: 'Unmatched in PvE, colossal attack reach, and 50%+ damage reduction.',
    },
    description: {
      es: 'Tu perfil es 100% eficiente y pragmático. Prefieres la contundencia física: transformarte en un coloso dorado, reducir un 50% todo el daño recibido y limpiar islas enteras en segundos con una espada o estilo de lucha.',
      en: 'Your playstyle is deeply efficient and pragmatic. You favor sheer physical resilience: shifting into a golden titan, shaving off 50% incoming damage, and sweeping entire islands clean with sword slashes.',
    },
    strengths: {
      es: [
        'La mejor fruta indiscutible para subir del Nivel 1 al 2600+ en tiempo récord.',
        'Reducción pasiva de daño del 50% al transformarse (Awakened Z).',
        'Multiplica por 3 el alcance de cualquier espada o estilo de lucha cuerpo a cuerpo.',
        'Imprescindible para carrilear cualquier Raid de Fragmentos.',
      ],
      en: [
        'Undisputed best fruit to race from Level 1 to 2600+ in record time.',
        'Passive 50% damage resistance when transformed (Awakened Z move).',
        'Triples the physical hit range of all swords and melee combat styles.',
        'Essential powerhouse for clearing difficult Fragment Raids.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      sword: 2550,
      gun: 0,
      fruit: 0,
    },
    beliPrice: '$1,200,000 Beli',
    tradeValue: '7,000,000 Value',
  },
  kitsune: {
    id: 'kitsune',
    name: 'Kitsune',
    emoji: '🦊',
    rarity: 'Mythical',
    archetype: {
      es: 'El Asesino Celestial de Velocidad Absoluta',
      en: 'The Celestial Speed Assassin',
    },
    tagline: {
      es: 'Velocidad de carrera imparable, fuego azul y dominio supremo de Bounty.',
      en: 'Unrivaled sprint velocity, azure spiritual flame, and supreme Bounty dominance.',
    },
    description: {
      es: 'Eres un jugador de reflejos felinos y agresividad calculada. No toleras que ningún enemigo escape. Con Kitsune puedes correr sobre el agua sin recibir daño, encadenar ataques de fuego espiritual y dominar el ranking de Bounty.',
      en: 'You are an aggressive player with lightning reflexes. You refuse to let targets flee. With Kitsune, you sprint across open ocean water without taking damage, unleash azure spirit fire, and reign over Bounty rankings.',
    },
    strengths: {
      es: [
        'Velocidad de movimiento terrestre y acuática más rápida de todo el juego.',
        'Daño masivo tanto en forma humana como en transformación de 9 colas.',
        'Inmunidad total al daño por agua al correr en alta mar.',
        'Máxima demanda y valor en el mercado de tradeos de Blox Fruits.',
      ],
      en: [
        'Fastest ground and water running speed in the entirety of Blox Fruits.',
        'Brutal burst damage in both human form and 9-tail beast transformation.',
        'Complete immunity to ocean water damage while sprinting.',
        'Highest demand and trade value in the entire Blox Fruits economy.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      fruit: 2550,
      sword: 0,
      gun: 0,
    },
    beliPrice: '$8,000,000 Beli',
    tradeValue: '115,000,000 Value',
  },
  dough: {
    id: 'dough',
    name: 'Dough (Masa / Mochi Awakened)',
    emoji: '🍩',
    rarity: 'Mythical',
    archetype: {
      es: 'El Rey de los Combos Letales (1-Shot King)',
      en: 'The Unstoppable 1-Shot Combo King',
    },
    tagline: {
      es: 'Aturdimientos infinitos, masa elástica y combos que no dejan reaccionar.',
      en: 'Endless chain stuns, sticky dough projectiles, and zero-escape combos.',
    },
    description: {
      es: 'Eres un estratega implacable del combate 1v1. Te encanta memorizar secuencias de combos quirúrgicas donde, una vez que aciertas tu primer golpe, el rival no puede tocar el suelo ni usar Haki de Observación.',
      en: 'You are a surgical 1v1 PvP executioner. You master chained sequences where, once your first stun lands, your opponent cannot touch the ground or trigger Observation Haki.',
    },
    strengths: {
      es: [
        'El mejor aturdimiento continuo (Stun Lock) de todo el juego cuando está despertada.',
        'Combina a la perfección con Godhuman, Cursed Dual Katana y Soul Guitar.',
        'Capacidad Logia elemental para esquivar ataques físicos con Observation Haki.',
        'Una de las frutas más temidas por todos los jugadores de 30M Bounty.',
      ],
      en: [
        'Top-tier stun lock potential in the game once fully Awakened.',
        'Flawless synergy with Godhuman, Cursed Dual Katana, and Soul Guitar.',
        'Logia-like elemental dodge against physical blows with Ken Haki active.',
        'Universally dreaded by 30M Bounty hunters across public servers.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      fruit: 2550,
      sword: 0,
      gun: 0,
    },
    beliPrice: '$2,800,000 Beli',
    tradeValue: '25,000,000 Value',
  },
  dragon: {
    id: 'dragon',
    name: 'Dragon (Dragón)',
    emoji: '🐉',
    rarity: 'Mythical',
    archetype: {
      es: 'El Coloso Destructor de Daño en Área',
      en: 'The Colossal AoE Cataclysm Titan',
    },
    tagline: {
      es: 'Poder mítico ancestral, resistencia titánica y devastación aérea.',
      en: 'Ancient mythical fury, titanic damage mitigation, and aerial airstrikes.',
    },
    description: {
      es: 'Te gusta sentirte invulnerable y todopoderoso. Con la Fruta Dragón sobrevuelas las batallas lanzando meteoritos y rayos de calor que borran cuadrillas enteras de enemigos sin tener que apuntar con precisión milimétrica.',
      en: 'You revel in feeling invincible and commanding. With the Dragon Fruit, you soar above the battlefield raining down fire meteors and heat beams that obliterate enemy squads with colossal splash area.',
    },
    strengths: {
      es: [
        'Reducción de daño masiva mientras la barra de furia del dragón está activa.',
        'Ataques en área (AoE) de los más grandes de Blox Fruits.',
        'Vuelo libre sobre cualquier isla sin gastar energía.',
        'Rework mítico muy esperado con un valor de tradeo disparado en el mercado.',
      ],
      en: [
        'Massive damage mitigation while the Dragon fury gauge remains active.',
        'Some of the largest area-of-effect (AoE) blast radii in the game.',
        'Free indefinite flight across any island without draining stamina.',
        'Anticipated mythical rework driving massive trading value.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      fruit: 2550,
      sword: 0,
      gun: 0,
    },
    beliPrice: '$3,500,000 Beli',
    tradeValue: '90,000,000 Value',
  },
  portal: {
    id: 'portal',
    name: 'Portal',
    emoji: '🌀',
    rarity: 'Legendary',
    archetype: {
      es: 'El Maestro Supremo de Movilidad & Espadachín',
      en: 'The Supreme Mobility & Sword Dimension Master',
    },
    tagline: {
      es: 'Teletransporte dimensional instantáneo y combate de espadas evasivo.',
      en: 'Instant worldwide dimensional travel and hyper-evasive sword duel combos.',
    },
    description: {
      es: 'Tu estilo es el de un fantasma intocable. No dependes de las habilidades de fruta para hacer daño: usas los portales para moverte entre islas en 1 segundo, meter al rival en otra dimensión y rematarlo con tu espada favorita.',
      en: 'Your style is that of an untouchable phantom. You don’t rely on fruit powers for damage: you deploy portals to blink across oceans in 1 second, drag foes into parallel dimensions, and execute with sword strikes.',
    },
    strengths: {
      es: [
        'Teletransporte instantáneo (World Warp) a cualquier isla del Primer, Segundo o Tercer Mar.',
        'La habilidad "Dimensional Rift" aísla al oponente y lo deja vulnerable.',
        'La mejor fruta para usuarios con build de Espadachín Puro (Sword Main).',
        'Facilita enormemente eventos mundiales, Mirage Island y cacería de cofres.',
      ],
      en: [
        'Instant World Warp teleportation to any island in First, Second, or Third Sea.',
        'Dimensional Rift move isolates opponents and strips their escape options.',
        'The absolute number one fruit for pure Sword Main stat builds.',
        'Supercharges Mirage Island hunting, chest runs, and world bosses.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      sword: 2550,
      gun: 0,
      fruit: 0,
    },
    beliPrice: '$1,900,000 Beli',
    tradeValue: '6,000,000 Value',
  },
  magma: {
    id: 'magma',
    name: 'Magma Awakened',
    emoji: '🌋',
    rarity: 'Rare',
    archetype: {
      es: 'El Titán del Daño por Segundo (DPS Rey de Sea Beasts)',
      en: 'The DPS Overlord & Sea Beast Slayer',
    },
    tagline: {
      es: 'El daño bruto más alto del juego y charcos de lava ardiente.',
      en: 'Highest damage per second (DPS) output and molten lava floor pools.',
    },
    description: {
      es: 'Eres un amante de los números grandes y la destrucción masiva. La Magma Despertada posee el daño por segundo más elevado de todo Blox Fruits, ideal para evaporar Reyes del Mar y barcos en segundos.',
      en: 'You are obsessed with big numbers and relentless destructive force. Awakened Magma deals the highest sustained DPS in Blox Fruits, making it the undisputed king of Sea Beast and raid boss farming.',
    },
    strengths: {
      es: [
        'Mayor daño sostenido por segundo (DPS) de todas las frutas de Blox Fruits.',
        'Caminar sobre el agua de forma pasiva gracias a plataformas de roca volcánica.',
        'La fruta número 1 para farmear Sea Beasts y eventos marítimos en Third Sea.',
        'Fácil de conseguir a través de giros y de bajo coste en tradeos.',
      ],
      en: [
        'Highest sustained damage per second (DPS) output in Blox Fruits history.',
        'Passive water walking by spawning volcanic stone footing upon ocean contact.',
        'The undisputed #1 fruit for Sea Beast hunting and Third Sea sea events.',
        'Very accessible to obtain via dealer spins and reasonable trade value.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      fruit: 2550,
      sword: 0,
      gun: 0,
    },
    beliPrice: '$960,000 Beli',
    tradeValue: '1,500,000 Value',
  },
  leopard: {
    id: 'leopard',
    name: 'Leopard',
    emoji: '🐆',
    rarity: 'Mythical',
    archetype: {
      es: 'La Bestia de Presión Continua & Velocidad Furiosa',
      en: 'The Furious Speed & Non-Stop Pressure Beast',
    },
    tagline: {
      es: 'Agresividad pura, daño acelerado y ataques sónicos.',
      en: 'Pure relentless pressure, hyper-fast burst, and sonic sonic claws.',
    },
    description: {
      es: 'Tu mentalidad es la de un depredador feroz: no dejas respirar al oponente ni un solo segundo. Con la transformación de leopardo tus ataques se aceleran, rompes la defensa del rival y controlas el ritmo del combate sin pausas.',
      en: 'You embody the predatory mindset: never granting your opponent a single second of breathing room. In leopard form, your attack cadence doubles, crushing defenses with non-stop onslaughts.',
    },
    strengths: {
      es: [
        'Velocidad de ataque cuerpo a cuerpo extremadamente alta en transformación.',
        'Movimientos que rompen el Haki de Observación rival con facilidad.',
        'Alta movilidad sin depender de tiempos de reutilización largos.',
        'Excelente fruta para jugadores agresivos que buscan dominar combates rápidos.',
      ],
      en: [
        'Extremely high attack cadence while transformed into apex predator mode.',
        'Multiple moves that easily shatter enemy Observation Haki.',
        'Superior combat mobility without long skill cooldowns.',
        'Ideal fruit for aggressive players who prefer fast-paced brawl victories.',
      ],
    },
    recommendedStats: {
      melee: 2550,
      defense: 2550,
      fruit: 2550,
      sword: 0,
      gun: 0,
    },
    beliPrice: '$5,000,000 Beli',
    tradeValue: '40,000,000 Value',
  },
};
