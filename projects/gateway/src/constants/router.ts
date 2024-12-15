import { createHashRouter } from 'react-router';
import { routes } from './routes';

import { App } from '../components/App';
import { Demo } from '../components/Demo';

export const router = createHashRouter([
  {
    path: '/',
    Component: App,
  },
  ...routes.map((route) => ({
    path: route.path,
    Component: Demo,
  })),
]);
