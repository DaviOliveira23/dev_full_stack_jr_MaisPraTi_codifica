import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import Profile from "../../components/Profile/Profile";
import { useMovies } from "../../components/useMovies/useMovies";

const Home = () => {
    const [searchInput, setSearchInput] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const { movies, totalPages, error, loading } = useMovies(
        searchInput,
        currentPage
    );

    useEffect(() => {
        if (searchInput) setCurrentPage(1);
    }, [searchInput]);

    return (
        <div className="home">
            <SearchBar onSearch={(query) => setSearchInput(query)} />

            <div className="movies_container">
                {loading && <p>Carregando...</p>}
                {error && <p style={{ color: "red" }}>Erro: {error}</p>}

                {selectedMovie ? (
                    <Profile movieId={selectedMovie} onBack={() => setSelectedMovie(null)} />
                ) : (
                    <>
                        <Card
                            movies={movies}
                            searchInput={searchInput}
                            onShowDetails={(id) => setSelectedMovie(id)}
                        />
                        {totalPages > 1 && (
                            <PageNavigation
                                currentPage={currentPage}
                                totalPages={totalPages}
                                setCurrentPage={setCurrentPage}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
