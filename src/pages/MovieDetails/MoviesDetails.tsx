import { FC, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import FetchMovieById from 'Api/FetchMovieById';
import { BsFilm } from 'react-icons/bs';
import css from './MoviesDetails.module.css';
import Spinner from 'Spinner/Spinner';

const MoviesDetails: FC = () => {
  interface MovieData {
    title: string;
    poster_path: string | null;
    release_date: string | null;
    vote_average: number | null;
    overview: string | null;
    genres: Genres[];
  }

  interface Genres {
    name: string;
  }

  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [data, setData] = useState<MovieData | null>(null);

  const IMG_URL = 'https://image.tmdb.org/t/p/';

  useEffect(() => {
    FetchMovieById(setData, id, setError, setIsLoading);
  }, [id]);

  const { title, poster_path, release_date, vote_average, overview, genres } =
    data || {};

  const pathLocation = useRef<string>(location.state?.from ?? '/');

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Oops..Somesing went wrong...</p>}
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
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MoviesDetails;
