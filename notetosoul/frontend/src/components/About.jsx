import { motion } from "framer-motion";
import { Sun, Heart, Globe, ShieldCheck } from "lucide-react";

const About = () => {
  const values = [
    { icon: Sun, title: "The Good News", desc: "Membawa pesan pengharapan di setiap produk." },
    { icon: Heart, title: "Deeply Loved", desc: "Mengingatkan bahwa kamu dikasihi tanpa batas." },
    { icon: Globe, title: "Asia Shipping", desc: "Menjangkau anak-anak terang di seluruh Asia." },
    { icon: ShieldCheck, title: "Premium Quality", desc: "Material 18K Gold Plated yang tahan lama." },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800" alt="About NoteToSoul" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#717D51]/10 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-8 leading-tight">
              More than jewelry, <br />
              <span className="italic text-[#717D51]">it's a reminder.</span>
            </h2>
            <p className="text-stone-500 mb-12 leading-relaxed">
              NoteToSoul lahir dari keinginan untuk mengingatkan setiap jiwa tentang identitas mereka sebagai anak-anak Terang. Setiap perhiasan kami didesain dengan doa dan makna yang mendalam.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {values.map((v, i) => (
                <motion.div key={i} whileHover={{ y: -5 }}>
                  <v.icon className="text-[#717D51] mb-4" size={28} />
                  <h4 className="font-bold text-sm text-[#2C2C2C] mb-2">{v.title}</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;