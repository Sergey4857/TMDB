import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);
  function onHandleChange(e) {
    setQuery(e.currentTarget.value);
  }

  // useEffect(() => {
  //   const Fetch = async () => {
  //     try {
  //       const key = 'daba956501188a86dba8a49778238f6d';
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/search/movie?query=${}&api_key=${key}`
  //       );

  //       console.log(response.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   Fetch();
  // }, [setSearchParams]);

  function onSubmit(e) {
    e.preventDefault();
    setSearchParams(query);
  }

  return (
    <form>
      <input onChange={onHandleChange}></input>
      <button onSubmit={onSubmit} type="submit">
        Search
      </button>
    </form>
  );
};
export default MoviesPage;
