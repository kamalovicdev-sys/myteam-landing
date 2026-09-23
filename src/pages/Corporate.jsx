import { ShoppingCart, Activity, Landmark, Briefcase, ArrowRight } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function Corporate() {
  const { t } = useTranslation();

  const corporateBenefits = [
    {
      title: t('corporate.fmcg.title'),
      description: t('corporate.fmcg.desc'),
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800",
      icon: ShoppingCart,
      points: [
        t('corporate.fmcg.p1'),
        t('corporate.fmcg.p2'),
        t('corporate.fmcg.p3')
      ]
    },
    {
      title: t('corporate.pharma.title'),
      description: t('corporate.pharma.desc'),
      image: "https://www.qad.com/blog/wp-content/uploads/2019/09/Direct-To-Patient-Blog-Article1.jpg",
      icon: Activity,
      points: [
        t('corporate.pharma.p1'),
        t('corporate.pharma.p2'),
        t('corporate.pharma.p3')
      ]
    },
    {
      title: t('corporate.finance.title'),
      description: t('corporate.finance.desc'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      icon: Landmark,
      points: [
        t('corporate.finance.p1'),
        t('corporate.finance.p2'),
        t('corporate.finance.p3')
      ]
    },
    {
      title: t('corporate.b2b.title'),
      description: t('corporate.b2b.desc'),
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      icon: Briefcase,
      points: [
        t('corporate.b2b.p1'),
        t('corporate.b2b.p2'),
        t('corporate.b2b.p3')
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">

      {/* Dark Theme Hero Qismi */}
      <section className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl" data-aos="fade-up">
            {t('corporate.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t('corporate.title2')}</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-slate-300" data-aos="fade-up" data-aos-delay="100">
            {t('corporate.desc')}
          </p>
          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <a
              href="/Mehrzod Business Group.pptx"
              download="Mehrzod Business Group.pptx"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {t('corporate.download_btn')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Rasm buzilmaydigan chiroyli kartochkalar (Features) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:gap-24">
            {corporateBenefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Rasm qutisi */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative group">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Yengil qoraytirish effekti rasmni chiroyliroq qiladi */}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>

                {/* Matn qutisi */}
                <div className="w-full lg:w-1/2">
                  <div className="h-14 w-14 rounded-xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white mb-6 shadow-md">
                    <benefit.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 transition-colors">
                    {benefit.description}
                  </p>
                  <ul className="space-y-4">
                    {benefit.points.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 font-medium transition-colors">
                        <span className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-500 rounded-full mr-3 mt-1.5 shrink-0"></span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}