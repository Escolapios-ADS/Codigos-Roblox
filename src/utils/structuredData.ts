import type { GameItem } from '../types/game';
import type { GuideItem } from '../types/guide';

export const SITE_URL = 'https://codigosroblox.org';

export const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Códigos Roblox',
  alternateName: 'Roblox Codes',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/favicon.svg`,
    caption: 'Códigos Roblox',
    inLanguage: 'es'
  },
  image: `${SITE_URL}/favicon.svg`,
  email: 'clickerhunters@gmail.com',
  sameAs: [
    'https://github.com/Escolapios-ADS/Codigos-Roblox',
    'https://twitter.com/codigosroblox'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'clickerhunters@gmail.com',
    availableLanguage: ['es', 'en']
  }
};

export function getWebsiteSchema(locale: 'es' | 'en') {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: locale === 'es' ? 'Códigos Roblox' : 'Roblox Codes',
    alternateName: [
      locale === 'es' ? 'Códigos Roblox 2026' : 'Roblox Codes 2026',
      'CódigosRoblox.org'
    ],
    description: locale === 'es'
      ? 'Base de datos de códigos actualizados para juegos de Roblox, guías y herramientas en 2026.'
      : 'Updated database of Roblox promo codes, guides, and tools in 2026.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: locale === 'es' ? 'es-ES' : 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/${locale}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getWebPageSchema(params: {
  canonicalUrl: string;
  title: string;
  description: string;
  locale: 'es' | 'en';
  pageType?: string;
}) {
  return {
    '@type': params.pageType || 'WebPage',
    '@id': `${params.canonicalUrl}#webpage`,
    url: params.canonicalUrl,
    name: params.title,
    description: params.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: params.locale === 'es' ? 'es-ES' : 'en-US',
    breadcrumb: { '@id': `${params.canonicalUrl}#breadcrumb` },
    dateModified: '2026-03-23'
  };
}

export function buildGameSchema(game: GameItem, locale: 'es' | 'en', canonicalUrl: string) {
  const activeCodes = game.activeCodes || [];
  const homeTitle = locale === 'es' ? 'Inicio' : 'Home';
  const gamesTitle = locale === 'es' ? 'Códigos de Juegos' : 'Game Codes';

  const schemaItems: any[] = [
    {
      '@type': 'VideoGame',
      '@id': `${canonicalUrl}#game`,
      name: game.title,
      description: game.metaDescription[locale],
      genre: game.categoryLabel[locale],
      gamePlatform: ['PC', 'macOS', 'iOS', 'Android', 'Xbox One', 'PlayStation 4', 'PlayStation 5'],
      operatingSystem: 'Windows, macOS, Android, iOS, Xbox, PlayStation',
      applicationCategory: 'Game',
      publisher: {
        '@type': 'Organization',
        name: 'Roblox Corporation',
        url: 'https://www.roblox.com'
      },
      author: {
        '@type': 'Organization',
        name: game.developer || 'Roblox Community'
      },
      url: game.robloxUrl,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeTitle,
          item: `${SITE_URL}/${locale}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: gamesTitle,
          item: `${SITE_URL}/${locale}/#juegos`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: game.title,
          item: canonicalUrl
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: (game.faqs?.[locale] || []).map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#codes`,
      name: locale === 'es' ? `Lista de Códigos de ${game.title} (2026)` : `${game.title} Active Codes List (2026)`,
      description: locale === 'es' ? `Códigos activos y recompensas gratuitas verificadas para ${game.title}` : `Active promo codes and verified rewards for ${game.title}`,
      numberOfItems: activeCodes.length,
      itemListElement: activeCodes.map((code, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: code.code,
        description: code.reward[locale]
      }))
    }
  ];

  if (game.howToRedeem?.[locale]?.steps?.length) {
    schemaItems.push({
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto`,
      name: game.howToRedeem[locale].title,
      step: game.howToRedeem[locale].steps.map((stepText, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        text: stepText
      }))
    });
  }

  return schemaItems;
}

export function buildGuideSchema(guide: GuideItem, locale: 'es' | 'en', canonicalUrl: string) {
  const homeTitle = locale === 'es' ? 'Inicio' : 'Home';
  const guidesTitle = locale === 'es' ? 'Guías' : 'Guides';

  return [
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: guide.title[locale],
      description: guide.excerpt[locale],
      image: [`${SITE_URL}/favicon.svg`],
      datePublished: guide.publishedDate,
      dateModified: guide.updatedDate,
      inLanguage: locale === 'es' ? 'es-ES' : 'en-US',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      author: {
        '@type': 'Person',
        name: guide.author.name,
        jobTitle: guide.author.role[locale],
        url: `${SITE_URL}/${locale === 'es' ? 'es/sobre-nosotros' : 'en/about'}/`
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeTitle,
          item: `${SITE_URL}/${locale}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: guidesTitle,
          item: `${SITE_URL}/${locale}/guias/`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: guide.title[locale],
          item: canonicalUrl
        }
      ]
    }
  ];
}

