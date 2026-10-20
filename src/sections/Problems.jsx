import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { ArrowRight, CircleAlert, CircleCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading, ProductBadge } from '../components/ui';
import { PRODUCT_NAMES } from '../lib/products';
import { MiniMock } from '../components/mocks/MiniMocks';

// Har bir muammo yechimi qaysi mahsulotda borligi
const ITEMS = [
  { id: 'gps', products: ['myteam', 'plus'] },
  { id: 'fake', products: ['myteam', 'plus'] },
  { id: 'attendance', products: ['myteam'] },
  { id: 'listen', products: ['myteam', 'plus'] },
  { id: 'offline', products: ['myteam', 'plus'] },
  { id: 'kpi', products: ['myteam', 'plus'] },
  { id: 'pharma', products: ['plus'] },
  { id: 'expenses', products: ['plus'] },
];

const FILTERS = ['all', 'myteam', 'plus'];

export default function Problems() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const firstRender = useRef(true);

  // Filtrdan keyin qayta paydo bo'lgan kartalarni AOS ham ko'rsin
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    AOS.refreshHard();
  }, [filter]);

  const visible = ITEMS.filter((item) => filter === 'all' || item.products.includes(filter));

  return (
    <section className="bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('problems.eyebrow')} title={t('problems.title')} desc={t('problems.desc')} />

        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="250">
          <div className="inline-flex rounded-xl border border-line bg-surface p-1" role="group">
            {FILTERS.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                  filter === key ? 'bg-navy-900 text-white dark:bg-amber-400 dark:text-navy-950' : 'text-muted hover:text-ink'
                }`}
              >
                {key === 'all' ? t('problems.filter_all') : PRODUCT_NAMES[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {visible.map((item) => {
            return (
              <article key={item.id} className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-3 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,7fr)] lg:gap-5">
                {/* Muammo */}
                <div data-aos="fade-right" className="rounded-2xl border border-line bg-sunken p-6 sm:p-7">
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    <CircleAlert size={14} /> {t('problems.problem')}
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-ink">{t(`problems.items.${item.id}.problem_title`)}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{t(`problems.items.${item.id}.problem`)}</p>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200" className="flex items-center justify-center">
                  <span className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-amber-400 text-navy-950 shadow-md lg:rotate-0">
                    <ArrowRight size={20} />
                  </span>
                </div>

                {/* Yechim */}
                <div data-aos="fade-left" data-aos-delay="120" className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7 xl:flex-row">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="mr-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        <CircleCheck size={14} /> {t('problems.solution')}
                      </p>
                      {item.products.map((product) => <ProductBadge key={product} product={product} />)}
                    </div>
                    <h3 className="mt-3 text-xl font-extrabold leading-snug text-ink">{t(`problems.items.${item.id}.solution_title`)}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{t(`problems.items.${item.id}.solution`)}</p>
                  </div>
                  <div data-aos="zoom-in" data-aos-delay="320" className="w-full shrink-0 self-center xl:w-72">
                    <MiniMock id={item.id} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
