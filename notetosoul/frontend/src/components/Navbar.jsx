import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#about' },
    { name: 'Collection', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    // z-index tinggi agar di atas Hero
    <nav className="fixed w-full z-[999] px-6 py-6 md:px-12 flex justify-center pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? '900px' : '1200px',
          paddingTop: scrolled ? '12px' : '20px',
          paddingBottom: scrolled ? '12px' : '20px',
        }}
        className={`
          w-full pointer-events-auto flex justify-between items-center 
          rounded-full px-8 transition-all duration-500
          backdrop-blur-xl border
          ${scrolled 
            ? 'bg-white/70 border-[#717D51]/10 shadow-lg shadow-matcha/5' 
            : 'bg-white/30 border-white/20 shadow-transparent'}
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2 text-[#717D51]">
          <Leaf size={22} fill="#717D51" className="shrink-0" />
          <span className="font-serif text-xl font-bold tracking-tight text-[#2C2C2C]">NoteToSoul</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 items-center font-bold text-[10px] uppercase tracking-[0.2em] text-stone-500">
          {links.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:text-[#717D51] transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#717D51] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="p-2 text-[#2C2C2C] hover:scale-110 transition-transform">
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button 
          className="md:hidden p-2 text-[#2C2C2C] bg-white/50 rounded-full border border-white/50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-28 left-6 right-6 bg-white shadow-2xl rounded-[2.5rem] p-8 flex flex-col gap-6 md:hidden border border-stone-100 pointer-events-auto"
          >
            {links.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif italic text-[#2C2C2C] border-b border-stone-50 pb-2 flex justify-between items-center group"
              >
                {item.name}
                <Leaf size={16} className="text-[#717D51] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <button className="flex-1 bg-[#717D51] text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest">
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;