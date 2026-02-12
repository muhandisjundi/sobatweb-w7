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
            src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800"
            className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-2 border-[#D4AF37]/30"
            alt="Music Room"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 rounded-3xl hidden md:block">
            <p className="text-black font-black text-4xl">15+</p>
            <p className="text-black text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-5xl font-extrabold uppercase mb-8 text-white leading-tight">
            Nurturing <span className="text-[#D4AF37] italic">Musical Souls.</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
            Di Le Jardin, kami percaya musik bukan sekadar teknik, melainkan bahasa jiwa. Kami menyediakan ruang aman bagi talenta muda untuk berkembang.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                className="p-6 bg-white/5 rounded-3xl border border-white/10 transition-colors"
              >
                <p.icon className="text-[#D4AF37] mb-3" size={28} />
                <h4 className="font-bold text-white mb-1">{p.label}</h4>
                <p className="text-[11px] text-slate-400 leading-tight">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;