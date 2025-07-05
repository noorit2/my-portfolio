'use client';
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function ThemeToggle() {
    const [currentTheme, setCurrentTheme] = useState(() => {
        if (typeof window === 'undefined') {
            return 'light'; // Default theme if not in a browser environment
        }
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    });

    useEffect(() => {
        // Apply the theme on initial load
        document.documentElement.classList.remove('light', 'dark');
        document.body.classList.toggle('dark', currentTheme === 'dark');
    }, [currentTheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.remove(currentTheme);
        document.body.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        setCurrentTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-2 py-2 text-md text-primary-text rounded-[50%] bg-transparent border border-transparent hover:bg-surface-3/25 hover:border-white/25 hover:shadow-2xl"
            aria-label="Toggle theme"
        >
            {currentTheme === 'dark' ? <Moon className="w-4 h-4 " /> : <Sun className="w-4 h-4 " />}
        </button>
    );
}

export default ThemeToggle;