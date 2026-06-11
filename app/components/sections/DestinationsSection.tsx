"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DESTINATIONS } from "@/app/lib/data";
import { MapPin } from "lucide-react";

function DestCard({ dest, index }: { dest: typeof DESTINATIONS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ height: "340px" }}
    >
      <img
        src={dest.image}
        alt={dest.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent transition-all duration-300 group-hover:from-navy-950/90" />
      <div className="absolute top-4 left-4">
        <span className="glass-card text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30 tracking-wider uppercase">
          {dest.tag}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-start gap-2 mb-2">
          <MapPin size={14} className="text-gold-400 mt-1 shrink-0" />
          <h3 className="font-display text-xl font-bold text-white">{dest.title}</h3>
        </div>
        <p className="text-white/60 text-sm leading-relaxed transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {dest.description}
        </p>
      </div>
      <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/40 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default function DestinationsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            What Awaits You
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Discover <span className="gold-text">Baku's Wonders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            From ancient UNESCO heritage sites to futuristic architectural marvels — Baku has it all.
          </motion.p>
        </div>

        {/* Night skyline banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden mb-8"
          style={{ height: "260px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1571406252241-db0280bd36cd?w=1400&q=85"
            alt="Baku night skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
            <span className="text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold">The City of Fire</span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white text-center drop-shadow-lg">
              Baku After Dark
            </h3>
            <p className="text-white/60 text-sm">The skyline that will take your breath away</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest, i) => (
            <DestCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
