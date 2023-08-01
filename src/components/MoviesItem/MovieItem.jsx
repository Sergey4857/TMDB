import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesItem.module.css';
const IMG_URL = 'https://image.tmdb.org/t/p/';
const MovieItem = ({ results }) => {
  return results.map(
    ({ poster_path, original_name, id, original_title, title }) => (
      <li className={css.item} key={id}>
        <Link to={`movies/${id}`}>
          <img src={poster_path ? `${IMG_URL}w342${poster_path}` : ''} alt="" />
          <p className={css.text}>{original_name ?? original_title ?? title}</p>
        </Link>
      </li>
    )
  );
};
export default MovieItem;

MovieItem.propTypes = {
  results: PropTypes.array.isRequired,
};
