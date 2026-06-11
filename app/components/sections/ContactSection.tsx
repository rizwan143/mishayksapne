"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const CONTACT_EMAIL = "mishayksapne@gmail.com";
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
      <div className="max-w-4xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14">
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

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {/* Email */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-gold-500/40 transition-all group text-center"
          >
            <div className="text-gold-400 bg-gold-500/10 p-3 rounded-xl">
              <Mail size={22} />
            </div>
            <div>
              <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</div>
              <div className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors break-all">
                {CONTACT_EMAIL}
              </div>
            </div>
          </a>

          {/* WhatsApp number */}
          <a
            href={`https://wa.me/92${WHATSAPP.replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-gold-500/40 transition-all group text-center"
          >
            <div className="text-gold-400 bg-gold-500/10 p-3 rounded-xl">
              <Phone size={22} />
            </div>
            <div>
              <div className="text-white/40 text-xs uppercase tracking-widest mb-1">WhatsApp</div>
              <div className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">
                {WHATSAPP}
              </div>
            </div>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/92${WHATSAPP.replace(/^0/, "")}?text=${encodeURIComponent("Hi! I have a question about the Baku trip.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 border border-green-500/25 hover:border-green-400/50 transition-all group text-center"
          >
            <span className="text-3xl">💬</span>
            <div className="text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
              Chat on WhatsApp
            </div>
          </a>
        </motion.div>

        {/* Message form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-gold-500/15 shadow-[0_0_60px_rgba(212,160,23,0.06)]"
          style={{ textAlign: "left" }}
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-5">✉️</div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-white/50 text-sm mb-6">
                Your email client has opened. We'll reply within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn-gold text-navy-950 font-bold px-10 py-3 rounded-full text-sm"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/60 text-sm font-medium mb-2 block">Your Name</label>
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
                  <label className="text-white/60 text-sm font-medium mb-2 block">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-sm font-medium mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Your question or message..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-white/25 text-xs">
                  📧 Sends to {CONTACT_EMAIL}
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold text-navy-950 font-bold py-3 px-10 rounded-full flex items-center gap-2 text-sm"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
