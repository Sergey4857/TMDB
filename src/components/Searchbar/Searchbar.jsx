import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <header className={css.Searchbar}>
      <a href="./index.html" className={css.searchLogo}>
        Pixabay
      </a>
      <form className={css.SearchForm}>
        <button
          type="submit"
          className={css.SearchFormButton}
          onClick={evt => {
            onSubmit(evt, query);
          }}
        >
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
