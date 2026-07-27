import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

export default function Products() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-primary text-white py-32 px-4 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-brand-accent">Coleções Exclusivas</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">Onde o design encontra a função.</h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto font-light">
            Explorar nossas curadoria é descobrir novas formas de vestir sua casa com o que há de mais moderno em tecidos e tecnologias.
          </p>
        </motion.div>
      </section>

      {/* Product List */}
      <section className="py-24 space-y-32">
        {PRODUCTS.map((product, idx) => (
          <div 
            key={product.id} 
            className={cn(
              "max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 px-4 md:px-12",
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            <div className="w-full md:w-1/2">
               <motion.div 
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="aspect-[4/3] bg-brand-secondary overflow-hidden relative group"
               >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors" />
               </motion.div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
               <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-bold">Categoria 0{idx + 1}</span>
               <h2 className="text-4xl md:text-5xl font-serif leading-tight">{product.title}</h2>
               <p className="text-brand-muted leading-relaxed font-light text-lg italic">
                 {product.description} Trabalhamos com sistemas manuais e motorizados integrados com assistentes virtuais (Alexa, Google Home).
               </p>
               <div className="space-y-4 text-sm font-medium">
                  <div className="flex items-center space-x-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                     <span>Acabamento Premium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                     <span>Instalação Limpa e Técnica</span>
                  </div>
                  <div className="flex items-center space-x-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                     <span>Garantia Estendida Multimarcas</span>
                  </div>
               </div>
               <button className="px-10 py-5 border border-brand-primary text-brand-primary text-xs uppercase tracking-widest font-bold hover:bg-brand-primary hover:text-white transition-all">
                  BAIXAR CATÁLOGO DIGITAL
               </button>
            </div>
          </div>
        ))}
      </section>
      
      {/* Call to Action */}
      <section className="bg-brand-secondary py-32 px-4 md:px-12 text-center overflow-hidden">
         <div className="max-w-4xl mx-auto relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif">Pronto para elevar o seu projeto?</h2>
            <p className="text-brand-muted max-w-xl mx-auto">Agende uma reunião estratégica com nossos especialistas em Foz do Iguaçu ou Brasil e Paraguai.</p>
            <button className="bg-brand-accent text-brand-primary px-12 py-6 text-sm tracking-[0.3em] font-bold hover:bg-brand-primary hover:text-white transition-all shadow-xl">
               INICIAR CONSULTORIA
            </button>
         </div>
      </section>
    </div>
  );
}
