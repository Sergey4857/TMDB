import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect, useRef } from 'react';
import SearchImages from 'components/SearchImages/SearchImages';
import { Blocks } from 'react-loader-spinner';
import Modal from 'components/Modal/Modal';
import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageTegs, setSelectedImageTags] = useState('');
  const prevQueryRef = useRef('');

  const onButtonSubmitClick = (e, query) => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.success('Enter the name of the picture');
    }
    if (prevQueryRef.current === query) {
      return toast.success(
        `You have already entered: ${query}. Enter another request`
      );
    }

    prevQueryRef.current = query;

    setQuery(query);
    setIsLoading(true);
    setResults([]);
    setPage(1);
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const onImageClick = (largeImageURL, tags) => {
    setActive(true);
    setSelectedImage(largeImageURL);
    setSelectedImageTags(tags);
  };

  useEffect(() => {
    if (query !== '') {
      SearchImages({
        query,
        page,
        perPage,
        setData,
        setResults,
        setIsLoading,
        setError,
        setPerPage,
        error,
      });
    }
  }, [error, page, perPage, query]);

  const closeModal = () => {
    setActive(false);
  };

  const totalPage = data.totalHits / perPage;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <Searchbar onSubmit={onButtonSubmitClick} />
      {isLoading && (
        <div className={css.blocksWrapper}>
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {results.length > 0 && (
        <ImageGallery results={results} onClick={onImageClick} />
      )}
      {!isLoading && totalPage > page && results.length > 0 && (
        <Button onClick={onLoadMoreClick} />
      )}
      {active && (
        <Modal
          closeModal={closeModal}
          selectedImage={selectedImage}
          selectedImageTegs={selectedImageTegs}
        />
      )}
    </>
  );
}
