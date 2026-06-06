"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Car, Palette, Sticker, Wrench, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cutting Sticker",
    desc: "Cutting sticker presisi dengan mesin modern untuk berbagai bentuk dan ukuran.",
    tag: "Populer",
  },
  {
    icon: Car,
    title: "Skotlet Motor",
    desc: "Pemasangan skotlet motor profesional dengan material premium tahan lama.",
    tag: null,
  },
  {
    icon: Palette,
    title: "Variasi Kendaraan",
    desc: "Modifikasi tampilan kendaraan sesuai karakter dan selera Anda.",
    tag: null,
  },
  {
    icon: Sticker,
    title: "Sticker Custom",
    desc: "Desain dan cetak stiker sesuai keinginan. Logo, nama, atau motif unik.",
    tag: "Best Seller",
  },
  {
    icon: Wrench,
    title: "Aksesoris Motor",
    desc: "Berbagai pilihan aksesoris motor berkualitas untuk penampilan maksimal.",
    tag: null,
  },
  {
    icon: MessageSquare,
    title: "Konsultasi Desain",
    desc: "Tim kami siap membantu Anda menemukan desain terbaik secara gratis.",
    tag: "Gratis",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0080FF]/4 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00D4FF]/3 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              Layanan Kami
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Semua Kebutuhan{" "}
            <span className="neon-text">Kendaraan Anda</span>
          </h2>
          <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
            Kami menyediakan berbagai layanan lengkap untuk mempercantik tampilan kendaraan Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative glass-card rounded-sm p-6 group overflow-hidden
                border border-[#00D4FF]/10 hover:border-[#00D4FF]/40
                hover:shadow-[0_0_40px_rgba(0,212,255,0.12)]
                transition-all duration-300"
            >
              {/* Tag */}
              {s.tag && (
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[9px] text-[#00D4FF] border border-[#00D4FF]/40 bg-[#00D4FF]/10 px-2 py-0.5 rounded-sm tracking-widest uppercase">
                    {s.tag}
                  </span>
                </div>
              )}

              {/* Number */}
              <div className="absolute bottom-4 right-5 font-display font-black text-6xl text-white/3 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#00D4FF]/20 to-[#0080FF]/10
                border border-[#00D4FF]/20 flex items-center justify-center mb-5
                group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-shadow duration-300">
                <s.icon size={20} className="text-[#00D4FF]" />
              </div>

              <h3 className="font-display font-semibold text-white text-base mb-2">
                {s.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom border glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/0 to-transparent group-hover:via-[#00D4FF]/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
