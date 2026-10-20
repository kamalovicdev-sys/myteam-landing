import { ArrowRight, Check, Minus, Sparkles, Users, Pill } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';
import { PRODUCT_NAMES } from '../lib/products';

function ProductCard({ product, icon, onPick, from }) {
  const Icon = icon;
  const { t } = useTranslation();
  const plus = product === 'plus';
  const soon = t(`products.${product}.soon`, { defaultValue: '' });

  return (
    <div data-aos={from} className={`flex flex-col overflow-hidden rounded-3xl border shadow-sm ${plus ? 'border-amber-400/60' : 'border-line'} bg-surface`}>
      <div className={`p-7 sm:p-8 ${plus ? 'bg-navy-950 text-white' : 'bg-navy-900 text-white'}`}>
        <div className="flex items-center gap-3">
          <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${plus ? 'bg-amber-400 text-navy-950' : 'bg-white/10 text-amber-400'}`}>
            <Icon size={24} />
          </span>
          <div>
            <h3 className="text-2xl font-extrabold">{PRODUCT_NAMES[product]}</h3>
            <p className="text-sm font-semibold text-navy-200">{t(`products.${product}.tagline`)}</p>
          </div>
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-wider text-amber-400">{t('products.for_label')}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-navy-100">{t(`products.${product}.for`)}</p>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <ul className="space-y-3.5">
          {t(`products.${product}.features`, { returnObjects: true }).map((feature, index) => (
            <li key={feature} data-aos="fade-up" data-aos-delay={150 + index * 60} data-aos-offset="20" className="flex gap-3 text-ink">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
          {soon && (
            <li className="flex gap-3 text-muted">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0" />
              <span className="leading-snug">{soon}</span>
            </li>
          )}
        </ul>
        <a
          href="#demo"
          onClick={() => onPick(product)}
          className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-bold transition-all hover:-translate-y-0.5 ${
            plus ? 'bg-amber-400 text-navy-950 hover:bg-amber-300' : 'bg-navy-900 text-white hover:bg-navy-800 dark:bg-navy-700 dark:hover:bg-navy-600'
          }`}
        >
          {t('products.cta')}: {PRODUCT_NAMES[product]}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

function Cell({ value }) {
  const { t } = useTranslation();
  if (value === 'yes') return <Check className="mx-auto h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-label={t('products.compare.yes')} />;
  if (value === 'no') return <Minus className="mx-auto h-5 w-5 text-muted/60" aria-label={t('products.compare.no')} />;
  return <span className="text-sm font-semibold text-ink">{value}</span>;
}

export default function Products({ onPick }) {
  const { t } = useTranslation();

  return (
    <section className="bg-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('products.eyebrow')} title={t('products.title')} desc={t('products.desc')} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ProductCard product="myteam" icon={Users} onPick={onPick} from="fade-right" />
          <ProductCard product="plus" icon={Pill} onPick={onPick} from="fade-left" />
        </div>

        {/* Solishtirish jadvali */}
        <div data-aos="fade-up" className="mt-16">
          <h3 className="text-center text-2xl font-extrabold text-ink">{t('products.compare.title')}</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-surface">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="border-b border-line text-sm">
                  <th className="px-5 py-4 font-bold text-muted">{t('products.compare.feature')}</th>
                  <th className="w-1/4 px-5 py-4 text-center font-extrabold text-ink">MyTeam</th>
                  <th className="w-1/4 px-5 py-4 text-center font-extrabold text-accent">MyTeam Plus</th>
                </tr>
              </thead>
              <tbody>
                {t('products.compare.rows', { returnObjects: true }).map((row, index) => (
                  <tr key={row.label} data-aos="fade-up" data-aos-delay={index * 50} data-aos-offset="20" className="border-b border-line transition-colors last:border-0 hover:bg-sunken/60">
                    <td className="px-5 py-3.5 text-sm text-ink">{row.label}</td>
                    <td className="px-5 py-3.5 text-center"><Cell value={row.myteam} /></td>
                    <td className="px-5 py-3.5 text-center"><Cell value={row.plus} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
