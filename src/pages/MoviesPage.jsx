import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(location);

  const IMG_URL = 'https://image.tmdb.org/t/p/';
  function onHandleChange(e) {
    setQuery(e.currentTarget.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const Fetch = async () => {
      try {
        const key = 'daba956501188a86dba8a49778238f6d';
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`
        );

        console.log(response.data.results);
        setResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    setSearchParams({ query: query });

    Fetch();
  }

  return (
    <>
      <form>
        <input type="text" onChange={onHandleChange}></input>
        <button onClick={onSubmit}>Search</button>
      </form>
      <ul>
        {results &&
          results.map(({ id, original_title, poster_path }) => (
            <Link key={id} to={`${id}`} state={{ from: location }}>
              <li>
                <img src={`${IMG_URL}w342${poster_path}`} alt="#"></img>
                <p>{original_title}</p>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};
export default MoviesPage;
