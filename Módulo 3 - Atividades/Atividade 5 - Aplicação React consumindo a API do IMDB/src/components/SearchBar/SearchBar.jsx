import './SearchBar.css'

function SearchBar() {

  return (
    <>
      <div className='search-container'>
          <div className='input-group'>
            <div className='input-icon'>
              <button className='btn-submit' type='submit'>
                <img className="img-search" src="../../../public/img/lupa.png" alt="Icone de uma lupa" />
              </button>
            </div>

            <input
            className="search-input"
            type="text" name="search"
            id="search"
            placeholder="Pesquise um filme" 
            />
          </div>
      </div>
    </>
  )
}

export default SearchBar
