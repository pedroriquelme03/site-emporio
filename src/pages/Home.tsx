import React from 'react';
import { Hero, AboutBrief, ProductGrid, CustomEstimator, ProcessSteps } from '../components/HomeSections';
import { motion } from 'motion/react';
import { MessageCircle, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Renata Vasconcelos",
      role: "Arquiteta",
      content: "A qualidade do acabamento do Empório é impecável. Como profissional, prezo muito pelo prazo e suporte, e eles entregam excelência em ambos.",
      image: "https://i.pravatar.cc/150?u=renata"
    },
    {
      name: "Marcos Paulo Silveira",
      role: "Empresário",
      content: "Automatizamos todas as persianas da casa com eles. O sistema é robusto e o atendimento técnico foi primordial para a escolha certa.",
      image: "https://i.pravatar.cc/150?u=marcos"
    },
    {
      name: "Ana Julia Schmidt",
      role: "Designer de Interiores",
      content: "Minha parceria com o Empório das Cortinas já dura anos. É a confiança de saber que meu cliente será atendido com o luxo que merece.",
      image: "https://i.pravatar.cc/150?u=ana"
    }
  ];

  return (
    <section className="py-32 bg-brand-secondary px-4 md:px-12">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
             <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold">Feedback</span>
             <h2 className="text-4xl md:text-5xl font-serif italic">Relatos de quem valoriza o design.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-12 relative flex flex-col items-center text-center space-y-6 shadow-sm border border-brand-primary/5"
              >
                <Quote className="absolute top-8 left-8 text-brand-accent opacity-20" size={40} />
                <img src={r.image} alt={r.name} className="w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
                <p className="text-brand-muted leading-relaxed font-light italic">"{r.content}"</p>
                <div>
                   <h4 className="font-serif text-lg">{r.name}</h4>
                   <p className="text-[10px] uppercase tracking-widest text-brand-accent font-semibold mt-1">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};

const LocationInfo = () => {
    return (
        <section className="py-32 bg-white px-4 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold">Localização</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Visite nosso Showroom em Foz do Iguaçu.</h2>
                    <p className="text-brand-muted leading-relaxed font-light">
                        Um espaço planejado para você sentir a textura dos tecidos e ver de perto toda a tecnologia de automação que oferecemos. Atendimento com hora marcada para total privacidade.
                    </p>
                    <div className="space-y-4 pt-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center">
                                <MessageCircle className="text-brand-accent" size={20} />
                            </div>
                            <span className="text-sm font-medium tracking-widest">(45) 3526-4647</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center">
                                <Star className="text-brand-accent" size={20} />
                            </div>
                            <span className="text-sm font-medium tracking-widest">Av José Maria de Brito, 2094</span>
                        </div>
                    </div>
                    <button className="px-10 py-5 bg-brand-primary text-white text-xs tracking-[0.2em] font-medium hover:bg-brand-accent transition-all">
                        VER NO MAPA
                    </button>
                </div>
                <div className="relative aspect-video md:aspect-square bg-brand-secondary group overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?q=80&w=1000&auto=format&fit=crop" 
                        alt="Storefront" 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 border-[20px] border-white pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutBrief />
      <ProductGrid />
      <CustomEstimator />
      <ProcessSteps />
      <Testimonials />
      <LocationInfo />
      
      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/554535264647" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
