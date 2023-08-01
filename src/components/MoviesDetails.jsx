import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

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
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=credits,reviews`
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
    <>
      <Link to={pathLocation.current}>Go back</Link>
      <img src={poster_path ? `${IMG_URL}w342${poster_path}` : ''} alt=""></img>
      <h1>
        {title}({release_date && release_date.slice(0, 4)})
      </h1>
      <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
      <h2>Owerview</h2>
      <p>{overview}</p>
      <h2>Genres: </h2>
      <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>is loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetails;
