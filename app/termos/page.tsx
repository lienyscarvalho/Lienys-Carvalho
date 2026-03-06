'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';

export default function TermsOfUse() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-xl shadow-sm border border-black/5"
          >
            <h1 className="font-serif text-4xl font-black text-navy mb-8">Termos de Uso</h1>
            <div className="prose prose-navy max-w-none text-gray-600 space-y-6">
              <p>
                Ao acessar o site da LC Consultoria, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.
              </p>
              
              <h2 className="text-xl font-bold text-navy">1. Uso de Licença</h2>
              <p>
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da LC Consultoria, apenas para visualização pessoal e não comercial transitória.
              </p>

              <h2 className="text-xl font-bold text-navy">2. Isenção de Responsabilidade</h2>
              <p>
                Os materiais no site da LC Consultoria são fornecidos &apos;como estão&apos;. A LC Consultoria não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.
              </p>

              <h2 className="text-xl font-bold text-navy">3. Limitações</h2>
              <p>
                Em nenhum caso a LC Consultoria ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
              </p>

              <h2 className="text-xl font-bold text-navy">4. Precisão dos Materiais</h2>
              <p>
                Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A LC Consultoria não garante que qualquer material em seu site seja preciso, completo ou atual.
              </p>

              <h2 className="text-xl font-bold text-navy">5. Links</h2>
              <p>
                A LC Consultoria não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado.
              </p>
              
              <p className="pt-10 text-sm italic">
                Última atualização: Março de 2025.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
