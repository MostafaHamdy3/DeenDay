import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import ar from './ar.json';
import en from './en.json';

const i18n = new I18n();

i18n.translations = {
  ar,
  en,
};

export const setI18nConfig = () => {
  const locales = RNLocalize.getLocales();

  const supportedLanguages = ['ar', 'en'];
  let deviceLanguage = 'ar';

  if (locales && locales.length > 0) {
    const deviceLang = locales[0].languageCode;
    deviceLanguage = supportedLanguages.includes(deviceLang) ? deviceLang : 'ar';
  }

  i18n.locale = deviceLanguage;
  i18n.defaultLocale = 'ar';
  i18n.enableFallback = true;

  return deviceLanguage;
};

// Function to get current language
export const getCurrentLanguage = () => i18n.locale;

// Function to check if current language is RTL
export const isRTL = () => i18n.locale === 'ar';

// Function to change language manually
export const changeLanguage = (language: 'ar' | 'en') => {
  if (['ar', 'en'].includes(language)) {
    i18n.locale = language;
  }
};

export default i18n;
