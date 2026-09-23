import { MapPin, Clock, ArrowRight, Code, Terminal, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Careers() {
  const { t } = useTranslation();

  const jobs = [
    {
      id: 1,
      title: t('careers.jobs.software.title'),
      department: t('careers.jobs.software.department'),
      type: t('careers.jobs.software.type'),
      location: t('careers.jobs.software.loc'),
      icon: Code,
      description: t('careers.jobs.software.desc'),
      requirements: [
        t('careers.jobs.software.req1'),
        t('careers.jobs.software.req2'),
        t('careers.jobs.software.req3')
      ]
    },
    {
      id: 2,
      title: t('careers.jobs.devops.title'),
      department: t('careers.jobs.devops.department'),
      type: t('careers.jobs.devops.type'),
      location: t('careers.jobs.devops.loc'),
      icon: Terminal,
      description: t('careers.jobs.devops.desc'),
      requirements: [
        t('careers.jobs.devops.req1'),
        t('careers.jobs.devops.req2'),
        t('careers.jobs.devops.req3')
      ]
    },
    {
      id: 3,
      title: t('careers.jobs.sales.title'),
      department: t('careers.jobs.sales.department'),
      type: t('careers.jobs.sales.type'),
      location: t('careers.jobs.sales.loc'),
      icon: TrendingUp,
      description: t('careers.jobs.sales.desc'),
      requirements: [
        t('careers.jobs.sales.req1'),
        t('careers.jobs.sales.req2'),
        t('careers.jobs.sales.req3')
      ]
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha qismi */}
        <div className="mx-auto max-w-2xl text-center mb-16" data-aos="fade-up">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">
            {t('careers.subtitle')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('careers.title')}
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {t('careers.desc')}
          </p>
        </div>

        {/* Bo'sh ish o'rinlari (Cards) */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    {job.department}
                  </span>
                  <div className="p-2 bg-white rounded-lg text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors shadow-sm">
                    <job.icon size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>

                <p className="text-slate-600 mb-6 h-16">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                    <Clock size={16} className="mr-2 text-slate-400" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                    <MapPin size={16} className="mr-2 text-slate-400" />
                    {job.location}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">{t('careers.requirements')}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {job.requirements.map(req => (
                      <li key={req} className="text-xs font-medium text-slate-600 bg-slate-200/50 px-2.5 py-1 rounded-md">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ishlaydigan Topshirish tugmasi - HR elektron pochtasiga yo'naltiradi */}
              <a
                href={`mailto:mehrzodgroup@gmail.com?subject=${encodeURIComponent(job.title)} vakansiyasi bo'yicha`}
                className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold py-3 rounded-xl transition-all duration-300"
              >
                {t('careers.apply_btn')} <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}