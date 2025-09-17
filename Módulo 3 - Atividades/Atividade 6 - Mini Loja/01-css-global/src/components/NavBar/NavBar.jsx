import './Navbar.css';

function Navbar({ theme, toggleTheme, cartCount }) {
    return (
        <nav className="header">
            <div className="container">
                <div className="logo">Mini Loja</div>

                <button
                    onClick={toggleTheme}
                    className="btn btn--ghost theme-toggle"
                    aria-label="Alternar tema"
                >
                    {theme === "light" ? "🌞" : "🌙"}
                </button>

                <div className="cart-badge" aria-label="Carrinho">
                    🛒 <span className="badge">{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
