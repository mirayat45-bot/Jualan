"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Senin – Minggu", time: "08.00 – 20.00", open: true },
];

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" ref={ref} className="relative py-24 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#0080FF]/4 rounded-full blur-[80px]" />
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
              Lokasi & Jam Buka
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Temukan Kami di <span className="neon-text">Kutoarjo</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="glass-card neon-border rounded-sm p-6 flex gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#00D4FF]" />
              </div>
              <div>
                <div className="font-display font-semibold text-sm text-white mb-1 uppercase tracking-wider">
                  Alamat
                </div>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  Jl. Pangeran Diponegoro No.124 RT 03 / 10,<br />
                  Kembang Arum, Kutoarjo, Purworejo,<br />
                  Jawa Tengah 54251
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card neon-border rounded-sm p-6 flex gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[#00D4FF]" />
              </div>
              <div>
                <div className="font-display font-semibold text-sm text-white mb-1 uppercase tracking-wider">
                  Telepon / WhatsApp
                </div>
                <a
                  href="tel:082138202010"
                  className="font-display font-bold text-lg text-[#00D4FF] hover:text-white transition-colors neon-text-soft"
                >
                  0821-3820-2010
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card neon-border rounded-sm p-6 flex gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-[#00D4FF]" />
              </div>
              <div className="flex-1">
                <div className="font-display font-semibold text-sm text-white mb-3 uppercase tracking-wider">
                  Jam Operasional
                </div>
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="font-body text-gray-400 text-sm">{h.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm text-[#00D4FF]">
                        {h.time}
                      </span>
                      {h.open && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-green-400 border border-green-400/30 bg-green-400/5 px-1.5 py-0.5 rounded-sm">
                          <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                          Buka
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card neon-border rounded-sm overflow-hidden h-[380px] lg:h-full min-h-[380px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9!2d109.9!3d-7.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b!2sBOSS+Sticker+Kutoarjo!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi BOSS Sticker Kutoarjo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
