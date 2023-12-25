import {useState, createContext} from "react";

export const ThemeContext = createContext(null)

// Known issue: when reloading page, the mode goes normal first for a millisecond
export function ThemeProvider({children}) {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark')));

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const value = { darkMode, toggleDarkMode };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}