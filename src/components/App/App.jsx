import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import { Route, Link, Routes } from 'react-router-dom';
export default function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link>
            <li to="/movies">Movies</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}
