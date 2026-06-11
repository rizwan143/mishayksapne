"use client";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=90"
          alt="Baku City Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,14,26,0.92)_100%)]" />
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
          className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 border border-gold-500/30"
        >
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">Group Fundraiser · Baku, Azerbaijan</span>
        </motion.div>

        {/* Brand tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-5"
        >
          <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gold-text">
            Mishay Dream ✨
          </span>
          <span className="block text-white/55 text-base sm:text-lg font-medium tracking-wide mt-1">
            Turning Dreams Into Destinations.
          </span>
        </motion.div>

        {/* MAIN HEADLINE — Urdu */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-snug"
          style={{ fontFamily: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif", direction: "rtl", lineHeight: "1.7" }}
        >
          ایک سپنا اے میرا... میں باکو چلے جاواں!{" "}
          <span className="text-2xl">✈️</span>
        </motion.h1>

        {/* Funny subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-gold-400/90 text-lg sm:text-xl mb-3"
          style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" }}
        >
          باکو جانا اے... پر پیسے کہندے نے 'پہلاں مینوں مناؤ' 😭💸
        </motion.p>

        {/* Rabba line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-white/50 text-sm sm:text-base mb-8"
          style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" }}
        >
          ربا اِک واری ویزا لگوا دے، باکو دے نظارے دِکھا دے! 😅
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-10 mb-10"
        >
          {[
            { value: "3", label: "Travelers" },
            { value: "7", label: "Days" },
            { value: "10 Lacks", label: "Target" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gold-text font-display">{stat.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
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
