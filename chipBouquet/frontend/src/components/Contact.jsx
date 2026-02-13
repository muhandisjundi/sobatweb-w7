import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  const locations = [
    { area: "Sangiang, Tangerang", icon: MapPin },
    { area: "Gading Serpong", icon: MapPin },
    { area: "Alam Sutera", icon: MapPin },
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-[#8FBC8F] rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 lg:p-20 text-white lg:w-1/2">
            <h2 className="text-5xl font-black italic tracking-tighter mb-8">Ready to <br />Say It with Flowers?</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl"><Phone size={20} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-60">WhatsApp Order</p>
                  <p className="text-lg font-bold">+62 878 8950 7001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl"><Clock size={20} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-60">Open Hours</p>
                  <p className="text-lg font-bold">Mon - Sat: 09.00 - 18.00</p>
                </div>
              </div>

              <div className="pt-8 grid grid-cols-1 gap-4">
                 {locations.map((loc, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                     <loc.icon size={16} />
                     <span className="text-sm font-bold uppercase tracking-widest">{loc.area}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#FDF5E6] p-12 flex items-center justify-center text-center">
            <div>
              <div className="w-24 h-24 bg-[#FADADD] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Instagram size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#4A4A4A] mb-4">@chip_bouquet</h3>
              <p className="text-slate-400 font-medium mb-8">Follow IG kami untuk update <br /> desain buket terbaru setiap harinya!</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=6287889507001"
                className="inline-block px-10 py-5 bg-[#4A4A4A] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-black transition-all"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;