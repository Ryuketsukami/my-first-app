import { useEffect, useContext} from 'react';
import {MoonIcon} from "../icons/moon-icon";
import {SunIcon} from "../icons/sun-icon";
import {ThemeContext} from "../providers/theme-provider";

export function ModeToggleButton() {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark', JSON.stringify(true));
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('dark');
        }
    }, [darkMode]);

    return (
        <button
            className=" pr-4 pl-4 bg-neutral-100 dark:bg-neutral-950 rounded-2xl md:mt-2 md:mb-1 lg:mb-2 lg:mt-2"
            onClick={() => toggleDarkMode()}>
            {
                darkMode ? <MoonIcon /> : <SunIcon />
            }
        </button>
    )
}

