import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import dashboardImg from '../assets/dashboard.png';

export default function Home() {
  const { t } = useTranslation(); // <-- Chaqirish

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

          <h1 data-aos="fade-up" className="mx-auto max-w-4xl font-extrabold text-4xl tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl transition-colors duration-300">
            {t('home.title1')} <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-400">{t('home.title2')}</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="100" className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl transition-colors duration-300">
            {t('home.desc')}
          </p>

          <div data-aos="fade-up" data-aos-delay="200" className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all hover:-translate-y-1">
              {t('home.try_free')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-3.5 text-base font-semibold text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1">
              <PlayCircle className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
              {t('home.how_it_works')}
            </button>
          </div>

          <div data-aos="fade-in" data-aos-delay="300" className="mt-8 flex justify-center gap-6 text-sm text-slate-600 dark:text-slate-400 sm:mt-10 transition-colors duration-300">
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> {t('home.no_credit_card')}</div>
            <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> {t('home.free_trial')}</div>
          </div>
        </div>

        {/* Pastki Video qismi */}
        <div data-aos="zoom-in" data-aos-delay="400" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-2 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 sm:p-4 lg:p-6 shadow-2xl dark:shadow-blue-900/10 transition-all duration-500 hover:shadow-blue-500/10 hover:-translate-y-2">

            {/* Asosiy rasm konteyneri (flex bu yerdan olib tashlandi, o'rniga ichkarida beriladi) */}
            <div className="aspect-[16/9] w-full rounded-xl bg-slate-900 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5 overflow-hidden relative group cursor-pointer">

              {/* 1. ASOSIY RASM (z-0) - Eng orqada turadi */}
              <img
                src={dashboardImg}
                alt="MyTeam Platform Dashboard"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              />

              {/* 2. QORAYTIRUVCHI FON (z-10) - Rasm o'qilishi uchun ustidan yengil qora parda tortamiz */}
              <div className="absolute inset-0 bg-slate-900/40 dark:bg-black/50 group-hover:bg-slate-900/50 dark:group-hover:bg-black/60 transition-colors z-10"></div>

              {/* 3. PLAY TUGMASI VA MATN (z-20) - Eng ustida markazda turadi */}
              {/*<div className="absolute inset-0 z-20 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">*/}
              {/*  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">*/}
              {/*    <PlayCircle size={40} className="ml-1" />*/}
              {/*  </div>*/}
              {/*  /!* Yozuvlar rasm ustida oq rangda yaxshi ko'rinadi *!/*/}
              {/*  <p className="text-white font-bold text-xl mb-2 drop-shadow-md transition-colors duration-300">*/}
              {/*    {t('home.video_title')}*/}
              {/*  </p>*/}
              {/*  <p className="text-slate-200 drop-shadow-md transition-colors duration-300">*/}
              {/*    {t('home.video_desc')}*/}
              {/*  </p>*/}
              {/*</div>*/}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}