import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "Maria K.", text: "Bahannya beneran premium, dipakai mandi tetap berkilau. Jadi pengingat buat saya setiap hari.", avatar: "https://i.pravatar.cc/100?img=1" },
    { name: "Samuel T.", text: "Kado terbaik untuk tunangan saya. Packaging-nya sangat cantik dan bermakna.", avatar: "https://i.pravatar.cc/100?img=12" },
    { name: "Lydia W.", text: "Suka banget sama konsep NoteToSoul. Benar-benar memberkati!", avatar: "https://i.pravatar.cc/100?img=5" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <Quote size={40} className="mx-auto text-[#717D51]/20 mb-4" />
          <h2 className="text-3xl font-serif text-[#2C2C2C]">From Our Children of Light</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-[#F9F7F2] border border-stone-50"
            >
              <p className="text-stone-500 italic text-sm leading-relaxed mb-8">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} className="w-10 h-10 rounded-full" alt={r.name} />
                <span className="text-xs font-bold text-[#2C2C2C] tracking-widest uppercase">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;