import { useTranslation } from 'react-i18next';
import { AlertTriangle, ShieldCheck, WifiOff, Wifi, Check, Receipt, Navigation, Presentation } from 'lucide-react';

// "Muammo → Yechim" kartalaridagi kichik isbot-mock'lar (landingning o'z uslubida)

const BARS = [0.5, 0.8, 0.35, 1, 0.6, 0.9, 0.4, 0.75, 0.55, 1, 0.3, 0.7, 0.85, 0.45, 0.95, 0.6, 0.35, 0.8, 0.5, 0.9, 0.4, 0.65];

export function Waveform({ className = 'h-8', barClass = 'bg-amber-500' }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {BARS.map((height, i) => (
        <span
          key={i}
          className={`wave-bar w-[3px] shrink-0 rounded-full ${barClass}`}
          style={{ height: `${height * 100}%`, animationDelay: `${(i % 7) * 0.12}s` }}
        />
      ))}
    </div>
  );
}

const Card = ({ children, className = '' }) => (
  <div aria-hidden="true" className={`rounded-xl border border-line bg-sunken p-3 text-xs ${className}`}>{children}</div>
);

const Chip = ({ tone, children }) => {
  const tones = {
    green: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300',
    rose: 'bg-rose-100 text-rose-800 dark:bg-rose-400/15 dark:text-rose-300',
    navy: 'bg-navy-100 text-navy-800 dark:bg-navy-700 dark:text-navy-100',
  };
  return <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-bold ${tones[tone]}`}>{children}</span>;
};

function RouteMini() {
  const { t } = useTranslation();
  return (
    <Card>
      <svg viewBox="0 0 260 110" className="h-auto w-full rounded-lg">
        <rect width="260" height="110" rx="8" fill="#0a1530" />
        <g stroke="#1d3260" strokeWidth="6" strokeLinecap="round">
          <path d="M0 55H260M130 0V110M0 15L260 95" />
        </g>
        <path d="M20 95 L60 70 L130 55 L170 40 L215 48 L240 20" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <circle cx="170" cy="40" r="9" fill="#fbbf24" fillOpacity="0.2" />
        <circle cx="170" cy="40" r="4" fill="#fbbf24" />
        <circle cx="240" cy="20" r="5" fill="#34d399" stroke="#0a1530" strokeWidth="2" />
      </svg>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1 font-semibold text-ink">
          <Navigation size={12} className="shrink-0 text-accent" />
          <span className="truncate">{t('mock.stop_pharmacy')}</span>
        </span>
        <Chip tone="navy">{t('mock.today_km')}</Chip>
      </div>
    </Card>
  );
}

function FakeMini() {
  const { t } = useTranslation();
  return (
    <Card className="space-y-2">
      <div className="flex items-center gap-2 rounded-lg bg-surface p-2">
        <AlertTriangle size={16} className="shrink-0 text-rose-500" />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ink">{t('mock.suspicious')}</p>
          <p className="text-muted">{t('mock.jump')}</p>
        </div>
        <Chip tone="rose">{t('mock.not_on_map')}</Chip>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-surface p-2">
        <ShieldCheck size={16} className="shrink-0 text-emerald-500" />
        <p className="min-w-0 flex-1 font-bold text-ink">{t('mock.mock_app')}</p>
        <Chip tone="green">{t('mock.blocked')}</Chip>
      </div>
    </Card>
  );
}

function AttendanceMini() {
  const { t } = useTranslation();
  const rows = [
    { name: 'Aziz K.', time: '08:57', tone: 'green', status: t('mock.on_time') },
    { name: 'Dilnoza R.', time: '09:21', tone: 'amber', status: t('mock.late_by') },
    { name: 'Sardor T.', time: '—', tone: 'rose', status: t('mock.absent') },
  ];
  return (
    <Card className="space-y-1.5">
      {rows.map((row) => (
        <div key={row.name} className="flex items-center gap-2 rounded-lg bg-surface px-2 py-1.5">
          <span className="w-20 truncate font-semibold text-ink">{row.name}</span>
          <span className="w-10 tabular-nums text-muted">{row.time}</span>
          <span className="ml-auto"><Chip tone={row.tone}>{row.status}</Chip></span>
        </div>
      ))}
    </Card>
  );
}

function ListenMini() {
  const { t } = useTranslation();
  return (
    <Card>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
        </span>
        <span className="font-bold text-ink">{t('mock.live')} · Aziz K.</span>
        <span className="ml-auto font-bold tabular-nums text-muted">02:14</span>
      </div>
      <Waveform className="my-3 h-8" barClass="bg-amber-500 dark:bg-amber-400" />
      <div className="flex flex-wrap items-center gap-2">
        <Chip tone="green">{t('mock.not_recorded')}</Chip>
        <span className="text-[11px] text-muted">{t('mock.audit')}</span>
      </div>
    </Card>
  );
}

function OfflineMini() {
  const { t } = useTranslation();
  return (
    <Card className="space-y-2">
      <div className="flex items-center gap-2 rounded-lg bg-surface p-2">
        <WifiOff size={16} className="shrink-0 text-muted" />
        <div className="min-w-0">
          <p className="font-bold text-ink">{t('mock.offline')}</p>
          <p className="text-muted">{t('mock.queued')}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-surface p-2">
        <Wifi size={16} className="shrink-0 text-emerald-500" />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ink">{t('mock.online')}</p>
          <p className="text-muted">{t('mock.sent')}</p>
        </div>
        <Check size={16} className="shrink-0 text-emerald-500" />
      </div>
    </Card>
  );
}

function KpiMini() {
  const { t } = useTranslation();
  const bars = [
    { key: 'attendance', value: 98 },
    { key: 'punctuality', value: 91 },
    { key: 'hours', value: 95 },
    { key: 'discipline', value: 100 },
  ];
  return (
    <Card className="flex gap-3">
      <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 py-2 text-white">
        <span className="text-[10px] font-bold uppercase text-navy-200">{t('mock.kpi')}</span>
        <span className="text-2xl font-extrabold">92%</span>
        <span className="mt-1 rounded bg-amber-400 px-1.5 text-[10px] font-extrabold text-navy-950">{t('mock.grade')} A</span>
        <span className="mt-1 text-[10px] text-navy-200">{t('mock.rank')}</span>
      </div>
      <div className="min-w-0 flex-1 space-y-1.5">
        {bars.map((bar) => (
          <div key={bar.key}>
            <div className="flex justify-between text-[11px]">
              <span className="truncate text-muted">{t(`mock.${bar.key}`)}</span>
              <span className="font-bold tabular-nums text-ink">{bar.value}%</span>
            </div>
            <div className="mt-0.5 h-1.5 rounded-full bg-line">
              <div className="h-1.5 rounded-full bg-amber-500 dark:bg-amber-400" style={{ width: `${bar.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ClmMini() {
  const { t } = useTranslation();
  return (
    <Card>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-navy-800 to-navy-950 p-3 text-white">
        <div className="flex items-center justify-between text-[10px] font-semibold text-navy-200">
          <span className="flex items-center gap-1"><Presentation size={12} /> {t('mock.slide')}</span>
          <span className="tabular-nums">00:42</span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <span className="block h-6 w-14 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
          <div className="flex-1 space-y-1.5">
            <span className="block h-1.5 w-full rounded bg-white/40" />
            <span className="block h-1.5 w-2/3 rounded bg-white/25" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Chip tone="green"><Check size={11} /> {t('mock.react_prescribes')}</Chip>
        <Chip tone="navy">{t('mock.react_will')}</Chip>
        <Chip tone="navy">{t('mock.react_no')}</Chip>
      </div>
    </Card>
  );
}

function ExpenseMini() {
  const { t } = useTranslation();
  return (
    <Card>
      <div className="flex items-center gap-2 rounded-lg bg-surface p-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sunken text-muted">
          <Receipt size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ink">{t('mock.fuel')}</p>
          <p className="text-muted">{t('mock.receipt')} · 1</p>
        </div>
        <span className="font-extrabold tabular-nums text-ink">180 000 {t('pricing.currency')}</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Chip tone="navy">{t('mock.gps_km')}</Chip>
        <Chip tone="amber">{t('mock.limit_left')}</Chip>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <span className="rounded-md bg-emerald-600 py-1 text-center text-[11px] font-bold text-white">{t('mock.approve')}</span>
        <span className="rounded-md border border-line py-1 text-center text-[11px] font-bold text-ink">{t('mock.reject')}</span>
      </div>
    </Card>
  );
}

const MINI_MOCKS = {
  gps: RouteMini,
  fake: FakeMini,
  attendance: AttendanceMini,
  listen: ListenMini,
  offline: OfflineMini,
  kpi: KpiMini,
  pharma: ClmMini,
  expenses: ExpenseMini,
};

export function MiniMock({ id }) {
  const Mock = MINI_MOCKS[id];
  return <Mock />;
}
