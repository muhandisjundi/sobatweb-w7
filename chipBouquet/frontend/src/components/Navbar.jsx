import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flower2 } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home','About', 'Pricelist', 'Gallery', 'Contact'];

  return (
    <nav className="fixed w-full z-[100] px-6 py-8 pointer-events-none">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
          boxShadow: scrolled ? "0 20px 40px -15px rgba(45,58,45,0.1)" : "none",
          padding: scrolled ? "12px 30px" : "16px 30px",
        }}
        className="max-w-6xl mx-auto pointer-events-auto flex justify-between items-center rounded-3xl border border-transparent backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2D3A2D] rounded-xl flex items-center justify-center text-white">
            <Flower2 size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-[#2D3A2D] uppercase italic">CHIP.B</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center font-black text-[10px] uppercase tracking-[0.2em] text-[#2D3A2D]/60">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#8FBC8F] transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#8FBC8F] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button className="md:hidden text-[#2D3A2D]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#2D3A2D] z-[90] pointer-events-auto flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white/50"><X size={40}/></button>
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl font-black text-white hover:text-[#8FBC8F] uppercase italic tracking-tighter">
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