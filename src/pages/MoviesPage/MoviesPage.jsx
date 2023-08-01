import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from '../../defaultImage.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './MoviesPage.module.css';

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
    if (input === '') {
      return toast.success('Enter the name of the film');
    }
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
        if (query && response.data.results.length === 0) {
          return toast.success(
            `Movies with this title "${query}" not found, please enter another movie`
          );
        }
        setResults(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    Fetch();
  }, [searchParams]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className={css.form}>
        <input
          className={css.input}
          type="text"
          onChange={onHandleChange}
        ></input>
        <button className={css.button} onClick={onSubmit}>
          Search
        </button>
      </form>
      <ul className={css.list}>
        {results &&
          results.map(({ id, original_title, poster_path }) => (
            <Link key={id} to={`${id}`} state={{ from: location }}>
              <li className={css.item}>
                <img
                  className={css.picture}
                  src={
                    poster_path ? `${IMG_URL}w342${poster_path}` : defaultImage
                  }
                  alt="#"
                ></img>
                <p className={css.text}>{original_title}</p>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};
export default MoviesPage;
