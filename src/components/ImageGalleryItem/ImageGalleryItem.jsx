import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({ src, tags, onImageClick }) {
  return (
    <li onClick={onImageClick} className={css.ImageGalleryItem}>
      <img className={css.Images} src={src} alt={tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
