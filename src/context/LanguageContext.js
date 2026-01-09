import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('portfolio-language');

        return saved || 'pt';
    });
    
    const updateLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('portfolio-language', newLanguage);
    };
    
    return (
        <LanguageContext.Provider 
            value={{ language, setLanguage: updateLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
