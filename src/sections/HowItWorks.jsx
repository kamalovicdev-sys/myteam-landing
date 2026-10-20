import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';
import { PRODUCT_NAMES } from '../lib/products';
import TabletMock from '../components/mocks/TabletMock';

export default function HowItWorks() {
  const { t } = useTranslation();
  const [product, setProduct] = useState('myteam');
  const [step, setStep] = useState(0);

  const steps = t(`how.${product}`, { returnObjects: true });

  const pickProduct = (key) => {
    setProduct(key);
    setStep(0);
  };

  return (
    <section className="bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('how.eyebrow')} title={t('how.title')} desc={t('how.desc')} />

        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="250">
          <div className="inline-flex rounded-xl border border-line bg-surface p-1" role="tablist">
            {['myteam', 'plus'].map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={product === key}
                onClick={() => pickProduct(key)}
                className={`rounded-lg px-5 py-2 text-sm font-bold transition-colors ${
                  product === key ? 'bg-navy-900 text-white dark:bg-amber-400 dark:text-navy-950' : 'text-muted hover:text-ink'
                }`}
              >
                {PRODUCT_NAMES[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <ol className="space-y-3">
            {steps.map((item, index) => {
              const active = index === step;
              return (
                <li key={item.title} data-aos="fade-right" data-aos-delay={index * 120}>
                  <button
                    onClick={() => setStep(index)}
                    aria-current={active ? 'step' : undefined}
                    className={`flex w-full gap-4 rounded-2xl border p-5 text-left transition-all ${
                      active ? 'border-amber-400 bg-surface shadow-md' : 'border-transparent hover:border-line hover:bg-surface/60'
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${
                      active ? 'bg-amber-400 text-navy-950' : 'bg-sunken text-muted'
                    }`}>
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-muted">{t('how.step', { n: index + 1 })}</span>
                      <span className="mt-0.5 block text-lg font-extrabold text-ink">{item.title}</span>
                      <span className="mt-1.5 block leading-relaxed text-muted">{item.desc}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div data-aos="zoom-in-up" data-aos-delay="150">
            <TabletMock product={product} step={step} />
          </div>
        </div>
      </div>
    </section>
  );
}
