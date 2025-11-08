import React, { createContext, useContext, useState, useEffect } from 'react';
import { nl } from '../locales/nl';
import { ar } from '../locales/ar';

export type Language = 'nl' | 'ar';

export type Translations = typeof nl;

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: 'ltr' | 'rtl';
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const translations = {
  nl,
  ar,
};

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'nl' || urlLang === 'ar') return urlLang;
      const stored = localStorage.getItem('lang');
      if (stored === 'nl' || stored === 'ar') return stored;
    } catch (_) {}
    return 'nl';
  });

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    try {
      localStorage.setItem('lang', language);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.replaceState(null, '', url.toString());
    } catch (_) {}
  }, [language]);

  const value: LocalizationContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === 'ar' ? 'rtl' : 'ltr',
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within LocalizationProvider');
  }
  return context;
};
