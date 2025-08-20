import { useEffect, useState } from "react";

const API_KEY = "31f23909";

export function useMovies(searchInput, currentPage) {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchInput) return;

        const getMovies = async () => {
        setLoading(true);
        try {
            const response = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}&page=${currentPage}`
            );
            if (!response.ok) throw new Error("Falha na requisição.");

            const data = await response.json();
            if (data.Response === "True") {
            setMovies(data.Search);
            setTotalPages(data.totalResults);
            } else {
            setMovies([]);
            setTotalPages(0);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        getMovies();
    }, [searchInput, currentPage]);

    return { movies, totalPages, error, loading };
}
