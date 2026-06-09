import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-09-25T19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-5xl sm:text-6xl font-sans font-light text-brand-primary">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] sm:text-xs uppercase tracking-widest font-sans font-bold text-brand-secondary mt-4">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-start gap-8 sm:gap-16 mt-4 z-10" dir="ltr">
      <Item value={timeLeft.days} label="Days" />
      <div className="text-4xl sm:text-5xl font-sans font-light opacity-30 text-brand-primary mt-1">:</div>
      <Item value={timeLeft.hours} label="Hours" />
      <div className="text-4xl sm:text-5xl font-sans font-light opacity-30 text-brand-primary mt-1">:</div>
      <Item value={timeLeft.minutes} label="Minutes" />
    </div>
  );
}
