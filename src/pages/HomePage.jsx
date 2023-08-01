import { lazy } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const MovieItem = lazy(() => import('../components/MovieItem'));

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
    <>
      <h1>Trending today</h1>
      <ul>
        <MovieItem results={results} />
      </ul>
    </>
  );
};
export default HomePage;
