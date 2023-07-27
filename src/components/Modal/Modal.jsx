import css from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({
  closeModal,
  selectedImage,
  selectedImageTegs,
}) {
  useEffect(() => {
    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onEscClick(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  const onOverlayClick = e => {
    if (e.target.id === 'block') {
      closeModal();
    }
  };

  return (
    <div id="block" onClick={onOverlayClick} className={css.overlay}>
      <div className={css.modal}>
        <img src={selectedImage} alt={selectedImageTegs} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired,
  selectedImageTegs: PropTypes.string.isRequired,
};
