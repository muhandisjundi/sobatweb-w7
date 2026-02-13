import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Truck, Sparkles, Heart, Globe } from 'lucide-react';

const Services = () => {
  const experiences = [
    {
      icon: Gift,
      title: 'Premium Packaging',
      desc: 'Setiap perhiasan dikemas dalam box eksklusif dengan kartu pesan penguat jiwa, siap untuk dijadikan kado bagi orang tersayang.'
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime Quality',
      desc: 'Material 18K Gold Plated Stainless Steel kami anti-karat dan aman untuk kulit sensitif (hypoallergenic).'
    },
    {
      icon: Globe,
      title: 'Asia-wide Shipping',
      desc: 'Kami mengirimkan pesan kasih ini ke seluruh pelosok Indonesia hingga negara-negara di Asia dengan packing yang aman.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Matcha Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#717D51]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-8 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <span className="p-3 bg-[#F9F7F2] rounded-2xl text-[#717D51]">
              <Sparkles size={24} />
            </span>
          </motion.div>
          <h2 className="text-4xl font-serif text-[#2C2C2C] mb-4">The NoteToSoul Experience</h2>
          <p className="text-stone-400 italic">Kami memastikan setiap "anak terang" mendapatkan kualitas terbaik dalam perjalanannya.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-[#F9F7F2] border border-[#717D51]/5 hover:border-[#717D51]/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#717D51] mb-8 shadow-sm group-hover:bg-[#717D51] group-hover:text-white transition-colors duration-500">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-serif text-[#2C2C2C] mb-4">{item.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Promo Banner Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-8 md:p-12 bg-[#717D51] rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 opacity-80">
              <Heart size={16} fill="white" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Special Offer</span>
            </div>
            <h3 className="text-3xl font-serif mb-2">Join the Light Circle</h3>
            <p className="text-white/70 text-sm max-w-md italic">Dapatkan potongan 5% untuk pembelian pertama dengan mengikuti Instagram kami @notetosoul.</p>
          </div>
          
          <button 
            onClick={() => window.open('https://instagram.com/notetosoul')}
            className="relative z-10 px-10 py-5 bg-white text-[#717D51] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#F9F7F2] transition-colors shadow-xl"
          >
            Claim 5% Discount
          </button>

          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/4 -translate-y-1/4 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;