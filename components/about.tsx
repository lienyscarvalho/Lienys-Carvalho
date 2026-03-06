'use client';

import { motion } from 'motion/react';

export function About() {
  return (
    <section id="sobre" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-navy rounded-lg p-10 md:p-12 text-white relative overflow-hidden">
            <div className="absolute -top-5 right-5 font-serif text-[12rem] text-gold/15 leading-none select-none">
              &quot;
            </div>
            <p className="font-serif text-2xl italic leading-relaxed relative z-10">
              &quot;Você sente que trabalha muito, mas o dinheiro some no fim do mês? O segredo está no seu CMV oculto — e nós sabemos como encontrá-lo.&quot;
            </p>
            <cite className="block mt-6 not-italic text-sm font-bold text-gold tracking-wider uppercase">
              — LC Consultoria Gastronômica
            </cite>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gold rounded-full opacity-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Quem somos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
            Autoridade técnica a serviço da gastronomia
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A LC Consultoria e Crítica Gastronômica nasce da convergência entre paixão pela gastronomia e rigor técnico em gestão de negócios. Atuamos como parceiros estratégicos de restaurantes, bares, padarias e negócios alimentares que desejam profissionalizar sua operação.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Combinamos consultoria de gestão financeira, engenharia de cardápio, crítica gastronômica especializada e tecnologia com o GastroMetrics — nossa plataforma proprietária de gestão baseada em dados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Engenharia de Cardápio', desc: 'Ficha técnica profissional e markup preciso' },
              { title: 'Gestão Financeira', desc: 'CMV real, DRE gerencial e break-even' },
              { title: 'Crítica Especializada', desc: 'Avaliação técnica para qualidade e posicionamento' },
              { title: 'Tecnologia GastroMetrics', desc: 'Dashboards de BI integrados ao seu negócio' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-cream rounded-md border-l-4 border-gold">
                <strong className="block text-sm text-navy mb-1">{item.title}</strong>
                <span className="text-xs text-gray-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
