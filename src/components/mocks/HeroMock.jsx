import { useTranslation } from 'react-i18next';
import { MapPinCheck, Headphones } from 'lucide-react';
import { Waveform } from './MiniMocks';

// Landing uchun chizilgan "panel": ilovaning skrinshoti emas, faqat g'oyani ko'rsatadi

const STATS = [
  { key: 'on_shift', value: 18, dot: 'bg-emerald-400' },
  { key: 'late', value: 2, dot: 'bg-amber-400' },
  { key: 'absent', value: 1, dot: 'bg-rose-400' },
  { key: 'on_leave', value: 1, dot: 'bg-sky-300' },
];

export function MapArt({ className = '' }) {
  const { t } = useTranslation();
  return (
    <svg viewBox="0 0 480 260" className={className} role="img" aria-label={t('mock.window_title')}>
      <rect width="480" height="260" rx="12" fill="#0a1530" />
      {/* Bog'lar va daryo */}
      <path d="M300 170h120v70H300z" fill="#11264a" />
      <path d="M20 30h90v60H20z" fill="#11264a" />
      <path d="M-10 200 C 80 170, 160 250, 260 215 S 420 180, 500 205" stroke="#163563" strokeWidth="16" fill="none" />
      {/* Katta ko'chalar */}
      <g stroke="#1d3260" strokeLinecap="round" fill="none">
        <path d="M0 120H480" strokeWidth="11" />
        <path d="M230 0V260" strokeWidth="11" />
        <path d="M0 40L480 150" strokeWidth="7" />
      </g>
      {/* Kichik ko'chalar */}
      <g stroke="#172a52" strokeWidth="4" strokeLinecap="round">
        <path d="M80 0V260M150 0V260M320 0V260M400 0V260M0 70H480M0 175H480" />
      </g>
      {/* Ish joyi hududi */}
      <circle cx="150" cy="120" r="44" fill="#fbbf24" fillOpacity="0.08" stroke="#fbbf24" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 5" />
      <text x="150" y="64" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fbbf24">{t('mock.office')}</text>
      {/* Kunlik marshrut */}
      <path className="route-draw" d="M60 225 L80 175 L150 120 L230 128 L262 160 L320 150 L330 92 L400 70 L428 112" stroke="#fbbf24" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      {[[80, 175], [262, 160], [330, 92]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#0a1530" stroke="#fbbf24" strokeWidth="2" />
      ))}
      {/* Xodimlar */}
      {[
        { x: 150, y: 120, c: '#34d399' },
        { x: 428, y: 112, c: '#34d399' },
        { x: 280, y: 70, c: '#fbbf24' },
        { x: 40, y: 150, c: '#34d399' },
      ].map(({ x, y, c }, i) => (
        <g key={i}>
          <circle className="pulse-ring" cx={x} cy={y} r="6" fill={c} style={{ animationDelay: `${i * 0.6}s` }} />
          <circle cx={x} cy={y} r="6" fill={c} stroke="#0a1530" strokeWidth="2.5" />
        </g>
      ))}
    </svg>
  );
}

export default function HeroMock() {
  const { t } = useTranslation();
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
      <div className="overflow-hidden rounded-2xl bg-navy-900 shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="flex h-10 items-center gap-1.5 border-b border-white/10 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-xs font-semibold text-white/70">MyTeam · {t('mock.window_title')}</span>
          <span className="ml-auto text-xs text-white/50">{t('mock.today')}</span>
        </div>
        <div className="grid grid-cols-4 gap-2 p-3">
          {STATS.map((stat) => (
            <div key={stat.key} className="rounded-lg bg-white/5 px-2.5 py-2 ring-1 ring-white/5">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white/60 sm:text-[11px]">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${stat.dot}`} />
                <span className="truncate">{t(`mock.${stat.key}`)}</span>
              </div>
              <p className="mt-1 text-lg font-extrabold text-white sm:text-xl">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="px-3 pb-3">
          <MapArt className="h-auto w-full" />
        </div>
      </div>

      {/* Smena ochildi */}
      <div className="float-slower absolute bottom-6 right-2 hidden w-52 sm:block rounded-xl bg-white p-3 text-navy-950 shadow-xl shadow-black/30 ring-1 ring-black/5 sm:-right-6 dark:bg-navy-800 dark:text-white dark:ring-white/10">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
            <MapPinCheck size={16} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold">{t('mock.shift_opened')}</p>
            <p className="text-[11px] text-slate-500 dark:text-navy-200">Dilnoza R. · 08:57</p>
          </div>
        </div>
        <p className="mt-2 rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          ✓ {t('mock.in_zone')}
        </p>
      </div>

      {/* Jonli tinglash */}
      <div className="float-slow absolute -bottom-6 left-2 w-60 rounded-xl bg-white p-3 text-navy-950 shadow-xl shadow-black/30 ring-1 ring-black/5 sm:-left-8 dark:bg-navy-800 dark:text-white dark:ring-white/10">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
            <Headphones size={16} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold">{t('mock.live_listen')}</p>
            <p className="truncate text-[11px] text-slate-500 dark:text-navy-200">Aziz K. · {t('mock.dept_sales')}</p>
          </div>
          <span className="text-[11px] font-bold tabular-nums text-rose-600 dark:text-rose-400">● 02:14</span>
        </div>
        <Waveform className="mt-2.5 h-7" barClass="bg-amber-500 dark:bg-amber-400" />
      </div>
    </div>
  );
}
