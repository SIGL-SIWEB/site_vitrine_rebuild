import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from '../../public/locales/fr.json';
import en from '../../public/locales/en.json';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'fr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;