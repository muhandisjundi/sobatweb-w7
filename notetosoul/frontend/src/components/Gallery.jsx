import { motion } from "framer-motion";
import { ShoppingBag, Heart, ExternalLink } from "lucide-react";

const Gallery = () => {
  const products = [
    { 
      title: "Love Jesus Bangle", 
      cat: "Jewelry",
      spec: "18K Gold Plated Stainless Steel • 4.5x5.5cm", 
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
      shopee: "https://shopee.co.id/notetosoul",
      tokped: "https://tokopedia.com/notetosoul"
    },
    { 
      title: "Made New Necklace", 
      cat: "Jewelry",
      spec: "18K Gold Plated • Chain 40+5cm • Pendant 1cm", 
      img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      shopee: "https://shopee.co.id/notetosoul",
      tokped: "https://tokopedia.com/notetosoul"
    },
    { 
      title: "Children of Light Tee", 
      cat: "Apparel",
      spec: "Premium Cotton 24s • Oversized Fit • Earthy Matcha", 
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      shopee: "https://shopee.co.id/notetosoul",
      tokped: "https://tokopedia.com/notetosoul"
    },
    { 
      title: "Grace Oversized Hoodie", 
      cat: "Apparel",
      spec: "Heavy Fleece • Embroidered Detail • Creamy Stone", 
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      shopee: "https://shopee.co.id/notetosoul",
      tokped: "https://tokopedia.com/notetosoul"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-[#2C2C2C] mb-2">The Soul Collection</h2>
          <p className="text-stone-400 italic">From Jewelry to Apparel, crafted for the children of Light.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-[3rem] shadow-sm group hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Product Image */}
                <div className="w-full lg:w-1/2 aspect-square rounded-[2rem] overflow-hidden relative">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                  <div className="absolute top-4 left-4 bg-[#717D51] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {p.cat}
                  </div>
                </div>

                {/* Product Info */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-[#2C2C2C] mb-2">{p.title}</h3>
                  <p className="text-xs text-stone-400 mb-4 leading-relaxed">{p.spec}</p>
                  
                  <div className="space-y-3 mt-4">
                    <p className="text-[10px] font-black text-[#717D51] uppercase tracking-[0.2em] mb-2">Order via:</p>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => window.open(p.shopee)}
                        className="flex items-center justify-between px-5 py-3 bg-[#EE4D2D]/5 hover:bg-[#EE4D2D] text-[#EE4D2D] hover:text-white border border-[#EE4D2D]/20 rounded-2xl text-[11px] font-bold transition-all"
                      >
                        SHOPEE <ExternalLink size={14} />
                      </button>
                      <button 
                        onClick={() => window.open(p.tokped)}
                        className="flex items-center justify-between px-5 py-3 bg-[#03AC0E]/5 hover:bg-[#03AC0E] text-[#03AC0E] hover:text-white border border-[#03AC0E]/20 rounded-2xl text-[11px] font-bold transition-all"
                      >
                        TOKOPEDIA <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-stone-400 text-sm italic mb-6">Mencari koleksi lainnya?</p>
          <button 
            onClick={() => window.open('https://shopee.co.id/notetosoul')}
            className="px-12 py-5 bg-[#717D51] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-matcha/20 hover:scale-105 transition-transform"
          >
            Visit Official Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;