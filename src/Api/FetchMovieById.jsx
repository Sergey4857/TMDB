import axios from 'axios';

const FetchMovieById = async (setData, id, setError, setIsLoading) => {
  try {
    const key = 'daba956501188a86dba8a49778238f6d';
    setIsLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
    );
    setData(response.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
  }
};

export default FetchMovieById;
