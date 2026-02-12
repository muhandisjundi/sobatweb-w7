import { motion } from 'framer-motion';
import { Music, Mic2, Users, Check, ShoppingBag, Star } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const features = [
    { icon: Music, title: 'ABRSM Certified', desc: 'Kurikulum standar internasional untuk sertifikasi musikal.' },
    { icon: Users, title: 'Private Studios', desc: 'Ruang latihan privat dengan akustik sempurna.' },
    { icon: Star, title: 'Masterclasses', desc: 'Sesi eksklusif dengan maestro musik ternama.' }
  ];

  const collections = [
    { name: "Beginner", price: "800", features: ["4x Private Session (30m)", "Basic Music Theory", "Practice Room Access"], popular: false },
    { name: "Prodigy", price: "1.500", features: ["4x Private Session (60m)", "Advanced Ensemble", "Recital Participation", "Masterclass Access"], popular: true },
    { name: "Virtuoso", price: "2.500", features: ["8x Private Session (60m)", "Personal Mentorship", "Recording Session", "Competition Prep"], popular: false }
  ];

  return (
    <section id="services" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full z-0" />

      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif text-[#0a192f] tracking-tight"
        >
          Signature <span className="italic text-blue-900">Programs</span>
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-10 container mx-auto px-6 relative z-10 mb-32"
      >
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="group bg-white/40 backdrop-blur-xl p-10 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 mb-8 flex items-center justify-center bg-[#0a192f] text-white shadow-md group-hover:rotate-12 transition-transform duration-500">
              <item.icon size={30} />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-[#0a192f] italic tracking-wide">{item.title}</h3>
            <p className="text-slate-600 font-sans leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div id="pricing" className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif tracking-tight text-[#0a192f]">Class <span className="italic text-blue-800">Tiers</span></h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto border border-blue-100" // Reduced gap for sharp connected look if desired, or keep gap
        >
          {collections.map((tier, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative p-12 backdrop-blur-3xl transition-all duration-500 border-x border-[#0a192f]/10
                ${tier.popular ? 'bg-[#0a192f] text-white shadow-2xl z-20' : 'bg-white/60 text-[#0a192f] hover:bg-white'}`}
            >
              <div>
                {tier.popular && <span className="absolute top-0 right-0 bg-blue-100 text-[#0a192f] text-[10px] font-bold px-4 py-2 uppercase tracking-widest">Most Popular</span>}
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-70">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-xs font-bold mr-1">IDR</span>
                  <span className="text-5xl font-serif italic tracking-tight">{tier.price}K</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-center gap-3 font-sans text-lg">
                      <Check size={18} className={tier.popular ? "text-blue-200" : "text-blue-900"} /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 font-sans uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 border
                  ${tier.popular ? 'bg-white text-[#0a192f] hover:bg-blue-50 border-white' : 'bg-[#0a192f] text-white hover:bg-[#112240] border-[#0a192f]'}`}>
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;