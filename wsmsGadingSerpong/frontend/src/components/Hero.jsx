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
      className="relative min-h-screen flex flex-col justify-center pt-40 md:pt-20 overflow-hidden bg-[#0A0F1C] text-slate-100"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/90 via-[#0A0F1C]/80 to-[#0A0F1C] z-10" />
        <img
          src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=1600"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
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
          className="inline-flex items-center gap-2 px-6 py-2 border border-white/30 backdrop-blur-sm mb-10 mx-auto bg-white/5"
        >
          <Music size={14} className="text-blue-200" />
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-blue-100">
            Willy Soemantry Music School
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[7rem] font-serif leading-[0.9] tracking-tight mb-8 text-white relative"
        >
          DISCOVER YOUR <br />
          <span className="italic font-light text-blue-200">
            MUSICAL POTENTIAL.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-blue-100/80 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-sans tracking-wide leading-relaxed italic"
        >
          Professional music education for all ages.
          Piano, Guitar, Violin, Vocal, and more.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center"
        >
          <button className="px-14 py-5 bg-white text-[#0a192f] font-sans text-lg tracking-widest uppercase hover:bg-blue-50 transition-all duration-500 group border border-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-4">
            Book a Trial Class
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Marquee - Instrumen yang diajarkan */}
      <div className="bg-white py-6 overflow-hidden whitespace-nowrap mt-20 border-y border-white/10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 pr-16 w-fit"
        >
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex gap-16 items-center">
              {["Piano", "Violin", "Vocal", "Cello", "Classical Guitar", "Music Theory"].map((instrument) => (
                <div key={instrument} className="flex items-center gap-16">
                  <span className="text-blue-200 text-3xl font-serif italic tracking-wider">
                    {instrument}
                  </span>
                  <Disc size={12} className="text-[#0a192f]/40 animate-spin-slow" />
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