export function buildGuidesIndexSchema(guides: GuideItem[], locale: 'es' | 'en', canonicalUrl: string) {
  const homeTitle = locale === 'es' ? 'Inicio' : 'Home';
  const guidesTitle = locale === 'es' ? 'Guías' : 'Guides';

  return [
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl}#collection`,
      name: locale === 'es' ? 'Guías y Tier Lists de Roblox (2026)' : 'Roblox Guides & Tier Lists (2026)',
      description: locale === 'es'
        ? 'Colección de tutoriales, tier lists y guías de optimización para los juegos más populares de Roblox.'
        : 'Collection of tutorials, tier lists, and optimization guides for the most popular Roblox games.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: guides.map((guide, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: guide.title[locale],
          url: `${SITE_URL}/${locale}/guias/${guide.slug}/`
        }))
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeTitle,
          item: `${SITE_URL}/${locale}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: guidesTitle,
          item: canonicalUrl
        }
      ]
    }
  ];
}

export function buildAboutPageSchema(locale: 'es' | 'en', canonicalUrl: string) {
  const homeTitle = locale === 'es' ? 'Inicio' : 'Home';
  const aboutTitle = locale === 'es' ? 'Sobre Nosotros' : 'About Us';

  return [
    {
      '@type': 'AboutPage',
      '@id': `${canonicalUrl}#about`,
      name: locale === 'es' ? 'Sobre Nosotros y Equipo Editorial' : 'About Us & Editorial Team',
      description: locale === 'es'
        ? 'Conoce al equipo editorial independiente de CódigosRoblox.org y nuestros estándares de verificación diaria de códigos.'
        : 'Meet the independent editorial team of CódigosRoblox.org and our daily code verification standards.',
      mainEntity: {
        '@id': `${SITE_URL}/#organization`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeTitle,
          item: `${SITE_URL}/${locale}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: aboutTitle,
          item: canonicalUrl
        }
      ]
    }
  ];
}

export function buildContactPageSchema(locale: 'es' | 'en', canonicalUrl: string) {
  const homeTitle = locale === 'es' ? 'Inicio' : 'Home';
  const contactTitle = locale === 'es' ? 'Contacto' : 'Contact';

  return [
    {
      '@type': 'ContactPage',
      '@id': `${canonicalUrl}#contact`,
      name: locale === 'es' ? 'Contacto y Soporte' : 'Contact & Support',
      description: locale === 'es'
        ? 'Canal directo para sugerir nuevos códigos de Roblox, reportar códigos caducados o consultas de colaboración.'
        : 'Direct channel to suggest new Roblox codes, report expired codes, or collaboration inquiries.',
      mainEntity: {
        '@id': `${SITE_URL}/#organization`
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeTitle,
          item: `${SITE_URL}/${locale}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: contactTitle,
          item: canonicalUrl
        }
      ]
    }
  ];
}

export function buildTermsPageSchema(locale: 'es' | 'en', canonicalUrl: string) {
  const homeTitle = locale === 'es' ? 'Inicio' : 'Home';
  const termsTitle = locale === 'es' ? 'Términos de Servicio' : 'Terms of Service';

  return [
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#terms`,
      name: locale === 'es' ? 'Términos de Servicio' : 'Terms of Service',
      description: locale === 'es'
        ? 'Términos y condiciones de uso del portal CódigosRoblox.org. Propiedad intelectual y exención de responsabilidad.'
        : 'Terms and conditions of use for CódigosRoblox.org. Intellectual property and liability disclaimer.',
      breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeTitle,
          item: `${SITE_URL}/${locale}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: termsTitle,
          item: canonicalUrl
        }
      ]
    }
  ];
}

export function buildHomePageSchema(games: GameItem[], locale: 'es' | 'en', canonicalUrl: string) {
  const isEs = locale === 'es';
  return [
    {
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto`,
      name: isEs ? '¿Cómo canjear códigos en Roblox?' : 'How to Redeem Roblox Promo Codes',
      description: isEs
        ? 'Guía paso a paso para canjear códigos promocionales y obtener recompensas gratuitas en Roblox.'
        : 'Step-by-step guide to redeem promo codes and claim free items in Roblox experiences.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: isEs ? 'Abre Roblox' : 'Launch Roblox',
          text: isEs
            ? 'Inicia sesión en Roblox y entra a la experiencia elegida o visita la web oficial roblox.com/redeem.'
            : 'Log into Roblox and open the chosen game or navigate to the official roblox.com/redeem portal.'
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: isEs ? 'Localiza el menú de códigos' : 'Find the Code Redemption Menu',
          text: isEs
            ? 'Busca el icono de Twitter (pájaro azul), rueda de engranaje de configuración o botón de Códigos en pantalla.'
            : 'Look for the Twitter bird icon, settings cog, or in-game Codes button on your screen.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: isEs ? 'Pega el código y canjea' : 'Paste Code and Redeem',
          text: isEs
            ? 'Copia cualquier código activo de CódigosRoblox.org, pégalo en el recuadro y pulsa Canjear para recibir la recompensa.'
            : 'Copy any active code from RobloxCodes.org, paste it into the box, and press Redeem to get your reward.'
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#featured-games`,
      name: isEs ? 'Juegos de Roblox Populares con Códigos Activos' : 'Popular Roblox Games with Active Codes',
      description: isEs
        ? 'Listado de juegos con mayor número de códigos activos y recompensas gratuitas actualizadas.'
        : 'Curated list of Roblox games with the highest number of active verified promo codes.',
      numberOfItems: games.length,
      itemListElement: games.map((game, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: game.title,
        url: `${SITE_URL}/${locale}/juego/${game.slug}/`
      }))
    }
  ];
}

