"use client";
import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { addContribution } from "@/app/lib/store";
import { CheckCircle, Lock } from "lucide-react";

const PRESET_AMOUNTS = [1000, 5000, 10000, 25000];

const PAYMENT_METHODS = [
  { id: "easypaisa", name: "Easypaisa", icon: "📱", detail: "03070217380" },
  { id: "jazzcash", name: "JazzCash", icon: "💳", detail: "03070217380" },
  { id: "bank", name: "Bank Transfer", icon: "🏦", detail: "HBL — IBAN: PK36HABB0000012345678901" },
];

export default function ContributeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [amount, setAmount] = useState<number | "">("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("easypaisa");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!amount || Number(amount) < 100) {
      setError("Please enter a minimum contribution of PKR 100");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    addContribution(name.trim(), Number(amount), message);
    setLoading(false);
    setSuccess(true);
  };

  const resetForm = () => {
    setSuccess(false);
    setAmount("");
    setName("");
    setMessage("");
  };

  return (
    <section id="contribute" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-950 via-[#0a1628] to-navy-950">
      <div className="max-w-2xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Be Part of the Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Make a <span className="gold-text">Contribution</span>
          </motion.h2>

          {/* Funny Punjabi line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gold-400/80 text-base sm:text-lg mb-2"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" }}
          >
            ہر contribution نال اسی باکو ول اِک قدم ہور نیڑے ہو جاندے آں۔ ❤️
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28 }}
            className="text-white/40 text-sm"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" }}
          >
            تہاڈا 5000 روپے دا contribution، سادے suitcase چ اِک ہور جوڑا کپڑاں دا سبب بن سکدا اے۔ 😆
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-gold-500/20 shadow-[0_0_60px_rgba(212,160,23,0.08)]"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="flex justify-center mb-6"
                >
                  <CheckCircle size={72} className="text-gold-400" />
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-white mb-3">
                  Shukriya, {name}! 🙏
                </h3>
                <p
                  className="text-white/60 mb-2 text-base"
                  style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" }}
                >
                  باکو دیاں فوٹواں وی مل جان گیاں! 📸😂
                </p>
                <p className="text-white/50 text-sm mb-8">
                  Your contribution of{" "}
                  <span className="text-gold-400 font-bold">PKR {Number(amount).toLocaleString()}</span>{" "}
                  has been recorded. We'll contact you via WhatsApp with payment details shortly.
                </p>
                <button onClick={resetForm} className="btn-gold text-navy-950 font-bold px-10 py-3 rounded-full">
                  Contribute Again
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                style={{ textAlign: "left" }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Amount */}
                <div>
                  <label className="text-white/70 text-sm font-medium mb-3 block">Contribution Amount (PKR)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                    {PRESET_AMOUNTS.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset)}
                        className={`py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          amount === preset
                            ? "bg-gold-500 text-navy-950"
                            : "glass-card text-white/70 hover:text-gold-400 hover:border-gold-500/40 border border-white/10"
                        }`}
                      >
                        PKR {preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                    placeholder="Or enter custom amount..."
                    min={100}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-white/70 text-sm font-medium mb-2 block">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-white/70 text-sm font-medium mb-2 block">Message (Optional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave a message of support..."
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                  />
                </div>

                {/* Payment Method — only 3, no Stripe/PayPal */}
                <div>
                  <label className="text-white/70 text-sm font-medium mb-3 block">Payment Method</label>
                  <div className="grid grid-cols-3 gap-3">
                    {PAYMENT_METHODS.map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`p-3 rounded-xl text-left transition-all duration-200 ${
                          paymentMethod === pm.id
                            ? "border-2 border-gold-500/70 bg-gold-500/10"
                            : "glass-card border border-white/10 hover:border-gold-500/30"
                        }`}
                      >
                        <div className="text-xl mb-1">{pm.icon}</div>
                        <div className="text-white text-xs font-semibold">{pm.name}</div>
                        <div className="text-white/40 text-xs mt-0.5 truncate">{pm.detail}</div>
                      </button>
                    ))}
                  </div>

                  {/* Selected method instructions */}
                  <div className="mt-3 glass-card rounded-xl px-4 py-3 border border-gold-500/15">
                    <p className="text-white/50 text-xs">
                      {paymentMethod === "easypaisa" && "📱 Send to Easypaisa: 03070217380 — then confirm via WhatsApp"}
                      {paymentMethod === "jazzcash" && "💳 Send to JazzCash: 03070217380 — then confirm via WhatsApp"}
                      {paymentMethod === "bank" && "🏦 Bank: HBL · IBAN: PK36HABB0000012345678901 — then confirm via WhatsApp"}
                    </p>
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold text-navy-950 font-bold text-base py-4 rounded-full flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy-950/40 border-t-navy-950 rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock size={16} />
                      Confirm · PKR {amount ? Number(amount).toLocaleString() : "—"}
                    </>
                  )}
                </button>

                <p className="text-white/25 text-xs text-center">
                  🔒 Your details are safe. We'll reach out on WhatsApp to confirm your transfer.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
