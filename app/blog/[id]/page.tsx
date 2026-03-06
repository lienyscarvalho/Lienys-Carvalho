'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Como Reduzir o CMV em 20% sem Perder Qualidade',
    content: `
      O Custo de Mercadoria Vendida (CMV) é um dos indicadores mais críticos para a saúde financeira de um restaurante. Reduzi-lo em 20% pode significar a diferença entre o prejuízo e um lucro saudável.
      
      ### 1. Fichas Técnicas Precisas
      Não existe controle sem medição. Cada prato deve ter sua ficha técnica detalhada, incluindo fator de correção e cocção.
      
      ### 2. Negociação com Fornecedores
      Revise seus contratos trimestralmente. O volume de compras deve ser usado como alavanca para melhores preços.
      
      ### 3. Controle de Desperdício
      Monitore o lixo. O que está sendo jogado fora? Cascas que poderiam virar caldos? Sobras de pratos que indicam porções exageradas?
    `,
    date: '15 Mar, 2025',
    category: 'Gestão Financeira',
    image: 'https://picsum.photos/seed/restaurant-finance/1200/600'
  },
  {
    id: 2,
    title: 'Engenharia de Cardápio: O Guia Definitivo',
    content: `
      A Engenharia de Cardápio é uma ferramenta estratégica que analisa a rentabilidade e a popularidade de cada item.
      
      ### A Matriz BCGE (Boston Consulting Group para Gastronomia)
      - **Estrelas**: Alta popularidade e alta rentabilidade. Mantenha e promova.
      - **Cavalos de Carga**: Alta popularidade e baixa rentabilidade. Tente reduzir custos ou aumentar o preço levemente.
      - **Quebra-cabeças**: Baixa popularidade e alta rentabilidade. Melhore o marketing ou a descrição no menu.
      - **Cães**: Baixa popularidade e baixa rentabilidade. Remova do cardápio.
    `,
    date: '10 Mar, 2025',
    category: 'Estratégia',
    image: 'https://picsum.photos/seed/restaurant-menu-design/1200/600'
  },
  {
    id: 3,
    title: 'Legislação Anvisa 2025: O que Mudou?',
    content: `
      As normas sanitárias estão em constante evolução para garantir a segurança do consumidor.
      
      ### Principais Pontos de Atenção
      - **Rastreabilidade**: Agora é obrigatório saber a origem de cada insumo de forma digital.
      - **Alérgenos**: A rotulagem e o aviso no cardápio sobre substâncias alergênicas tornaram-se mais rigorosos.
      - **Treinamento**: A reciclagem da equipe deve ser documentada semestralmente.
    `,
    date: '05 Mar, 2025',
    category: 'Segurança Alimentar',
    image: 'https://picsum.photos/seed/food-safety-inspection/1200/600'
  }
];

export default function BlogPost() {
  const params = useParams();
  const id = Number(params.id);
  
  const article = articles.find(a => a.id === id) || articles[0];

  return (
    <main>
      <Navbar />
      <article className="pt-32 pb-20 px-5 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold font-bold text-sm mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={16} /> Voltar para o Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-xl">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-wrap gap-6 mb-8 text-xs text-gray-500 font-bold uppercase tracking-widest border-b pb-8">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-gold" /> {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-gold" /> {article.category}
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold" /> LC Editorial
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-10">
              {article.title}
            </h1>

            <div className="prose prose-lg prose-navy max-w-none text-gray-600 leading-relaxed space-y-6 whitespace-pre-line">
              {article.content}
            </div>

            <div className="mt-16 p-10 bg-cream rounded-2xl border border-gold/20">
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Precisa de ajuda com este tema?</h3>
              <p className="text-gray-600 mb-6">
                Nossa consultoria especializada pode implementar estas estratégias diretamente no seu negócio, garantindo resultados rápidos e sustentáveis.
              </p>
              <Link href="/#contato" className="inline-block bg-navy text-white px-8 py-3 rounded-md font-bold hover:bg-navy-light transition-colors">
                Solicitar Consultoria
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
