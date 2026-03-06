'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
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
            <h1 className="font-serif text-4xl font-black text-navy mb-8">Políticas de Privacidade</h1>
            <div className="prose prose-navy max-w-none text-gray-600 space-y-6">
              <p>
                A LC Consultoria e Crítica Gastronômica valoriza a privacidade de seus usuários. Esta política descreve como coletamos, usamos e protegemos suas informações.
              </p>
              
              <h2 className="text-xl font-bold text-navy">1. Coleta de Dados</h2>
              <p>
                Coletamos informações que você nos fornece voluntariamente através de nossos formulários de contato e inscrição em newsletters, como nome, e-mail, telefone e informações sobre seu estabelecimento.
              </p>

              <h2 className="text-xl font-bold text-navy">2. Uso das Informações</h2>
              <p>
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fornecer os serviços de consultoria solicitados;</li>
                <li>Enviar diagnósticos e materiais educativos;</li>
                <li>Melhorar nossa plataforma GastroMetrics;</li>
                <li>Comunicação sobre atualizações e novos serviços.</li>
              </ul>

              <h2 className="text-xl font-bold text-navy">3. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
              </p>

              <h2 className="text-xl font-bold text-navy">4. Seus Direitos</h2>
              <p>
                Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento através do e-mail contatos@lcconsultoria.com.br.
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
