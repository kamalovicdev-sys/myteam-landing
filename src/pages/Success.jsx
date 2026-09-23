import { Link } from 'react-router-dom';
import { ServerCrash, ArrowLeft } from 'lucide-react';

export default function Success() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div
        data-aos="zoom-in"
        className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 text-center border border-slate-100 dark:border-slate-700 relative overflow-hidden"
      >

        {/* Xatolik belgisi */}
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <ServerCrash className="w-12 h-12 text-red-600 dark:text-red-400 animate-pulse" />
        </div>

        <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">
          503
        </h1>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Xizmat vaqtincha ishlamayapti
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">
          Kechirasiz, hozirda to'lov tizimida texnik ta'mirlash ishlari olib borilmoqda. Iltimos, birozdan so'ng qayta urinib ko'ring.
        </p>

        {/* Harakatlar (Tugmalar) */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Asosiy sahifaga qaytish
          </Link>
        </div>

      </div>
    </div>
  );
}




























// import { useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { CheckCircle, ArrowRight, FileText } from 'lucide-react';
// import confetti from 'canvas-confetti';
//
// export default function Success() {
//   // Stripe to'lovdan so'ng URL ga ?payment_intent=... qo'shib qaytaradi
//   const [searchParams] = useSearchParams();
//   const paymentIntent = searchParams.get('payment_intent');
//
//   // Sahifa ochilganda konfeti (bayramona qog'ozchalar) otish effekti
//   useEffect(() => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ['#2563EB', '#60A5FA', '#10B981'] // Ko'k va yashil ranglar
//     });
//   }, []);
//
//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
//       <div
//         data-aos="zoom-in"
//         className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 text-center border border-slate-100 dark:border-slate-700 relative overflow-hidden"
//       >
//
//         {/* Yashil tasdiq belgisi */}
//         <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
//           <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 animate-bounce" />
//         </div>
//
//         <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
//           To'lov tasdiqlandi!
//         </h2>
//
//         <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">
//           Xaridingiz uchun tashakkur. MyTeam platformasining barcha imkoniyatlari siz uchun to'liq ochildi.
//         </p>
//
//         {/* Tranzaksiya ma'lumoti */}
//         <div className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-5 mb-8 text-left border border-slate-100 dark:border-slate-600">
//           <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider font-bold">Tranzaksiya raqami:</p>
//           <p className="font-mono text-sm text-slate-900 dark:text-white break-all">
//             {paymentIntent || "pi_3TEST_MOCK_TRANSACTION_123"}
//           </p>
//         </div>
//
//         {/* Harakatlar (Tugmalar) */}
//         <div className="flex flex-col gap-3">
//           <Link
//             to="/"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
//           >
//             Platformaga kirish <ArrowRight size={18} />
//           </Link>
//           <button
//             className="w-full bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 font-bold py-3.5 rounded-xl border border-slate-200 dark:border-slate-600 transition-all flex items-center justify-center gap-2"
//           >
//             Kvitansiyani yuklash <FileText size={18} />
//           </button>
//         </div>
//
//       </div>
//     </div>
//   );
// }