import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import css from './layout.module.css';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <Navbar />
      </header>
      <Suspense>
        <main>
        <Outlet />
      </main>
      </Suspense>
      
    </div>
  );
};