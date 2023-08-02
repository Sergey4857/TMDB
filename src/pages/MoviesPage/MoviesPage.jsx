import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './MoviesPage.module.css';
import FetchByQuery from 'Api/FetchByQuery';
import MoviesList from 'components/MovieList/MoviesList';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import Spinner from 'Spinner/Spinner';
const MoviesPage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
    FetchByQuery(searchParams, setResults, setIsLoading, setError);
  }, [searchParams]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Oops..Somesing went wrong...</p>}
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
      {results && (
        <MoviesList>
          <MoviesItem results={results} />
        </MoviesList>
      )}
    </>
  );
};
export default MoviesPage;
