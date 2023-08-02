import { lazy } from 'react';
import { useEffect } from 'react';
import FetchTrendingFilms from 'Api/FetchTrendingFilms';
import { useState } from 'react';
import css from './HomePage.module.css';
import MoviesList from 'components/MovieList/MoviesList';
import Spinner from 'Spinner/Spinner';

const MoviesItem = lazy(() => import('../../components/MoviesItem/MoviesItem'));

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    FetchTrendingFilms(setResults, setIsLoading, setError);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Oops..Somesing went wrong...</p>}
      <div className={css.container}>
        <h1 className={css.title}>Trending today:</h1>_
        {results.length > 0 && (
          <MoviesList>
            <MoviesItem results={results} />
          </MoviesList>
        )}
      </div>
    </>
  );
};
export default HomePage;
