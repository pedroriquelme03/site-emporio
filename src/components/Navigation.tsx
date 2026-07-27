import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-12 text-white',
        isHome
          ? isScrolled
            ? 'bg-transparent py-0 opacity-0 hover:opacity-100 hover:bg-black hover:backdrop-blur-md hover:py-4 hover:shadow-lg'
            : 'bg-transparent py-4 opacity-100'
          : isScrolled
          ? 'bg-transparent py-0 opacity-0 hover:opacity-100 hover:bg-black hover:backdrop-blur-md hover:py-4 hover:shadow-lg'
          : 'bg-black/70 backdrop-blur-sm py-4 opacity-100 shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest font-bold text-brand-accent">
          EMPÓRIO DAS CORTINAS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm uppercase tracking-widest font-medium">
          {ROUTES.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                'hover:text-brand-accent transition-colors',
                location.pathname === route.path ? 'text-brand-accent' : 'text-white/80'
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
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
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-6 px-4"
          >
            <div className="flex flex-col space-y-4 text-sm uppercase tracking-widest font-medium">
              {ROUTES.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'hover:text-brand-accent transition-colors',
                    location.pathname === route.path ? 'text-brand-accent' : 'text-white/80'
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ============= FOOTER =============
export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-8 px-4 text-center text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Empório das Cortinas. Todos os direitos reservados.</p>
        <p className="mt-1 text-xs text-white/40">
          Desenvolvido com ❤️ para você.
        </p>
      </div>
    </footer>
  );
};

export default Navbar;