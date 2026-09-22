import type { OutfitItem } from '../types/outfit';

export const outfitsData: OutfitItem[] = [
  // 1. Táctico Militar / SWAT
  {
    id: 'militar-swat-black',
    name: {
      es: 'Traje Táctico SWAT Black Ops',
      en: 'Tactical SWAT Black Ops Outfit',
    },
    category: 'military',
    gender: 'male',
    description: {
      es: 'Uniforme táctico de asalto militar con chaleco antibalas, parches de fuerzas especiales y pistolera lateral.',
      en: 'Tactical assault uniform with ballistic vest, special forces insignia, and combat holster.',
    },
    shirtId: '144075677',
    pantsId: '144076358',
    accessoryId: '475364444',
    tags: ['militar', 'swat', 'policia', 'tactico', 'negro', 'black ops'],
  },
  {
    id: 'militar-camuflaje-desert',
    name: {
      es: 'Soldado Élite Camuflaje Desierto',
      en: 'Desert Camo Elite Soldier',
    },
    category: 'military',
    gender: 'unisex',
    description: {
      es: 'Equipamiento de combate en tonos arena desierto con cinturón de munición y rodilleras reforzadas.',
      en: 'Desert sand combat fatigue gear with utility ammo belt and reinforced tactical knee pads.',
    },
    shirtId: '398633584',
    pantsId: '398634177',
    tags: ['militar', 'camuflaje', 'soldado', 'ejercito', 'desierto'],
  },
  {
    id: 'militar-female-specops',
    name: {
      es: 'Fuerzas Especiales Femeninas',
      en: 'Female SpecOps Tactical Unit',
    },
    category: 'military',
    gender: 'female',
    description: {
      es: 'Conjunto ajustado táctico oscuro para chica con arnés de asalto, radio y botas militares.',
      en: 'Fitted dark tactical set for girls featuring assault harness, radio comms, and combat boots.',
    },
    shirtId: '6074987019',
    pantsId: '6074988771',
    hairId: '5411786520',
    tags: ['militar', 'chica', 'tactico', 'agente', 'policia'],
  },

  // 2. Aesthetic & Pastel
  {
    id: 'aesthetic-pink-softie',
    name: {
      es: 'Pink Softie & Suéter Pastel',
      en: 'Pink Softie & Pastel Sweater',
    },
    category: 'aesthetic',
    gender: 'female',
    description: {
      es: 'Suéter oversize rosa suave con falda plisada blanca, medias altas y moño aesthetic.',
      en: 'Oversized pastel pink sweater paired with white pleated skirt and knee-high socks.',
    },
    shirtId: '6523958933',
    pantsId: '6523961129',
    hairId: '6223443854',
    accessoryId: '5616521782',
    tags: ['aesthetic', 'rosa', 'chica', 'cute', 'softie', 'pastel'],
  },
  {
    id: 'aesthetic-vanilla-latte',
    name: {
      es: 'Vanilla Latte Beige & Cardigan',
      en: 'Vanilla Latte Beige & Cardigan',
    },
    category: 'aesthetic',
    gender: 'female',
    description: {
      es: 'Top crema minimalista con cardigan marrón claro y pantalones rectos estilo café aesthetic.',
      en: 'Minimalist cream top with light brown cardigan and tailored relaxed trousers.',
    },
    shirtId: '7028114093',
    pantsId: '7028115682',
    hairId: '6527878345',
    tags: ['aesthetic', 'beige', 'cafe', 'latte', 'chica', 'vintage'],
  },
  {
    id: 'aesthetic-soft-boy-blue',
    name: {
      es: 'Soft Boy Hoodie Azul Pastel',
      en: 'Soft Boy Pastel Blue Hoodie',
    },
    category: 'aesthetic',
    gender: 'male',
    description: {
      es: 'Sudadera holgada en tono azul cielo con vaqueros claros y zapatillas blancas.',
      en: 'Relaxed sky-blue hoodie matched with light-wash denim and classic kicks.',
    },
    shirtId: '6029314488',
    pantsId: '6029315904',
    hairId: '376527350',
    tags: ['aesthetic', 'chico', 'azul', 'hoodie', 'soft boy'],
  },

  // 3. Streetwear & Y2K
  {
    id: 'streetwear-oversized-black',
    name: {
      es: 'Urban Drip Oversized con Cargo',
      en: 'Urban Drip Oversized Cargo',
    },
    category: 'streetwear',
    gender: 'male',
    description: {
      es: 'Camiseta gráfica oversize negra con pantalones cargo oscuros y zapatillas de skate.',
      en: 'Black oversized graphic tee with multi-pocket dark cargo pants and skate sneakers.',
    },
    shirtId: '6175928814',
    pantsId: '6175930219',
    hairId: '6013289045',
    tags: ['streetwear', 'chico', 'drip', 'cargo', 'skater', 'negro'],
  },
  {
    id: 'streetwear-y2k-cyber-girl',
    name: {
      es: 'Y2K Cyber Star & Baggy Jeans',
      en: 'Y2K Cyber Star & Baggy Jeans',
    },
    category: 'streetwear',
    gender: 'female',
    description: {
      es: 'Crop top con estrella cibernética Y2K, pantalones vaqueros caídos anchos y cinturón con remaches.',
      en: 'Y2K star crop top with low-rise baggy denim pants and studded belt.',
    },
    shirtId: '8194301174',
    pantsId: '8194303381',
    accessoryId: '6947231450',
    tags: ['streetwear', 'y2k', 'chica', 'baggy', 'estrella', 'cyber'],
  },
  {
    id: 'streetwear-varsity-jacket',
    name: {
      es: 'Chaqueta Varsity Vintage & Jordan',
      en: 'Vintage Varsity Jacket & Jordans',
    },
    category: 'streetwear',
    gender: 'unisex',
    description: {
      es: 'Chaqueta universitaria retro verde y blanca con pantalones holgados y zapatillas deportivas.',
      en: 'Retro green and white varsity bomber jacket with loose denim and high-top sneakers.',
    },
    shirtId: '7482910332',
    pantsId: '7482912440',
    tags: ['streetwear', 'varsity', 'chaqueta', 'retro', 'unisex', 'drip'],
  },

  // 4. Anime & Cosplay
  {
    id: 'anime-gojo-satoru',
    name: {
      es: 'Gojo Satoru (Jujutsu Kaisen)',
      en: 'Gojo Satoru (Jujutsu Kaisen)',
    },
    category: 'anime',
    gender: 'male',
    description: {
      es: 'Traje oscuro de hechicero de Jujutsu Kaisen con vendas en los ojos y cabello blanco erizado.',
      en: 'Dark high-collar sorcerer uniform from Jujutsu Kaisen with blindfold and spiked white hair.',
    },
    shirtId: '5928374102',
    pantsId: '5928376228',
    hairId: '5621458920',
    tags: ['anime', 'gojo', 'jujutsu kaisen', 'chico', 'hechicero'],
  },
  {
    id: 'anime-akatsuki-cloak',
    name: {
      es: 'Capa Akatsuki (Naruto Shippuden)',
      en: 'Akatsuki Cloak (Naruto Shippuden)',
    },
    category: 'anime',
    gender: 'unisex',
    description: {
      es: 'Túnica negra con nubes rojas de la organización criminal ninja Akatsuki.',
      en: 'Iconic black robe adorned with red clouds from the notorious Akatsuki clan.',
    },
    shirtId: '159283401',
    pantsId: '159283592',
    accessoryId: '476298311',
    tags: ['anime', 'naruto', 'akatsuki', 'ninja', 'itachi'],
  },
  {
    id: 'anime-tanjiro-kamado',
    name: {
      es: 'Tanjiro Kamado (Demon Slayer)',
      en: 'Tanjiro Kamado (Demon Slayer)',
    },
    category: 'anime',
    gender: 'male',
    description: {
      es: 'Haori de cuadros verdes y negros con uniforme del Cuerpo de Cazadores de Demonios.',
      en: 'Checkered green and black haori over the Demon Slayer Corps uniform.',
    },
    shirtId: '3819284710',
    pantsId: '3819286201',
    tags: ['anime', 'kimetsu', 'tanjiro', 'demon slayer', 'espada'],
  },
  {
    id: 'anime-nezuko-kamado',
    name: {
      es: 'Nezuko Kamado Kimono Rosa',
      en: 'Nezuko Kamado Pink Kimono',
    },
    category: 'anime',
    gender: 'female',
    description: {
      es: 'Kimono rosa tradicional con patrón geométrico de asanoha y haori marrón oscuro.',
      en: 'Traditional geometric pink kimono with dark brown outer haori and bamboo muzzle vibe.',
    },
    shirtId: '3829104821',
    pantsId: '3829106399',
    hairId: '4192834012',
    tags: ['anime', 'nezuko', 'kimetsu', 'chica', 'demon slayer'],
  },

  // 5. Gótico & Emo / Dark Grunge
  {
    id: 'goth-dark-grunge-boy',
    name: {
      es: 'Dark Grunge Emo con Cadenas',
      en: 'Dark Grunge Emo with Chains',
    },
    category: 'goth',
    gender: 'male',
    description: {
      es: 'Sudadera negra rota con camiseta de rayas debajo, cadenas metálicas y vaqueros rasgados.',
      en: 'Distressed black hoodie with striped undershirt, metallic wallet chains, and ripped denim.',
    },
    shirtId: '5729183401',
    pantsId: '5729185290',
    hairId: '6271928401',
    tags: ['goth', 'emo', 'grunge', 'negro', 'cadenas', 'chico'],
  },
  {
    id: 'goth-vampire-queen',
    name: {
      es: 'Reina Vampiro Gótica con Corsé',
      en: 'Goth Vampire Queen with Corset',
    },
    category: 'goth',
    gender: 'female',
    description: {
      es: 'Corsé gótico negro con mangas de encaje, falda oscura con encaje y gargantilla gótica.',
      en: 'Lace-up gothic black corset with sheer dark lace sleeves and tiered ruffled skirt.',
    },
    shirtId: '6829104829',
    pantsId: '6829106312',
    hairId: '5729104812',
    tags: ['goth', 'vampiro', 'corset', 'chica', 'negro', 'encaje'],
  },

  // 6. Preppy & Old Money / Elegante
  {
    id: 'preppy-old-money-suit',
    name: {
      es: 'Traje Ejecutivo Old Money & Esmoquin',
      en: 'Old Money Executive Suit & Tuxedo',
    },
    category: 'preppy',
    gender: 'male',
    description: {
      es: 'Traje de sastre azul marino con corbata de seda, pañuelo de bolsillo y zapatos pulidos.',
      en: 'Tailored navy blue suit with silk tie, pocket square, and polished dress shoes.',
    },
    shirtId: '4928173910',
    pantsId: '4928175402',
    tags: ['preppy', 'elegante', 'traje', 'esmoquin', 'chico', 'billonario'],
  },
  {
    id: 'preppy-luxury-dress',
    name: {
      es: 'Vestido de Gala Elegante Dorado',
      en: 'Luxury Golden Gala Evening Dress',
    },
    category: 'preppy',
    gender: 'female',
    description: {
      es: 'Vestido largo de fiesta brillante con detalles dorados, collar de perlas y tacones de lujo.',
      en: 'Floor-length shimmering evening dress with gold accents and luxury heels.',
    },
    shirtId: '7928174019',
    pantsId: '7928176391',
    hairId: '6382910481',
    tags: ['preppy', 'gala', 'vestido', 'elegante', 'chica', 'fiesta'],
  },
  {
    id: 'preppy-school-rich-boy',
    name: {
      es: 'Chaleco Universitario Ivy League',
      en: 'Ivy League Sweater Vest & Polo',
    },
    category: 'preppy',
    gender: 'male',
    description: {
      es: 'Chaleco de punto trenzado blanco con camisa de cuello abotonado y pantalones beige.',
      en: 'Cable-knit white sweater vest layered over collared polo and pleated beige slacks.',
    },
    shirtId: '8291048201',
    pantsId: '8291049712',
    tags: ['preppy', 'colegio', 'universidad', 'old money', 'chico'],
  },
];
