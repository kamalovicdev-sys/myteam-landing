import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './ui';
import { CONTACTS } from '../contacts';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const linkClass = 'text-navy-200 transition-colors hover:text-amber-400';

  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-950 py-14 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brend */}
          <div className="sm:col-span-2">
            <a href="/#home" className="inline-block" aria-label="MyTeam">
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{t('footer.desc')}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t('footer.product')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/#problems" className={linkClass}>{t('nav.problems')}</a></li>
              <li><a href="/#products" className={linkClass}>{t('nav.products')}</a></li>
              <li><a href="/#pricing" className={linkClass}>{t('nav.pricing')}</a></li>
              <li><a href="/#faq" className={linkClass}>{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t('footer.company')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/#team" className={linkClass}>{t('nav.team')}</a></li>
              <li><Link to="/careers" className={linkClass}>{t('nav.careers')}</Link></li>
              <li><a href="/#demo" className={linkClass}>{t('nav.demo')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href={`tel:${CONTACTS.phoneHref}`} className={linkClass}>{CONTACTS.phone}</a></li>
              <li><a href={`mailto:${CONTACTS.email}`} className={`${linkClass} break-all`}>{CONTACTS.email}</a></li>
              <li>{t('demo.hours')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-navy-300">
          <p>© {currentYear} MyTeam. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
