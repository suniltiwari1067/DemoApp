import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';


i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ar: ar,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});


// export const updateAppLaanguage = async (value) => {
//   console.log("test >>>",value)
//   await i18n.changeLanguage(value);
// }

// export const translate = (text) => {
//   return i18n.t(text);
// }

export default i18n;