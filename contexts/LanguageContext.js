import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ru";
    setIsEnglish(savedLanguage === "en");
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    if (!isEnglish) {
      document.documentElement.classList.add("ru-lang");
      localStorage.setItem("language", "ru");
    } else {
      document.documentElement.classList.remove("ru-lang");
      localStorage.setItem("language", "en");
    }
  }, [isEnglish, isInitialized]);

  return (
    <LanguageContext.Provider
      value={{ isEnglish, setIsEnglish, isInitialized }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
