'use client';

import { motion } from 'motion/react';
import { BarChart3, ClipboardList, DollarSign, Package, Users, Target } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Diagnóstico Financeiro',
    description: 'Análise completa do CMV real, identificação de desperdícios ocultos, mapeamento de custos fixos e variáveis, e DRE gerencial personalizado para o seu negócio.',
    price: '→ Sessão única ou mensal',
  },
  {
    icon: ClipboardList,
    title: 'Engenharia de Cardápio',
    description: 'Elaboração de Fichas Técnicas Profissionais (FTP) com cálculo de Fator de Correção, Fator de Cocção, precificação via Markup e análise de rentabilidade por prato.',
    price: '→ Por cardápio completo',
  },
  {
    icon: DollarSign,
    title: 'Formação de Preços',
    description: 'Calculamos o Markup ideal considerando suas despesas fixas, variáveis e margem de lucro desejada. Elimine o "achismo" e precifique com segurança e competitividade.',
    price: '→ Por cardápio ou avulso',
  },
  {
    icon: Package,
    title: 'Gestão de Estoque',
    description: 'Implantação do inventário permanente com curva ABC, controle de validades, alertas de estoque baixo e integração com ficha técnica para cálculo automático de CMV.',
    price: '→ Consultoria + implantação',
  },
  {
    icon: Users,
    title: 'Gestão de Equipe',
    description: 'Gerador de escalas 5x1, 6x1 e 12x36 conforme legislação trabalhista, controle de folgas obrigatórias e dimensionamento ideal de equipe por volume de vendas.',
    price: '→ Consultoria mensal',
  },
  {
    icon: Target,
    title: 'Treinamento Gerencial',
    description: 'Capacitação presencial ou online para donos e gerentes: leitura de indicadores, tomada de decisão baseada em dados, gestão de custos e padronização de processos.',
    price: '→ Turmas ou in company',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 px-5 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
            Soluções completas para seu negócio gastronômico
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Do diagnóstico à implementação, acompanhamos cada etapa da transformação do seu restaurante em uma operação eficiente e lucrativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg p-10 border border-black/5 relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center text-white mb-6">
                <service.icon size={28} />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {service.description}
              </p>
              
              <span className="text-xs font-bold text-emerald uppercase tracking-wider">
                {service.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
