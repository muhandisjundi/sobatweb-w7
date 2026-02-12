import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "Mrs. Wijaya", role: "Parent of Chloe (Piano)", text: "Kemajuan Chloe luar biasa. Dia sekarang lebih percaya diri tampil di depan umum berkat recital rutin.", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Kevin Tan", role: "Student (Violin)", text: "Suasana di Le Jardin sangat mendukung. Instrukturnya sabar namun disiplin dalam teknik.", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Sarah Amalia", role: "Parent of Daffa (Vocal)", text: "Fasilitas studio kelas dunia. Anak saya sangat senang setiap kali jadwal les tiba.", avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900">
            Student <span className="text-[#0A0F1C]">Stories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/40 backdrop-blur-2xl p-10 rounded-[3.5rem] border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative group flex flex-col"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 mb-6" />
              <p className="text-lg font-medium text-slate-600 italic mb-8 leading-relaxed relative z-10">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img src={rev.avatar} className="w-14 h-14 rounded-2xl border-2 border-white shadow-xl object-cover" alt="" />
                <div>
                  <h4 className="font-black text-slate-900 leading-none">{rev.name}</h4>
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mt-1">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;