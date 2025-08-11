import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import './Profile.css';

const Profile = ({ movieId, onBack }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=31f23909&i=${movieId}&plot=full`);
                if (!response.ok) throw new Error('Falha na requisição.');

                const data = await response.json();
                if (data.Response === "True") {
                    setMovie(data);
                } else {
                    setError("Filme não encontrado.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [movieId]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;
    if (!movie) return null;

    return (
        <div className="profile-container">
            <div className="info-group">
                <div className="poster-container">
                    <img className="img-poster" src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="info-movie">
                    <h1 className='title'><span>{movie.Title}</span></h1>
                    <p className='ano'><span>Ano:</span> {movie.Year}</p>
                    <p className='type'><span>Tipo:</span> {movie.Type}</p>
                    <p className="director"><span>Diretor:</span> {movie.Director}</p>
                    <p className="plot"><span>Plot:</span> {movie.Plot}</p>
                    <p className="cast"><span>Elenco:</span> {movie.Actors}</p>
                    <p className="rating"><span>Avaliação:</span> {movie.imdbRating}</p>
                    <p className="rating"><span>Genêro:</span> {movie.Genre}</p>
                    <p className="time"><span>Duração:</span> {movie.Runtime}</p>
                </div>
                <button className="btn-back" onClick={onBack}>
                    <FaArrowLeft className="arrow-icon"/>
                </button>
            </div>
        </div>
    );
};

export default Profile;
