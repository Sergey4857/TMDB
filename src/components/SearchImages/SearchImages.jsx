const SearchImages = ({
  query,
  page,
  perPage,
  setData,
  setIsLoading,
  setError,
  setResults,
  error,
}) => {
  const key = '36908542-f1d7c98c12dc13d61a0b80cf6';

  const baseURL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  fetch(baseURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нету данных по запросу`));
    })
    .then(info => {
      return (
        setData(info),
        setResults(prevResults => [...prevResults, ...info.hits]),
        setIsLoading(false)
      );
    })
    .catch(error => setError(error));
};

export default SearchImages;
