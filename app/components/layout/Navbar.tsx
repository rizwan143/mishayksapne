"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#destinations", label: "Destinations" },
  { href: "#progress", label: "Progress" },
  { href: "#contribute", label: "Contribute" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 glass-card shadow-2xl shadow-black/40" : "py-4 bg-transparent"
      }`}
      style={{ textAlign: "left" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <span className="text-2xl">✈️</span>
          <span className="font-display font-bold text-xl">
            <span className="gold-text">Baku</span>
            <span className="text-white/80"> Journey</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-gold-400 transition-colors duration-200 font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — wider */}
        <a
          href="#contribute"
          className="hidden md:block btn-gold text-navy-950 font-bold text-sm px-8 py-2.5 rounded-full min-w-[160px] text-center"
        >
          ✨ Contribute Now
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-gold-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-gold-500/10 overflow-hidden"
            style={{ textAlign: "left" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold-400 transition-colors py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contribute"
                className="btn-gold text-center text-navy-950 font-bold text-sm px-5 py-3 rounded-full mt-2"
                onClick={() => setOpen(false)}
              >
                ✨ Contribute Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
