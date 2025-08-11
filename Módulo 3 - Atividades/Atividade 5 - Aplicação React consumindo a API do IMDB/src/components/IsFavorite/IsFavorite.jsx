import './IsFavorite.css';
import { FaStar } from "react-icons/fa";

const IsFavorite = ({ movie, favoritos, setFavoritos }) => {
    const addFavorite = (movie) => {
        setFavoritos((prev) => {
            if(!movie || prev.some((fav) => fav.imdbID === movie.imdbID)) return prev;
            return [...prev, movie];
        })
    }

    const removeFavorite = (movieId) => {
        console.log('Removido')
        setFavoritos((prev) => prev.filter((fav) => fav.imdbID !== movieId));
    };

    const isFavorito = favoritos.some((fav) => fav.imdbID === movie.imdbID);

    if (!movie) return null;

    return (
        <div className='isFavorite'>
            {!isFavorito ? (
                <button
                    className='btn-unfavorite btn-star'
                    onClick={() => addFavorite(movie)}>
                    <FaStar className='icon-favorite' />
                </button>
            ) : isFavorito ? (
                <button
                    className='btn-favorite btn-star'
                    onClick={() => removeFavorite(movie.imdbID)}>
                    <FaStar className='icon-unfavorite' />
                </button>
            ) : null }
        </div>
    );
};

export default IsFavorite;