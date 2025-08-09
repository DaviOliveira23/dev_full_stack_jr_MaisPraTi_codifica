// Importação dos hooks useState e useEffect do React
import { useEffect, useState } from 'react';

const FetchGet = () => {
    // Estado para armazenar os dados dos usuários
    const [movies, setMovies] = useState([]);
    // Estado para armazenar qualquer erro que ocorrer durante a requisição
    const [error, setError] = useState(null);
    // Estado para indicar se os dados estão sendo carregados
    const [loading, setLoading] = useState(true);

    // Função assíncrona para buscar os usuários
    const getmovies = async () => {
        try {
            // Realiza a requisição GET para obter os usuários usando fetch
            const response = await fetch("http://www.omdbapi.com/?apikey=31f23909&s=Hogwarts");
            
            // Verifica se a resposta não foi bem-sucedida
            if (!response.ok) {
                // Lança um erro caso a resposta não seja ok
                throw new Error('Falha na requisição.');
            }
            
            // Converte a resposta em formato JSON
            const data = await response.json();

            if (data.Response === "True") {
                setMovies(data.Search); // Guarda apenas a lista de filmes
            } else {
                setMovies([]); // Nenhum filme encontrado
            }
            
            // Após os dados serem carregados, define 'loading' como false
            setLoading(false);
        } catch (err) {
            // Se ocorrer um erro, define a mensagem de erro no estado
            setError('Erro ao carregar filmes: ' + err.message);
            // Define 'loading' como false após o erro
            setLoading(false);
        }
    };

    // useEffect para chamar getmovies quando o componente for montado
    useEffect(() => {
        getmovies();
    }, []); // O array vazio significa que o efeito será executado apenas uma vez, quando o componente for montado

    return (
        <div>
            {/* Exibe uma mensagem de carregamento enquanto os dados estão sendo obtidos */}
            {loading && <p>Carregando...</p>}

            {/* Exibe uma mensagem de erro, caso ocorra algum problema durante a requisição */}
            {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

            {/* Exibe a lista de usuários, caso os dados sejam carregados com sucesso */}
            <ul>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <li className='card-movie'>
                            <img src={movie.Poster} alt="Imagem do filme exibido"/>
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