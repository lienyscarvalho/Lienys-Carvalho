'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export function LeadMagnet() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('✅ Planilha enviada para seu e-mail! Verifique sua caixa de entrada.');
    setEmail('');
  };

  return (
    <section id="planilha" className="py-20 px-5 bg-gradient-to-br from-emerald to-[#1B5E20] text-white relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-pattern-lines opacity-20 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-black mb-4"
        >
          🎁 Planilha de Fluxo de Caixa Diário — Grátis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto"
        >
          Baixe nossa planilha profissional usada por mais de 500 restaurantes para controlar entradas e saídas diariamente. Sem complicação, sem fórmulas complicadas.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-2xl"
        >
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 text-gray-800 outline-none"
          />
          <button
            type="submit"
            className="bg-gold text-navy font-bold px-6 py-4 hover:bg-[#e0aa3e] transition-colors whitespace-nowrap"
          >
            Quero a planilha grátis
          </button>
        </motion.form>
      </div>
    </section>
  );
}
