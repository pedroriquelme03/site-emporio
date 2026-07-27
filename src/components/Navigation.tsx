import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-4 md:px-12",
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
          EMPÓRIO <span className={isScrolled ? "text-brand-accent" : "text-brand-accent"}>DAS CORTINAS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest font-medium">
          {ROUTES.map((route) => (
            <Link 
              key={route.path} 
              to={route.path}
              className={cn(
                "hover:text-brand-accent transition-colors relative group",
                location.pathname === route.path ? "text-brand-accent" : (isScrolled ? "text-brand-primary" : "text-white")
              )}
            >
              {route.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full",
                location.pathname === route.path && "w-full"
              )} />
            </Link>
          ))}
          <a 
            href="https://wa.me/554535264647" 
            className="px-6 py-2 border-brand-accent border text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300"
          >
            CONSULTORIA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={cn("md:hidden", isScrolled ? "text-brand-primary" : "text-white")}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white text-brand-primary shadow-xl p-8 md:hidden flex flex-col space-y-6 text-center text-lg font-serif"
          >
            {ROUTES.map((route) => (
              <Link 
                key={route.path} 
                to={route.path} 
                onClick={() => setIsOpen(false)}
                className="hover:text-brand-accent transition-colors"
              >
                {route.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-center space-x-6">
              <Instagram className="text-brand-accent cursor-pointer" />
              <Facebook className="text-brand-accent cursor-pointer" />
              <MessageCircle className="text-brand-accent cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white py-20 px-4 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif tracking-widest">EMPÓRIO DAS CORTINAS</h2>
          <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
            Desde 2006 transformando ambientes com sofisticação, exclusividade e atendimento personalizado de alto padrão.
          </p>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-brand-accent font-serif text-lg mb-6">Links Rápidos</h3>
          <ul className="space-y-3 text-brand-muted text-sm">
            {ROUTES.map(r => (
              <li key={r.path}><Link to={r.path} className="hover:text-white transition-colors">{r.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-brand-accent font-serif text-lg mb-6">Nossos Produtos</h3>
          <ul className="space-y-3 text-brand-muted text-sm">
            <li><Link to="/produtos/cortinas" className="hover:text-white transition-colors">Cortinas Sob Medida</Link></li>
            <li><Link to="/produtos/persianas" className="hover:text-white transition-colors">Persianas</Link></li>
            <li><Link to="/produtos/moveis" className="hover:text-white transition-colors">Móveis de Luxo</Link></li>
            <li><Link to="/produtos/decoracao" className="hover:text-white transition-colors">Decoração Curada</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-brand-accent font-serif text-lg mb-6">Contato</h3>
          <div className="flex items-start space-x-3 text-brand-muted text-sm">
            <Phone size={18} className="text-brand-accent mt-1" />
            <div>
              <p>(45) 3526-4647</p>
              <p>Av José Maria de Brito, 2094</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-brand-muted text-sm">
            <MessageCircle size={18} className="text-brand-accent" />
            <p>WhatsApp: (45) 3526-4647</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-brand-muted uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Empório das Cortinas. Todos os direitos reservados.
      </div>
    </footer>
  );
};
