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
      },
      "about": {
        "subtitle": "Mijozlar muammolariga yechimlar",
        "title": "Biznesingizdagi bo'shliqlarni IT bilan to'ldiramiz",
        "desc": "Kompaniyangizdagi nazoratsizlik, hisobotlardagi noaniqliklar va ortiqcha xarajatlar kabi asosiy muammolarni aynan sizning biznesingizga moslashgan raqamli yechimlar orqali bartaraf etamiz.",
        "features": {
          "listen": {
            "title": "Xodimlar qurilmasini tinglash",
            "desc": "Administratorlar masofadan turib qurilma mikrofonini yoqishi va xodimning mijoz bilan qanday muloqot qilayotganini real vaqtda kuzatishi yoki yozib olishi mumkin."
          },
          "gps": {
            "title": "Xodimlar joylashuvini kuzatish",
            "desc": "GPS orqali xodimlarning aniq joylashuvini nazorat qiling. Internet uzilganda ham ma'lumotlar qurilmada saqlanadi va aloqa tiklanganda markazga yuboriladi."
          },
          "time": {
            "title": "Xodimlar ish vaqtini hisoblash",
            "desc": "Tizimga kirish va chiqish vaqtlarini soniyasigacha aniq hisoblang. Kechikishlarni oldini oling va faqat haqiqatda ishlangan soatlar uchun pul to'lang."
          },
          "crm": {
            "title": "Distribyutsion CRM",
            "desc": "Savdo agentlari, yetkazib beruvchilar va haridorlar o'rtasidagi barcha savdo va taqsimot jarayonlarini yagona avtomatlashtirilgan platformada boshqaring."
          },
          "analytics": {
            "title": "Analitik tahlillar",
            "desc": "Tashriflar, ishlangan soatlar va bosib o'tilgan masofa bo'yicha real vaqt rejimida avtomatlashtirilgan hisobotlarni oling. HR va boshqaruv ishini osonlashtiring."
          },
          "security": {
            "title": "Ma'lumotlar xavfsizligi",
            "desc": "Barcha ma'lumotlar harbiy darajadagi shifrlash va WAF kiber-qorovul tizimi yordamida himoyalangan. Tizim DdoS va xakerlik hujumlariga bardoshli."
          }
        }
      },
      "corporate": {
        "title1": "Turli bizneslar uchun",
        "title2": "Aniq yechimlar",
        "desc": "Xodimlarning aldamasligini ta'minlash, ish jarayonini qat'iy nazoratga olish va real faktlarga asoslangan analitika orqali kompaniyangiz resurslarini tejang.",
        "download_btn": "Prezentatsiyani yuklab oling",
        "fmcg": {
          "title": "FMCG: Savdo agentlari va taqsimot nazorati",
          "desc": "Savdo vakillari yolg'on hisobot berishi va belgilangan joyga bormasdan \"bordim\" deyishining oldini oling. Jonli GPS kuzatuv va analitika orqali agentlarning har bir qadamini, qayerda qancha vaqt o'tkazganini aniq nazorat qiling.",
          "p1": "Yolg'on lokatsiyalarni (Fake GPS) bloklash",
          "p2": "Marshrutdan chetlanishni aniqlash va xabar berish",
          "p3": "Savdo nuqtalaridagi haqiqiy vaqtni hisoblash"
        },
        "pharma": {
          "title": "Farmasevtika: To'liq ish jarayoni va CRM",
          "desc": "Tibbiy vakillar (med-reps) va yetkazib beruvchilarning dorixonalar hamda shifoxonalarga tashriflarini qat'iy nazorat qiling. Farmasevtika uchun moslashtirilgan CRM orqali dori vositalari taqsimotini va xodimlar unumdorligini yagona tizimda jamlang.",
          "p1": "Tashriflarni GPS va rasmli hisobot orqali tasdiqlash",
          "p2": "Farmasevtik distribyutsiya uchun integratsiyalashgan CRM",
          "p3": "Bajarilgan ishlar va savdo bo'yicha aniq analitika"
        },
        "finance": {
          "title": "Moliya va Bank: Korrupsiya va kelishmovchiliklarga chek",
          "desc": "Qarz undiruvchilar (kollektorlar) yoki kredit agentlari va mijozlar o'rtasidagi yashirin kelishuvlar, korrupsion holatlarning oldini oling. Bahsli vaziyatlarda xodim qurilmasining mikrofonini masofadan tinglash orqali adolatni ta'minlang.",
          "p1": "Masofadan turib mikrofonni yoqish va tinglash",
          "p2": "Ovozli yozuvlarni xavfsiz serverda saqlash va tahlil qilish",
          "p3": "Xodimlarning mijozlar bilan muloqot madaniyatini nazorat qilish"
        },
        "b2b": {
          "title": "B2B Bizneslar: Oflayn nazorat va intizom",
          "desc": "\"Men mijoz oldidaman\" deb aldaydigan, ofisdan tashqarida ishlovchi xodimlarni fosh qiling. B2B uchrashuvlari haqiqatda bo'lib o'tganligini va xodim aniq ish joyida ekanligini isbotlovchi dalillar asosida biznesingizni boshqaring.",
          "p1": "Ish joyida (obyektdaligini) qat'iy tasdiqlash tizimi",
          "p2": "\"Internet yo'q edi\" degan bahonalarni inkor etuvchi oflayn yozish xususiyati",
          "p3": "Kompaniya ma'lumotlarining yuqori darajadagi xavfsizligi"
        }
      },
      "careers": {
        "subtitle": "Karyera",
        "title": "Bizning jamoaga qo'shiling",
        "desc": "MyTeam loyihasini rivojlantirishda o'z hissangizni qo'shing. Biz doimo o'z ishining ustalarini qidiramiz!",
        "apply_btn": "Topshirish",
        "requirements": "Talablar:",
        "jobs": {
          "software": {
            "title": "Software Engineer",
            "department": "Muhandislik",
            "type": "To'liq stavka",
            "loc": "Toshkent / Masofaviy",
            "desc": "Bizning asosiy platformamizni rivojlantirish uchun tajribali React va Node.js dasturchisini qidiryapmiz.",
            "req1": "React va Node.js",
            "req2": "3+ yillik tajriba",
            "req3": "Muammolarni mustaqil hal qila olish"
          },
          "devops": {
            "title": "DevOps Engineer",
            "department": "Infratuzilma",
            "type": "To'liq stavka",
            "loc": "Toshkent, IT Park",
            "desc": "Bulutli infratuzilmamiz (AWS/Docker/Kubernetes) barqarorligi va xavfsizligini ta'minlash uchun mutaxassis kerak.",
            "req1": "AWS / CI/CD",
            "req2": "Docker & Kubernetes",
            "req3": "Linux ma'muriyati"
          },
          "sales": {
            "title": "Sotuv menejeri (B2B)",
            "department": "Savdo bo'limi",
            "type": "To'liq stavka",
            "loc": "Toshkent",
            "desc": "B2B mijozlar bilan muzokaralar olib borish va kompaniya IT xizmatlarini sotish bo'yicha tajribali mutaxassis.",
            "req1": "B2B savdoda tajriba",
            "req2": "Kuchli muloqot qobiliyati",
            "req3": "Natijaga ishlash"
          }
        }
      },
      "team": {
        "title": "Loyihamiz ortidagi mutaxassislar",
        "desc": "MyTeam platformasi ortida o'z ishining ustasi bo'lgan, doimo izlanishdagi va mijozlar muvaffaqiyatiga qiziqadigan kuchli kadrlar turibdi.",
        "members": {
          "shuxrat": {
            "role": "Asoschi (CEO)",
            "bio": "Biznesni boshqarish va strategik rivojlantirish bo'yicha 30 yildan ortiq tajribaga ega. Faoliyati davomida turli sohalarda 10 dan ortiq yirik va muvaffaqiyatli loyihalarni amaliyotga tatbiq etgan. Kompaniyaning asosiy maqsadlari, jamoani shakllantirish va kelajakdagi yo'nalishlarini belgilab berishga mas'ul."
          },
          "pulat": {
            "role": "Oliy toifali huquqshunos",
            "bio": "Korporativ huquq va biznes qonunchiligi sohasida 10 yillik tajribaga ega oliy toifali huquqshunos. Kompaniyaning barcha yuridik jarayonlari, mijozlar va hamkorlar bilan munosabatlardagi xavfsizlik, shartnomalar va axborot himoyasini qonuniy jihatdan yuqori darajada ta'minlaydi."
          },
          "mavlonxon": {
            "role": "Software Engineer | Data Analytics",
            "bio": "Dasturiy ta'minot arxitekturasi va ma'lumotlar tahlili bo'yicha 5 yillik tajribaga ega mutaxassis. Python (FastAPI), React Native, va Docker texnologiyalari yordamida farmasevtika hamda FMCG kompaniyalari uchun murakkab CRM tizimlari va GPS kuzatuv dasturlarini ishlab chiqishga boshchilik qiladi. PostgreSQL, Redis va Kafka kabi texnologiyalar asosida yuqori yuklamali backend infratuzilmalarini yaratadi."
          }
        }
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
      "pricing": {
        "subtitle": "MYTEAM APP",
        "title": "Выберите идеальный тариф для себя",
        "standard_services": "Стандартные услуги",
        "with_crm": "MyTeam Plus (CRM)",
        "most_popular": "Самый популярный",
        "special_offer": "Спецпредложение",
        "note1": "Указанные тарифы рассчитываются по курсу Центрального банка по отношению к доллару на день оплаты.",
        "note2": "НДС на приобретаемый вами тариф рассчитывается отдельно и добавляется к его стоимости.",
        "period": {
          "month": "/мес",
          "year": "/год"
        },
        "basic": {
          "desc": "Отличный выбор для старта небольших команд и проектов.",
          "btn": "Выбрать"
        },
        "business": {
          "desc": "Полный контроль для растущего бизнеса и профессиональных команд.",
          "btn": "Выбрать тариф Business"
        },
        "enterprise": {
          "desc": "Безграничные возможности и высокая безопасность для крупных компаний.",
          "btn": "Купить"
        },
        "features": {
          "conn5": "Подключение 5 гаджетов",
          "conn35": "Подключение 35 гаджетов",
          "conn50": "Подключение 50 гаджетов",
          "time": "Учет рабочего времени сотрудников",
          "gps": "Отслеживание местоположения",
          "mic": "Прослушивание через микрофон",
          "email_support": "Поддержка по электронной почте",
          "quarterly_archive": "Квартальный архив",
          "tg_support": "Поддержка в Telegram 24/7",
          "unlimited_archive": "Безлимитный архив и все функции",
          "personal_manager": "Личный менеджер и поддержка",
          "crm": "MyTeam Plus (система CRM)"
        },
        "modal": {
          "corporate": "Корпоративное сотрудничество",
          "contact_soon": "Наши менеджеры свяжутся с вами в кратчайшие сроки.",
          "company_name": "Название компании",
          "phone": "Номер телефона",
          "send": "Отправить запрос",
          "secure_payment": "Безопасный платеж",
          "activate": "активация тарифа",
          "with_crm_text": "(с CRM)",
          "ssl": "Зашифрованное безопасное соединение (SSL)",
          "personal_data": "Личные данные",
          "fullname": "Ваше ФИО",
          "fullname_placeholder": "Али Валиев",
          "email": "Электронная почта",
          "payment_system": "Платежная система",
          "uzb_cards": "Узбекистан (Uzcard/Humo)",
          "intl_cards": "Международная (Visa/Mastercard)",
          "total_amount": "Сумма к оплате:",
          "waiting": "Ожидание...",
          "continue": "Продолжить",
          "go_back": "Вернуться назад"
        }
      },
      "contact": {
        "title": "Свяжитесь с нами",
        "desc": "У вас есть вопросы или вы хотите сотрудничать? Мы готовы вам помочь.",
        "info_title": "Контактная информация",
        "working_days": "Понедельник - Суббота",
        "sales_dept": "Отдел продаж",
        "corp_collab": "Для корпоративного сотрудничества",
        "address": "г. Ташкент, Шота Руставели, 150",
        "form": {
          "name_label": "Ваше имя",
          "name_placeholder": "Имя",
          "phone_label": "Ваш номер телефона",
          "email_label": "Электронная почта",
          "msg_label": "Ваше сообщение",
          "msg_placeholder": "Я хотел бы получить подробную информацию о проекте...",
          "send_btn": "Отправить сообщение"
        },
        "map_hover": "Наведите курсор"
      },
      "navbar": {
        "modal": {
          "title": "Присоединиться к платформе",
          "desc": "Введите свои данные, чтобы начать 14-дневный бесплатный пробный период.",
          "company": "Название компании",
          "fullname": "Ваше ФИО",
          "email": "Электронная почта",
          "submit": "Создать аккаунт"
        }
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
      },
      "about": {
        "subtitle": "Решения проблем клиентов",
        "title": "Восполняем пробелы вашего бизнеса с помощью IT",
        "desc": "Мы устраняем основные проблемы, такие как отсутствие контроля, неточности в отчетах и лишние расходы, с помощью цифровых решений, адаптированных специально для вашего бизнеса.",
        "features": {
          "listen": {
            "title": "Прослушивание устройств сотрудников",
            "desc": "Администраторы могут удаленно включать микрофон устройства и в реальном времени отслеживать или записывать общение сотрудника с клиентом."
          },
          "gps": {
            "title": "Отслеживание местоположения сотрудников",
            "desc": "Контролируйте точное местоположение сотрудников по GPS. Даже при отключении интернета данные сохраняются на устройстве и отправляются в центр при восстановлении связи."
          },
          "time": {
            "title": "Учет рабочего времени сотрудников",
            "desc": "Точно рассчитывайте время входа и выхода из системы до секунды. Предотвращайте опоздания и платите только за фактически отработанные часы."
          },
          "crm": {
            "title": "Дистрибьюторская CRM",
            "desc": "Управляйте всеми процессами продаж и дистрибуции между торговыми агентами, поставщиками и покупателями на единой автоматизированной платформе."
          },
          "analytics": {
            "title": "Аналитические отчеты",
            "desc": "Получайте автоматизированные отчеты в реальном времени по визитам, отработанным часам и пройденному расстоянию. Упростите работу HR и руководства."
          },
          "security": {
            "title": "Безопасность данных",
            "desc": "Все данные защищены шифрованием военного уровня и системой киберзащиты WAF. Система устойчива к DDoS и хакерским атакам."
          }
        }
      },
      "corporate": {
        "title1": "Точные решения",
        "title2": "для различных видов бизнеса",
        "desc": "Сэкономьте ресурсы вашей компании, обеспечив честность сотрудников, жесткий контроль рабочих процессов и аналитику, основанную на реальных фактах.",
        "download_btn": "Скачать презентацию",
        "fmcg": {
          "title": "FMCG: Контроль торговых агентов и дистрибуции",
          "desc": "Предотвращайте ложные отчеты торговых представителей и отговорки «я был на месте», когда они туда не доехали. С помощью живого GPS-трекинга и аналитики точно контролируйте каждый шаг агентов и время, проведенное в каждой локации.",
          "p1": "Блокировка подмены геолокации (Fake GPS)",
          "p2": "Обнаружение и оповещение об отклонении от маршрута",
          "p3": "Учет реального времени нахождения в торговых точках"
        },
        "pharma": {
          "title": "Фармацевтика: Полный рабочий процесс и CRM",
          "desc": "Строго контролируйте визиты медицинских представителей (med-reps) и курьеров в аптеки и больницы. Объедините распределение медикаментов и эффективность работы сотрудников в единой системе через адаптированную фармацевтическую CRM.",
          "p1": "Подтверждение визитов через GPS и фотоотчеты",
          "p2": "Интегрированная CRM для фармацевтической дистрибуции",
          "p3": "Точная аналитика по выполненной работе и продажам"
        },
        "finance": {
          "title": "Финансы и Банки: Конец коррупции и разногласиям",
          "desc": "Предотвращайте тайные сговоры и коррупционные ситуации между сборщиками долгов (коллекторами) или кредитными агентами и клиентами. В спорных ситуациях обеспечьте справедливость за счет удаленного прослушивания микрофона устройства сотрудника.",
          "p1": "Удаленное включение микрофона и прослушивание",
          "p2": "Безопасное хранение и анализ голосовых записей на сервере",
          "p3": "Контроль культуры общения сотрудников с клиентами"
        },
        "b2b": {
          "title": "B2B Бизнес: Офлайн-контроль и дисциплина",
          "desc": "Разоблачайте сотрудников, работающих вне офиса, которые обманывают, утверждая: «Я нахожусь у клиента». Управляйте бизнесом на основе доказательств того, что B2B встречи действительно состоялись и сотрудник находился на объекте.",
          "p1": "Строгая система подтверждения нахождения на рабочем месте (на объекте)",
          "p2": "Функция офлайн-записи, исключающая отговорки «не было интернета»",
          "p3": "Высочайший уровень безопасности корпоративных данных"
        }
      },
      "careers": {
        "subtitle": "Карьера",
        "title": "Присоединяйтесь к нашей команде",
        "desc": "Внесите свой вклад в развитие проекта MyTeam. Мы всегда в поиске профессионалов своего дела!",
        "apply_btn": "Откликнуться",
        "requirements": "Требования:",
        "jobs": {
          "software": {
            "title": "Инженер-программист (Software Engineer)",
            "department": "Инженерия",
            "type": "Полная занятость",
            "loc": "Ташкент / Удаленно",
            "desc": "Мы ищем опытного разработчика React и Node.js для развития нашей основной платформы.",
            "req1": "React и Node.js",
            "req2": "Опыт от 3 лет",
            "req3": "Умение самостоятельно решать задачи"
          },
          "devops": {
            "title": "DevOps инженер",
            "department": "Инфраструктура",
            "type": "Полная занятость",
            "loc": "Ташкент, IT Park",
            "desc": "Нам нужен специалист для обеспечения стабильности и безопасности нашей облачной инфраструктуры (AWS/Docker/Kubernetes).",
            "req1": "AWS / CI/CD",
            "req2": "Docker & Kubernetes",
            "req3": "Администрирование Linux"
          },
          "sales": {
            "title": "Менеджер по продажам (B2B)",
            "department": "Отдел продаж",
            "type": "Полная занятость",
            "loc": "Ташкент",
            "desc": "Опытный специалист по ведению переговоров с B2B клиентами и продаже IT-услуг компании.",
            "req1": "Опыт в B2B продажах",
            "req2": "Сильные коммуникативные навыки",
            "req3": "Работа на результат"
          }
        }
      },
      "team": {
        "title": "Специалисты, стоящие за нашим проектом",
        "desc": "За платформой MyTeam стоят сильные кадры — мастера своего дела, которые постоянно развиваются и заинтересованы в успехе клиентов.",
        "members": {
          "shuxrat": {
            "role": "Основатель (CEO)",
            "bio": "Имеет более чем 30-летний опыт в управлении бизнесом и стратегическом развитии. За свою карьеру успешно реализовал более 10 крупных и успешных проектов в различных сферах. Отвечает за основные цели компании, формирование команды и определение будущих направлений."
          },
          "pulat": {
            "role": "Юрист высшей категории",
            "bio": "Юрист высшей категории с 10-летним опытом в сфере корпоративного права и бизнес-законодательства. На высоком уровне обеспечивает законность всех юридических процессов компании, безопасность в отношениях с клиентами и партнерами, защиту договоров и информации."
          },
          "mavlonxon": {
            "role": "Software Engineer | Data Analytics",
            "bio": "Специалист с 5-летним опытом в архитектуре программного обеспечения и анализе данных. Руководит разработкой сложных CRM-систем и программ GPS-отслеживания для фармацевтических и FMCG компаний с использованием Python (FastAPI), React Native и Docker. Создает высоконагруженные backend-инфраструктуры на базе PostgreSQL, Redis и Kafka."
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", // Boshlang'ich til
    fallbackLng: "ru", // Agar biror so'z topilmasa, ruschani ko'rsatadi
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;