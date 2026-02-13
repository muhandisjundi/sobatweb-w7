import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Aluna Syasya", text: "Buket uangnya rapi banget! Packing aman sampe Gading Serpong." },
    { name: "Reza Pratama", text: "Udah 3x order, bunganya selalu seger dan wanginya awet." },
    { name: "Dhini Aminarti", text: "Admin WA ramah, request warna kertas sage green dikasih cakep!" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="lg:col-span-1">
             <div className="p-10 md:p-12 bg-[#2D3A2D] rounded-[3rem] text-white h-full flex flex-col justify-center relative overflow-hidden group">
                <Quote size={80} className="absolute -top-4 -right-4 text-white/5 rotate-12" />
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none mb-6">WHAT <br/>THEY SAY.</h2>
                <div className="flex gap-1 text-[#FADADD]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
             {reviews.map((t, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -5 }}
                 className="bg-[#FAF9F6] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between"
               >
                  <p className="text-lg font-bold text-[#2D3A2D] italic leading-relaxed mb-8">"{t.text}"</p>
                  <div>
                    <div className="h-[2px] w-8 bg-[#8FBC8F] mb-3" />
                    <span className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400">{t.name}</span>
                  </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default Testimonials;