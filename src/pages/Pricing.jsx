import { useState } from 'react';
import { Check, X, CreditCard, Smartphone, ShieldCheck, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51T9y3vCcCzPz0NGS1P3Nx688VJ6yOk8kTTLUT6d7EJgacAd5U1bo46Pk8Fn3BqLZ755xNWlqSR78LZqFvVnqXbU800F57o4baQ');

export default function Pricing() {
  const { t } = useTranslation();

  const [isEnterpriseModalOpen, setIsEnterpriseModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [clientSecret, setClientSecret] = useState("");
  const [isFetchingIntent, setIsFetchingIntent] = useState(false);
  const [withCrm, setWithCrm] = useState(false);

  const tiers = [
    {
      name: 'BASIC',
      id: 'tier-basic',
      description: t('pricing.basic.desc'),
      price: '$99',
      period: t('pricing.period.month'),
      hasPrice: true,
      features: [
        t('pricing.features.conn5'),
        t('pricing.features.time'),
        t('pricing.features.gps'),
        t('pricing.features.mic'),
        t('pricing.features.email_support'),
      ],
      cta: t('pricing.basic.btn'),
      mostPopular: false,
    },
    {
      name: 'BUSINESS',
      id: 'tier-business',
      description: t('pricing.business.desc'),
      price: withCrm ? `$${399 + 39}` : '$399',
      period: t('pricing.period.month'),
      hasPrice: true,
      features: [
        t('pricing.features.conn35'),
        t('pricing.features.time'),
        t('pricing.features.gps'),
        t('pricing.features.mic'),
        t('pricing.features.quarterly_archive'),
        t('pricing.features.tg_support'),
        ...(withCrm ? [t('pricing.features.crm')] : []),
      ],
      cta: t('pricing.business.btn'),
      mostPopular: true,
    },
    {
      name: 'ENTERPRISE',
      id: 'tier-enterprise',
      description: t('pricing.enterprise.desc'),
      price: withCrm ? `$${3990 + 348}` : '$3990',
      period: t('pricing.period.year'),
      hasPrice: true,
      features: [
        t('pricing.features.conn50'),
        t('pricing.features.time'),
        t('pricing.features.gps'),
        t('pricing.features.mic'),
        t('pricing.features.unlimited_archive'),
        t('pricing.features.personal_manager'),
        ...(withCrm ? [t('pricing.features.crm')] : []),
      ],
      cta: t('pricing.enterprise.btn'),
      mostPopular: false,
    },
  ];

  const handleSelectPlan = (tier) => {
    if (!tier.hasPrice) {
      setIsEnterpriseModalOpen(true);
    } else {
      setSelectedPlan(tier);
      setClientSecret("");
      setIsPaymentModalOpen(true);
    }
  };

  const handleProceedToPayment = async () => {
    setIsFetchingIntent(true);

    try {
      if (paymentMethod === 'stripe') {
        const response = await fetch("http://localhost:4242/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan_id: selectedPlan.id, with_crm: withCrm }),
        });

        const data = await response.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error("Xatolik:", data.error);
        }
      } else if (paymentMethod === 'uzumpay') {
        const response = await fetch("http://localhost:4242/create-uzumpay-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan_id: selectedPlan.id, with_crm: withCrm }),
        });

        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error("Xatolik:", data.error);
        }
      }
    } catch (error) {
      console.error("Backend bilan bog'lanishda xatolik:", error);
    }

    setIsFetchingIntent(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32 relative transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha */}
        <div className="mx-auto max-w-4xl text-center" data-aos="fade-up">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {t('pricing.subtitle')}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl transition-colors uppercase">
            {t('pricing.title')}
          </p>
        </div>

        {/* CRM QO'SHISH TOGGLE (Kaliti) */}
        <div className="mt-10 flex justify-center items-center gap-4" data-aos="fade-up" data-aos-delay="100">
          <span className={`text-base font-medium transition-colors ${!withCrm ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
            {t('pricing.standard_services')}
          </span>
          <button
            type="button"
            className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
              withCrm ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'
            }`}
            onClick={() => setWithCrm(!withCrm)}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                withCrm ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-base font-medium flex items-center gap-2 transition-colors ${withCrm ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
            {t('pricing.with_crm')}
            <span className="text-[10px] uppercase font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full flex items-center gap-1">
              <Plus size={12} />
            </span>
          </span>
        </div>

        {/* Jadvallar Gridi */}
        <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`rounded-3xl p-8 xl:p-10 flex flex-col justify-between transition-all duration-300 ${
                tier.mostPopular
                  ? 'bg-white dark:bg-slate-800 ring-2 ring-blue-600 dark:ring-blue-500 shadow-2xl shadow-blue-900/20 scale-100 lg:scale-105 z-10'
                  : 'bg-slate-50 dark:bg-slate-800/50 ring-1 ring-slate-200 dark:ring-slate-700 hover:shadow-xl dark:hover:shadow-slate-900/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-2xl font-bold leading-8 transition-colors ${tier.mostPopular ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                    {tier.name}
                  </h3>
                  {tier.mostPopular && (
                    <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 px-3 py-1 text-xs font-semibold leading-5 text-blue-600 dark:text-blue-400 transition-colors">
                      {t('pricing.most_popular')}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-x-2 h-[48px]">
                  {tier.hasPrice ? (
                    <>
                      <span className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400 transition-colors">{tier.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center h-full transition-colors">
                      {t('pricing.special_offer')}
                    </span>
                  )}
                </div>

                <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400 transition-colors">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex gap-x-3 ${feature.includes('CRM') ? 'font-bold text-slate-900 dark:text-white bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg -mx-2' : ''}`}>
                      <Check className={`h-6 w-5 flex-none transition-colors ${tier.mostPopular || feature.includes('CRM') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSelectPlan(tier)}
                className={`mt-8 block w-full rounded-xl px-3 py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                  tier.mostPopular
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1'
                    : 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-200 dark:ring-slate-600 hover:ring-blue-300 dark:hover:ring-slate-500 hover:bg-slate-50 dark:hover:bg-slate-600 hover:-translate-y-1'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Ilova haqidagi muhim qoidalar / Eskatmalar */}
        <div className="mx-auto mt-12 max-w-4xl text-sm leading-6 text-slate-500 dark:text-slate-400 space-y-2 px-4 sm:px-0">
          <p>• {t('pricing.note1')}</p>
          <p>• {t('pricing.note2')}</p>
        </div>

      </div>

      {/* ========================================================= */}
      {/* MODAL 1: ENTERPRISE (Bog'lanish formasi - Ehtiyot shart) */}
      {/* ========================================================= */}
      {isEnterpriseModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div data-aos="zoom-in" className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative">
            <button onClick={() => setIsEnterpriseModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-2 transition-colors">
              <X size={20} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('pricing.modal.corporate')}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{t('pricing.modal.contact_soon')}</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsEnterpriseModalOpen(false); }}>
              <input type="text" placeholder={t('pricing.modal.company_name')} className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" required />
              <input type="tel" placeholder={t('pricing.modal.phone')} className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" required />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3.5 font-bold transition-all shadow-md hover:-translate-y-0.5">{t('pricing.modal.send')}</button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: TO'LOV VA RO'YXATDAN O'TISH (Stripe / Uzum Pay)  */}
      {/* ========================================================= */}
      {isPaymentModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-opacity overflow-y-auto">
          <div data-aos="zoom-in" className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl relative my-8 flex flex-col overflow-hidden border border-slate-100 dark:border-slate-700">

            <button
              onClick={() => setIsPaymentModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-2 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Sarlavha qismi */}
            <div className="bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase mb-1 block">{t('pricing.modal.secure_payment')}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {selectedPlan.name} {t('pricing.modal.activate')} {withCrm && t('pricing.modal.with_crm_text')}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-500" /> {t('pricing.modal.ssl')}
              </p>
            </div>

            {/* Asosiy kontent */}
            {!clientSecret ? (
              <>
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Shaxsiy Ma'lumotlar */}
                  <div className="space-y-5">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg border-b border-slate-100 dark:border-slate-700 pb-2">{t('pricing.modal.personal_data')}</h4>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('pricing.modal.fullname')}</label>
                      <input type="text" placeholder={t('pricing.modal.fullname_placeholder')} className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{t('pricing.modal.email')}</label>
                      <input type="email" placeholder="ali@example.com" className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white px-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                    </div>
                  </div>

                  {/* To'lov tizimini tanlash */}
                  <div className="space-y-5">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg border-b border-slate-100 dark:border-slate-700 pb-2">{t('pricing.modal.payment_system')}</h4>
                    <div className="space-y-3">

                      {/* Uzum Pay tanlovi */}
                      <div
                        onClick={() => setPaymentMethod('uzumpay')}
                        className={`cursor-pointer rounded-xl border-2 p-4 flex items-center gap-4 transition-all duration-200 ${
                          paymentMethod === 'uzumpay' 
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${paymentMethod === 'uzumpay' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                          <Smartphone size={24} />
                        </div>
                        <div>
                          <p className={`font-bold ${paymentMethod === 'uzumpay' ? 'text-blue-900 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>Uzum Pay</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{t('pricing.modal.uzb_cards')}</p>
                        </div>
                      </div>

                      {/* Stripe tanlovi */}
                      <div
                        onClick={() => setPaymentMethod('stripe')}
                        className={`cursor-pointer rounded-xl border-2 p-4 flex items-center gap-4 transition-all duration-200 ${
                          paymentMethod === 'stripe' 
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500'
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${paymentMethod === 'stripe' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                          <CreditCard size={24} />
                        </div>
                        <div>
                          <p className={`font-bold ${paymentMethod === 'stripe' ? 'text-blue-900 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>Stripe</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{t('pricing.modal.intl_cards')}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/80 p-6 sm:px-8 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t('pricing.modal.total_amount')}</p>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {selectedPlan.price} <span className="text-base font-medium text-slate-500">{selectedPlan.period}</span>
                    </p>
                  </div>
                  <button
                    onClick={handleProceedToPayment}
                    disabled={isFetchingIntent}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-md transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isFetchingIntent ? t('pricing.modal.waiting') : t('pricing.modal.continue')} <CreditCard size={18} />
                  </button>
                </div>
              </>
            ) : (
              <div className="p-6 sm:p-8 bg-white dark:bg-slate-800">
                <Elements
                  options={{
                    clientSecret,
                    appearance: {
                      theme: document.documentElement.classList.contains('dark') ? 'night' : 'stripe'
                    }
                  }}
                  stripe={stripePromise}
                >
                  <CheckoutForm />
                </Elements>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setClientSecret("")}
                    className="text-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors underline"
                  >
                    {t('pricing.modal.go_back')}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}