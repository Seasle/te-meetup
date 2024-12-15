import { type FC, type CSSProperties } from 'react';
import { NavLink } from 'react-router';

import { routes } from '../constants/routes';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    margin: 0,
    padding: 0,
  },

  listItem: {
    margin: 16,
    listStyle: 'none',
  },

  link: {
    width: 'fit-content',
    padding: '8px 16px',
    borderRadius: 6,
    fontSize: 24,
    display: 'block',
    textDecoration: 'none',
    backgroundColor: '#f5f5f5',
    color: '#000000',
    boxShadow: '0 1px 2px rgb(0 0 0 / 15%), 0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 5%)',
  },
} satisfies Record<string, CSSProperties>;

export const App: FC = () => (
  <div style={styles.container}>
    <ul style={styles.list}>
      {routes.map((route) => (
        <li style={styles.listItem} key={route.path}>
          <NavLink style={styles.link} to={route.path}>
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
