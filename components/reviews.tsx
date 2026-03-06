'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function Reviews() {
  return (
    <section id="critica" className="py-24 px-5 bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-xl p-10 shadow-lg border border-gold/20">
            <div className="flex gap-1 text-gold mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="font-serif text-lg italic text-navy leading-relaxed mb-6">
              &quot;A análise da LC foi cirúrgica. Em dois meses, reformulamos o cardápio, ajustamos os preços e nossa margem saltou de 8% para 22%. Eles enxergam o que a gente não consegue ver no dia a dia.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy to-emerald flex items-center justify-center text-white font-serif font-bold text-lg">
                M
              </div>
              <div>
                <strong className="block text-sm text-navy">Marcos Tavares</strong>
                <span className="text-xs text-gray-500">Proprietário — Restaurante Marés, São Paulo</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-lg border border-gold/20">
            <div className="flex gap-1 text-gold mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="font-serif text-lg italic text-navy leading-relaxed mb-6">
              &quot;A crítica técnica que recebemos foi transformadora. Não foi só elogio ou reclamação — foi um diagnóstico real que nos deu um roteiro de melhoria claro e acionável.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy to-emerald flex items-center justify-center text-white font-serif font-bold text-lg">
                A
              </div>
              <div>
                <strong className="block text-sm text-navy">Ana Beatriz Lima</strong>
                <span className="text-xs text-gray-500">Chef-proprietária — Bistrô Colheita, BH</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Crítica Gastronômica
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
            Avaliação técnica que transforma negócios
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Nosso serviço de crítica gastronômica vai além da opinião subjetiva. Utilizamos metodologia estruturada para avaliar cada dimensão do seu estabelecimento com um olhar técnico e construtivo.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              'Avaliação sensorial de pratos (sabor, textura, temperatura, apresentação)',
              'Análise de compatibilidade custo-benefício do cardápio',
              'Experiência do cliente: atendimento, ambiente e tempo de serviço',
              'Posicionamento de marca e coerência gastronômica',
              'Relatório técnico detalhado com plano de melhoria',
              'Acompanhamento pós-avaliação para implementação',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-navy">
                <span className="text-gold text-xs mt-1">✦</span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="#contato"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3.5 rounded font-bold text-base border-2 border-gold hover:bg-transparent hover:text-gold transition-all"
          >
            Solicitar avaliação →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
