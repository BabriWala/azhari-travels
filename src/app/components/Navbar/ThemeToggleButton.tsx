"use client"
import { useState, useEffect } from 'react';
// import { SunIcon, MoonIcon } from '@heroicons/react/outline';

const ThemeToggleButton: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (theme === 'dark' || (!theme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            {/* {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />} */}
        </button>
    );
};

export default ThemeToggleButton;
