import ContactPage from '../pages/Contact';
import AboutPage from '../pages/About';
import HomePage from '../pages/Home';

export const ROUTES = {
  home: '/',
  quiSommesNous: '/qui-sommes-nous',
  contact: '/contact',
};

export const routeMap = {
  [ROUTES.home]: HomePage,
  [ROUTES.quiSommesNous]: AboutPage,
  [ROUTES.contact]: ContactPage,
};

export const normalizePathname = (pathname) => {
  if (!pathname || pathname === '/') {
    return ROUTES.home;
  }

  const normalized = pathname.replace(/\/+$/, '');
  return normalized === '' ? ROUTES.home : normalized;
};

export const resolveRoute = (pathname) => {
  const normalizedPath = normalizePathname(pathname);
  return routeMap[normalizedPath] ?? routeMap[ROUTES.home];
};
