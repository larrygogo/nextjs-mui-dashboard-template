import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import Cache from 'i18next-localstorage-cache'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n

  // Enables the i18next backend
  .use(Backend)

  .use(Cache)

  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: 'zh_CN',
    backend: {
      /* translation file path */
      loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: 'en_US',
    debug: true,
    keySeparator: false,
    react: {
      useSuspense: false
    },
    cache: {
      enabled: true,
      // prefix for stored languages
      prefix: 'i18next_res_',
      // expiration
      expirationTime: 7*24*60*60*1000,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
  })

export default i18n
