import { motion } from 'framer-motion';
import { Instagram, Plus, Heart, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const masterpieces = [
    { id: 1, title: "Royal Red Rose", tag: "Fresh Flower", size: "md:col-span-1 md:row-span-2 h-[500px] md:h-auto", img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800" },
    { id: 2, title: "Millionaire Blue", tag: "Money Bouquet", size: "md:col-span-2 md:row-span-1 h-[300px] md:h-auto", img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1000" },
    { id: 3, title: "Sun-kissed Box", tag: "Bloom Box", size: "md:col-span-1 md:row-span-1 h-[300px] md:h-auto", img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800" },
    { id: 4, title: "Sweet Delights", tag: "Snack Bouquet", size: "md:col-span-1 md:row-span-1 h-[300px] md:h-auto", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800" },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-black text-[#2D3A2D] italic tracking-tighter leading-none">
            OUR <span className="text-[#FADADD]">MUSEUM.</span>
          </h2>
          <a href="#" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#8FBC8F] hover:text-[#2D3A2D] transition-colors">
            <Instagram size={18} /> View All Collection
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {masterpieces.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${item.size} group relative rounded-[2.5rem] overflow-hidden bg-white shadow-lg border-[6px] md:border-[10px] border-white`}
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              
              <div className="absolute inset-0 bg-[#2D3A2D]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8">
                <span className="text-[10px] font-black text-[#8FBC8F] uppercase tracking-[0.2em] mb-2">{item.tag}</span>
                <h3 className="text-xl md:text-2xl font-black text-white italic tracking-tighter mb-4">{item.title}</h3>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-white text-[#2D3A2D] rounded-xl font-black uppercase text-[9px] tracking-widest">Details</button>
                  <button className="w-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white"><Heart size={16} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;