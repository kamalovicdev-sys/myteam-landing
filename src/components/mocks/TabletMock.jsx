import { useTranslation } from 'react-i18next';
import { LogoMark } from '../ui';
import { PRODUCT_NAMES } from '../../lib/products';
import { Check, MapPin, Mic, Navigation, Stethoscope, Presentation, PackageCheck, CircleCheck } from 'lucide-react';

// "Qanday ishlaydi" bo'limidagi planshet: tanlangan mahsulot va qadamga qarab ekran o'zgaradi

const Pill = ({ icon: Icon, children, tone = 'muted' }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
    tone === 'green'
      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300'
      : 'bg-sunken text-muted'
  }`}>
    {Icon && <Icon size={13} />} {children}
  </span>
);

function MyTeamScreen({ step }) {
  const { t } = useTranslation();
  if (step === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <span className="flex h-28 w-28 items-center justify-center rounded-full bg-amber-400 text-center text-sm font-extrabold leading-tight text-navy-950 shadow-lg shadow-amber-500/30 ring-8 ring-amber-400/20">
          {t('how.mock.start')}
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {t('how.mock.consent', { returnObjects: true }).map((item) => (
            <Pill key={item} icon={Check}>{item}</Pill>
          ))}
        </div>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-muted">{t('how.mock.working')}</p>
        <p className="text-5xl font-extrabold tabular-nums text-ink">03:42:15</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Pill icon={MapPin} tone="green">{t('how.mock.gps_on')}</Pill>
          <Pill icon={Mic}>{t('how.mock.mic_idle')}</Pill>
        </div>
        <span className="mt-1 rounded-xl border-2 border-line px-5 py-2 text-sm font-bold text-ink">{t('how.mock.finish')}</span>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
      <CircleCheck size={48} className="text-emerald-500" />
      <p className="text-xl font-extrabold text-ink">{t('how.mock.done')}</p>
      <p className="text-sm font-semibold tabular-nums text-muted">08:57 – 18:04</p>
      <Pill>{t('how.mock.worked')}</Pill>
      <Pill icon={Check} tone="green">{t('how.mock.closed')}</Pill>
    </div>
  );
}

function PlusScreen({ step }) {
  const { t } = useTranslation();
  if (step === 0) {
    return (
      <div className="flex h-full flex-col justify-center gap-4">
        <div className="flex items-center gap-3 rounded-xl bg-sunken p-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-800 text-amber-400">
            <Stethoscope size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-bold text-ink">{t('how.mock.doctor')}</p>
            <p className="text-xs text-muted">{t('how.mock.category')}</p>
          </div>
          <Pill icon={Navigation} tone="green">{t('how.mock.distance')}</Pill>
        </div>
        <span className="rounded-xl bg-amber-400 py-3 text-center font-extrabold text-navy-950 shadow-lg shadow-amber-500/20">
          {t('how.mock.visit_start')}
        </span>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 p-4 text-white">
          <div className="flex items-center justify-between text-xs font-semibold text-navy-200">
            <span className="flex items-center gap-1.5"><Presentation size={14} /> {t('how.mock.slide')}</span>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <span className="block h-9 w-20 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
            <div className="flex-1 space-y-2">
              <span className="block h-2 w-full rounded bg-white/40" />
              <span className="block h-2 w-3/4 rounded bg-white/25" />
              <span className="block h-2 w-1/2 rounded bg-white/25" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill icon={Check} tone="green">{t('mock.react_prescribes')}</Pill>
          <Pill>{t('mock.react_will')}</Pill>
          <Pill>{t('mock.react_no')}</Pill>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      <p className="flex items-center gap-2 text-lg font-extrabold text-ink">
        <CircleCheck size={22} className="text-emerald-500" /> {t('how.mock.visit_done')}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Pill icon={Presentation}>{t('how.mock.slides_shown')}</Pill>
        <Pill icon={PackageCheck}>{t('how.mock.samples')}</Pill>
      </div>
      <p className="rounded-xl bg-sunken p-3 text-sm font-semibold text-ink">{t('how.mock.next_step')}</p>
    </div>
  );
}

export default function TabletMock({ product, step }) {
  return (
    <div aria-hidden="true" className="rounded-[2rem] bg-navy-950 p-3 shadow-2xl shadow-navy-950/30 ring-1 ring-white/10 sm:p-4">
      <div className="flex aspect-[4/3] flex-col overflow-hidden rounded-[1.4rem] bg-surface">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3 text-xs font-bold text-ink">
          <LogoMark className="h-5 w-5" />
          {PRODUCT_NAMES[product]}
          <span className="ml-auto font-semibold text-muted">{product === 'plus' ? 'Karimov A.' : 'Aziz K.'}</span>
          <span className="tabular-nums text-muted">{['08:57', '12:39', '18:04'][step]}</span>
        </div>
        <div key={`${product}-${step}`} className="fade-in min-h-0 flex-1 p-5 sm:p-8">
          {product === 'plus' ? <PlusScreen step={step} /> : <MyTeamScreen step={step} />}
        </div>
      </div>
    </div>
  );
}
