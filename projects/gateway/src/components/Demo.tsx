import { useLocation } from 'react-router';

import { routes } from '../constants/routes';

export const Demo = () => {
  const { pathname } = useLocation();
  const href = `./demo${pathname}/index.html`;

  const route = routes.find((route) => route.path === pathname);

  return (
    <>
      <title>{route?.name}</title>
      <iframe style={{ width: '100vw', height: '100vh', border: 'none' }} src={href}></iframe>
    </>
  );
};
