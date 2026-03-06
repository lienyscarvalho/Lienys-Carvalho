'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, PieChart, Target, Users } from 'lucide-react';

export default function GastroMetricsTool() {
  // CMV Calculator State
  const [estoqueInicial, setEstoqueInicial] = useState(0);
  const [compras, setCompras] = useState(0);
  const [estoqueFinal, setEstoqueFinal] = useState(0);
  const [faturamento, setFaturamento] = useState(0);

  // Markup Calculator State
  const [custoPrato, setCustoPrato] = useState(0);
  const [margemDesejada, setMargemDesejada] = useState(20);
  const [impostos, setImpostos] = useState(10);
  const [custosFixos, setCustosFixos] = useState(25);

  // Results
  const cmvReal = estoqueInicial + compras - estoqueFinal;
  const cmvPercent = faturamento > 0 ? (cmvReal / faturamento) * 100 : 0;

  const markup = 100 / (100 - (margemDesejada + impostos + custosFixos));
  const precoSugerido = custoPrato * markup;

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 px-5 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
              Ferramenta GastroMetrics
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-navy leading-tight">
              Calculadora de Gestão Gastronômica
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Utilize as métricas oficiais do mercado brasileiro para diagnosticar a saúde do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CMV Calculator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-black/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-gold">
                  <PieChart size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy">Cálculo de CMV Real</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy uppercase">Estoque Inicial (R$)</label>
                    <input type="number" value={estoqueInicial} onChange={(e) => setEstoqueInicial(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy uppercase">Compras do Mês (R$)</label>
                    <input type="number" value={compras} onChange={(e) => setCompras(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy uppercase">Estoque Final (R$)</label>
                    <input type="number" value={estoqueFinal} onChange={(e) => setEstoqueFinal(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy uppercase">Faturamento Líquido (R$)</label>
                    <input type="number" value={faturamento} onChange={(e) => setFaturamento(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                </div>

                <div className="mt-8 p-6 bg-navy rounded-lg text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm opacity-70">CMV em Valor</span>
                    <span className="font-serif text-xl font-bold">R$ {cmvReal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-70">CMV Percentual</span>
                    <span className={`font-serif text-3xl font-black ${cmvPercent > 35 ? 'text-orange' : 'text-emerald'}`}>
                      {cmvPercent.toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-[10px] mt-4 opacity-50 italic">
                    * Média de mercado recomendada: 28% a 32%. Acima de 35% indica urgência em revisão de fichas técnicas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Markup Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-black/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-navy">
                  <DollarSign size={24} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy">Markup & Precificação</h2>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy uppercase">Custo do Prato (Ficha Técnica) (R$)</label>
                  <input type="number" value={custoPrato} onChange={(e) => setCustoPrato(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-navy uppercase">Margem Lucro (%)</label>
                    <input type="number" value={margemDesejada} onChange={(e) => setMargemDesejada(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-navy uppercase">Impostos (%)</label>
                    <input type="number" value={impostos} onChange={(e) => setImpostos(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-navy uppercase">Custos Fixos (%)</label>
                    <input type="number" value={custosFixos} onChange={(e) => setCustosFixos(Number(e.target.value))} className="p-3 border rounded bg-cream outline-none focus:border-gold" />
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gold rounded-lg text-navy">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold opacity-70">Markup Multiplicador</span>
                    <span className="font-serif text-xl font-bold">{markup.toFixed(2)}x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold opacity-70">Preço de Venda Sugerido</span>
                    <span className="font-serif text-3xl font-black">
                      R$ {precoSugerido.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Indicators Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Ticket Médio', formula: 'Faturamento / Nº de Clientes', desc: 'Indica o gasto médio por pessoa.' },
              { icon: Target, label: 'Ponto de Equilíbrio', formula: 'Custos Fixos / Margem de Contribuição', desc: 'Quanto você precisa vender para não ter prejuízo.' },
              { icon: TrendingUp, label: 'Margem de Contribuição', formula: 'Preço de Venda - Custos Variáveis', desc: 'O que sobra para pagar os custos fixos.' },
              { icon: Calculator, label: 'Break-Even Point', formula: 'Momento em que Receitas = Despesas', desc: 'O marco zero da lucratividade.' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-black/5"
              >
                <item.icon className="text-gold mb-4" size={24} />
                <h3 className="font-bold text-navy mb-1">{item.label}</h3>
                <div className="text-[10px] text-emerald font-bold uppercase mb-2">{item.formula}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
