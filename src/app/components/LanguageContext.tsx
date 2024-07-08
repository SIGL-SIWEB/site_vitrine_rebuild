import { createContext, useState, useContext, ReactNode } from 'react';

interface LanguageContextType {
  isFrench: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isFrench, setIsFrench] = useState<boolean>(true);

  const toggleLanguage = () => {
    setIsFrench((prev) => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isFrench, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
