import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Careers from './pages/Careers';

// Mavzu xotiradan; xotira yopiq bo'lsa ham sahifa ishlayveradi
function savedTheme() {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

// Sahifa almashganda tepadan boshlash (bo'limga havola bo'lmasa)
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  const [theme, setTheme] = useState(savedTheme);
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  // Til almashganda matn uzunligi o'zgaradi: animatsiya nuqtalarini qayta hisoblaymiz
  useEffect(() => {
    AOS.refresh();
  }, [i18n.language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // xotira yopiq: mavzu faqat shu oynada qoladi
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col overflow-x-clip bg-page font-sans text-ink">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
