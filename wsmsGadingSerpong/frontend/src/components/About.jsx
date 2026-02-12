import { motion } from "framer-motion";
import { Music, Award, Mic2, Piano } from "lucide-react";

const About = () => {
  const perks = [
    { icon: Music, label: "International Curriculum", desc: "Standar ABRSM & LCM." },
    { icon: Piano, label: "Premium Instruments", desc: "Grand Piano & Gear terbaik." },
    { icon: Award, label: "Expert Mentors", desc: "Lulusan Konservatori ternama." },
    { icon: Mic2, label: "Annual Recitals", desc: "Kesempatan tampil di panggung." },
  ];

  return (
    <section id="about" className="py-32 bg-[#0F172A]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=800"
            className="w-full h-auto object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white/10"
            alt="Music Room"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-8 border border-white shadow-xl hidden md:block">
            <p className="text-[#0a192f] font-serif font-black text-4xl">15+</p>
            <p className="text-[#0a192f] text-xs font-sans bold uppercase tracking-widest">Years of Excellence</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-3xl md:text-5xl font-serif uppercase mb-6 md:mb-8 text-white leading-tight tracking-tight">
            Nurturing <span className="text-blue-200 italic">Musical Souls.</span>
          </h2>
          <p className="text-blue-100/70 mb-8 md:mb-10 text-base md:text-lg leading-relaxed font-sans">
            Di Willy Soemantry Music School, kami percaya musik bukan sekadar teknik, melainkan bahasa jiwa. Kami menyediakan ruang aman bagi talenta muda untuk berkembang.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-6 md:p-8 bg-white/5 border border-white/10 transition-colors"
              >
                <p.icon className="text-blue-200 mb-3 md:mb-4" size={28} />
                <h4 className="font-serif font-bold text-white mb-2 text-lg md:text-xl">{p.label}</h4>
                <p className="text-sm text-blue-100/60 leading-relaxed font-sans">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;