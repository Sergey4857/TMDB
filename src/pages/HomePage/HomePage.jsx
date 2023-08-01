import { lazy } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import css from './HomePage.module.css';
const MovieItem = lazy(() => import('../../components/MoviesItem/MovieItem'));

const HomePage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const Fetch = async () => {
      try {
        const key = 'daba956501188a86dba8a49778238f6d';
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
        );
        setResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    Fetch();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today:</h1>
      <ul className={css.list}>
        <MovieItem results={results} />
      </ul>
    </div>
  );
};
export default HomePage;
