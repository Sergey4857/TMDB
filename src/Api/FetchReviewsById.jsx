import axios from 'axios';
const FetchReviewsById = async (setData, id, setIsLoading, setError) => {
  try {
    const key = 'daba956501188a86dba8a49778238f6d';
    setIsLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`
    );
    setData(response.data.results);
    setIsLoading(false);
  } catch (error) {
    setError(error);
  }
};

export default FetchReviewsById;
