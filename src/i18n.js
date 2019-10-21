import i18n from 'i18next';
import Backend from 'i18next-node-remote-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'http://localhost:9090/v1/admin/languages/json/{{lng}}',
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