export function buildUnifiedGraph(params: {
  canonicalUrl: string;
  title: string;
  description: string;
  locale: 'es' | 'en';
  pageType?: string;
  customSchema?: Record<string, any>;
}) {
  const { canonicalUrl, title, description, locale, pageType, customSchema } = params;

  // Base graph items
  const baseItems: any[] = [
    ORGANIZATION_SCHEMA,
    getWebsiteSchema(locale),
    getWebPageSchema({ canonicalUrl, title, description, locale, pageType })
  ];

  if (!customSchema) {
    return {
      '@context': 'https://schema.org',
      '@graph': baseItems
    };
  }

  // Extract custom items
  let customItems: any[] = [];
  if (Array.isArray(customSchema['@graph'])) {
    customItems = customSchema['@graph'];
  } else if (customSchema['@type']) {
    customItems = [customSchema];
  }

  // Filter out any duplicates if custom schema already provided Organization or WebSite
  const mergedItems = [...baseItems];

  for (const item of customItems) {
    if (!item || !item['@type']) continue;
    
    // If it's a BreadcrumbList, ensure it has the correct @id matching the WebPage breadcrumb reference
    if (item['@type'] === 'BreadcrumbList' && !item['@id']) {
      item['@id'] = `${canonicalUrl}#breadcrumb`;
    }

    // Avoid duplicating Organization or WebSite if present
    const isOrg = item['@type'] === 'Organization' || item['@id'] === `${SITE_URL}/#organization`;
    const isWebSite = item['@type'] === 'WebSite' || item['@id'] === `${SITE_URL}/#website`;

    if (isOrg || isWebSite) {
      continue;
    }

    mergedItems.push(item);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': mergedItems
  };
}
