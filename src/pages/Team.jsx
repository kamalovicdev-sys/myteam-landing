import { Linkedin, Github, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Shuxrat Zaxidov',
      role: t('team.members.shuxrat.role'),
      image: '/team.jpg',
      bio: t('team.members.shuxrat.bio'),
    },
    {
      name: 'Po\'lat Xudayberdiyevich',
      role: t('team.members.pulat.role'),
      image: '/team2.png',
      bio: t('team.members.pulat.bio'),
    },
    {
      name: 'Mavlonxon Mamadaliev',
      role: t('team.members.mavlonxon.role'),
      image: '/team3.jpg',
      bio: t('team.members.mavlonxon.bio'),
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha qismi */}
        <div className="mx-auto max-w-2xl text-center mb-16" data-aos="fade-up">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-wide transition-colors">
            {t('nav.team')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors">
            {t('team.title')}
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400 transition-colors">
            {t('team.desc')}
          </p>
        </div>

        {/* Jamoa Gridi */}
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((person, index) => (
            <div
              key={person.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/60 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-300 flex flex-col"
            >

              {/* RASM QISMI */}
              <div className="relative w-full h-[380px] bg-slate-100 dark:bg-slate-700/50 overflow-hidden border-b border-slate-100 dark:border-slate-700/60">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-[center_-1px] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 z-10 relative"
                />

                {/* Orqa fondagi yengil dekorativ blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 z-0"></div>
              </div>

              {/* MA'LUMOTLAR QISMI */}
              <div className="p-8 flex flex-col flex-grow text-left">

                {/* Lavozimi */}
                <p className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2 transition-colors">
                  {person.role}
                </p>

                {/* Ismi */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                  {person.name}
                </h3>

                {/* Bio */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-8 transition-colors">
                  {person.bio}
                </p>

                {/* Ijtimoiy tarmoqlar */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-700 flex gap-4 transition-colors">
                  <a href="#" className="p-2 -ml-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 text-slate-400 hover:text-blue-400 transition-colors bg-transparent hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}