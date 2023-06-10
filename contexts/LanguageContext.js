import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(true)

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  )
}
