import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
const Reviews = () => {
  const [data, setData] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const Fetch = async () => {
      try {
        const key = 'daba956501188a86dba8a49778238f6d';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`
        );
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    Fetch();
  }, [id]);

  return (
    <>
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
