"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6" style={{ textAlign: "left" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✈️</span>
              <span className="font-display font-bold text-xl">
                <span className="gold-text">Baku</span>
                <span className="text-white/70"> Journey</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              A group trip to Baku, Azerbaijan. Help make this unforgettable adventure a reality.
            </p>
            <div className="flex gap-3 mt-5">
              {["📸", "📘", "💬"].map((icon, i) => (
                <button key={i} className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-sm hover:border-gold-500/40 transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                ["#destinations", "Destinations"],
                ["#progress", "Progress"],
                ["#contribute", "Contribute"],
                ["#faq", "FAQ"],
                ["#contact", "Contact"],
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
              <li>
                <a href="mailto:Rizwansultan22@gmail.com" className="text-white/40 text-sm hover:text-gold-400 transition-colors">
                  📧 Rizwansultan22@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923006088886" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-gold-400 transition-colors">
                  💬 03006088886
                </a>
              </li>
              <li className="text-white/40 text-sm">📍 Pakistan 🇵🇰</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© 2025 Baku Journey. All rights reserved.</p>
          <p className="text-white/25 text-xs">Made with ❤️ in Pakistan 🇵🇰</p>
        </div>
      </div>
    </footer>
  );
}
