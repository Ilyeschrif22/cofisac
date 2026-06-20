import { useEffect, useState } from 'react';
import { resolveRoute } from './routes';

const getCurrentPath = () => {
  if (typeof window === 'undefined') {
    return '/';
  }

  return window.location.pathname;
};

const AppRouter = () => {
  const [CurrentPage, setCurrentPage] = useState(() => resolveRoute(getCurrentPath()));

  useEffect(() => {
    const updateRoute = () => {
      setCurrentPage(() => resolveRoute(getCurrentPath()));
    };

    window.addEventListener('popstate', updateRoute);

    return () => {
      window.removeEventListener('popstate', updateRoute);
    };
  }, []);

  return <CurrentPage />;
};

export default AppRouter;
