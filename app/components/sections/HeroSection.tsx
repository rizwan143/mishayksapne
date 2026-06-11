"use client";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — beautiful night city skyline */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=90"
          alt="Baku City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,14,26,0.85)_100%)]" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-400/60 rounded-full"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8 border border-gold-500/30"
        >
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">Group Fundraiser · Baku, Azerbaijan</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Join Us on an{" "}
          <span className="gold-text">Unforgettable</span>
          <br />
          Journey to{" "}
          <span className="italic text-azure-400">Baku</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Help us make this dream adventure a reality and become part of our journey to the Land of Fire.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-10 mb-12"
        >
          {[
            { value: "3", label: "Travelers" },
            { value: "7", label: "Days" },
            { value: "PKR 10L", label: "Target" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gold-text font-display">{stat.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs — wide buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contribute"
            className="btn-gold text-navy-950 font-bold text-base px-14 py-4 rounded-full inline-block w-full sm:w-auto text-center min-w-[240px]"
          >
            ✨ Contribute Now
          </a>
          <a
            href="#destinations"
            className="glass-card text-white font-semibold text-base px-14 py-4 rounded-full inline-flex items-center justify-center gap-2 hover:border-gold-500/40 transition-colors border border-white/15 w-full sm:w-auto min-w-[240px]"
          >
            <Play size={16} className="text-gold-400" />
            Explore Baku
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="text-gold-400/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
