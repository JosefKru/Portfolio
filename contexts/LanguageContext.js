import React, { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false)

  useEffect(() => {
    if (!isEnglish) {
      document.documentElement.classList.add('ru-lang')
    } else {
      document.documentElement.classList.remove('ru-lang')
    }
  }, [isEnglish])

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  )
}
