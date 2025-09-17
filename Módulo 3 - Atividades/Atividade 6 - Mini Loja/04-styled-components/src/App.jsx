import { useEffect, useState } from 'react';
import { ThemeProvider } from "styled-components";
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ProductCard from "./components/ProductCard/ProductCard";
import Skeleton from "./components/Skeleton/Skeleton";
import products from "./data";
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from "./styles/globals";
import { darkTheme, lightTheme } from "./tokens";

function App() {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={0} />

      <main className="container">
        <div className="grid-products">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
    </ThemeProvider>
  );
}


export default App;
