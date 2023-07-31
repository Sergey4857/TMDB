import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/';
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const Fetch = async () => {
      try {
        const key = 'daba956501188a86dba8a49778238f6d';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
        );
        setData(response.data.cast.slice(0, 15));
      } catch (error) {
        console.log(error);
      }
    };
    Fetch();
  }, [id]);

  return (
    <>
      <ul>
        {data.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img src={`${IMG_URL}w342${profile_path}`} alt="#"></img>
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
