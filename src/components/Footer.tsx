"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#00D4FF]/10 bg-[#020408]">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#00D4FF] to-[#0080FF] flex items-center justify-center font-display font-black text-sm text-[#020408] shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                B
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-sm text-white tracking-widest">
                  BOSS
                </span>
                <span className="font-mono text-[10px] text-[#00D4FF] tracking-[0.2em] uppercase">
                  Sticker
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs">
              Pusat stiker, skotlet, cutting sticker, dan aksesoris kendaraan terpercaya di
              Kutoarjo, Purworejo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-5">
              Kontak
            </h4>
            <div className="space-y-3">
              <a
                href="tel:082138202010"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#00D4FF] transition-colors group"
              >
                <Phone size={14} className="text-[#00D4FF]/50 group-hover:text-[#00D4FF]" />
                0821-3820-2010
              </a>
              <a
                href="https://wa.me/6282138202010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#00D4FF] transition-colors group"
              >
                <MessageCircle size={14} className="text-[#00D4FF]/50 group-hover:text-[#00D4FF]" />
                WhatsApp Kami
              </a>
              <a
                href="https://maps.google.com/?q=Jl.+Pangeran+Diponegoro+No.124+Kutoarjo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-500 hover:text-[#00D4FF] transition-colors group"
              >
                <MapPin size={14} className="text-[#00D4FF]/50 group-hover:text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <span>Jl. Pangeran Diponegoro No.124, Kutoarjo</span>
              </a>
            </div>
          </div>

          {/* Hours + Social */}
          <div>
            <h4 className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-5">
              Jam Buka
            </h4>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-gray-500">Senin – Minggu</span>
                <span className="font-display font-bold text-sm text-[#00D4FF]">08.00 – 20.00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[11px] text-green-400">Buka Setiap Hari</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/6282138202010"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm border border-[#00D4FF]/20 bg-[#00D4FF]/5 flex items-center justify-center text-[#00D4FF]/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-sm border border-[#00D4FF]/20 bg-[#00D4FF]/5 flex items-center justify-center text-[#00D4FF]/60 hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#00D4FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-700">
            © {year} BOSS Sticker Kutoarjo. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-700">
            Kutoarjo, Purworejo, Jawa Tengah
          </p>
        </div>
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
    </footer>
  );
}
