import './Card.css';
import { useState, useEffect } from 'react';
import IsFavorite from '../isFavorite/isFavorite';

const Card = ({ movies, searchInput, onShowDetails }) => {
    const [favoritos, setFavoritos] = useState(() => {
        const stored = localStorage.getItem('favoritos');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);

    return (
        <div>
            <ul className='card-container'>
                {movies.length > 0 || !searchInput? (
                    movies.map((movie) => (
                        <li key={movie.imdbID} className='card-movie'>
                            <IsFavorite
                                key={movie.imdbID}
                                movie={movie}
                                favoritos={favoritos}
                                setFavoritos={setFavoritos}
                            />
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