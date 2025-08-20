import { useState } from 'react';
import './SearchBar.css';
import lupa from '../../assets/img/lupa.png';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className='search-container'>
      <form className='input-group' onSubmit={handleSubmit}>
        <div className='input-icon'>
          <button className='btn-submit' type="submit">
            <img
              className="img-search"
              src={lupa}
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
    </div>
  );
}

export default SearchBar;
