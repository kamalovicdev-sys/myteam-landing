import { MapPin, Clock, ArrowRight, Code, Terminal } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Muhandislik',
      type: "To'liq stavka",
      location: 'Toshkent / Masofaviy',
      icon: Code,
      description: "Bizning asosiy platformamizni rivojlantirish uchun tajribali React va Node.js dasturchisini qidiryapmiz.",
      requirements: ['React va Node.js', '3+ yillik tajriba', 'Muammolarni mustaqil hal qila olish']
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Infratuzilma',
      type: "To'liq stavka",
      location: 'Toshkent, IT Park',
      icon: Terminal,
      description: "Bulutli infratuzilmamiz (AWS/Docker/Kubernetes) barqarorligi va xavfsizligini ta'minlash uchun mutaxassis kerak.",
      requirements: ['AWS / CI/CD', 'Docker & Kubernetes', 'Linux ma\'muriyati']
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Sarlavha qismi */}
        <div className="mx-auto max-w-2xl text-center mb-16" data-aos="fade-up">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">
            Karyera
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bizning jamoaga qo'shiling
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            MyTeam loyihasini rivojlantirishda o'z hissangizni qo'shing. Biz doimo o'z ishining ustalarini qidiramiz!
          </p>
        </div>

        {/* Bo'sh ish o'rinlari (Cards) */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    {job.department}
                  </span>
                  <div className="p-2 bg-white rounded-lg text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors shadow-sm">
                    <job.icon size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>

                <p className="text-slate-600 mb-6 h-12">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                    <Clock size={16} className="mr-2 text-slate-400" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                    <MapPin size={16} className="mr-2 text-slate-400" />
                    {job.location}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Talablar:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {job.requirements.map(req => (
                      <li key={req} className="text-xs font-medium text-slate-600 bg-slate-200/50 px-2.5 py-1 rounded-md">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold py-3 rounded-xl transition-all duration-300">
                Topshirish <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}