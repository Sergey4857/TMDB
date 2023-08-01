import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { BsFilm } from 'react-icons/bs';
import css from './MoviesDetails.module.css';
const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [data, setData] = useState('');
  const IMG_URL = 'https://image.tmdb.org/t/p/';
  useEffect(() => {
    const Fetch = async () => {
      try {
        const key = 'daba956501188a86dba8a49778238f6d';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    Fetch();
  }, [id]);

  const { title, poster_path, release_date, vote_average, overview, genres } =
    data;

  const pathLocation = useRef(location.state?.from ?? '/');

  return (
    <div className={css.wrap}>
      <div className={css.block}>
        <div className={css.container}>
          <Link className={css.back} to={pathLocation.current}>
            <AiOutlineArrowLeft />
            Go back
            <BsFilm />
          </Link>

          <img
            className={css.image}
            src={poster_path ? `${IMG_URL}w342${poster_path}` : ''}
            alt={title}
          ></img>
        </div>
        <div className={css.box}>
          <h1 className={css.title}>
            {title}({release_date && release_date.slice(0, 4)})
          </h1>
          <p className={css.score}>
            User Score: {vote_average && Math.floor(vote_average * 10)}%
          </p>
          <h2 className={css.owerviewTitle}>Owerview</h2>
          <p className={css.owerview}>{overview}</p>
          <h2 className={css.genresTitle}>Genres: </h2>
          <p className={css.genres}>
            {genres && genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <div className={css.case}>
        <h2 className={css.Info}>Additional information</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.item}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>is loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MoviesDetails;
