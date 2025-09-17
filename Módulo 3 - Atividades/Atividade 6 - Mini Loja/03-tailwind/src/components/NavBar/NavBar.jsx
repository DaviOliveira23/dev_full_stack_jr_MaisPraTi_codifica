function Navbar({ theme, toggleTheme, cartCount }) {
    return (
        <nav className="sticky top-0 z-50 bg-bg border-b border-border shadow">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="font-bold text-xl text-primary">Mini Loja</div>

                <button
                    onClick={toggleTheme}
                    className="px-3 py-1 rounded-md text-text hover:bg-border transition"
                    aria-label="Alternar tema"
                >
                    {theme === "light" ? "🌞" : "🌙"}
                </button>

                <div aria-label="Carrinho" className="flex items-center gap-1">
                    🛒{" "}
                    <span className="inline-flex items-center justify-center min-w-[1.5rem] min-h-[1.5rem] p-1 bg-primary text-white rounded-full text-xs">
                        {cartCount}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
