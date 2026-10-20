import { ShoppingCart, Pill, Landmark, Store, ShieldCheck, Truck, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading, ProductBadge } from '../components/ui';
import { CONTACTS } from '../contacts';

const ITEMS = [
  { id: 'fmcg', icon: ShoppingCart, product: 'myteam' },
  { id: 'pharma', icon: Pill, product: 'plus' },
  { id: 'finance', icon: Landmark, product: 'myteam' },
  { id: 'retail', icon: Store, product: 'myteam' },
  { id: 'security', icon: ShieldCheck, product: 'myteam' },
  { id: 'delivery', icon: Truck, product: 'myteam' },
];

export default function Industries() {
  const { t } = useTranslation();

  return (
    <section className="bg-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('industries.eyebrow')} title={t('industries.title')} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <div key={item.id} data-aos="flip-up" data-aos-delay={(index % 3) * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-amber-400 transition-transform group-hover:scale-110">
                    <item.icon size={22} />
                  </span>
                  <ProductBadge product={item.product} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{t(`industries.items.${item.id}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <span className="font-bold text-rose-600 dark:text-rose-400">{t('problems.problem')}: </span>
                  {t(`industries.items.${item.id}.problem`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">{t('problems.solution')}: </span>
                  {t(`industries.items.${item.id}.solution`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center" data-aos="zoom-in">
          <a
            href={CONTACTS.presentation}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 font-bold text-ink transition-colors hover:border-amber-400"
          >
            <Download size={18} className="text-accent" />
            {t('industries.presentation')}
          </a>
        </div>
      </div>
    </section>
  );
}
