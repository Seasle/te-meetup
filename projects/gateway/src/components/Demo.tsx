import { useLocation } from 'react-router';

export const Demo = () => {
  const { pathname } = useLocation();
  const href = `./demo${pathname}/index.html`;

  return <iframe style={{ width: '100vw', height: '100vh', border: 'none' }} src={href}></iframe>;
};
