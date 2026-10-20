import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';

const MEMBERS = [
  { id: 'shuxrat', name: 'Shuxrat Zaxidov', image: '/team.jpg' },
  { id: 'pulat', name: "Po'lat Xudayberdiyevich", image: '/team2.png' },
  { id: 'mavlonxon', name: 'Mavlonxon Mamadaliev', image: '/team3.jpg' },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <section className="bg-page py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('team.eyebrow')} title={t('team.title')} desc={t('team.desc')} />

        <div className="mx-auto mt-14 grid max-w-2xl gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {MEMBERS.map((person, index) => (
            <div
              key={person.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <div className="relative h-80 overflow-hidden bg-sunken">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{t(`team.members.${person.id}.role`)}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-ink">{person.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{t(`team.members.${person.id}.bio`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
