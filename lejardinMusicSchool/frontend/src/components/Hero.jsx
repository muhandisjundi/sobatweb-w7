import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Music, Disc } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Transformasi untuk orb kedua agar bergerak berlawanan arah
  const reverseX = useTransform(smoothX, (val) => val * -1.2);
  const reverseY = useTransform(smoothY, (val) => val * -1.2);

  const handleMouseMove = (e) => {
    // Memetakan posisi mouse ke range yang lebih halus
    const { clientX, clientY } = e;
    mouseX.set(clientX / 25);
    mouseY.set(clientY / 25);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-[#0A0F1C] text-slate-100"
    >
      {/* Parallax Orbs - Nuansa Emas dan Biru Royal */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 blur-[130px] rounded-full -z-10 will-change-transform"
      />
      <motion.div
        style={{ x: reverseX, y: reverseY }}
        className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] bg-amber-500/10 blur-[110px] rounded-full -z-10 will-change-transform"
      />

      <div className="container mx-auto px-6 text-center grow flex flex-col justify-center z-10">
        {/* Label Atas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-amber-500/30 backdrop-blur-sm mb-10 mx-auto"
        >
          <Music size={14} className="text-[#D4AF37]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-200/80">
            Le Jardin Music School
          </span>
        </motion.div>

        {/* Headline - Menggunakan font sans unik dengan tracking ketat */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[7.5rem] font-extrabold leading-[0.9] tracking-tighter mb-8"
        >
          CULTIVATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A028] via-[#F9E498] to-[#D4AF37] italic">
            YOUR SOUND.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
        >
          Menumbuhkan talenta musik di lingkungan artistik. 
          Dari teknik fundamental hingga ekspresi panggung yang memukau.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center"
        >
          <button className="px-12 py-5 bg-[#D4AF37] text-black rounded-full font-black flex items-center gap-3 hover:bg-[#F9E498] transition-all duration-500 group shadow-2xl shadow-amber-900/20 hover:scale-105 active:scale-95 uppercase text-sm tracking-widest">
            Book a Trial Class
            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Marquee - Instrumen yang diajarkan */}
      <div className="bg-[#D4AF37] py-4 overflow-hidden whitespace-nowrap mt-20 rotate-1 border-y border-amber-200/50">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 pr-12 w-fit"
        >
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-12 items-center">
              {["Piano", "Violin", "Vocal", "Cello", "Classical Guitar", "Music Theory"].map((instrument) => (
                <div key={instrument} className="flex items-center gap-12">
                   <span className="text-black text-2xl font-black uppercase italic tracking-tighter">
                    • {instrument}
                  </span>
                  <Disc size={20} className="text-black/30 animate-spin-slow" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;