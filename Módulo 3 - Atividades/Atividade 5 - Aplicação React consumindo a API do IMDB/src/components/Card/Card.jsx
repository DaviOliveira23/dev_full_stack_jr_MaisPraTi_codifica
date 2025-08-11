import './Card.css';

const Card = ({ movies, searchInput, onShowDetails }) => {

    return (
        <div>
            <ul className='card-container'>
                {movies.length > 0 || !searchInput? (
                    movies.map((movie) => (
                        <li key={movie.imdbID} className='card-movie' onClick={() => onShowDetails(movie.imdbID)}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <p className='title'>{movie.Title}</p>
                            <p className='ano'>{movie.Year}</p>
                            <button
                                className='btn-details'
                                onClick={() => onShowDetails(movie.imdbID)}
                            >
                                Ver detalhes
                            </button>
                        </li>
                    ))
                ) : (
                    <p>Nenhum filme encontrado.</p>
                )}
            </ul>
        </div>
    );
};

export default Card;