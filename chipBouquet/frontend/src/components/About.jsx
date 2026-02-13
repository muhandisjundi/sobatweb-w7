import { motion } from "framer-motion";
import { Heart, Star, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-[#2D3A2D] rounded-[4rem] p-12 lg:p-20 text-white flex flex-col justify-center">
             <h2 className="text-5xl font-black italic mb-8 leading-tight">CHIP BOUQUET <br/><span className="text-[#8FBC8F]">EST. 2019</span></h2>
             <p className="text-lg opacity-80 font-medium leading-relaxed mb-10 italic">
               Berawal dari kecintaan terhadap seni merangkai bunga, Chip Bouquet hadir untuk memberikan sentuhan personal di setiap momen berhargamu. Dari workshop kami di Sangiang, Gading Serpong, hingga Alam Sutera, kami berkomitmen menjaga kualitas setiap kelopak dan lembaran uang yang kami rangkai.
             </p>
             <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                  <p className="text-4xl font-black italic tracking-tighter">5.000+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Bouquets Sent</p>
                </div>
                <div>
                  <p className="text-4xl font-black italic tracking-tighter">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Handcrafted</p>
                </div>
             </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1000" 
              className="w-full h-full object-cover rounded-[4rem] shadow-2xl"
              alt="Artistry"
            />
            <div className="absolute inset-0 border-[20px] border-white/20 rounded-[4rem] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;