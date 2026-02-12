import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, MessageSquare, Phone, Music } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// ... (imports sama seperti sebelumnya)

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Selamat datang di Willy Soemantry Music School. Ada yang bisa asisten kami bantu mengenai program musik kami?' }
  ]);

  const options = [
    { q: 'Pilihan instrumen apa saja?', a: 'Kami menyediakan kelas Piano, Biola, Vokal, Cello, dan Gitar Klasik. Tersedia untuk level Beginner hingga Advanced.' },
    { q: 'Apakah ada kelas percobaan?', a: 'Tentu! Anda bisa mengikuti Trial Class gratis selama 30 menit. Silahkan hubungi admin untuk jadwal.' },
    { q: 'Berapa biaya kursusnya?', a: 'Biaya mulai dari Rp 800rb/bulan (4x pertemuan). Tersedia paket privat dan grup.' },
    { q: 'Jadwal kelasnya kapan?', a: 'Jadwal fleksibel (Senin-Sabtu, 09.00 - 20.00). Disesuaikan dengan ketersediaan slot instruktur.' },
  ];

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
    }, 500);
  };

  const handleWhatsApp = () => {
    const message = "Halo Willy Soemantry Music School, saya ingin bertanya mengenai program musik...";
    window.open(`https://wa.me/6281112111567?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[90vw] md:w-[400px] h-[80vh] md:h-[580px] bg-[#0a192f] shadow-2xl border border-white/20 overflow-hidden flex flex-col fixed bottom-24 right-1/2 translate-x-1/2 md:right-10 md:translate-x-0 md:bottom-28 z-[99999]"
          >
            {/* Header */}
            <div className="bg-white p-6 text-[#0a192f] flex justify-between items-center border-b border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0a192f] flex items-center justify-center text-white">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-sans font-black text-sm uppercase tracking-wider">Willy Soemantry Concierge</h3>
                  <span className="text-[9px] font-bold uppercase opacity-70">Student Support</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-blue-50 p-2 transition-colors"><X size={20} /></button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 text-sm font-sans leading-relaxed
                    ${msg.role === 'user'
                      ? 'bg-white text-[#0a192f] border border-blue-50'
                      : 'bg-[#112240] text-blue-50 border border-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 bg-[#0a192f] border-t border-white/10 space-y-3">
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="text-[10px] font-bold uppercase tracking-tight px-3 py-2 bg-white/5 hover:bg-white text-blue-100 hover:text-[#0a192f] border border-white/10 transition-all">
                    {opt.q}
                  </button>
                ))}
              </div>
              <button onClick={handleWhatsApp} className="w-full bg-white hover:bg-blue-50 text-[#0a192f] py-3 font-sans uppercase tracking-[0.2em] text-[10px] border border-white transition-all flex items-center justify-center gap-2">
                <Phone size={14} /> Contact Admissions
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white text-[#0a192f] flex items-center justify-center shadow-2xl hover:bg-blue-50 transition-all border border-white z-[99999]"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </>
  );
};

export default Chatbot;