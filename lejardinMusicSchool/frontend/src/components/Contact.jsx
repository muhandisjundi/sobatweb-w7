import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0A0F1C] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <motion.div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-12">
            <h2 className="text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
              Start Your <span className="text-[#D4AF37]">Journey.</span>
            </h2>
            <p className="text-slate-400 mb-8 font-light">Daftarkan diri Anda atau putra/putri Anda untuk konsultasi musik gratis.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Student Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#D4AF37] text-white transition-all" />
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#D4AF37] text-slate-400 transition-all">
                <option>Select Instrument</option>
                <option>Piano</option>
                <option>Violin</option>
                <option>Vocal</option>
              </select>
              <textarea placeholder="Tell us about your musical goals" rows="3" className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 outline-none focus:border-[#D4AF37] text-white transition-all resize-none"></textarea>
              <button className="w-full bg-[#D4AF37] text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#F9E498] transition-all shadow-xl shadow-amber-900/10">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div className="relative rounded-[4rem] overflow-hidden border border-white/10">
             <iframe 
                src="https://www.google.com/maps/embed?pb=..." // Ganti dengan lokasi asli
                className="w-full h-full grayscale invert opacity-60" 
                style={{ border: 0 }} 
                allowFullScreen="" 
             />
             <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-[#D4AF37]/30">
                <p className="text-[#D4AF37] font-black text-xs uppercase tracking-[0.3em] mb-1">Visit Our Campus</p>
                <p className="text-white font-bold text-sm">Le Jardin Music Tower, SCBD Jakarta</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;