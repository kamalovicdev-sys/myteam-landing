import { useState } from 'react';
import { ArrowRight, Info, Gift, Landmark, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';
import { AnimatedNumber } from '../components/motion';
import { TIERS, PERIODS, VAT_PERCENT, MINIMUM_SEATS, quote, formatNumber } from '../lib/pricing';

const SLIDER_MAX = 200;
const INPUT_MAX = 5000;

export default function Pricing() {
  const { t } = useTranslation();
  // Maydon matni alohida: foydalanuvchi sonni o'chirib, qaytadan yoza olsin
  const [seatsText, setSeatsText] = useState('25');
  const [months, setMonths] = useState(12);

  const parsed = Number.parseInt(seatsText, 10);
  const seats = Number.isNaN(parsed) ? 1 : Math.min(Math.max(parsed, 1), INPUT_MAX);
  const result = quote(seats, months);
  const som = (value) => `${formatNumber(value)} ${t('pricing.currency')}`;

  return (
    <section className="bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('pricing.eyebrow')} title={t('pricing.title')} desc={t('pricing.desc')} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          {/* Kalkulyator */}
          <div data-aos="fade-right" className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <label htmlFor="seats" className="font-bold text-ink">{t('pricing.seats_label')}</label>
              <div className="flex items-center gap-2">
                <input
                  id="seats-number"
                  type="number"
                  min={1}
                  max={INPUT_MAX}
                  value={seatsText}
                  onChange={(e) => setSeatsText(e.target.value)}
                  onBlur={() => setSeatsText(String(seats))}
                  className="w-24 rounded-lg border border-line bg-page px-3 py-2 text-right text-lg font-extrabold tabular-nums text-ink focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label={t('pricing.seats_label')}
                />
                <span className="text-sm font-semibold text-muted">{t('pricing.seats_unit')}</span>
              </div>
            </div>
            <input
              id="seats"
              type="range"
              min={1}
              max={SLIDER_MAX}
              value={Math.min(seats, SLIDER_MAX)}
              onChange={(e) => setSeatsText(e.target.value)}
              className="mt-5 w-full accent-amber-500"
            />
            <div className="mt-1 flex justify-between text-xs font-semibold text-muted">
              <span>1</span><span>50</span><span>100</span><span>{SLIDER_MAX}+</span>
            </div>

            <p className="mt-8 font-bold text-ink">{t('pricing.period_label')}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label={t('pricing.period_label')}>
              {PERIODS.map((period) => {
                const active = period.months === months;
                return (
                  <button
                    key={period.months}
                    role="radio"
                    aria-checked={active}
                    onClick={() => setMonths(period.months)}
                    className={`rounded-xl border px-3 py-3 text-center transition-colors ${
                      active ? 'border-amber-400 bg-amber-400/10' : 'border-line hover:border-amber-400/60'
                    }`}
                  >
                    <span className="block font-extrabold text-ink">{t('pricing.months', { count: period.months })}</span>
                    <span className={`mt-0.5 block text-sm font-bold ${active ? 'text-accent' : 'text-muted'}`}>
                      {t('pricing.discount', { p: period.discount })}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-8 font-bold text-ink">{t('pricing.tiers_title')}</p>
            <div className="mt-3 overflow-hidden rounded-xl border border-line">
              {TIERS.map((tier, index) => {
                const from = index === 0 ? 1 : TIERS[index - 1].upTo + 1;
                const used = result.lines.some((line) => line.price === tier.price);
                return (
                  <div key={tier.price} className={`flex items-center justify-between px-4 py-3 text-sm ${index ? 'border-t border-line' : ''} ${used ? 'bg-amber-400/10' : ''}`}>
                    <span className="font-semibold text-ink">
                      {tier.upTo === null ? t('pricing.tier_open', { from }) : t('pricing.tier_range', { from, to: tier.upTo })}
                    </span>
                    <span className="font-extrabold tabular-nums text-ink">{som(tier.price)}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 flex gap-2 text-sm text-muted">
              <Info size={16} className="mt-0.5 shrink-0" /> {t('pricing.tier_hint')}
            </p>
          </div>

          {/* Natija */}
          <div data-aos="fade-left" data-aos-delay="150" className="flex flex-col rounded-3xl bg-navy-950 p-6 text-white sm:p-8 dark:ring-1 dark:ring-white/10">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-400">{t('pricing.summary_title')}</p>
            <p className="mt-1 text-sm text-navy-200">
              {result.seats} {t('pricing.seats_unit')} · {t('pricing.months', { count: months })}
            </p>

            <dl className="mt-6 space-y-3 text-sm">
              {result.lines.map((line) => (
                <div key={line.from} className="flex justify-between gap-4 text-navy-200">
                  <dt>{line.seats} × {formatNumber(line.price)} × {months}</dt>
                  <dd className="tabular-nums">{formatNumber(line.amount * months)}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                <dt>{t('pricing.base', { months: t('pricing.months', { count: months }) })}</dt>
                <dd className="font-semibold tabular-nums">{som(result.base)}</dd>
              </div>
              <div className="flex justify-between gap-4 text-amber-300">
                <dt>{t('pricing.discount_line', { p: result.discountPercent })}</dt>
                <dd className="font-semibold tabular-nums">−{som(result.discount)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>{t('pricing.net')}</dt>
                <dd className="font-semibold tabular-nums">{som(result.net)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>{t('pricing.vat', { p: VAT_PERCENT })}</dt>
                <dd className="font-semibold tabular-nums">{som(result.vat)}</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm text-navy-200">{t('pricing.total')}</p>
              <p className="mt-1 text-3xl font-extrabold tabular-nums text-amber-400 sm:text-4xl"><AnimatedNumber value={result.total} format={som} /></p>
              <p className="mt-2 text-sm text-navy-200">
                {t('pricing.per_seat')}: <span className="font-bold tabular-nums text-white"><AnimatedNumber value={result.perSeatMonth} format={som} /></span>
              </p>
            </div>

            {seats < MINIMUM_SEATS && (
              <p className="mt-4 flex gap-2 text-sm text-amber-300">
                <Info size={16} className="mt-0.5 shrink-0" /> {t('pricing.minimum', { n: MINIMUM_SEATS })}
              </p>
            )}

            <a href="#demo" className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3.5 font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-300">
              {t('pricing.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <ul className="mt-6 space-y-3 text-sm text-navy-200">
              <li className="flex gap-2"><Gift size={16} className="mt-0.5 shrink-0 text-amber-400" /> {t('pricing.trial')}</li>
              <li className="flex gap-2"><Landmark size={16} className="mt-0.5 shrink-0 text-amber-400" /> {t('pricing.payment')}</li>
              <li className="flex gap-2"><Sparkles size={16} className="mt-0.5 shrink-0 text-amber-400" /> {t('pricing.pro')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
