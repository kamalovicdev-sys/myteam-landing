import { Mic, MapPin, Clock, Truck, BarChart3, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      name: 'Xodimlar qurilmasini tinglash',
      description: "Administratorlar masofadan turib qurilma mikrofonini yoqishi va xodimning mijoz bilan qanday muloqot qilayotganini real vaqtda kuzatishi yoki yozib olishi mumkin.",
      icon: Mic,
    },
    {
      name: 'Xodimlar joylashuvini kuzatish',
      description: "GPS orqali xodimlarning aniq joylashuvini nazorat qiling. Internet uzilganda ham ma'lumotlar qurilmada saqlanadi va aloqa tiklanganda markazga yuboriladi.",
      icon: MapPin,
    },
    {
      name: 'Xodimlar ish vaqtini hisoblash',
      description: "Tizimga kirish va chiqish vaqtlarini soniyasigacha aniq hisoblang. Kechikishlarni oldini oling va faqat haqiqatda ishlangan soatlar uchun pul to'lang.",
      icon: Clock,
    },
    {
      name: 'Distribyutsion CRM',
      description: "Savdo agentlari, yetkazib beruvchilar va haridorlar o'rtasidagi barcha savdo va taqsimot jarayonlarini yagona avtomatlashtirilgan platformada boshqaring.",
      icon: Truck,
    },
    {
      name: 'Analitik tahlillar',
      description: "Tashriflar, ishlangan soatlar va bosib o'tilgan masofa bo'yicha real vaqt rejimida avtomatlashtirilgan hisobotlarni oling. HR va boshqaruv ishini osonlashtiring.",
      icon: BarChart3,
    },
    {
      name: "Ma'lumotlar xavfsizligi",
      description: "Barcha ma'lumotlar harbiy darajadagi shifrlash va WAF kiber-qorovul tizimi yordamida himoyalangan. Tizim DdoS va xakerlik hujumlariga bardoshli.",
      icon: Shield,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha qismi */}
        <div
          data-aos="fade-up"
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-wide transition-colors duration-300">
            Mijozlar muammolariga yechimlar
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Biznesingizdagi bo'shliqlarni IT bilan to'ldiramiz
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Kompaniyangizdagi nazoratsizlik, hisobotlardagi noaniqliklar va ortiqcha xarajatlar kabi asosiy muammolarni aynan sizning biznesingizga moslashgan raqamli yechimlar orqali bartaraf etamiz.
          </p>
        </div>

        {/* Afzalliklar (Features) to'ri */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                data-aos="fade-up"
                data-aos-delay={index * 100} // Har biri ketma-ket chiqadi
                className="flex flex-col bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 dark:border-slate-700/50 hover:-translate-y-2 group"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-slate-900 dark:text-white transition-colors duration-300">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="flex-auto">
                    {feature.description}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}