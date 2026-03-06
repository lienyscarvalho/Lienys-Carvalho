'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-navy via-[#0D1654] to-[#0a0f3d]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40 pointer-events-none" />
      
      {/* Decorative Circle */}
      <div className="absolute -right-[200px] -top-[100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(200,151,58,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-bold tracking-[0.12em] uppercase px-4 py-2 rounded mb-6"
          >
            Consultoria & Crítica Gastronômica
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
          >
            Transforme seu restaurante em um <em className="text-gold not-italic">negócio lucrativo</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed max-w-xl mb-10"
          >
            A LC Consultoria une expertise gastronômica, gestão financeira baseada em dados e crítica especializada para elevar negócios do setor a outro nível de eficiência e rentabilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3.5 rounded font-bold text-base border-2 border-gold hover:bg-transparent hover:text-gold transition-all"
            >
              Agendar diagnóstico gratuito →
            </Link>
            <Link
              href="#servicos"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded font-semibold text-base border-2 border-white/30 hover:border-gold hover:text-gold transition-all"
            >
              Conhecer serviços
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-8 md:gap-12 mt-16"
          >
            <div className="border-l-3 border-gold pl-4">
              <div className="font-serif text-4xl font-black text-white leading-none">+200</div>
              <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Negócios atendidos</div>
            </div>
            <div className="border-l-3 border-gold pl-4">
              <div className="font-serif text-4xl font-black text-white leading-none">30%</div>
              <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Redução média de CMV</div>
            </div>
            <div className="border-l-3 border-gold pl-4">
              <div className="font-serif text-4xl font-black text-white leading-none">15+</div>
              <div className="text-xs text-white/60 mt-2 uppercase tracking-wider">Anos de experiência</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
