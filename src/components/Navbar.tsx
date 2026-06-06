"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Galeri", href: "#gallery" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Lokasi", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020408]/90 backdrop-blur-xl border-b border-[#00D4FF]/10 shadow-[0_4px_30px_rgba(0,212,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#00D4FF] to-[#0080FF] flex items-center justify-center font-display font-black text-sm text-[#020408] shadow-[0_0_15px_rgba(0,212,255,0.6)]">
                B
              </div>
              <div className="absolute inset-0 rounded-sm bg-[#00D4FF] opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-sm text-white tracking-widest">
                BOSS
              </span>
              <span className="font-mono text-[10px] text-[#00D4FF] tracking-[0.2em] uppercase">
                Sticker
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="relative px-4 py-2 font-body font-semibold text-sm text-gray-300 hover:text-[#00D4FF] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00D4FF] shadow-[0_0_6px_#00D4FF] group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/6282138202010?text=Halo%20BOSS%20Sticker,%20saya%20ingin%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs"
            >
              <MessageCircle size={14} />
              Chat WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050C14]/95 backdrop-blur-xl border-b border-[#00D4FF]/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left px-4 py-3 font-body font-semibold text-gray-300 hover:text-[#00D4FF] hover:bg-[#00D4FF]/5 rounded transition-all duration-200 border-b border-[#00D4FF]/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="https://wa.me/6282138202010?text=Halo%20BOSS%20Sticker,%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex items-center justify-center gap-2 mt-3 px-5 py-3 rounded-sm text-xs"
              >
                <MessageCircle size={14} />
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
