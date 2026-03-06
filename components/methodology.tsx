'use client';

import { motion } from 'motion/react';

export function Methodology() {
  const steps = [
    { num: '01', title: 'Setup de Dados', desc: 'Levantamento completo: insumos, fornecedores, cardápio atual e histórico financeiro.' },
    { num: '02', title: 'Fichas Técnicas', desc: 'Elaboração das FTPs com FC, FCy e custo real de cada prato do cardápio.' },
    { num: '03', title: 'Financeiro', desc: 'Cálculo de Markup, Break-even e projeções de lucro com cenários alternativos.' },
    { num: '04', title: 'Dashboards BI', desc: 'Ativação do GastroMetrics com KPIs personalizados e alertas automáticos.' },
    { num: '05', title: 'Go-to-Market', desc: 'Revisão de cardápio, estratégia de precificação e plano de crescimento sustentável.' },
  ];

  return (
    <section id="metodologia" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Como Trabalhamos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
            Metodologia de implementação em 5 etapas
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Um processo estruturado que garante resultados mensuráveis desde o primeiro mês de parceria.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-14">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold to-emerald z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 text-center px-2"
            >
              <div className="w-14 h-14 mx-auto bg-navy text-gold rounded-full flex items-center justify-center font-serif text-xl font-black border-[3px] border-cream mb-5 shadow-lg">
                {step.num}
              </div>
              <h4 className="font-bold text-navy mb-2 text-sm">{step.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
