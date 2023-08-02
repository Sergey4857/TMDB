import axios from 'axios';

const FetchTrendingFilms = async (setResults, setIsLoading, setError) => {
  try {
    const key = 'daba956501188a86dba8a49778238f6d';
    setIsLoading(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
    );
    setResults(response.data.results);
    setIsLoading(false);
  } catch (error) {
    setError(error);
  }
};

export default FetchTrendingFilms;
