import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import Card from "../../components/Card/Card";
import "./Favorites.css"

const Favorites = () => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("favoritos");
            setFavoritos(stored ? JSON.parse(stored) : []);
        } catch (e) {
            console.error("Erro ao carregar favoritos:", e);
            setFavoritos([]);
        }
    }, []);

    return (
        <div className="favoritos-page">
            <div className="nav-content">
            <h1 className="favorite-title">Meus Favoritos</h1>
            <Link to={"/"} className="btn-back">
                <FaArrowLeft className="arrow-icon"/>
            </Link>
            </div>
            {favoritos.length > 0 ? (
                <Card 
                    movies={favoritos} searchInput={"favoritos"} />
            ) : (
                <p>Nenhum favorito adicionado ainda.</p>
            )}
        </div>
    );
};

export default Favorites;
