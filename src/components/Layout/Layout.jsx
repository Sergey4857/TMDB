import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import logo from '../../logo.svg';
import Spinner from 'Spinner/Spinner';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <Link to="/">
            <img src={logo} alt="logo" width="150"></img>
          </Link>
          <ul className={css.headerList}>
            <li className={css.Item}>
              <Link className={css.Link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={css.Link} to="movies">
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
