import { useEffect, useRef, useState } from 'react';

// Raqamlar animatsiyasi. Harakatni kamaytirish yoqilgan bo'lsa — darhol yakuniy qiymat.

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const easeOut = (p) => 1 - (1 - p) ** 3;

// "30 s", "14 kun" kabi matndagi sonni ko'ringanda 0 dan sanaydi; soni yo'q matn o'zgarmaydi
export function CountUp({ value, duration = 1400 }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const ref = useRef(null);
  const [shown, setShown] = useState(() => (target === null || reducedMotion() ? target : 0));

  useEffect(() => {
    if (target === null || reducedMotion()) return undefined;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setShown(Math.round(target * easeOut(progress)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return <span ref={ref}>{match ? `${shown}${match[2]}` : value}</span>;
}

// Qiymat o'zgarganda eski sondan yangisiga silliq o'tadi (narx kalkulyatori)
export function AnimatedNumber({ value, format = String, duration = 450 }) {
  const [shown, setShown] = useState(value);
  const shownRef = useRef(value);

  useEffect(() => {
    const from = shownRef.current;
    if (from === value) return undefined;
    const length = reducedMotion() ? 0 : duration;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = length ? Math.min((now - start) / length, 1) : 1;
      const next = Math.round(from + (value - from) * easeOut(progress));
      shownRef.current = next;
      setShown(next);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return <>{format(shown)}</>;
}
