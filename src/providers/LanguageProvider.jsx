import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
    
    const languageAsString = localStorage.getItem('language') ?? 'en';
    const [currentLanguage, setCurrentLanguage] = useState(languageAsString);
    
    useEffect(() => {
        if (currentLanguage === 'da') {
            /* document.body.classList.add('darkmode');
            document.body.classList.remove('lightmode'); */
        } else {
            /* document.body.classList.add('lightmode');
            document.body.classList.remove('darkmode'); */
        }
    }, [])
    
    return (
        <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
