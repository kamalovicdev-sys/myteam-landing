import { MapPin, Clock, ArrowRight, ArrowLeft, Code, Terminal, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';
import { CONTACTS } from '../contacts';

const JOBS = [
  { id: 'software', icon: Code },
  { id: 'devops', icon: Terminal },
  { id: 'sales', icon: TrendingUp },
];

export default function Careers() {
  const { t } = useTranslation();

  return (
    <div className="bg-page py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-ink">
          <ArrowLeft size={16} /> {t('careers.back')}
        </Link>

        <SectionHeading eyebrow={t('careers.subtitle')} title={t('careers.title')} desc={t('careers.desc')} />

        {/* Bo'sh ish o'rinlari */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job, index) => {
            const { id } = job;
            const title = t(`careers.jobs.${id}.title`);
            return (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-7"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-accent">
                      {t(`careers.jobs.${id}.department`)}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-amber-400">
                      <job.icon size={20} />
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-extrabold text-ink">{title}</h3>
                  <p className="mb-6 leading-relaxed text-muted">{t(`careers.jobs.${id}.desc`)}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="flex items-center rounded-lg border border-line px-3 py-1.5 text-sm text-muted">
                      <Clock size={15} className="mr-2" /> {t(`careers.jobs.${id}.type`)}
                    </span>
                    <span className="flex items-center rounded-lg border border-line px-3 py-1.5 text-sm text-muted">
                      <MapPin size={15} className="mr-2" /> {t(`careers.jobs.${id}.loc`)}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="mb-2 text-sm font-bold text-ink">{t('careers.requirements')}</h4>
                    <ul className="flex flex-wrap gap-2">
                      {['req1', 'req2', 'req3'].map((req) => (
                        <li key={req} className="rounded-md bg-sunken px-2.5 py-1 text-xs font-semibold text-muted">
                          {t(`careers.jobs.${id}.${req}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Topshirish tugmasi — HR elektron pochtasiga yo'naltiradi */}
                <a
                  href={`mailto:${CONTACTS.email}?subject=${encodeURIComponent(t('careers.apply_subject', { title }))}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 py-3 font-bold text-white transition-colors hover:bg-navy-800 dark:bg-navy-700 dark:hover:bg-navy-600"
                >
                  {t('careers.apply_btn')} <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
