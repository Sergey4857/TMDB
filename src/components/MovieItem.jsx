import { Link } from 'react-router-dom';

const IMG_URL = 'https://image.tmdb.org/t/p/';
const MovieItem = ({ results }) => {
  return results.map(({ poster_path, title, id }) => (
    <li key={id}>
      <Link to={`movies/${id}`}>
        <img src={poster_path ? `${IMG_URL}w342${poster_path}` : ''} alt="" />
        <p>{title}</p>
      </Link>
    </li>
  ));
};
export default MovieItem;
