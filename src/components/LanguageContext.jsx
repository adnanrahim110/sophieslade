import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
  selectLanguage: () => {},
  showSplash: true,
  setShowSplash: () => {},
  ...translations.en,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "fr") {
      setLanguage(stored);
      setShowSplash(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    localStorage.clear();
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  const selectLanguage = useCallback((lang) => {
    if (lang === "en" || lang === "fr") {
      localStorage.clear();
      setLanguage(lang);
      setShowSplash(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      language,
      toggleLanguage,
      selectLanguage,
      showSplash,
      setShowSplash,
      ...translations[language],
    }),
    [language, showSplash]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
