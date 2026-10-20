import { PRODUCT_NAMES } from '../lib/products';

// Bo'limlar uchun umumiy bo'laklar: logo, sarlavha, mahsulot belgisi

// Landing belgisi: aylana ichidagi ovoz to'lqini (ilovalardagi "M" plitkadan farqli)
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" className="fill-navy-800" />
      <path
        d="M4.5 16c2 0 2.5-3.5 4-3.5s2 7 3.75 7 2-12 3.75-12 2 17 3.75 17 2-12 3.75-12 2 7 3.75 7 2-3.5 3.75-3.5"
        fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
        className="stroke-amber-400"
      />
    </svg>
  );
}

export function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-xl font-extrabold tracking-tight text-white">My<span className="text-amber-400">Team</span></span>
    </span>
  );
}

// tone="dark" — navy fondagi bo'limlar uchun
export function SectionHeading({ eyebrow, title, desc, tone = 'light', align = 'center' }) {
  const dark = tone === 'dark';
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p data-aos="fade-up" className={`mb-3 text-sm font-bold uppercase tracking-[0.16em] ${dark ? 'text-amber-400' : 'text-accent'}`}>{eyebrow}</p>
      )}
      <h2 data-aos="fade-up" data-aos-delay="100" className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {desc && <p data-aos="fade-up" data-aos-delay="200" className={`mt-5 text-lg leading-relaxed ${dark ? 'text-navy-200' : 'text-muted'}`}>{desc}</p>}
    </div>
  );
}

export function ProductBadge({ product }) {
  const styles = product === 'plus'
    ? 'bg-amber-400 text-navy-950'
    : 'bg-navy-800 text-white dark:bg-navy-600';
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${styles}`}>
      {PRODUCT_NAMES[product]}
    </span>
  );
}
