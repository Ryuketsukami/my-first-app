import { useState, useEffect } from 'react';
import {MoonIcon} from "../icons/moon-icon";
import {SunIcon} from "../icons/sun-icon";
export function ModeToggleButton() {
    const [darkMode, setDarkMode] = useState(false);

    // In the future we can add this to localMemory.
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            className=" pr-4 pl-4 bg-neutral-100 dark:bg-neutral-950 rounded-2xl md:mt-2 md:mb-1 lg:mb-2 lg:mt-2"
            onClick={() => setDarkMode(!darkMode)}>
            {
                darkMode ? <MoonIcon /> : <SunIcon />
            }
        </button>
    )
}

