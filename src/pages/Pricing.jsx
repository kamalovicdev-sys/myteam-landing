import { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function Pricing() {
  // Modal oynani boshqarish uchun state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tiers = [
    {
      name: 'Basic',
      id: 'tier-basic',
      description: 'Kichik jamoalar va loyihalarni boshlash uchun eng zo\'r tanlov.',
      oldPrice: '$150',
      price: '$99',
      hasPrice: true,
      features: [
        '5 tagacha xodim',
        'Asosiy vazifalar taqsimoti',
        '10 GB bulutli xotira',
        'Standart xavfsizlik',
        'Email orqali yordam',
      ],
      cta: 'Bepul boshlash',
      mostPopular: false,
    },
    {
      name: 'Pro',
      id: 'tier-pro',
      description: 'O\'sayotgan bizneslar va professional jamoalar uchun to\'liq nazorat.',
      oldPrice: '$400',
      price: '$299',
      hasPrice: true,
      features: [
        '50 tagacha xodim',
        'Batafsil hisobotlar va Kanban',
        '100 GB bulutli xotira',
        'Zoom va Slack integratsiyasi',
        '24/7 ustuvor yordam',
      ],
      cta: 'Pro tarifini tanlash',
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      description: 'Yirik kompaniyalar uchun cheksiz imkoniyatlar va yuqori xavfsizlik.',
      hasPrice: false, // Narx ko'rsatilmaydi
      features: [
        'Cheksiz xodimlar',
        'O\'z brendingiz ostida (White-label)',
        'Cheksiz xotira hajmi',
        'Shaxsiy VIP menejer',
        'SSO va korporativ himoya',
      ],
      cta: 'Biz bilan bog\'lanish',
      mostPopular: false,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Narxlar</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Sizning biznesingizga mos tariflar
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600">
            Hozirgi aksiyamizdan foydalanib qoling! Barcha tariflarda 14 kunlik bepul sinov muddati mavjud.
          </p>
        </div>

        {/* Jadvallar */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 xl:p-10 flex flex-col justify-between transition-all duration-300 ${
                tier.mostPopular
                  ? 'bg-white ring-2 ring-blue-600 shadow-2xl scale-100 lg:scale-105 z-10'
                  : 'bg-slate-50 ring-1 ring-slate-200 hover:shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-2xl font-bold leading-8 ${tier.mostPopular ? 'text-blue-600' : 'text-slate-900'}`}>
                    {tier.name}
                  </h3>
                  {tier.mostPopular && (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold leading-5 text-blue-600">
                      Eng mashhur
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600 h-12">
                  {tier.description}
                </p>

                {/* Narx yoki Maxsus taklif matni */}
                <div className="mt-6 flex items-baseline gap-x-2 h-[48px]">
                  {tier.hasPrice ? (
                    <>
                      <span className="text-2xl font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                        {tier.oldPrice}
                      </span>
                      <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-slate-500">/oy</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center h-full">
                      Maxsus taklif
                    </span>
                  )}
                </div>

                <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className={`h-6 w-5 flex-none ${tier.mostPopular ? 'text-blue-600' : 'text-slate-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => !tier.hasPrice ? setIsModalOpen(true) : null}
                className={`mt-8 block w-full rounded-lg px-3 py-3.5 text-center text-sm font-semibold transition-colors ${
                  tier.mostPopular
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700'
                    : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 hover:bg-slate-50'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Korporativ Bog'lanish Formasi (Modal) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative animate-[fadeIn_0.2s_ease-out]">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Savdo bo'limi bilan bog'lanish</h3>
            <p className="text-sm text-slate-500 mb-6">
              Kompaniyangiz haqida qisqacha ma'lumot qoldiring. Menejerlarimiz eng qisqa vaqt ichida siz bilan bog'lanadi.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ism-sharifingiz</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Abdulla Qodirov" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Kompaniya nomi</label>
                <input type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="MyCompany MChJ" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Telefon raqam</label>
                <input type="tel" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+998 90 123 45 67" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Qo'shimcha izoh (ixtiyoriy)</label>
                <textarea rows="3" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Taxminan 500+ xodim uchun tizim kerak..."></textarea>
              </div>

              <button type="submit" className="w-full mt-2 bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                So'rov yuborish
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}