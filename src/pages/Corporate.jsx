import { ShieldCheck, Building2, HeadphonesIcon, ArrowRight } from 'lucide-react';

export default function Corporate() {
  const corporateBenefits = [
    {
      title: "Cheksiz ma'lumotlar tarmog'i",
      description: "Korporatsiyalar uchun maxsus ajratilgan serverlar va cheksiz xotira hajmi. Minglab xodimlar tizimda bir vaqtda ishlaganda ham tezlik pasaymaydi.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      icon: Building2
    },
    {
      title: "Yuqori darajadagi xavfsizlik (SSO)",
      description: "SAML, OAuth va korporativ xavfsizlik protokollari bilan to'liq integratsiya. Ma'lumotlaringiz bank darajasidagi shifrlash tizimi bilan himoyalanadi.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      icon: ShieldCheck
    },
    {
      title: "VIP menejer va 24/7 yordam",
      description: "Sizning biznesingiz uchun alohida biriktirilgan texnik mutaxassis. Har qanday muammo yoki qo'shimcha funksiyalar yuzasidan bevosita aloqa.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      icon: HeadphonesIcon
    }
  ];

  return (
    <div className="bg-white">

      {/* Dark Theme Hero Qismi */}
      <section className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Katta biznes uchun <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Katta yechimlar</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-slate-300">
            MyTeam Enterprise — yirik korporatsiyalar, davlat tashkilotlari va 500+ xodimga ega kompaniyalar uchun moslashtirilgan maxsus boshqaruv tizimi.
          </p>
          <div className="mt-10">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center">
              Savdo bo'limi bilan bog'lanish
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Rasm buzilmaydigan chiroyli kartochkalar (Features) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {corporateBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Rasm qutisi - Aslo buzilmaydi! */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative">
                  {/* aspect-[4/3] rasmni har qanday holatda bir xil proporsiyada ushlaydi */}
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Matn qutisi */}
                <div className="w-full lg:w-1/2">
                  <div className="h-14 w-14 rounded-xl bg-slate-900 flex items-center justify-center text-white mb-6">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {benefit.description}
                  </p>
                  <ul className="space-y-3">
                    {['Maxsus SLA shartnomasi', 'O\'z brendingiz ostida (White-label)', 'Cheksiz foydalanuvchilar'].map((item) => (
                      <li key={item} className="flex items-center text-slate-700 font-medium">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}