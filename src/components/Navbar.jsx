import { useState, useEffect } from 'react';
import { Menu, X, Users, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ru' ? 'uz' : 'ru';
    i18n.changeLanguage(nextLang);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/#home' },
    { name: t('nav.about'), path: '/#about' },
    { name: t('nav.team'), path: '/#team' },
    { name: t('nav.corporate'), path: '/#corporate' },
    { name: t('nav.pricing'), path: '/#pricing' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3 border-b border-transparent dark:border-slate-800' 
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">

            <a href="/#home" className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-xl text-white group-hover:bg-blue-700 transition-colors shadow-sm">
                <Users size={24} />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">MyTeam</span>
            </a>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200 text-sm font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {/* Dark/Light Toggle Tugmasi (Desktop) */}
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="font-bold text-sm p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                {i18n.language === 'uz' ? 'RU' : 'UZ'}
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
              >
                {t('nav.start')}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              {/* Dark/Light Toggle Tugmasi (Mobil) */}
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Menyu */}
        <div
          className={`md:hidden absolute w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-4 pb-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
              className="mt-4 mx-4 bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3.5 rounded-xl font-semibold transition-all shadow-md"
            >
              {t('nav.start')}
            </button>
          </div>
        </div>
      </nav>

      {/* Pop-up Formasi */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity">
          <div data-aos="zoom-in" className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-1.5 transition-colors">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('navbar.modal.title')}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{t('navbar.modal.desc')}</p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('navbar.modal.company')}</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('navbar.modal.fullname')}</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('navbar.modal.email')}</label>
                <input type="email" className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2.5 focus:ring-2 focus:ring-blue-500" required />
              </div>
              <button type="submit" className="w-full mt-4 bg-blue-600 text-white rounded-lg py-3.5 font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                {t('navbar.modal.submit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}