import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-white px-4 md:px-12">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               {/* Left Column: Info */}
               <div className="space-y-12">
                  <div className="space-y-6">
                    <span className="text-xs uppercase tracking-[0.4em] text-brand-accent">Contate-nos</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">Estamos à sua disposição.</h1>
                    <p className="text-brand-muted text-lg font-light leading-relaxed border-l-2 border-brand-accent/30 pl-6">
                        Seja para uma dúvida rápida ou para agendar uma consultoria técnica de alto padrão, nossa equipe está pronta para atendê-lo.
                    </p>
                  </div>

                  <div className="space-y-8">
                      <div className="flex items-start space-x-6">
                         <div className="w-12 h-12 bg-brand-secondary flex items-center justify-center shrink-0">
                            <Phone size={20} className="text-brand-accent" />
                         </div>
                         <div>
                            <h4 className="font-serif text-lg">Telefone & WhatsApp</h4>
                            <p className="text-brand-muted text-sm">(45) 3526-4647</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-6">
                         <div className="w-12 h-12 bg-brand-secondary flex items-center justify-center shrink-0">
                            <Mail size={20} className="text-brand-accent" />
                         </div>
                         <div>
                            <h4 className="font-serif text-lg">E-mail</h4>
                            <p className="text-brand-muted text-sm">emporiodascortinas_vendas@hotmail.com</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-6">
                         <div className="w-12 h-12 bg-brand-secondary flex items-center justify-center shrink-0">
                            <MapPin size={20} className="text-brand-accent" />
                         </div>
                         <div>
                            <h4 className="font-serif text-lg">Endereço</h4>
                            <p className="text-brand-muted text-sm">Av José Maria de Brito, 2094 - Foz do Iguaçu</p>
                         </div>
                      </div>
                  </div>

                  <div className="pt-8 flex space-x-6">
                     <a href="#" className="w-10 h-10 border border-brand-secondary flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all"><Instagram size={18} /></a>
                     <a href="#" className="w-10 h-10 border border-brand-secondary flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all"><Facebook size={18} /></a>
                  </div>
               </div>

               {/* Right Column: Form */}
               <div className="bg-brand-secondary p-12 shadow-sm">
                  <h3 className="text-3xl font-serif mb-8 text-center">Envie sua mensagem</h3>
                  <form className="space-y-6">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Nome Completo</label>
                        <input type="text" className="w-full bg-white border-none p-4 focus:ring-1 focus:ring-brand-accent outline-none" placeholder="João da Silva" />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">E-mail</label>
                            <input type="email" className="w-full bg-white border-none p-4 focus:ring-1 focus:ring-brand-accent outline-none" placeholder="joao@exemplo.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">WhatsApp</label>
                            <input type="tel" className="w-full bg-white border-none p-4 focus:ring-1 focus:ring-brand-accent outline-none" placeholder="(45) 99999-9999" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Assunto</label>
                        <select className="w-full bg-white border-none p-4 focus:ring-1 focus:ring-brand-accent outline-none appearance-none">
                            <option>Orçamento de Cortinas</option>
                            <option>Persianas Motorizadas</option>
                            <option>Móveis & Decoração</option>
                            <option>Parceria com Arquitetos</option>
                            <option>Outros</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Mensagem</label>
                        <textarea rows={5} className="w-full bg-white border-none p-4 focus:ring-1 focus:ring-brand-accent outline-none resize-none" placeholder="Conte-nos um pouco sobre seu projeto..."></textarea>
                     </div>
                     <button className="w-full py-5 bg-brand-primary text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all flex items-center justify-center space-x-3 group">
                        <span>ENVIAR SOLICITAÇÃO</span>
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* Map Mockup */}
      <section className="h-[500px] w-full bg-brand-secondary grayscale">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.672688320492!2d-54.5714392!3d-25.51508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6916f1a8c991b%3A0x6b77e8a937a077ed!2sAv.%20Jos%C3%A9%20Maria%20de%20Brito%2C%202094%20-%20Jardim%20Princesa%20Diana%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
    </div>
  );
}
