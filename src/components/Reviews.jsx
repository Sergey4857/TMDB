import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
      <ul>
        {data &&
          data.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Reviews;
