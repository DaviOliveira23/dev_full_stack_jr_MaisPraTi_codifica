import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return { theme, setTheme };
};
