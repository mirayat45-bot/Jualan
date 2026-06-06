"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, label: "Cutting Sticker Motor", color: "from-blue-900 to-cyan-900", emoji: "✂️" },
  { id: 2, label: "Skotlet Premium", color: "from-slate-900 to-blue-900", emoji: "🎨" },
  { id: 3, label: "Sticker Custom Logo", color: "from-cyan-900 to-teal-900", emoji: "🏷️" },
  { id: 4, label: "Variasi Motor Sport", color: "from-indigo-900 to-blue-900", emoji: "🏍️" },
  { id: 5, label: "Aksesoris Kendaraan", color: "from-blue-900 to-indigo-900", emoji: "⚙️" },
  { id: 6, label: "Full Body Wrap", color: "from-teal-900 to-cyan-900", emoji: "🚗" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative py-24 px-4">
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
              Galeri Karya
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Hasil Karya <span className="neon-text">Terbaik Kami</span>
          </h2>
          <p className="font-body text-gray-500 mt-4 max-w-xl mx-auto">
            Klik gambar untuk melihat lebih detail. Setiap karya dibuat dengan penuh presisi.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelected(item)}
              className={`group relative aspect-square rounded-sm bg-gradient-to-br ${item.color}
                border border-[#00D4FF]/10 hover:border-[#00D4FF]/50
                overflow-hidden cursor-pointer
                hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]
                transition-all duration-300`}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-body font-semibold text-xs text-white text-left">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Hover zoom overlay */}
              <div className="absolute inset-0 bg-[#00D4FF]/0 group-hover:bg-[#00D4FF]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/50 flex items-center justify-center">
                  <ZoomIn size={16} className="text-[#00D4FF]" />
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-[#00D4FF]/30 group-hover:border-[#00D4FF]/80 transition-colors" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-[#00D4FF]/30 group-hover:border-[#00D4FF]/80 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#020408]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative w-full max-w-lg aspect-square rounded-sm bg-gradient-to-br ${selected.color}
                border border-[#00D4FF]/40 shadow-[0_0_60px_rgba(0,212,255,0.3)]
                flex flex-col items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-8xl mb-4">{selected.emoji}</span>
              <p className="font-display font-bold text-white text-xl">{selected.label}</p>
              <p className="font-body text-gray-400 text-sm mt-2">BOSS Sticker Kutoarjo</p>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] hover:bg-[#00D4FF]/20 transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
