import { toast } from 'react-toastify';
import axios from 'axios';

const FetchByQuery = async (
  searchParams: URLSearchParams,
  setResults: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const query = searchParams.get('query');

    const key = 'daba956501188a86dba8a49778238f6d';

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${
        query ? query : ''
      }&api_key=${key}`
    );
    if (query && response.data.results.length === 0) {
      setIsLoading(false);
      return toast.success(
        `Movies with this title "${query}" not found, please enter another movie`
      );
    }
    setIsLoading(false);
    setResults(response.data.results);
  } catch (error) {
    setError(error);
  }
};

export default FetchByQuery;
