import React, { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "english");

    return (
        <LangContext.Provider value={{ language, setLanguage }}>
            {children}
        </LangContext.Provider>
    );
};
