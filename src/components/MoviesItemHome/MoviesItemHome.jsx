import { Link } from 'react-router-dom';
import defaultImage from '../../defaultImage.jpg';
import css from './MoviesItemHome.module.css';
import PropTypes from 'prop-types';

const MoviesItemHome = ({ results, location }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/';

  return (
    <>
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
    </>
  );
};
export default MoviesItemHome;

MoviesItemHome.propTypes = {
  results: PropTypes.array,
  location: PropTypes.object.isRequired,
};
