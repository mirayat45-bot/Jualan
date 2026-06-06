"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Package, Scissors, Wrench, Zap, Navigation } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    desc: "Berada di jantung Kutoarjo, mudah dijangkau dari berbagai arah.",
  },
  {
    icon: Package,
    title: "Pilihan Lengkap",
    desc: "Ratusan pilihan stiker, skotlet, dan aksesoris kendaraan tersedia.",
  },
  {
    icon: Scissors,
    title: "Custom Sticker",
    desc: "Desain sesuai keinginan Anda. Kami bantu wujudkan ide terbaik.",
  },
  {
    icon: Wrench,
    title: "Aksesoris Motor",
    desc: "Lengkapi kendaraan dengan aksesoris pilihan berkualitas tinggi.",
  },
  {
    icon: Zap,
    title: "Respons Cepat",
    desc: "Pengerjaan profesional dan cepat tanpa mengorbankan kualitas.",
  },
  {
    icon: Navigation,
    title: "Mudah Ditemukan",
    desc: "Tersedia di Google Maps. Arahkan GPS Anda ke BOSS Sticker.",
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-24 px-4">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00D4FF]/3 rounded-full blur-[100px]" />
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
              Keunggulan Kami
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Mengapa Pilih{" "}
            <span className="neon-text">BOSS Sticker?</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass-card rounded-sm p-6 cursor-default overflow-hidden
                border border-[#00D4FF]/10 hover:border-[#00D4FF]/50
                hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]
                hover:scale-[1.02] transition-all duration-300"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/0 to-[#00D4FF]/0 group-hover:from-[#00D4FF]/5 group-hover:to-transparent transition-all duration-300 rounded-sm" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#00D4FF]/40 to-transparent group-hover:from-[#00D4FF] transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-[#00D4FF]/40 to-transparent group-hover:from-[#00D4FF] transition-colors duration-300" />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-5
                group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/50 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]
                transition-all duration-300">
                <f.icon size={20} className="text-[#00D4FF]" />
              </div>

              <h3 className="font-display font-semibold text-base text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                {f.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
