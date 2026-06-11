"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const CONTACT_EMAIL = "Rizwansultan22@gmail.com";
const WHATSAPP = "03006088886";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Build mailto link and open it
    const subject = encodeURIComponent(`Baku Trip Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-950 via-[#0a1628] to-navy-950">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Have a Question?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white"
          >
            Get in <span className="gold-text">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-gold-500/30 transition-all group block"
            >
              <div className="text-gold-400 bg-gold-500/10 p-3 rounded-xl shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-white font-medium text-sm break-all group-hover:text-gold-400 transition-colors">
                  {CONTACT_EMAIL}
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/92${WHATSAPP.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-gold-500/30 transition-all group block"
            >
              <div className="text-gold-400 bg-gold-500/10 p-3 rounded-xl shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-white/40 text-xs uppercase tracking-widest mb-0.5">WhatsApp</div>
                <div className="text-white font-medium group-hover:text-gold-400 transition-colors">
                  {WHATSAPP}
                </div>
              </div>
            </a>

            {/* Quick WhatsApp CTA */}
            <a
              href={`https://wa.me/92${WHATSAPP.replace(/^0/, "")}?text=${encodeURIComponent("Hi! I have a question about the Baku trip.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full glass-card rounded-2xl p-4 flex items-center justify-center gap-2 border border-green-500/25 hover:border-green-500/50 transition-all group"
            >
              <span className="text-xl">💬</span>
              <span className="text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                Chat on WhatsApp
              </span>
            </a>

            <div className="glass-card rounded-2xl p-5">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-3">Follow Our Journey</div>
              <div className="flex gap-4">
                {["📸 Instagram", "📘 Facebook"].map((s) => (
                  <span key={s} className="text-white/50 text-sm hover:text-gold-400 cursor-pointer transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 glass-card rounded-2xl p-7 border border-gold-500/10"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm">
                  Your email client has opened. We'll reply to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 btn-gold text-navy-950 font-bold px-8 py-3 rounded-full text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors"
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
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <p className="text-white/25 text-xs">
                  📧 Your message will be sent to {CONTACT_EMAIL}
                </p>
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
