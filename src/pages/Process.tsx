import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Scissors, ClipboardList, PackageCheck, Wrench, Headphones } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    icon: Search, 
    title: "Descoberta", 
    desc: "Iniciamos com uma conversa consultiva para entender o seu estilo, necessidades funcionais (luz, acústica, privacidade) e as expectativas para o ambiente." 
  },
  { 
    id: 2, 
    icon: ClipboardList, 
    title: "Atendimento", 
    desc: "Apresentamos uma curadoria de tecidos, acabamentos e sistemas (manuais ou automáticos) que melhor se adaptam ao seu projeto." 
  },
  { 
    id: 3, 
    icon: MapPin, 
    title: "Medição Técnica", 
    desc: "Nossos especialistas visitam o local para conferir medidas milimétricas e analisar as condições de instalação, garantindo um encaixe perfeito." 
  },
  { 
    id: 4, 
    icon: PackageCheck, 
    title: "Proposta", 
    desc: "Enviamos o orçamento detalhado com todas as especificações técnicas e cronograma de entrega acordado." 
  },
  { 
    id: 5, 
    icon: Scissors, 
    title: "Produção", 
    desc: "Seu pedido vai para o nosso ateliê próprio. Cada peça é confeccionada artesanalmente com rigoroso controle de qualidade em cada costura." 
  },
  { 
    id: 6, 
    icon: Wrench, 
    title: "Instalação", 
    desc: "Nossa equipe técnica própria executa a instalação de forma limpa, rápida e precisa, configurando inclusive sistemas de automação se houver." 
  },
  { 
    id: 7, 
    icon: Headphones, 
    title: "Pós-venda", 
    desc: "Mantemos o contato para garantir que tudo esteja perfeito. Oferecemos suporte contínuo e orientações de manutenção para a longevidade do produto." 
  },
];

export default function Process() {
  return (
    <div className="pt-20">
      <section className="bg-brand-secondary py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24 max-w-2xl mx-auto space-y-6">
              <span className="text-xs uppercase tracking-[0.4em] text-brand-accent">Metodologia</span>
              <h1 className="text-5xl md:text-7xl font-serif">O caminho para o ambiente perfeito.</h1>
              <p className="text-brand-muted font-light text-lg">Sete etapas desenhadas para garantir tranqüilidade, segurança e um resultado impecável em cada metro quadrado.</p>
           </div>

           <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center bg-white p-8 md:p-12 gap-8 shadow-sm group hover:shadow-xl transition-shadow"
                >
                   <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <step.icon size={32} />
                   </div>
                   <div className="text-center md:text-left flex-grow">
                      <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1 block">Passo 0{step.id}</span>
                      <h3 className="text-2xl font-serif mb-2">{step.title}</h3>
                      <p className="text-brand-muted font-light leading-relaxed max-w-3xl">{step.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-brand-primary text-white text-center px-4">
          <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif italic text-brand-accent">Pronto para iniciar seu projeto conosco?</h2>
              <p className="text-brand-muted font-light italic">Temos especialistas prontos para realizar uma consultoria exclusiva na sua obra ou reforma.</p>
              <button className="px-12 py-5 bg-white text-brand-primary font-bold tracking-widest text-sm hover:bg-brand-accent hover:text-white transition-all">
                  AGENDAR VISITA TÉCNICA
              </button>
          </div>
      </section>
    </div>
  );
}
