"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, ChevronDown } from "lucide-react";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

const avatars = [
  { initials: "AH", color: "from-blue-500 to-cyan-400" },
  { initials: "BS", color: "from-cyan-500 to-teal-400" },
  { initials: "CR", color: "from-teal-500 to-blue-400" },
  { initials: "DW", color: "from-blue-600 to-indigo-400" },
];

export default function Hero() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const customers = useCountUp(500, 2500, started);
  const rating = useCountUp(100, 2000, started);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#0080FF]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] animate-pulse" />
          <span className="font-mono text-xs text-[#00D4FF] tracking-widest uppercase">
            Dipercaya Ratusan Pelanggan &nbsp;|&nbsp; Buka Setiap Hari
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
        >
          <span className="text-white">Maksimalkan </span>
          <span className="text-white">Tampilan</span>
          <br />
          <span className="text-white">Kendaraanmu dengan </span>
          <br />
          <span className="relative">
            <span className="neon-text">Sticker Premium</span>
            <span className="absolute -inset-1 bg-[#00D4FF]/10 blur-xl rounded-lg -z-10" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Pusat stiker, skotlet, cutting sticker, dan aksesoris kendaraan di{" "}
          <span className="text-[#00D4FF] font-semibold">Kutoarjo</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/6282138202010?text=Halo%20BOSS%20Sticker,%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon ripple-container flex items-center gap-2.5 px-8 py-4 rounded-sm text-sm w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Chat WhatsApp
          </a>
          <a
            href="https://maps.google.com/?q=Jl.+Pangeran+Diponegoro+No.124+Kutoarjo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-neon flex items-center gap-2.5 px-8 py-4 rounded-sm text-sm w-full sm:w-auto justify-center"
          >
            <MapPin size={18} />
            Lihat Lokasi
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {/* Avatars + Counter */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${a.color} border-2 border-[#020408] flex items-center justify-center font-display font-bold text-xs text-white shadow-[0_0_10px_rgba(0,212,255,0.3)]`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-xl text-white">
                {customers}
                <span className="text-[#00D4FF]">+</span>
              </div>
              <div className="font-body text-xs text-gray-500 uppercase tracking-wider">
                Pelanggan Puas
              </div>
            </div>
          </div>

          <div className="w-px h-10 bg-[#00D4FF]/20 hidden sm:block" />

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 flex items-center justify-center">
              <span className="text-lg">⭐</span>
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-xl text-white">
                {rating}
                <span className="text-[#FFD700]">%</span>
              </div>
              <div className="font-body text-xs text-gray-500 uppercase tracking-wider">
                Kepuasan
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 hover:text-[#00D4FF] transition-colors group"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-[#00D4FF]/30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-[#00D4FF]/30" />
    </section>
  );
}
