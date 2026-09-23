import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t('contact.desc')}
          </p>
        </div>

        {/* Asosiy konteyner (Forma + Xarita bitta card ichida) */}
        <div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col">

          {/* Yuqori qism: Kontakt ma'lumotlari va Forma (Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Chap tomon: Kontakt ma'lumotlari */}
            <div className="bg-blue-600 p-10 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('contact.info_title')}</h3>
                <p className="text-blue-100 mb-10 leading-relaxed max-w-sm">
                  {t('contact.working_days')} <br/>
                  09:00 - 18:00
                </p>


                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">+998 95 520 95 95</p>
                      <p className="text-blue-200 text-sm">{t('contact.sales_dept')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">mehrzodgroup@gmail.com</p>
                      <p className="text-blue-200 text-sm">{t('contact.corp_collab')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">{t('contact.address')}</p>
                      <p className="text-blue-200 text-sm">Vega Center</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dekorativ fon elementlari */}
              <div className="mt-12 opacity-20 relative h-20 overflow-hidden">
                <svg viewBox="0 0 100 100" fill="currentColor" className="absolute w-40 h-40 -bottom-16 -left-10">
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
            </div>

            {/* O'ng tomon: Xabar yuborish formasi */}
            <div className="p-10 lg:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.name_label')}</label>
                    <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder={t('contact.form.name_placeholder')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.phone_label')}</label>
                    <input type="tel" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="+998 90 000 00 00" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.email_label')}</label>
                  <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" placeholder="example@mail.ru" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.form.msg_label')}</label>
                  <textarea rows="4" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none" placeholder={t('contact.form.msg_placeholder')}></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md">
                  <Send size={20} />
                  {t('contact.form.send_btn')}
                </button>
              </form>
            </div>
          </div>

          {/* Pastki qism: Yandex Map (No Gap) */}
          <div
            className="w-full h-[400px] border-t border-slate-100 transition-all duration-500 ease-in-out grayscale hover:grayscale-0 overflow-hidden"
            title={t('contact.map_hover')}
          >
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.223798%2C41.260000&mode=search&oid=31783623391&ol=biz&z=17.09"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              loading="lazy"
              style={{ position: 'relative' }}
              title="Yandex Map: Vega Center"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}