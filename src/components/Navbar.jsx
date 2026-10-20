import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from './ui';

export default function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'uz' : 'ru');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Havolalar "/#..." ko'rinishida: Karyera sahifasidan ham bosh sahifaning bo'limiga olib boradi
  const navLinks = [
    { name: t('nav.problems'), path: '/#problems' },
    { name: t('nav.products'), path: '/#products' },
    { name: t('nav.how'), path: '/#how' },
    { name: t('nav.pricing'), path: '/#pricing' },
    { name: t('nav.faq'), path: '/#faq' },
    { name: t('nav.contact'), path: '/#demo' },
  ];

  const iconButton = 'flex h-10 w-10 items-center justify-center rounded-lg text-navy-100 transition-colors hover:bg-white/10 hover:text-white';

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/90 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-navy-950'
      } border-b border-white/10`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="/#home" aria-label="MyTeam">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button onClick={toggleLanguage} className={`${iconButton} w-auto px-2.5 text-sm font-bold`} aria-label={t('nav.lang')}>
            {i18n.language === 'uz' ? 'RU' : 'UZ'}
          </button>
          <button onClick={toggleTheme} className={iconButton} aria-label={t('nav.theme')}>
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a
            href="/#demo"
            className="ml-2 hidden rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-amber-300 sm:inline-flex"
          >
            {t('nav.demo')}
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className={`${iconButton} lg:hidden`} aria-label={t('nav.menu')} aria-expanded={isOpen}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobil menyu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-navy-950 px-4 pb-5 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-navy-100 hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#demo"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded-lg bg-amber-400 px-4 py-3 text-center font-bold text-navy-950 hover:bg-amber-300"
          >
            {t('nav.demo')}
          </a>
        </div>
      )}
    </nav>
  );
}
