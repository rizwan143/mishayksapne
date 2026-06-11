"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GALLERY_IMAGES } from "@/app/lib/data";

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-950 via-[#0a1628] to-navy-950">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Photo Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-3"
          >
            A Visual <span className="gold-text">Taste of Baku</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gold-400/75 text-base sm:text-lg"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: "rtl" }}
          >
            باکو دیاں فوٹواں وی مل جان گیاں! 📸😂
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
              style={{ marginBottom: "1rem" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ height: img.tall ? "300px" : "200px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
              <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
