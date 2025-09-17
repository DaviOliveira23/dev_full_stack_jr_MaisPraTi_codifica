import styles from './Navbar.module.css';

function Navbar({ theme, toggleTheme, cartCount }) {
    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Mini Loja</div>

                <button
                    onClick={toggleTheme}
                    className={`${styles.btn} ${styles.ghost} ${styles.themeToggle}`}
                    aria-label="Alternar tema"
                >
                    {theme === "light" ? "🌞" : "🌙"}
                </button>

                <div aria-label="Carrinho">
                    🛒 <span className={styles.badge}>{cartCount}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
