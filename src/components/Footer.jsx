import { Users, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brend va Ijtimoiy tarmoqlar */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <a href="/#home" className="flex items-center gap-2 mb-4 group">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                <Users size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">MyTeam</span>
            </a>
            <p className="text-sm text-slate-400 mb-6 max-w-sm leading-relaxed transition-colors duration-300">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
            </div>
          </div>

          {/* Havolalar - Platforma */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide transition-colors duration-300">{t('footer.platform')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/#about" className="hover:text-blue-400 transition-colors">{t('footer.features')}</a></li>
              <li><a href="/#pricing" className="hover:text-blue-400 transition-colors">{t('footer.pricing')}</a></li>
              <li><a href="/#corporate" className="hover:text-blue-400 transition-colors">{t('footer.corporate')}</a></li>
              <li><a href="/#home" className="hover:text-blue-400 transition-colors">{t('footer.updates')}</a></li>
            </ul>
          </div>

          {/* Havolalar - Kompaniya */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide transition-colors duration-300">{t('footer.company')}</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/#team" className="hover:text-blue-400 transition-colors">{t('footer.team')}</a></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">{t('footer.careers')}</Link></li>
              <li><a href="/#home" className="hover:text-blue-400 transition-colors">{t('footer.blog')}</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>

        </div>

        {/* Eng pastki qism (Copyright) */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 transition-colors duration-300">
          <p>© {currentYear} MyTeam. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}