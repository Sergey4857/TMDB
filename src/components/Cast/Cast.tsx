import { FC, useEffect, useState } from 'react';
import FetchCastById from 'Api/FetchCastById';
import defaultImage from '../../defaultImage.jpg';
import css from '../Cast/Cast.module.css';
import Spinner from 'Spinner/Spinner';
import { useParams } from 'react-router-dom';

const Cast: FC = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/';
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    FetchCastById(setData, id, setIsLoading, setError);
  }, [id]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Oops..Somesing went wrong...</p>}
      <ul className={css.list}>
        {data.map(({ id, character, name, profile_path }) => (
          <li className={css.item} key={id}>
            <img
              src={
                profile_path ? `${IMG_URL}w342${profile_path}` : defaultImage
              }
              alt="#"
            ></img>
            <p className={css.name}>{name}</p>
            <p className={css.character}>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
