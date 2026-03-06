'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('✅ Mensagem enviada! Nossa equipe entrará em contato em até 24h.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-navy leading-tight mb-6">
            Inicie sua transformação hoje
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Agende um diagnóstico gratuito de 30 minutos. Analisaremos os principais indicadores do seu negócio e apresentaremos um plano de ação personalizado, sem compromisso.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-cream rounded-lg flex items-center justify-center text-navy">
                <Phone size={20} />
              </div>
              <div>
                <strong className="block text-sm text-navy">WhatsApp</strong>
                <span className="text-sm text-gray-600">(21) 98482-1444</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-cream rounded-lg flex items-center justify-center text-navy">
                <Mail size={20} />
              </div>
              <div>
                <strong className="block text-sm text-navy">E-mail</strong>
                <span className="text-sm text-gray-600">contatos@lcconsultoria.com.br</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-cream rounded-lg flex items-center justify-center text-navy">
                <MapPin size={20} />
              </div>
              <div>
                <strong className="block text-sm text-navy">Atendimento</strong>
                <span className="text-sm text-gray-600">Presencial (Rio de Janeiro/RJ) e Online (todo Brasil)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-cream rounded-lg flex items-center justify-center text-navy">
                <Clock size={20} />
              </div>
              <div>
                <strong className="block text-sm text-navy">Horário</strong>
                <span className="text-sm text-gray-600">Seg–Sex: 9h–18h | Sáb: 9h–13h</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-navy">Nome completo *</label>
                <input type="text" placeholder="Seu nome" required className="p-3.5 border border-black/10 rounded-md bg-cream focus:bg-white focus:border-navy outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-navy">WhatsApp *</label>
                <input type="tel" placeholder="(21) 98482-1444" required className="p-3.5 border border-black/10 rounded-md bg-cream focus:bg-white focus:border-navy outline-none transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy">E-mail *</label>
              <input type="email" placeholder="seu@email.com" required className="p-3.5 border border-black/10 rounded-md bg-cream focus:bg-white focus:border-navy outline-none transition-colors" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy">Tipo de estabelecimento *</label>
              <select required className="p-3.5 border border-black/10 rounded-md bg-cream focus:bg-white focus:border-navy outline-none transition-colors">
                <option value="">Selecione...</option>
                <option>Restaurante</option>
                <option>Bar e Boteco</option>
                <option>Hamburgueria</option>
                <option>Pizzaria</option>
                <option>Padaria & Confeitaria</option>
                <option>Food Truck</option>
                <option>Dark Kitchen</option>
                <option>Rede / Franquia</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy">Serviço de interesse</label>
              <select className="p-3.5 border border-black/10 rounded-md bg-cream focus:bg-white focus:border-navy outline-none transition-colors">
                <option value="">Selecione...</option>
                <option>Diagnóstico Financeiro</option>
                <option>Engenharia de Cardápio</option>
                <option>Plataforma GastroMetrics</option>
                <option>Crítica Gastronômica</option>
                <option>Consultoria Completa</option>
                <option>Não sei ainda</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-navy">Mensagem</label>
              <textarea placeholder="Conte um pouco sobre seu negócio e seu principal desafio hoje..." className="p-3.5 border border-black/10 rounded-md bg-cream focus:bg-white focus:border-navy outline-none transition-colors min-h-[120px] resize-y" />
            </div>

            <button type="submit" className="bg-navy text-white font-bold p-4 rounded-md hover:bg-navy-light transition-colors mt-2">
              Solicitar diagnóstico gratuito →
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
