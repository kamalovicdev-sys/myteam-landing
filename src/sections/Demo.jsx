import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/ui';
import { CONTACTS, WEB3FORMS_KEY } from '../contacts';

const inputClass = 'w-full rounded-xl border border-line bg-page px-4 py-3 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-amber-400';

export default function Demo({ product, onProductChange }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', t('demo.form.subject'));
    formData.append('from_name', 'my-team.uz');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        e.target.reset();
        onProductChange('myteam');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const label = (text, optional) => (
    <span className="mb-1.5 block text-sm font-bold text-ink">
      {text}
      {optional && <span className="font-medium text-muted"> ({t('demo.form.optional')})</span>}
    </span>
  );

  const contacts = [
    { icon: Phone, text: CONTACTS.phone, note: t('demo.phone_note'), href: `tel:${CONTACTS.phoneHref}` },
    { icon: Mail, text: CONTACTS.email, note: t('demo.email_note'), href: `mailto:${CONTACTS.email}` },
    { icon: MapPin, text: t('demo.address'), note: t('demo.address_note'), href: CONTACTS.mapUrl },
    { icon: Clock, text: t('demo.hours') },
  ];

  return (
    <section className="bg-page py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading align="left" title={t('demo.title')} desc={t('demo.desc')} />

          <ul className="mt-10 space-y-5">
            {contacts.map((contact, index) => {
              const { text, note, href } = contact;
              const body = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-amber-400">
                    <contact.icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block break-words font-bold text-ink">{text}</span>
                    {note && <span className="block text-sm text-muted">{note}</span>}
                  </span>
                </>
              );
              return (
                <li key={text} data-aos="fade-right" data-aos-delay={index * 100}>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-xl transition-opacity hover:opacity-80">
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div data-aos="fade-left" data-aos-delay="150" className="rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Botlar uchun tuzoq: odam ko'rmaydi */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                {label(t('demo.form.name'))}
                <input type="text" name="name" required autoComplete="name" placeholder={t('demo.form.name_placeholder')} className={inputClass} />
              </label>
              <label className="block">
                {label(t('demo.form.company'))}
                <input type="text" name="company" required autoComplete="organization" placeholder={t('demo.form.company_placeholder')} className={inputClass} />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                {label(t('demo.form.phone'))}
                <input type="tel" name="phone" required autoComplete="tel" placeholder="+998 90 123 45 67" className={inputClass} />
              </label>
              <label className="block">
                {label(t('demo.form.employees'), true)}
                <input type="number" name="employees" min={1} placeholder={t('demo.form.employees_placeholder')} className={inputClass} />
              </label>
            </div>

            <fieldset>
              <legend className="mb-2 block text-sm font-bold text-ink">{t('demo.form.product')}</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['myteam', 'plus', 'unsure'].map((key) => (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${
                      product === key ? 'border-amber-400 bg-amber-400/10 text-ink' : 'border-line text-muted hover:border-amber-400/60'
                    }`}
                  >
                    <input
                      type="radio"
                      name="product"
                      value={t(`demo.form.product_${key}`)}
                      checked={product === key}
                      onChange={() => onProductChange(key)}
                      className="accent-amber-500"
                    />
                    {t(`demo.form.product_${key}`)}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              {label(t('demo.form.message'), true)}
              <textarea name="message" rows={3} placeholder={t('demo.form.message_placeholder')} className={`${inputClass} resize-none`} />
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-4 font-bold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> {t('demo.form.sending')}</>
              ) : (
                <><Send className="h-5 w-5" /> {t('demo.form.submit')}</>
              )}
            </button>

            {status === 'success' && (
              <p role="status" className="flex gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">
                <CheckCircle2 className="h-5 w-5 shrink-0" /> {t('demo.form.success')}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="flex gap-2 rounded-xl bg-rose-50 p-4 text-sm font-semibold text-rose-800 dark:bg-rose-400/10 dark:text-rose-300">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{t('demo.form.error')} <a href={`tel:${CONTACTS.phoneHref}`} className="underline">{CONTACTS.phone}</a></span>
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Ofis joylashuvi */}
      <div data-aos="fade-up" className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-sm">
          <iframe
            src={CONTACTS.mapWidget}
            title={t('demo.map_title')}
            loading="lazy"
            allowFullScreen
            className="block h-[340px] w-full sm:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
