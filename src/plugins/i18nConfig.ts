import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ptBR from '@/locales/pt-BR.json'

export const messages = {
  en: {
    message: en
  },
  ['pt-BR']: {
    message: ptBR
  }
}

export const i18n = createI18n({
  locale: navigator.language, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})
