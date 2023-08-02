import { Link } from 'react-router-dom';
import defaultImage from '../../defaultImage.jpg';
import css from './MoviesItem.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
const MoviesItem = ({ results }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/';
  const location = useLocation();
  return (
    <>
      {results &&
        results.map(({ id, original_title, poster_path }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
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
    </>
  );
};
export default MoviesItem;

MoviesItem.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
