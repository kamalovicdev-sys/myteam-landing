import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Corporate from './pages/Corporate';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

const LandingPage = () => (
  <>
    <section id="home"><Home /></section>
    <section id="about" className="scroll-mt-16"><About /></section>
    <section id="team" className="scroll-mt-16"><Team /></section>
    <section id="corporate" className="scroll-mt-16"><Corporate /></section>
    <section id="pricing" className="scroll-mt-16"><Pricing /></section>
    <section id="contact" className="scroll-mt-16"><Contact /></section>
  </>
);

function App() {
  // 1. Mavzuni xotiradan o'qish yoki standart 'light' qilish
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // 2. Theme o'zgarganda <html> tegiga 'dark' klassini qo'shish/olish
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Xotiraga saqlash

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, [theme]);

  // 3. O'zgartirish funksiyasi
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      {/* 4. Asosiy fonga dark:bg-slate-900 va dark:text-slate-100 qo'shdik */}
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 overflow-hidden bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">

        {/* Navbar'ga theme va toggleTheme funksiyalarini uzatamiz */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;