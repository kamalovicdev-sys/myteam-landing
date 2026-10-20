import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroMock from '../components/mocks/HeroMock';
import { CountUp } from '../components/motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-x-clip bg-navy-950 text-white">
      {/* Fondagi yengil nur va to'r */}
      <div className="glow-drift pointer-events-none absolute -inset-[10%] bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <p data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {t('hero.eyebrow')}
          </p>

          <h1 data-aos="fade-up" data-aos-delay="80" className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {t('hero.title_a')}{' '}
            <span className="text-amber-400">{t('hero.title_b')}</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="160" className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
            {t('hero.desc')}
          </p>

          <div data-aos="fade-up" data-aos-delay="240" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-7 py-3.5 text-base font-bold text-navy-950 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300">
              {t('hero.cta_demo')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">
              <Calculator className="mr-2 h-5 w-5 text-amber-400" />
              {t('hero.cta_price')}
            </a>
          </div>

          <ul data-aos="fade-up" data-aos-delay="320" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-200">
            {t('hero.checks', { returnObjects: true }).map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="zoom-in-left" data-aos-delay="200" className="px-2 sm:px-6 lg:px-0">
          <HeroMock />
        </div>
      </div>

      {/* Halol raqamlar: faqat tizimda bor narsalar */}
      <div className="relative border-t border-white/10">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {t('stats', { returnObjects: true }).map((stat, index) => (
            <div key={stat.label} data-aos="fade-up" data-aos-delay={index * 120} data-aos-offset="0" className="py-7 pr-4">
              <dt className="text-2xl font-extrabold tabular-nums text-amber-400 sm:text-3xl"><CountUp value={stat.value} /></dt>
              <dd className="mt-1 text-sm leading-snug text-navy-200">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
