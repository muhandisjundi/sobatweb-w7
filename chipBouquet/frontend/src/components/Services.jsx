import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Flower, 
  Banknote, 
  Gift, 
  Camera, 
  Heart, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const pricelist = [
    { 
      name: "Money Bouquet", 
      price: "150k - 5jt+", 
      features: ["Custom Nominal", "Premium Wrapping", "Anti-Lecek Tech", "Pilihan Pecahan Baru"],
      icon: Banknote,
      size: "md:col-span-2",
      bg: "bg-[#2D3A2D]", 
      text: "text-white",
      btn: "bg-[#8FBC8F] text-white"
    },
    { 
      name: "Fresh Flower", 
      price: "200k - 1jt", 
      features: ["Imported Roses", "Daily Fresh Pick", "Vitamin Flower Inc."],
      icon: Flower,
      size: "md:col-span-1",
      bg: "bg-[#FADADD]", 
      text: "text-[#2D3A2D]",
      btn: "bg-[#2D3A2D] text-white"
    },
    { 
      name: "Wedding Bouquet", 
      price: "500k - 2jt", 
      features: ["Bridal Special", "Luxury Lace", "Preserved Option"],
      icon: Heart,
      size: "md:col-span-1",
      bg: "bg-white", 
      text: "text-[#2D3A2D]",
      btn: "bg-[#2D3A2D] text-white"
    },
    { 
      name: "Bloom Box", 
      price: "350k - 1.5jt", 
      features: ["Exclusive Acrylic Box", "Mixed Art Pieces", "Long Lasting"],
      icon: Gift,
      size: "md:col-span-2",
      bg: "bg-[#8FBC8F]", 
      text: "text-white",
      btn: "bg-[#2D3A2D] text-white"
    },
    { 
      name: "Snack Bouquet", 
      price: "85k - 500k", 
      features: ["Full Custom Snacks", "Sturdy Base", "Thematic Colors"],
      icon: ShoppingBag,
      size: "md:col-span-1",
      bg: "bg-[#2D3A2D]", 
      text: "text-white",
      btn: "bg-[#FADADD] text-[#2D3A2D]"
    },
    { 
      name: "Photo Bouquet", 
      price: "125k - 400k", 
      features: ["High Quality Print", "Instax Style", "Polaroid Decor"],
      icon: Camera,
      size: "md:col-span-2",
      bg: "bg-white", 
      text: "text-[#2D3A2D]",
      btn: "bg-[#2D3A2D] text-white border-2 border-[#2D3A2D]"
    }
  ];

  return (
    <section id="pricelist" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-4 text-[#8FBC8F]">
            <div className="h-[2px] w-12 bg-[#8FBC8F]" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Investment Guide</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-black text-[#2D3A2D] italic tracking-tighter leading-none">
            PRICELIST <br /> <span className="text-[#FADADD]">DETAILS.</span>
          </h2>
        </div>

        {/* Grid Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricelist.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`${item.size} ${item.bg} ${item.text} p-12 rounded-[4rem] relative overflow-hidden group shadow-2xl transition-all border border-[#2D3A2D]/5`}
            >
              {/* Large Background Icon for Depth */}
              <item.icon className="absolute -top-10 -right-10 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <h3 className="text-4xl font-black italic tracking-tighter leading-none">{item.name}</h3>
                    <div className={`p-3 rounded-full ${item.bg === 'bg-[#2D3A2D]' ? 'bg-white/10' : 'bg-[#2D3A2D]/5'}`}>
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-12">
                    {item.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-90">
                        <CheckCircle2 size={16} className={item.bg === 'bg-[#2D3A2D]' ? "text-[#8FBC8F]" : "text-[#5F8A5F]"} /> 
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-10 border-t border-current/10">
                  <div className="flex items-end justify-between gap-4 flex-wrap">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Estimated Price</span>
                      <div className="text-5xl font-black italic tracking-tighter mt-1">{item.price}</div>
                    </div>
                    <button className={`px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg hover:scale-105 transition-all ${item.btn}`}>
                      Book via WA
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-16 p-8 rounded-[2.5rem] bg-white border-2 border-dashed border-[#8FBC8F]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Sparkles className="text-[#8FBC8F]" size={32} />
            <p className="text-sm font-bold text-slate-500 italic">
              Harga di atas adalah estimasi. Harga final bergantung pada jumlah bunga, kerumitan desain, dan harga pasar bunga segar.
            </p>
          </div>
          <span className="text-[10px] font-black text-[#2D3A2D] bg-[#FADADD] px-6 py-2 rounded-full uppercase tracking-widest">
            Free Greeting Card Included
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;