import { Activity, CheckSquare, BarChart3, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      name: 'Xodimlarni kuzatish',
      description: "Ish vaqtini avtomatik hisoblash va xodimlarning qaysi vazifa ustida ishlayotganini real vaqt rejimida ko'rib turish imkoniyati.",
      icon: Activity,
    },
    {
      name: 'Vazifalar taqsimoti',
      description: 'Loyihalarni qismlarga ajrating, mas\'ullarni belgilang va dedlaynlarni Kanban doskalari yordamida oson boshqaring.',
      icon: CheckSquare,
    },
    {
      name: 'Batafsil hisobotlar',
      description: 'Jamoa unumdorligi, sarflangan vaqt va loyiha xarajatlari bo\'yicha avtomatlashtirilgan, tushunarli grafiklar.',
      icon: BarChart3,
    },
    {
      name: 'Jamoaviy hamkorlik',
      description: 'Ichki chat, fayllar almashinuvi va muhokamalar — barchasi yagona xavfsiz muhitda.',
      icon: Users,
    },
    {
      name: 'Ma\'lumotlar xavfsizligi',
      description: 'Barcha ma\'lumotlaringiz shifrlangan va xavfsiz serverlarda saqlanadi. Kim nimani ko\'rishini o\'zingiz hal qilasiz.',
      icon: Shield,
    },
    {
      name: 'Tezkor ishlash',
      description: 'Platforma har qanday qurilmada — kompyuter, planshet va smartfonda birdek tez va qotmasdan ishlaydi.',
      icon: Zap,
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
            Loyiha haqida
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Ish jarayonini to'liq nazorat qiling
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 transition-colors duration-300">
            MyTeam — bu shunchaki boshqaruv tizimi emas, balki biznesingizni o'stirish, xodimlar salohiyatini to'g'ri yo'naltirish va qog'ozbozlikdan qutulish uchun eng zamonaviy yechimdir.
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