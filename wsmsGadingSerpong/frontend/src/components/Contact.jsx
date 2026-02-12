import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0A0F1C] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <motion.div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12">
            <h2 className="text-5xl font-serif text-white mb-4 tracking-tight">
              Start Your <span className="italic text-blue-200">Journey.</span>
            </h2>
            <p className="text-blue-100/70 mb-10 font-sans text-lg font-light">Daftarkan diri Anda atau putra/putri Anda untuk konsultasi musik gratis.</p>
            <form className="space-y-6">
              <input type="text" placeholder="Student Name" className="w-full bg-white/5 border border-white/10 px-6 py-5 outline-none focus:border-white text-white transition-all font-sans placeholder:text-white/30" />
              <select className="w-full bg-white/5 border border-white/10 px-6 py-5 outline-none focus:border-white text-white transition-all font-sans appearance-none">
                <option className="bg-[#0a192f]">Piano</option>
                <option className="bg-[#0a192f]">Violin</option>
                <option className="bg-[#0a192f]">Vocal</option>
                <option className="bg-[#0a192f]">Cello</option>
              </select>
              <textarea placeholder="Tell us about your musical goals" rows="3" className="w-full bg-white/5 border border-white/10 px-6 py-5 outline-none focus:border-white text-white transition-all resize-none font-sans placeholder:text-white/30"></textarea>
              <button className="w-full bg-white text-[#0a192f] py-5 font-sans uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg text-sm border border-white">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div className="relative overflow-hidden border border-white/10 h-[500px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.159732748943!2d106.62123659999999!3d-6.2426691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc0cbcd36a13%3A0x4c53b8372d890c75!2sWilly%20Soemantri%20Music%20School%20Gading%20Serpong!5e0!3m2!1sid!2sid!4v1770900472772!5m2!1sid!2sid"
              className="w-full h-full grayscale invert opacity-60"
              style={{ border: 0 }}
              allowFullScreen=""
            />
            <div className="absolute top-8 left-8 bg-[#0a192f]/90 backdrop-blur-md p-8 border border-white/20 max-w-xs shadow-2xl">
              <p className="text-blue-200 font-sans text-xs uppercase tracking-[0.3em] mb-3">Visit Our Studio</p>
              <p className="text-white font-sans text-lg leading-relaxed">WSMS GS Ruko Spark Blok Blok B11, Gading Serpong, Tangerang</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;