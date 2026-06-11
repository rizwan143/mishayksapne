"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { getRaised, subscribe, TARGET } from "@/app/lib/store";
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

function formatPKR(n: number) {
  if (n >= 1000000) return `PKR ${(n / 1000000).toFixed(2)}M`;
  if (n >= 1000) return `PKR ${(n / 1000).toFixed(0)}K`;
  return `PKR ${n}`;
}

function AnimatedNumber({ value, duration = 1500 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<number>(0);

  useEffect(() => {
    const start = ref.current;
    const end = value;
    const startTime = performance.now();
    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * ease));
      if (progress < 1) requestAnimationFrame(step);
      else ref.current = end;
    }
    requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{formatPKR(display)}</span>;
}

export default function ProgressSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [raised, setRaised] = useState(getRaised());

  useEffect(() => {
    const unsub = subscribe(() => setRaised(getRaised()));
    return () => { unsub(); };
  }, []);

  const pct = Math.min((raised / TARGET) * 100, 100);
  const remaining = TARGET - raised;

  const chartData = [
    { name: "Raised", value: raised, fill: "#D4A017" },
    { name: "Remaining", value: remaining, fill: "rgba(255,255,255,0.06)" },
  ];

  return (
    <section id="progress" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Live Fundraising Progress
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            We're <span className="gold-text">{pct.toFixed(1)}%</span> There
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 flex flex-col items-center"
          >
            <div className="relative w-full" style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    startAngle={90}
                    endAngle={-270}
                    strokeWidth={0}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold gold-text font-display">{pct.toFixed(0)}%</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Funded</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold-500" />
                <span className="text-white/60 text-sm">Raised</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <span className="text-white/60 text-sm">Remaining</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="space-y-5">
            {/* Target */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6 flex items-center justify-between group hover:border-gold-500/30 transition-all"
            >
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Total Target</div>
                <div className="font-display text-2xl font-bold text-white">{formatPKR(TARGET)}</div>
              </div>
              <div className="text-4xl">🎯</div>
            </motion.div>

            {/* Raised */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 flex items-center justify-between border border-gold-500/20 group hover:border-gold-500/40 transition-all"
            >
              <div>
                <div className="text-gold-400/70 text-xs uppercase tracking-widest mb-1">Total Raised</div>
                <div className="font-display text-2xl font-bold gold-text">
                  {inView && <AnimatedNumber value={raised} />}
                </div>
              </div>
              <div className="text-4xl">💰</div>
            </motion.div>

            {/* Remaining */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6 flex items-center justify-between group hover:border-azure-400/30 transition-all"
            >
              <div>
                <div className="text-azure-400/70 text-xs uppercase tracking-widest mb-1">Still Needed</div>
                <div className="font-display text-2xl font-bold text-azure-400">
                  {inView && <AnimatedNumber value={remaining} />}
                </div>
              </div>
              <div className="text-4xl">📊</div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex justify-between mb-3">
                <span className="text-white/50 text-xs uppercase tracking-widest">Progress</span>
                <span className="text-gold-400 text-xs font-bold">{pct.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #B8860B, #F5D170, #D4A017)" }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="text-white/30 text-xs mt-2 text-right">{raised.toLocaleString()} / {TARGET.toLocaleString()} PKR</div>
            </motion.div>
          </div>
        </div>

        {/* Recent Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 glass-card rounded-2xl p-6"
        >
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            Recent Contributors
          </h3>
          <div className="text-white/40 text-sm">
            Join dozens of generous contributors who have already helped us get here. Your contribution makes a real difference.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
