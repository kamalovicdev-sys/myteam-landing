import { CircleAlert, CircleCheck, HandHeart, Clock, MicOff, ScrollText, KeyRound, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';

const ITEMS = [
  { id: 'consent', icon: HandHeart },
  { id: 'hours', icon: Clock },
  { id: 'mic', icon: MicOff },
  { id: 'audit', icon: ScrollText },
  { id: 'roles', icon: KeyRound },
  { id: 'tenant', icon: Building2 },
];

export default function Trust() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div className="glow-drift pointer-events-none absolute -inset-[10%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="dark" eyebrow={t('trust.eyebrow')} title={t('trust.title')} />

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          <p data-aos="fade-right" className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-navy-100">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
            <span><span className="font-bold text-white">{t('problems.problem')}: </span>{t('trust.problem')}</span>
          </p>
          <p data-aos="fade-left" data-aos-delay="120" className="flex gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-navy-100">
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <span><span className="font-bold text-white">{t('problems.solution')}: </span>{t('trust.solution')}</span>
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <div key={item.id} data-aos="zoom-in" data-aos-delay={(index % 3) * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-navy-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400 transition-transform group-hover:scale-110">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold">{t(`trust.items.${item.id}.title`)}</h3>
                <p className="mt-2 leading-relaxed text-navy-200">{t(`trust.items.${item.id}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
