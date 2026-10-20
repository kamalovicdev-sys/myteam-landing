import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';

export default function Faq() {
  const { t } = useTranslation();

  return (
    <section className="bg-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} />

        <div className="mt-12 space-y-3">
          {t('faq.items', { returnObjects: true }).map((item, index) => (
            <details key={item.q} data-aos="fade-up" data-aos-delay={index * 60} data-aos-offset="20" className="group rounded-2xl border border-line bg-surface open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
