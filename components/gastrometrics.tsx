'use client';

import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Check } from 'lucide-react';

export function GastroMetrics() {
  return (
    <section id="gastrometrics" className="py-24 px-5 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots-white opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
            Tecnologia Proprietária
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            GastroMetrics — Gestão Baseada em Dados
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-10">
            Nossa plataforma transforma o custo da matéria-prima em inteligência de negócio, com dashboards em tempo real para decisões estratégicas.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: '📈',
                title: 'Dashboard Financeiro em Tempo Real',
                desc: 'DRE gerencial automatizado com CMV real (Estoque Inicial + Compras – Estoque Final), alertas de meta e comparativo mensal de crescimento.',
              },
              {
                icon: '🍽️',
                title: 'Ficha Técnica Digital Inteligente',
                desc: 'FC e FCy calculados automaticamente. Upload de foto do prato para padronização de equipe. Vinculado ao estoque em tempo real.',
              },
              {
                icon: '⚡',
                title: 'KPIs e NPS Integrados',
                desc: 'Ticket médio, ponto de equilíbrio, velocidade de crescimento e monitoramento de satisfação de clientes numa única tela.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-5 p-6 bg-white/5 rounded-lg border border-gold/20 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-gold/15 rounded-lg flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-gold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 border border-gold/30 rounded-xl p-8 backdrop-blur-sm"
        >
          {/* Dashboard Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-auto text-xs text-white/50 tracking-wider uppercase">
              GastroMetrics Dashboard • Ao Vivo
            </span>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">CMV do Mês</div>
              <div className="font-serif text-2xl font-black text-[#4CAF50] mt-1 leading-none">28,4%</div>
              <div className="text-[10px] text-[#4CAF50] mt-1 flex items-center gap-1">
                <TrendingUp size={10} /> Meta atingida <Check size={10} />
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Ticket Médio</div>
              <div className="font-serif text-2xl font-black text-gold mt-1 leading-none">R$74</div>
              <div className="text-[10px] text-[#4CAF50] mt-1 flex items-center gap-1">
                <TrendingUp size={10} /> +12% vs. mês ant.
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Lucro Líquido</div>
              <div className="font-serif text-2xl font-black text-white mt-1 leading-none">R$18k</div>
              <div className="text-[10px] text-[#4CAF50] mt-1 flex items-center gap-1">
                <TrendingUp size={10} /> Margem 19%
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Break-Even</div>
              <div className="font-serif text-2xl font-black text-gold mt-1 leading-none">R$64k</div>
              <div className="text-[10px] text-[#4CAF50] mt-1 flex items-center gap-1">
                <Check size={10} /> Superado em 29%
              </div>
            </div>
          </div>

          {/* Charts */}
          <div>
            <div className="text-xs text-white/50 mb-3">Curva ABC — Insumos por valor</div>
            {[
              { label: 'Carnes (A)', value: '42%', color: 'bg-gold' },
              { label: 'Bebidas (A)', value: '28%', color: 'bg-emerald' },
              { label: 'Laticínios (B)', value: '18%', color: 'bg-[#5C6BC0]' },
              { label: 'Demais (C)', value: '12%', color: 'bg-white/30' },
            ].map((item) => (
              <div key={item.label} className="mb-3 last:mb-0">
                <div className="flex justify-between text-[10px] text-white/50 mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
