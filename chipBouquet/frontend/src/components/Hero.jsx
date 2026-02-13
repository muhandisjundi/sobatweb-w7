import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-20 md:pb-10 bg-[#FAF9F6] overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-[#8FBC8F]/5 hidden md:block" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-[#FADADD]/20 rounded-full blur-[80px] md:blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8FBC8F]/20 border border-[#8FBC8F]/30 mb-6 md:mb-8">
                <Sparkles size={14} className="text-[#5F8A5F]" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#2D3A2D]">Premium Artistry Since 2019</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black leading-[1] md:leading-[0.9] text-[#2D3A2D] mb-6 md:mb-8 tracking-tighter">
                ELEGANCE <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5F8A5F] to-[#FADADD] italic px-1">IN EVERY BLOOM.</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 max-w-xl font-medium leading-relaxed border-l-4 border-[#FADADD] pl-6">
                Bukan sekadar buket, tapi karya seni. Spesialis Money Bouquet & Fresh Flowers untuk momen tak terlupakanmu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto px-8 py-5 bg-[#2D3A2D] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-[#8FBC8F] transition-all flex items-center justify-center gap-4 shadow-xl">
                  Order via WA <ArrowRight size={18} />
                </button>
                <button className="w-full sm:w-auto px-8 py-5 bg-white text-[#2D3A2D] border-2 border-[#2D3A2D]/10 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:border-[#FADADD] transition-all flex items-center justify-center gap-3">
                  <Instagram size={18} /> @chip_bouquet
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-20"
            >
              <div className="aspect-[4/5] bg-[#FDF5E6] rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800" 
                  className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem]" 
                  alt="Main Bouquet" 
                />
              </div>
              
              {/* Floating Badge Mobile Friendly */}
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-[#8FBC8F] text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
                <p className="text-3xl md:text-4xl font-black italic mb-1">5+</p>
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Years of <br />Gifting Joy</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;