'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: '"Em 3 meses, nosso CMV caiu de 54% para 29%. Descobrimos que estávamos perdendo R$8.000/mês em desperdício que nem sabíamos que existia."',
      author: 'Roberto Caiçara',
      role: 'Hamburgueria Caiçara, Santos - SP',
      initial: 'R',
    },
    {
      text: '"O GastroMetrics é o que faltava. Hoje tomo todas as decisões de cardápio com dados, não com feeling. Meu ticket médio subiu 34% em 4 meses."',
      author: 'Patrícia Mendes',
      role: 'Restaurante Boa Mesa, Florianópolis',
      initial: 'P',
    },
    {
      text: '"A crítica gastronômica nos deu um olhar externo essencial. Identificamos inconsistências no cardápio que jamais teríamos visto sozinhos. Recomendo sem hesitar."',
      author: 'Felipe Arruda',
      role: 'Chef & Sócio — Osteria Rossa, Curitiba',
      initial: 'F',
    },
  ];

  return (
    <section id="depoimentos" className="py-24 px-5 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight">
            Resultados reais de quem confiou na LC
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 border border-black/5 relative"
            >
              <div className="absolute top-6 right-6 text-4xl text-gold/20 font-serif leading-none">
                ❝
              </div>
              <div className="flex gap-1 text-gold mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <strong className="block text-sm text-navy">{t.author}</strong>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
