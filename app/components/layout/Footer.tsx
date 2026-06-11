"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✈️</span>
              <span className="font-display font-bold text-xl">
                <span className="gold-text">Baku</span>
                <span className="text-white/70"> Journey</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A community-funded group trip to Baku, Azerbaijan. Help us make this unforgettable adventure a reality.
            </p>
            <div className="flex gap-4 mt-5">
              {["📸", "📘", "🐦", "💬"].map((icon, i) => (
                <button key={i} className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-sm hover:border-gold-500/40 transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5">
              {[
                ["#destinations", "Destinations"],
                ["#progress", "Progress"],
                ["#contribute", "Contribute"],
                ["#team", "Team"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-white/40 text-sm hover:text-gold-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-white/40 text-sm">📧 info@bakutrip.pk</li>
              <li className="text-white/40 text-sm">📱 +92 300 1234567</li>
              <li className="text-white/40 text-sm">📍 Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© 2025 Baku Journey. All rights reserved.</p>
          <p className="text-white/25 text-xs">Made with ❤️ in Lahore, Pakistan 🇵🇰</p>
        </div>
      </div>
    </footer>
  );
}
