"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Pemilik Motor Matic",
    rating: 5,
    text: "Hasilnya luar biasa! Cutting sticker motor saya terlihat sangat rapi dan presisi. Pelayanan ramah dan cepat, harga juga terjangkau. Pasti balik lagi!",
    initials: "AF",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Budi Santoso",
    role: "Pengendara Motor Sport",
    rating: 5,
    text: "Skotlet motor sport saya dipasang dengan sangat profesional. Tidak ada gelembung udara, rapi sempurna. Bahan yang digunakan juga berkualitas premium.",
    initials: "BS",
    color: "from-cyan-500 to-teal-400",
  },
  {
    name: "Citra Dewi",
    role: "Pengguna Custom Sticker",
    rating: 5,
    text: "Saya minta sticker custom untuk usaha saya, hasilnya melebihi ekspektasi! Desain diwujudkan dengan sempurna. Sangat puas dengan BOSS Sticker!",
    initials: "CD",
    color: "from-teal-500 to-blue-400",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-base ${i < count ? "star-rating" : "text-gray-700"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00D4FF]/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-sm border border-[#00D4FF]/20 bg-[#00D4FF]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            <span className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase">
              Testimoni
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Kata Pelanggan <span className="neon-text">Setia Kami</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative glass-card neon-border rounded-sm p-8 sm:p-10 overflow-hidden min-h-[260px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 text-[#00D4FF]/10" size={60} />

            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <StarRating count={testimonials[current].rating} />

              <p className="font-body text-lg text-gray-300 leading-relaxed mt-4 mb-6 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color}
                  flex items-center justify-center font-display font-bold text-sm text-white
                  shadow-[0_0_15px_rgba(0,212,255,0.4)]`}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">
                    {testimonials[current].name}
                  </div>
                  <div className="font-body text-xs text-gray-500">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-1.5 bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]"
                    : "w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
