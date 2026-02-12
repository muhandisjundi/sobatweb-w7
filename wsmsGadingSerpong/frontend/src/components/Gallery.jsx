import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Recitals', 'Classes', 'Masterclass'];
  const projects = [
    { id: 1, title: "Grand Recital 2025", category: "Recitals", date: "Dec 2025", img: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800" },
    { id: 2, title: "Violin Masterclass", category: "Masterclass", date: "Nov 2025", img: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=800" },
    { id: 3, title: "Piano Kids", category: "Classes", date: "Oct 2025", img: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800" },
    { id: 4, title: "Orchestra Night", category: "Recitals", date: "Sep 2025", img: "https://images.unsplash.com/photo-1465847899078-b413929f7120?w=800" },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="gallery" className="py-32 bg-[#F8F9FB]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif text-[#0a192f] tracking-tight">
              Moments on <span className="italic text-blue-900">Stage.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 font-sans text-xs uppercase tracking-widest transition-all duration-300 border relative
                ${filter === cat ? 'bg-[#0a192f] text-white border-[#0a192f]' : 'bg-transparent text-slate-500 border-slate-300 hover:border-[#0a192f] hover:text-[#0a192f]'}`}
              >
                {cat}
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[#0a192f] -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10 }}
                className="group relative aspect-3/4 overflow-hidden bg-white shadow-sm"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-blue-200 text-xs font-sans uppercase tracking-widest">{p.category}</span>
                    <h3 className="text-white text-2xl font-serif italic tracking-wide mb-2">{p.title}</h3>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-white font-sans text-sm italic">{p.date}</span>
                      <button className="w-10 h-10 bg-white flex items-center justify-center text-[#0a192f] hover:bg-blue-50 transition-colors">
                        <PlayCircle size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;