import { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import FetchReviewsById from 'Api/FetchReviewsById';
import Spinner from 'Spinner/Spinner';

type Data = {
  id: string;
  author: string;
  content: string;
};

const Reviews: FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    FetchReviewsById(setData, id, setIsLoading, setError);
  }, [id]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>Oops..Somesing went wrong...</p>}
      <ul className={css.list}>
        {data.length > 0 ? (
          data.map(({ id, author, content }) => (
            <li className={css.item} key={id}>
              <h2 className={css.author}>{author}</h2>
              <p className={css.text}>{content}</p>
            </li>
          ))
        ) : (
          <p className={css.alarm}>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
};
export default Reviews;
