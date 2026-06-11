"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FEATURES } from "@/app/lib/data";

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-950 via-[#0a1628] to-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Azerbaijan image banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden mb-14"
          style={{ height: "220px" }}
          ref={ref}
        >
          <img
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1400&q=85"
            alt="Azerbaijan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-navy-950/85" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
            <span className="text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold">Azerbaijan</span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">The Land of Fire</h3>
            <p className="text-white/55 text-sm max-w-md">Where ancient history meets breathtaking modernity</p>
          </div>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            The Land of Fire
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Why <span className="gold-text">Baku</span> Will Steal Your Heart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto text-lg"
          >
            Six reasons why this journey is worth every rupee contributed.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-2xl p-7 group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
              <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-gold-500 to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
