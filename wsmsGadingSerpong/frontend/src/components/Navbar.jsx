import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <nav className="fixed w-full z-50 flex justify-center px-6 py-6 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? '1000px' : '1280px',
          width: '100%',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`
          pointer-events-auto flex justify-between items-center 
          rounded-none px-8 py-4 transition-all duration-500
          backdrop-blur-md border-b shadow-2xl
          ${scrolled
            ? 'bg-[#0a192f]/90 border-white/10 shadow-indigo-500/10'
            : 'bg-transparent border-transparent shadow-none'}
        `}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white flex items-center justify-center text-[#0a192f] font-serif font-black text-lg md:text-xl shadow-lg border border-white/20">W</div>
          <span className="font-serif font-bold text-white tracking-widest text-sm md:text-xl uppercase truncate">WILLY SOEMANTRY</span>
        </div>

        <div className="hidden md:flex gap-10 items-center font-bold text-[10px] uppercase tracking-[0.2em] text-blue-200 font-sans">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-all hover:scale-105 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-24 left-4 right-4 bg-[#0a192f]/95 backdrop-blur-3xl shadow-2xl border border-white/20 p-8 flex flex-col gap-6 md:hidden pointer-events-auto"
          >
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-bold text-white hover:text-blue-200 transition-colors">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;