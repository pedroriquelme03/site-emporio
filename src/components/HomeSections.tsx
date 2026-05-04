import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Star, Clock, Ruler, ShieldCheck, MapPin } from 'lucide-react';
import { PRODUCTS } from '../constants';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover brightness-[0.7]" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-primary/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-xs uppercase tracking-[0.4em] text-brand-accent mb-6"
        >
          Desde 2006 — Arquitetura da Luz & Design
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tight"
        >
          Transforme seu ambiente <br />
          <span className="italic">com elegância</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-secondary/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Curadoria exclusiva de cortinas sob medida, persianas motorizadas e mobiliário de luxo para projetos singulares.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a 
            href="#contato" 
            className="group px-10 py-5 bg-brand-accent text-brand-primary font-medium tracking-widest text-sm hover:bg-white transition-all duration-500 flex items-center"
          >
            FALE COM UM ESPECIALISTA
            <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </a>
          <a 
            href="#showroom" 
            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium tracking-widest text-sm hover:bg-white/20 transition-all duration-300"
          >
            NOSSO SHOWROOM
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
};

export const AboutBrief = () => {
  return (
    <section className="py-32 bg-white px-4 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1000&auto=format&fit=crop" 
              alt="Atelier" 
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-brand-primary p-12 text-white hidden md:block">
             <span className="text-6xl font-serif text-brand-accent block mb-2">18+</span>
             <span className="text-xs uppercase tracking-widest font-medium text-brand-muted">Anos de Experiência</span>
          </div>
        </div>
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold">Exclusividade e Tradição</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Onde a sofisticação encontra o atendimento consultivo.</h2>
          <p className="text-brand-muted leading-relaxed text-lg font-light">
            O <span className="text-brand-primary font-medium">Empório das Cortinas</span> é mais que uma loja. Somos um ateliê de alta costura para janelas, fundado em 2006 com a missão de entregar não apenas produtos, mas atmosferas completas.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <h4 className="font-serif text-xl">Ateliê Próprio</h4>
              <p className="text-sm text-brand-muted">Qualidade artesanal e rigorosa em cada acabamento.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-xl">Multimarcas</h4>
              <p className="text-sm text-brand-muted">As melhores marcas nacionais e internacionais.</p>
            </div>
          </div>
          <button className="pt-8 flex items-center text-sm font-semibold tracking-widest uppercase hover:text-brand-accent transition-colors group">
            CONHEÇA NOSSA HISTÓRIA <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const ProductGrid = () => {
  return (
    <section className="py-32 bg-brand-secondary px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
          <div className="space-y-4">
             <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold">Curadoria</span>
             <h2 className="text-4xl md:text-5xl font-serif">Soluções para o seu habitat.</h2>
          </div>
          <p className="max-w-md text-brand-muted font-light leading-relaxed">
            Do clássico ao contemporâneo, oferecemos uma vasta gama de tecidos, sistemas de motorização e móveis assinados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white group cursor-pointer overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4 flex flex-col items-center text-center flex-grow">
                 <h3 className="text-2xl font-serif">{product.title}</h3>
                 <p className="text-sm text-brand-muted leading-relaxed line-clamp-2">{product.description}</p>
                 <div className="pt-4 mt-auto">
                    <span className="text-xs uppercase tracking-widest border-b border-brand-accent/30 pb-1 group-hover:border-brand-accent transition-all">Ver Detalhes</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CustomEstimator = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [fabric, setFabric] = useState("linho");

  const fabrics: Record<string, { name: string, price: number }> = {
    "linho": { name: "Linho Suave", price: 180 },
    "seda": { name: "Seda Nobre", price: 350 },
    "veludo": { name: "Veludo Premium", price: 280 },
    "blackout": { name: "Blackout Técnico", price: 120 }
  };

  const calculateEstimate = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!w || !h) return 0;
    const basePrice = w * h * fabrics[fabric].price;
    return basePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section className="py-32 bg-brand-primary text-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
           <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold">Tecnologia e Medida</span>
           <h2 className="text-4xl md:text-5xl font-serif leading-tight">Simule seu projeto sob medida.</h2>
           <p className="text-brand-muted text-lg font-light leading-relaxed">
             Uma estimativa rápida para ajudá-lo a visualizar o investimento em seu novo ambiente. O valor final será confirmado após visita técnica.
           </p>
           
           <div className="flex items-center space-x-6 pt-6">
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-3">
                    <Ruler size={24} className="text-brand-accent" />
                 </div>
                 <span className="text-[10px] uppercase tracking-widest text-brand-muted">Precisão</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-3">
                    <ShieldCheck size={24} className="text-brand-accent" />
                 </div>
                 <span className="text-[10px] uppercase tracking-widest text-brand-muted">Garantia</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-3">
                    <Clock size={24} className="text-brand-accent" />
                 </div>
                 <span className="text-[10px] uppercase tracking-widest text-brand-muted">Agilidade</span>
              </div>
           </div>
        </div>

        <div className="bg-white text-brand-primary p-10 shadow-2xl space-y-8">
           <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold tracking-wider text-brand-muted">Largura (m)</label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="ex: 2.50"
                  className="w-full px-4 py-3 bg-brand-secondary border-none focus:ring-1 focus:ring-brand-accent transition-all outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold tracking-wider text-brand-muted">Altura (m)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="ex: 2.80"
                  className="w-full px-4 py-3 bg-brand-secondary border-none focus:ring-1 focus:ring-brand-accent transition-all outline-none" 
                />
              </div>
           </div>

           <div className="space-y-2">
              <label className="text-xs uppercase font-semibold tracking-wider text-brand-muted">Selecione o Tecido</label>
              <select 
                value={fabric}
                onChange={(e) => setFabric(e.target.value)}
                className="w-full px-4 py-3 bg-brand-secondary border-none focus:ring-1 focus:ring-brand-accent transition-all outline-none appearance-none"
              >
                {Object.entries(fabrics).map(([key, f]) => (
                  <option key={key} value={key}>{f.name}</option>
                ))}
              </select>
           </div>

           <div className="pt-4 border-t border-brand-secondary">
              <div className="flex justify-between items-end">
                 <div>
                    <span className="text-xs text-brand-muted uppercase tracking-widest">Investimento Estimado</span>
                    <p className="text-4xl font-serif text-brand-accent mt-2">{calculateEstimate() === "R$ 0,00" ? "—" : calculateEstimate()}</p>
                 </div>
                 <button className="px-8 py-4 bg-brand-primary text-white text-xs uppercase tracking-widest hover:bg-brand-accent transition-all">
                    SOLICITAR VISITA
                 </button>
              </div>
              <p className="text-[10px] text-brand-muted mt-6 italic">
                *Cálculo baseado em metragem quadrada de tecido padrão. Não inclui sistemas de trilho, motorização ou instalação.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const ProcessSteps = () => {
  const steps = [
    { number: "01", title: "Consultoria", desc: "Primeiro passo para entender sua necessidade e estilo." },
    { number: "02", title: "Medição Técnica", desc: "Visita ao local para conferência precisa de medidas." },
    { number: "03", title: "Produção", desc: "Confecção em nosso ateliê próprio com rigor técnico." },
    { number: "04", title: "Instalação", desc: "Finalização do projeto por equipe própria especializada." }
  ];

  return (
    <section className="py-32 bg-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
           <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold">Compromisso</span>
           <h2 className="text-4xl md:text-5xl font-serif">O fluxo da perfeição.</h2>
           <p className="text-brand-muted font-light">Do primeiro contato ao suporte pós-venda, cuidamos de cada detalhe.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 relative">
              <span className="text-6xl font-serif text-brand-secondary outline-text block">{step.number}</span>
              <h3 className="text-2xl font-serif">{step.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              {idx < 3 && <div className="hidden md:block absolute top-[4.5rem] left-[60%] w-full h-[1px] bg-brand-secondary" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
