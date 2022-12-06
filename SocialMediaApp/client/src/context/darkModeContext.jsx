import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')) || false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    useEffect(() => {
        localStorage.setItem('darkmode', darkMode);
    }, [darkMode]);
    
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}