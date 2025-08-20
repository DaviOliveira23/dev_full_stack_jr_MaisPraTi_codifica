import { useEffect, useState } from 'react';
import notImage from '../../assets/img/no-image.jpg';
import IsFavorite from '../isFavorite/isFavorite';
import './Card.css';

const Card = ({ movies, searchInput, onShowDetails }) => {
    const [favoritos, setFavoritos] = useState(() => {
        const stored = localStorage.getItem('favoritos');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);
    
    return (
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
                            <img
                                className="poster"
                                src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : notImage}
                                alt={movie.Title}
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = notImage;
                                }}
                            />
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
    );
};

export default Card;