import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ results, onClick }) {
  return (
    <ul className={css.ImageGallery}>
      {results.map(({ webformatURL, tags, largeImageURL, id }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          tags={tags}
          onImageClick={() => {
            onClick(largeImageURL, tags);
          }}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
