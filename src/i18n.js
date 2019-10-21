import i18n from 'i18next';
import Backend from 'i18next-node-remote-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { API } from './config';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${API.getLanguageJSON}/{{lng}}`,
      crossDomain: true
    },
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    debug: false,
    react: {
      wait: true,
      useSuspense: false
    }
  });

export default i18n;
