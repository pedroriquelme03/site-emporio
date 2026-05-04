import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Como escolher a cortina perfeita para o seu living?",
    excerpt: "Dicas de arquitetos renomados sobre fluidez, tecidos e a importância da luz natural no ambiente.",
    image: "https://picsum.photos/seed/blog1/800/500",
    date: "14 Mai, 2024",
    author: "Equipe Empório"
  },
  {
    id: 2,
    title: "Automação residencial: a tendência das persianas conectadas.",
    excerpt: "Saiba como integrar suas persianas com sistemas de smart home para mais conforto e economia.",
    image: "https://picsum.photos/seed/blog2/800/500",
    date: "08 Mai, 2024",
    author: "Consultoria Técnica"
  },
  {
    id: 3,
    title: "Tendências de decoração para 2024: tecidos orgânicos.",
    excerpt: "O retorno ao natural com o linho e algodão em projetos de alto padrão que buscam aconchego.",
    image: "https://picsum.photos/seed/blog3/800/500",
    date: "02 Mai, 2024",
    author: "Design de Interiores"
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="bg-brand-primary text-white py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center space-y-6">
           <span className="text-xs uppercase tracking-[0.4em] text-brand-accent">Inspirar & Informar</span>
           <h1 className="text-5xl md:text-7xl font-serif">Journal Empório.</h1>
           <p className="text-brand-muted max-w-xl mx-auto font-light italic">Artigos exclusivos sobre design de interiores, tendências mundiais e tecnologia para o lar.</p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {posts.map((post, i) => (
               <article key={post.id} className="group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden bg-brand-secondary mb-8">
                     <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                     />
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center space-x-6 text-[10px] uppercase tracking-widest text-brand-accent font-bold">
                        <div className="flex items-center space-x-2">
                           <Calendar size={12} />
                           <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                           <User size={12} />
                           <span>{post.author}</span>
                        </div>
                     </div>
                     <h3 className="text-2xl font-serif group-hover:text-brand-accent transition-colors">{post.title}</h3>
                     <p className="text-brand-muted text-sm leading-relaxed font-light line-clamp-3 italic">"{post.excerpt}"</p>
                     <div className="pt-4 flex items-center text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                        Continuar Lendo <ArrowRight size={14} className="ml-2" />
                     </div>
                  </div>
               </article>
             ))}
          </div>
          
          <div className="mt-20 flex justify-center">
             <button className="px-10 py-5 border border-brand-primary text-brand-primary text-xs uppercase font-bold tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                CARREGAR MAIS ARTIGOS
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
