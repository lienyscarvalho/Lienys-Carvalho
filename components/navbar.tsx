'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Blog', href: '/blog' },
    { name: 'GastroMetrics', href: '/gastrometrics' },
    { name: 'Segurança', href: '/alimentacao-segura' },
    { name: 'Planos', href: '/#planos' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md py-3 border-b border-gold/30'
          : 'bg-navy/90 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/85 hover:text-gold text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contato"
            className="bg-gold text-navy px-5 py-2 rounded font-bold text-xs hover:bg-[#e0aa3e] transition-colors uppercase tracking-wider"
          >
            Contato
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-white/90 hover:text-gold text-base font-medium uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contato"
                  className="block text-center bg-gold text-navy py-3 rounded font-bold mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
