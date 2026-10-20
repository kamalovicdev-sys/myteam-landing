import { useEffect, useState } from 'react';
import Hero from '../sections/Hero';
import Problems from '../sections/Problems';
import Products from '../sections/Products';
import HowItWorks from '../sections/HowItWorks';
import Trust from '../sections/Trust';
import Industries from '../sections/Industries';
import Pricing from '../sections/Pricing';
import Faq from '../sections/Faq';
import Team from '../sections/Team';
import Demo from '../sections/Demo';

// Bosh sahifa: "muammo → yechim" tartibida
export default function Landing() {
  // Mahsulot kartasidagi "Demo so'rash" formadagi tanlovni ham o'zgartiradi
  const [demoProduct, setDemoProduct] = useState('myteam');

  // Boshqa sahifadan "/#bo'lim" havolasi bilan kelinganda bo'limga tushirish
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <div id="home"><Hero /></div>
      <div id="problems" className="scroll-mt-16"><Problems /></div>
      <div id="products" className="scroll-mt-16"><Products onPick={setDemoProduct} /></div>
      <div id="how" className="scroll-mt-16"><HowItWorks /></div>
      <div id="trust" className="scroll-mt-16"><Trust /></div>
      <div id="industries" className="scroll-mt-16"><Industries /></div>
      <div id="pricing" className="scroll-mt-16"><Pricing /></div>
      <div id="faq" className="scroll-mt-16"><Faq /></div>
      <div id="team" className="scroll-mt-16"><Team /></div>
      <div id="demo" className="scroll-mt-16"><Demo product={demoProduct} onProductChange={setDemoProduct} /></div>
    </>
  );
}
