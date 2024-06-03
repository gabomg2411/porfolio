import spanish from './es.json';
import english from './en.json';

const LANGUAGES = {
  en: english,
  es: spanish,
};

export const getI18n = (currentLocale) => {
  if (currentLocale === 'en') return LANGUAGES.en;
  if (currentLocale === 'es') return LANGUAGES.es;

  return LANGUAGES.en;
}
