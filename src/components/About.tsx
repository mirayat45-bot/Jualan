"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Clock } from "lucide-react";

const stats = [
  { icon: Shield, value: "500+", label: "Pelanggan Puas" },
  { icon: Award, value: "5+", label: "Tahun Pengalaman" },
  { icon: Clock, value: "7", label: "Hari Buka" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-sm border border-[#00D4FF]/20 bg-[#00D4FF]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
              <span className="font-mono text-[10px] text-[#00D4FF] tracking-widest uppercase">
                Tentang Kami
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight section-heading">
              Tentang BOSS Sticker Kutoarjo
            </h2>

            <p className="font-body text-gray-400 text-lg leading-relaxed mb-6">
              <span className="text-[#00D4FF] font-semibold">BOSS Sticker Kutoarjo</span> adalah
              tempat terpercaya untuk kebutuhan stiker, skotlet, cutting sticker, variasi
              kendaraan, dan aksesoris motor di wilayah Kutoarjo.
            </p>

            <p className="font-body text-gray-500 leading-relaxed mb-10">
              Kami hadir untuk membantu Anda tampil beda di jalan dengan produk berkualitas tinggi
              dan pelayanan yang ramah. Dengan pengalaman bertahun-tahun, kami siap memberikan
              hasil terbaik sesuai selera Anda.
            </p>

            <a
              href="https://wa.me/6282138202010?text=Halo%20BOSS%20Sticker,%20saya%20ingin%20tahu%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs"
            >
              Hubungi Kami
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card neon-border rounded-sm p-6 flex items-center gap-5 group hover:bg-[#00D4FF]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-sm bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF]/20 transition-colors duration-300">
                  <stat.icon size={22} className="text-[#00D4FF]" />
                </div>
                <div>
                  <div className="font-display font-black text-3xl text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
