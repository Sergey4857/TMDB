import axios from 'axios';

const FetchCastById = async (setData, id, setIsLoading, setError) => {
  try {
    const key = 'daba956501188a86dba8a49778238f6d';
    setIsLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
    );
    setIsLoading(false);
    setData(response.data.cast.slice(0, 15));
  } catch (error) {
    setError(error);
  }
};
export default FetchCastById;
