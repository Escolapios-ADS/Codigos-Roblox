export const SITE_URL = 'https://codigosroblox.org';

// Map of canonical Spanish routes to their English counterparts
export const ES_TO_EN_ROUTES: Record<string, string> = {
  '/es/': '/en/',
  '/es/sobre-nosotros/': '/en/about/',
  '/es/contacto/': '/en/contact/',
  '/es/terminos/': '/en/terms/',
  '/es/privacidad/': '/en/privacy/',
  '/es/aviso-legal/': '/en/legal-notice/',
  '/es/politica-de-cookies/': '/en/cookie-policy/',
  '/es/guias/': '/en/guias/',
  '/es/musica/': '/en/music/',
  '/es/quiz-frutas-blox-fruits/': '/en/blox-fruits-quiz/',
  '/es/tier-list-blox-fruits/': '/en/blox-fruits-tier-list/',
  '/es/calculadora-tradeos-blox-fruits/': '/en/blox-fruits-trade-calculator/',
  '/es/codigos-ropa-brookhaven/': '/en/brookhaven-outfit-codes/',
  '/es/objetos-gratis/': '/en/free-items/',
  '/es/generador-nombres-roblox/': '/en/roblox-username-generator/',
  '/es/errores-roblox/': '/en/roblox-error-codes/',
  '/es/optimizar-roblox-fps-lag/': '/en/roblox-fps-unlocker-lag-fix/',
  '/es/alertas-codigos-roblox/': '/en/roblox-code-alerts/',
  '/es/calculadora-robux-dinero-real/': '/en/robux-to-money-calculator/',
  '/es/generador-tarjeta-roblox/': '/en/roblox-profile-card/',
};

// Create reverse EN to ES mapping
export const EN_TO_ES_ROUTES: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN_ROUTES).map(([es, en]) => [en, es])
);

export function normalizePath(path: string): string {
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/')) path = path + '/';
  return path;
}

export function getSeoUrls(pathname: string, locale: 'es' | 'en', currentSlug?: string) {
  const normalizedPath = normalizePath(pathname);

  if (currentSlug) {
    const esPath = `/es/juego/${currentSlug}/`;
    const enPath = `/en/juego/${currentSlug}/`;
    const canonical = locale === 'es' ? `${SITE_URL}${esPath}` : `${SITE_URL}${enPath}`;
    return {
      canonicalUrl: canonical,
      esUrl: `${SITE_URL}${esPath}`,
      enUrl: `${SITE_URL}${enPath}`,
    };
  }

  // Dynamic guides: /es/guias/[slug]/ <-> /en/guias/[slug]/
  if (normalizedPath.startsWith('/es/guias/') && normalizedPath !== '/es/guias/') {
    const guideSlug = normalizedPath.replace('/es/guias/', '');
    const esPath = `/es/guias/${guideSlug}`;
    const enPath = `/en/guias/${guideSlug}`;
    return {
      canonicalUrl: `${SITE_URL}${esPath}`,
      esUrl: `${SITE_URL}${esPath}`,
      enUrl: `${SITE_URL}${enPath}`,
    };
  }
  if (normalizedPath.startsWith('/en/guias/') && normalizedPath !== '/en/guias/') {
    const guideSlug = normalizedPath.replace('/en/guias/', '');
    const esPath = `/es/guias/${guideSlug}`;
    const enPath = `/en/guias/${guideSlug}`;
    return {
      canonicalUrl: `${SITE_URL}${enPath}`,
      esUrl: `${SITE_URL}${esPath}`,
      enUrl: `${SITE_URL}${enPath}`,
    };
  }

  // Static mapped routes
  if (locale === 'es') {
    const esPath = normalizedPath;
    const enPath = ES_TO_EN_ROUTES[esPath] || esPath.replace('/es/', '/en/');
    return {
      canonicalUrl: `${SITE_URL}${esPath}`,
      esUrl: `${SITE_URL}${esPath}`,
      enUrl: `${SITE_URL}${enPath}`,
    };
  } else {
    const enPath = normalizedPath;
    const esPath = EN_TO_ES_ROUTES[enPath] || enPath.replace('/en/', '/es/');
    return {
      canonicalUrl: `${SITE_URL}${enPath}`,
      esUrl: `${SITE_URL}${esPath}`,
      enUrl: `${SITE_URL}${enPath}`,
    };
  }
}
