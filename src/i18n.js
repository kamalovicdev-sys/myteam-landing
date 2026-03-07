import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tarjimalar lug'ati
const resources = {
  uz: {
    translation: {
      "nav": {
        "home": "Asosiy",
        "about": "Loyiha haqida",
        "team": "Jamoa",
        "corporate": "Korporativ",
        "pricing": "Narxlar",
        "contact": "Aloqa",
        "start": "Boshlash"
      },
      "home": {
        "title1": "Jamoangizni boshqarishning",
        "title2": "eng samarali usuli",
        "desc": "MyTeam yordamida xodimlarni kuzatish, vazifalarni taqsimlash va jamoa unumdorligini oshirish endi yanada qulay. Barchasi yagona platformada mujassam.",
        "try_free": "Bepul sinab ko'rish",
        "how_it_works": "Tizim qanday ishlaydi?",
        "no_credit_card": "Kredit karta talab qilinmaydi",
        "free_trial": "14 kunlik bepul sinov",
        "video_title": "Platforma videosi",
        "video_desc": "Tomosha qilish uchun bosing"
      },

      "footer": {
        "desc": "Jamoangizni boshqarish, vazifalarni taqsimlash va unumdorlikni oshirish uchun eng zamonaviy yechim. Barchasi yagona platformada.",
        "platform": "Platforma",
        "features": "Imkoniyatlar",
        "pricing": "Narxlar",
        "corporate": "Korporativ yechimlar",
        "updates": "Yangilanishlar",
        "company": "Kompaniya",
        "team": "Bizning jamoa",
        "careers": "Karyera",
        "blog": "Blog",
        "contact": "Bog'lanish",
        "rights": "Barcha huquqlar himoyalangan.",
        "privacy": "Maxfiylik siyosati",
        "terms": "Foydalanish shartlari"
      }
    }
  },
  ru: {
    translation: {
      "nav": {
        "home": "Главная",
        "about": "О проекте",
        "team": "Команда",
        "corporate": "Корпоративным",
        "pricing": "Цены",
        "contact": "Контакты",
        "start": "Начать"
      },
      "home": {
        "title1": "Самый эффективный способ",
        "title2": "управления командой",
        "desc": "С MyTeam отслеживать сотрудников, распределять задачи и повышать продуктивность команды стало еще удобнее. Все в единой платформе.",
        "try_free": "Попробовать бесплатно",
        "how_it_works": "Как это работает?",
        "no_credit_card": "Кредитная карта не требуется",
        "free_trial": "14 дней бесплатного периода",
        "video_title": "Видео платформы",
        "video_desc": "Нажмите для просмотра"
      },
      "footer": {
        "desc": "Самое современное решение для управления командой, распределения задач и повышения продуктивности. Все на единой платформе.",
        "platform": "Платформа",
        "features": "Возможности",
        "pricing": "Цены",
        "corporate": "Корпоративные решения",
        "updates": "Обновления",
        "company": "Компания",
        "team": "Наша команда",
        "careers": "Карьера",
        "blog": "Блог",
        "contact": "Контакты",
        "rights": "Все права защищены.",
        "privacy": "Политика конфиденциальности",
        "terms": "Условия использования"
      }
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // Boshlang'ich til
    fallbackLng: "ru", // Agar biror so'z topilmasa, ruschani ko'rsatadi
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;