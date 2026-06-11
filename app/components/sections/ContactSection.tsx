"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-950 via-[#0a1628] to-navy-950">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Have <span className="gold-text">Questions?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              Have questions about the trip or want to discuss your contribution? We'd love to hear from you!
            </p>

            {[
              { icon: <Mail size={18} />, label: "Email", value: "info@bakutrip.pk" },
              { icon: <Phone size={18} />, label: "WhatsApp", value: "+92 300 1234567" },
              { icon: <MapPin size={18} />, label: "Based in", value: "Lahore, Pakistan" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-4 flex items-center gap-4">
                <div className="text-gold-400 bg-gold-500/10 p-2.5 rounded-lg">{item.icon}</div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card rounded-xl p-5">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-3">Follow Our Journey</div>
              <div className="flex gap-3">
                {["📸 Instagram", "📘 Facebook", "🐦 Twitter"].map((s) => (
                  <span key={s} className="text-white/60 text-sm hover:text-gold-400 cursor-pointer transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-7 border border-gold-500/10"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your question or message..."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold text-navy-950 font-bold py-3.5 rounded-full flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
