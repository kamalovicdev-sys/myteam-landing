import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from './locales/uz';
import ru from './locales/ru';

const SUPPORTED = ['uz', 'ru'];

// Tanlangan til xotirada; bo'lmasa brauzer tili ruscha bo'lsa — ru, aks holda o'zbekcha
function initialLanguage() {
  try {
    const saved = localStorage.getItem('lang');
    if (SUPPORTED.includes(saved)) return saved;
  } catch {
    // xotira yopiq bo'lishi mumkin (maxfiy oyna)
  }
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'uz';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
    },
    lng: initialLanguage(),
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false
    }
  });

document.documentElement.lang = i18n.language;

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem('lang', lng);
  } catch {
    // xotira yopiq bo'lsa til faqat shu oynada qoladi
  }
});

export default i18n;
