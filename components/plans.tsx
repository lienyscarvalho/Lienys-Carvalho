'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Link from 'next/link';

export function Plans() {
  return (
    <section id="planos" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Planos e Investimento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Planos flexíveis para restaurantes em diferentes estágios. Todos incluem acesso à plataforma GastroMetrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-black/10 rounded-xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Starter</div>
            <div className="font-serif text-4xl font-black text-navy mb-1">R$890</div>
            <div className="text-xs text-gray-500 mb-6">/mês · até 30 pratos</div>
            <ul className="space-y-3 mb-8">
              {[
                'Diagnóstico financeiro inicial',
                'Até 30 fichas técnicas (FTP)',
                'Cálculo de Markup e CMV',
                'Dashboard básico GastroMetrics',
                '2 consultorias mensais por vídeo',
                'Suporte via WhatsApp',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-700">
                  <Check size={16} className="text-emerald flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#contato"
              className="block text-center w-full py-3.5 rounded-md font-bold text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Começar agora
            </Link>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-navy text-white rounded-xl p-10 relative transform md:scale-105 shadow-2xl border border-navy"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
              Mais popular
            </div>
            <div className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Profissional</div>
            <div className="font-serif text-4xl font-black text-white mb-1">R$1.890</div>
            <div className="text-xs text-white/60 mb-6">/mês · até 80 pratos</div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-sm text-white/90 font-semibold">Tudo do Starter, mais:</li>
              {[
                'Até 80 fichas técnicas + bebidas',
                'Gestão de estoque com Curva ABC',
                'DRE gerencial mensal completo',
                'Dashboards avançados de KPI e NPS',
                '4 consultorias mensais (pres. ou online)',
                'Crítica gastronômica trimestral',
                'Escala de equipe automatizada',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/85">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#contato"
              className="block text-center w-full py-3.5 rounded-md font-bold text-sm bg-gold text-navy hover:bg-[#e0aa3e] transition-colors"
            >
              Escolher Profissional
            </Link>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-black/10 rounded-xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Enterprise</div>
            <div className="font-serif text-4xl font-black text-navy mb-1">Sob consulta</div>
            <div className="text-xs text-gray-500 mb-6">Redes e multi-unidades</div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-sm text-gray-900 font-semibold">Tudo do Profissional, mais:</li>
              {[
                'Cardápio ilimitado de pratos',
                'Integração com PDV e ponto eletrônico',
                'Gestor dedicado exclusivo',
                'BI personalizado por unidade',
                'Consultoria presencial semanal',
                'Treinamento de equipe in company',
                'SLA de suporte prioritário',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-700">
                  <Check size={16} className="text-emerald flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="#contato"
              className="block text-center w-full py-3.5 rounded-md font-bold text-sm border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors"
            >
              Falar com especialista
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
