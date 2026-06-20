import ContactPage from '../pages/Contact';
import HomePage from '../pages/Home';

export const ROUTES = {
  home: '/',
  contact: '/contact',
};

export const routeMap = {
  [ROUTES.home]: HomePage,
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
