'use client';

import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-[#0D1654] text-white/70 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Transformando negócios gastronômicos com dados, estratégia e expertise. De restaurantes independentes a redes, levamos sua operação ao próximo nível.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Serviços</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Diagnóstico Financeiro</Link></li>
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Engenharia de Cardápio</Link></li>
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Formação de Preços</Link></li>
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Gestão de Estoque</Link></li>
              <li><Link href="#critica" className="hover:text-gold transition-colors">Crítica Gastronômica</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Plataforma</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/gastrometrics" className="hover:text-gold transition-colors">Ferramenta GastroMetrics</Link></li>
              <li><Link href="/alimentacao-segura" className="hover:text-gold transition-colors">Alimentação Segura (Anvisa)</Link></li>
              <li><Link href="/#gastrometrics" className="hover:text-gold transition-colors">Dashboard Financeiro</Link></li>
              <li><Link href="/#gastrometrics" className="hover:text-gold transition-colors">Fichas Técnicas</Link></li>
              <li><Link href="/#planilha" className="hover:text-gold transition-colors">Planilha Grátis</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-gold uppercase tracking-widest mb-4">Empresa</h5>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog & Artigos</Link></li>
              <li><Link href="/#sobre" className="hover:text-gold transition-colors">Sobre nós</Link></li>
              <li><Link href="/#metodologia" className="hover:text-gold transition-colors">Metodologia</Link></li>
              <li><Link href="/#planos" className="hover:text-gold transition-colors">Planos</Link></li>
              <li><Link href="/#contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <span>© 2025 LC Consultoria e Crítica Gastronômica. Todos os direitos reservados.</span>
            <div className="flex gap-4">
              <Link href="/politicas" className="hover:text-gold transition-colors">Políticas de Privacidade</Link>
              <Link href="/termos" className="hover:text-gold transition-colors">Termos de Uso</Link>
            </div>
          </div>
          <span>CNPJ: 00.000.000/0001-00 · Rio de Janeiro, RJ</span>
        </div>
      </div>
    </footer>
  );
}
