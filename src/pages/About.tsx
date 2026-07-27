import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Intro */}
      <section className="py-32 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <span className="text-xs uppercase tracking-[0.4em] text-brand-accent">Nossa Essência</span>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight">Uma história tecida <br /> <span className="italic">com propósito.</span></h1>
                <div className="space-y-6 text-brand-muted font-light text-lg leading-relaxed">
                   <p>Fundada em 2006, a Empório das Cortinas nasceu de um desejo profundo: transformar a percepção do design de interiores em Foz do Iguaçu e região.</p>
                   <p>O que começou como um pequeno escritório de consultoria evoluiu para uma referência absoluta em cortinas sob medida e persianas de alto padrão. Nosso ateliê próprio é o coração de tudo, onde cada costura e cada detalhe são supervisionados por mestres artesãos.</p>
                </div>
            </div>
            <div className="relative">
                <div className="aspect-[3/4] bg-brand-secondary overflow-hidden rounded-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop" 
                        alt="Atendimento Luxo" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-brand-accent p-10 text-brand-primary hidden md:block">
                    <p className="text-sm font-bold uppercase tracking-widest leading-tight">Excelência <br /> Comprovada</p>
                </div>
            </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-brand-primary text-white px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-6">
                    <Shield className="text-brand-accent" size={40} />
                    <h3 className="text-2xl font-serif">Missão</h3>
                    <p className="text-brand-muted font-light leading-relaxed">Proporcionar bem-estar e sofisticação através de soluções personalizadas em controle solar e decoração, superando as expectativas em cada detalhe.</p>
                </div>
                <div className="space-y-6">
                    <Award className="text-brand-accent" size={40} />
                    <h3 className="text-2xl font-serif">Visão</h3>
                    <p className="text-brand-muted font-light leading-relaxed">Ser reconhecida como a principal autoridade em luxo e curadoria de decoração no sul do Brasil e Paraguai, unindo tecnologia e arte.</p>
                </div>
                <div className="space-y-6">
                    <Heart className="text-brand-accent" size={40} />
                    <h3 className="text-2xl font-serif">Valores</h3>
                    <p className="text-brand-muted font-light leading-relaxed">Exclusividade no atendimento, ética nas relações, compromisso com a qualidade técnica e paixão pela transformação de ambientes.</p>
                </div>
             </div>
          </div>
      </section>

      {/* The Experience */}
      <section className="py-32 bg-white px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight italic">"Não vendemos apenas cortinas, entregamos a moldura para as suas melhores memórias."</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="aspect-square bg-brand-secondary overflow-hidden">
                   <img src="https://picsum.photos/seed/abt1/600/600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Process" referrerPolicy="no-referrer" />
               </div>
               <div className="aspect-square bg-brand-secondary overflow-hidden">
                   <img src="https://picsum.photos/seed/abt2/600/600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Process" referrerPolicy="no-referrer" />
               </div>
               <div className="aspect-square bg-brand-secondary overflow-hidden">
                   <img src="https://picsum.photos/seed/abt3/600/600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Process" referrerPolicy="no-referrer" />
               </div>
               <div className="aspect-square bg-brand-secondary overflow-hidden">
                   <img src="https://picsum.photos/seed/abt4/600/600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Process" referrerPolicy="no-referrer" />
               </div>
            </div>
            <div className="pt-12">
               <button className="px-12 py-6 bg-brand-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-all">
                   SOLICITAR ORÇAMENTO AGORA
               </button>
            </div>
        </div>
      </section>
    </div>
  );
}
