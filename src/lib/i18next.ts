import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en/translation.json';
import et from '../locales/et/translation.json';

const resources = {
  en: { translation: en },
  et: { translation: et },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'et'],
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation', // Important!
  });

export default i18n;
