import { ShoppingCart, Truck, Landmark, Briefcase, ArrowRight } from 'lucide-react';

export default function Corporate() {
  const industries = [
    {
      title: "FMCG (Tez iste'mol qilinadigan tovarlar)",
      problem: "Savdo vakillarini (agentlarni) nazorat qilishning qiyinligi, soxta GPS hisobotlar va hududlarda internet yo'qligi sababli ma'lumotlarning yo'qolishi.",
      solution: "Oflayn rejimda ham ishlaydigan GPS nazorat. Internet uzilganda ham tizim marshrutni xotirada saqlaydi va aloqa tiklanganda markazga yuboradi. Agentlarning haqiqiy ishlagan vaqti aniq hisoblanadi.",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800",
      icon: ShoppingCart,
      bullets: ["Oflayn GPS treking", "Haqiqiy ish vaqtini hisoblash", "Yolg'on hisobotlarning oldini olish"]
    },
    {
      title: "Distribyutsiya va Farmatsevtika",
      problem: "Tibbiy vakillar (med-rep) va yetkazib beruvchilarning tashriflari noaniqligi, mijozlar bilan muloqot sifatining pastligi hamda logistikadagi kechikishlar.",
      solution: "Tashriflarni faqat belgilangan koordinatalarda tasdiqlash imkoniyati. Administratorlar masofadan turib xodimning mikrofonini yoqishi, mijoz bilan suhbatni tinglashi va xizmat sifatini baholashi mumkin.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?auto=format&fit=crop&q=80&w=800",
      icon: Truck,
      bullets: ["Masofadan ovoz yozish va tinglash", "Geofencing orqali tashrifni tasdiqlash", "Logistika va marshrut nazorati"]
    },
    {
      title: "Moliya va Bank sektori",
      problem: "Kollektorlar yoki kredit agentlarining mijozlar bilan til biriktirishi, tijorat sirlarining tarqalishi va kiberhujumlar xavfi.",
      solution: "Tizim \"Harbiy darajadagi shifrlash\" va WAF (kiber-qorovul) bilan himoyalangan. DDoSlarga qarshi turadi va xodimlarga faqat o'ziga ruxsat berilgan ma'lumotlarni ko'rish imkonini beradi (\"Никому не доверяй\" tamoyili).",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      icon: Landmark,
      bullets: ["Bank darajasidagi xavfsizlik (WAF)", "Mijozlar bazasini o'g'irlashdan himoya", "Agentlarning qat'iy nazorati"]
    },
    {
      title: "B2B Bizneslar va Kompaniyalar",
      problem: "Loyihalarni boshqarishdagi tartibsizlik, bo'limlar o'rtasidagi aloqaning sustligi, unumdorlikni o'lchash va HR hisobotlarini yig'ishga ko'p vaqt ketishi.",
      solution: "Barcha xodimlar va loyihalarni yagona ekotizimda birlashtirish. Vazifalarni Kanban doskalarida taqsimlash, ichki xavfsiz chat va jamoa unumdorligi bo'yicha real vaqtda avtomatlashtirilgan analitik hisobotlar.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      icon: Briefcase,
      bullets: ["Yagona platformada hamkorlik", "Avtomatlashtirilgan HR analitika", "Vazifalar va loyihalar menejmenti"]
    }
  ];

  return (
    <div className="bg-white">

      {/* Dark Theme Hero Qismi */}
      <section className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Sizning biznesingiz uchun <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Aniq yechimlar</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-slate-300">
            FMCG, Farmatsevtika, Bank va yirik B2B kompaniyalari qanday muammolarga duch kelishini bilamiz va ularni IT yechimlar orqali avtomatlashtiramiz.
          </p>
          <div className="mt-10">
            {/* Prezentatsiyani yuklab olish tugmasi */}
            <a
              href="/Mehrzod Business Group.pptx"
              download="Mehrzod Business Group.pptx"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center shadow-lg"
            >
              Prezentatsiyani yuklab oling
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Sohalar bo'yicha kartochkalar (Features) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Rasm qutisi */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Matn qutisi */}
                <div className="w-full lg:w-1/2">
                  <div className="h-14 w-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <industry.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{industry.title}</h3>

                  {/* Muammo qismi */}
                  <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="text-sm font-bold text-red-700 uppercase tracking-wider mb-1">Muammo</p>
                    <p className="text-slate-700">{industry.problem}</p>
                  </div>

                  {/* Yechim qismi */}
                  <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-sm font-bold text-green-700 uppercase tracking-wider mb-1">Yechim</p>
                    <p className="text-slate-700">{industry.solution}</p>
                  </div>

                  <ul className="space-y-3">
                    {industry.bullets.map((item) => (
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