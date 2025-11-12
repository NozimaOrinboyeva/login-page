import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";
import translateData from "../utils/translateData";

function useLanguage() {
    const { language } = useContext(LangContext);

    const t = (key) => {
        return translateData[key]?.[language] || key;
    };

    return { t };
}

export default useLanguage;
