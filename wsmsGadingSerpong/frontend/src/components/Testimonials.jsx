import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "Mrs. Wijaya", role: "Parent of Chloe (Piano)", text: "Kemajuan Chloe luar biasa. Dia sekarang lebih percaya diri tampil di depan umum berkat recital rutin.", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Kevin Tan", role: "Student (Violin)", text: "Suasana di Willy Soemantry Music School sangat mendukung. Instrukturnya sabar namun disiplin dalam teknik.", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Sarah Amalia", role: "Parent of Daffa (Vocal)", text: "Fasilitas studio kelas dunia. Anak saya sangat senang setiap kali jadwal les tiba.", avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-[#0a192f] tracking-tight">
            Student <span className="italic text-blue-900">Stories</span>
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
              whileHover={{ y: -15 }}
              className="bg-white/60 backdrop-blur-2xl p-10 border border-white shadow-xl relative group flex flex-col"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-6" />
              <p className="text-xl font-serif text-slate-700 italic mb-10 leading-relaxed relative z-10">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img src={rev.avatar} className="w-14 h-14 border border-blue-100 shadow-sm object-cover" alt="" />
                <div>
                  <h4 className="font-serif font-bold text-[#0a192f] text-lg leading-none">{rev.name}</h4>
                  <p className="text-xs font-sans text-blue-800 uppercase tracking-widest mt-1">{rev.role}</p>
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