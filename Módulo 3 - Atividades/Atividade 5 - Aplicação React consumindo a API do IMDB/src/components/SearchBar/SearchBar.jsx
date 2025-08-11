import { useState } from 'react';
import './SearchBar.css';
import FetchGet from '../Axios/Axios';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  return (
    <div className='search-container'>
      <form className='input-group' onSubmit={handleSubmit}>
        <div className='input-icon'>
          <button
            className='btn-submit'
            type="submit"
          >
            <img
              className="img-search"
              src="/img/lupa.png"
              alt="Icone de uma lupa"
            />
          </button>
        </div>

        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Pesquise um filme"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <FetchGet searchInput={submittedQuery} />
    </div>
  );
}

export default SearchBar;
