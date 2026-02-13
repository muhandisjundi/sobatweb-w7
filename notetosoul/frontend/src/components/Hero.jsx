import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bird, Sparkles, Instagram, ShoppingCart } from "lucide-react";

const Hero = () => {
  // Variasi Animasi
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageEffect = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 2, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#F9F7F2] flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Organic Matcha Shape Left */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#717D51]/5 rounded-full blur-[100px]" />
      {/* Organic Cream Shape Right */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#717D51]/10 rounded-full blur-[120px]" />
      
      {/* Decorative Text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-serif font-bold whitespace-nowrap">NOTE TO SOUL</h2>
      </div>

      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT CONTENT (TEXT) --- */}
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-[#717D51]/10 rounded-full text-[#717D51]">
                <Bird size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#717D51]">
                Indonesia-based • Ship across Asia
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-[110px] font-serif text-[#2C2C2C] leading-[0.85] mb-8">
              Children of <br />
              <span className="italic text-[#717D51] relative">
                Light.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                  <path d="M5 15C100 5 200 5 295 15" stroke="#717D51" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-[#8E8E8E] text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              Reminding you of the Good News through every piece. Elegant christian jewelry for your spiritual journey. 🕊️
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 items-center">
              <button 
                onClick={() => window.open('https://shopee.co.id/notetosoul')}
                className="group px-10 py-5 bg-[#717D51] text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:shadow-2xl hover:shadow-matcha/30 hover:-translate-y-1 transition-all duration-300"
              >
                Shop Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-md rounded-full border border-stone-200 group cursor-pointer hover:bg-white transition-all">
                <div className="w-10 h-10 bg-[#717D51] rounded-full flex items-center justify-center text-white">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 leading-none mb-1">IG FOLLOWER</p>
                  <p className="text-sm font-bold text-[#2C2C2C]">Get 5% OFF</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT (VISUALS) --- */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Image Frame */}
            <motion.div 
              variants={imageEffect}
              className="relative aspect-[4/5] bg-[#717D51]/20 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(113,125,81,0.2)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" 
                alt="NoteToSoul Jewelry"
              />
              
              {/* Image Overlay Label */}
              <div className="absolute bottom-10 left-10 text-white z-20">
                <p className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-80 mb-1">New Arrival</p>
                <h3 className="text-2xl font-serif italic">Love Jesus Bangle</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card (Featured Piece) */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-12 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-stone-100 flex items-center gap-5 z-30"
            >
              <div className="w-16 h-16 bg-[#F9F7F2] rounded-2xl flex items-center justify-center text-[#717D51]">
                <Sparkles size={28} />
              </div>
              <div className="pr-8">
                <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Featured Piece</p>
                <h4 className="text-lg font-serif font-bold text-[#2C2C2C] leading-none mb-2">Love Jesus Bangle</h4>
                <div className="flex items-center gap-1 text-[#717D51]">
                  <span className="text-[10px] font-bold uppercase tracking-tighter italic">Order Now</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>

            {/* Decorative Dots/Circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-dashed border-[#717D51]/20 rounded-full animate-spin-slow" />
          </motion.div>

        </div>
      </div>

      {/* Responsive Mobile Padding Adjuster */}
      <style jsx>{`
        @media (max-width: 768px) {
          #home { padding-top: 140px; }
          h1 { font-size: 58px !important; }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;