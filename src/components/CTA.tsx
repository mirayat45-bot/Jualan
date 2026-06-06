"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00D4FF]/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-sm p-10 sm:p-14 border border-[#00D4FF]/20 shadow-[0_0_60px_rgba(0,212,255,0.08)]"
        >
          {/* Top decoration */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00D4FF]/50" />
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF] animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00D4FF]/50" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Jangan Tunda Lagi!
          </h2>

          <p className="font-body text-gray-400 text-lg mb-3">
            Butuh sticker atau variasi kendaraan?
          </p>
          <p className="font-body text-gray-500 mb-10">
            Hubungi{" "}
            <span className="text-[#00D4FF] font-semibold">BOSS Sticker Kutoarjo</span>{" "}
            sekarang dan dapatkan konsultasi desain secara gratis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282138202010?text=Halo%20BOSS%20Sticker,%20saya%20ingin%20konsultasi%20sekarang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm text-sm"
            >
              <MessageCircle size={18} />
              Chat Sekarang
            </a>
            <a
              href="https://maps.google.com/?q=Jl.+Pangeran+Diponegoro+No.124+Kutoarjo+Purworejo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-neon flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm text-sm"
            >
              <MapPin size={18} />
              Buka Maps
            </a>
          </div>

          {/* Bottom decoration */}
          <div className="mt-10 pt-8 border-t border-[#00D4FF]/10">
            <p className="font-mono text-[11px] text-gray-600 tracking-widest uppercase">
              Senin – Minggu &nbsp;·&nbsp; 08.00 – 20.00 &nbsp;·&nbsp; 0821-3820-2010
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
