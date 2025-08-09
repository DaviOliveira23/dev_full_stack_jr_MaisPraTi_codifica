import { useEffect, useState } from 'react';

const FetchGet = ({ searchInput }) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchInput) return;

        const getMovies = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=31f23909&s=${searchInput}`);
                if (!response.ok) throw new Error('Falha na requisição.');

                const data = await response.json();
                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [searchInput]);

    return (
        <div>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
            <ul>
                {movies.length > 0 || !searchInput?(
                    movies.map((movie) => (
                        <li key={movie.imdbID} className='card-movie'>
                            <img src={movie.Poster} alt={movie.Title} />
                            <p className='title'>{movie.Title}</p>
                        </li>
                    ))
                ) : (
                    <p>Nenhum filme encontrado.</p>
                )}
            </ul>
        </div>
    );
};


export default FetchGet;