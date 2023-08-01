import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MoviesPage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/';
  function onHandleChange(e) {
    setInput(e.currentTarget.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setSearchParams(input ? { query: input } : {});
  }

  useEffect(() => {
    const Fetch = async () => {
      try {
        const query = searchParams.get('query');
        const key = 'daba956501188a86dba8a49778238f6d';
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${
            query ? query : ''
          }&api_key=${key}`
        );

        setResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    Fetch();
  }, [searchParams]);

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
