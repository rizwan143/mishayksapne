"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FUNDRAISER } from "@/app/lib/data";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const diff = FUNDRAISER.departureDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1920&q=80"
          alt="Baku Boulevard"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
        >
          Departure Countdown
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Baku Awaits in
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-white/40 mb-12 text-sm"
        >
          Departing: {FUNDRAISER.departureDate.toLocaleDateString("en-PK", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/15 group hover:border-gold-500/35 transition-all"
            >
              <div className="font-display text-5xl sm:text-6xl font-bold gold-text mb-2 tabular-nums">
                {pad(unit.value)}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest">{unit.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm"
        >
          <span>✈️ Departure: Sept 15, 2025</span>
          <span>🏨 6 Nights in Baku</span>
          <span>👥 Group of {FUNDRAISER.groupSize}</span>
          <span>📍 Azerbaijan</span>
        </motion.div>
      </div>
    </section>
  );
}
