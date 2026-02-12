import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, MessageSquare, Phone, Music } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// ... (imports sama seperti sebelumnya)

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Selamat datang di Le Jardin. Ada yang bisa asisten kami bantu mengenai program musik kami?' }
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
    const message = "Halo Le Jardin, saya ingin bertanya mengenai program musik...";
    window.open(`https://wa.me/628367787588?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[99999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[350px] md:w-[400px] h-[580px] bg-[#0A0F1C] shadow-2xl rounded-[2.5rem] border border-[#D4AF37]/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#D4AF37] p-6 text-black flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center text-[#D4AF37]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-tighter">Le Jardin Concierge</h3>
                  <span className="text-[9px] font-bold uppercase opacity-70">Student Support</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-2 rounded-full transition-colors"><X size={20} /></button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed
                    ${msg.role === 'user'
                      ? 'bg-[#D4AF37] text-black rounded-tr-none'
                      : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 bg-black/40 border-t border-white/5 space-y-3">
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="text-[10px] font-bold uppercase tracking-tight px-3 py-2 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black rounded-full border border-white/10 transition-all">
                    {opt.q}
                  </button>
                ))}
              </div>
              <button onClick={handleWhatsApp} className="w-full bg-white/10 hover:bg-white/20 text-[#D4AF37] py-3 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-[#D4AF37]/30 transition-all flex items-center justify-center gap-2">
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
        className="w-20 h-20 bg-[#D4AF37] text-black rounded-[2.5rem] flex items-center justify-center shadow-2xl hover:bg-[#F9E498] transition-all border-4 border-[#0A0F1C]"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;