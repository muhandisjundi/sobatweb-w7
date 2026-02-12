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
    { q: 'Pilihan instrumen apa saja?', a: 'Kami menyediakan kelas Piano, Biola, Vokal, Cello, dan Gitar Klasik untuk segala usia.' },
    { q: 'Apakah ada kelas percobaan?', a: 'Tentu! Kami menawarkan Trial Class gratis selama 30 menit dengan instruktur ahli kami.' },
    { q: 'Berapa biaya kursusnya?', a: 'Biaya bervariasi mulai dari Rp 800rb/bulan tergantung level dan instrumen yang dipilih.' },
    { q: 'Lokasi sekolah dimana?', a: 'Kampus utama kami berada di SCBD, Jakarta, dengan fasilitas studio kedap suara premium.' },
  ];

  // ... (logic handleOptionClick & handleWhatsApp sama, ganti warna & teks saja)

  return (
    <div className="fixed bottom-10 right-10 z-[99999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div className="mb-6 w-[350px] md:w-[400px] h-[580px] bg-[#0A0F1C] shadow-2xl rounded-[2.5rem] border border-[#D4AF37]/20 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-[#D4AF37] p-6 text-black flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center text-[#D4AF37]">
                  <Music size={22} />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-tighter">Jardin Concierge</h3>
                  <span className="text-[9px] font-bold uppercase opacity-70">Student Support</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            {/* Chat Body - Sesuaikan warna bubble */}
            {/* User: bg-[#D4AF37] text-black | Bot: bg-white/10 text-white */}

            {/* Footer Buttons */}
            <div className="p-4 bg-black/40 border-t border-white/5 space-y-3">
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="text-[10px] font-bold uppercase tracking-tight px-3 py-2 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black rounded-full border border-white/10 transition-all">
                    {opt.q}
                  </button>
                ))}
              </div>
              <button onClick={handleWhatsApp} className="w-full bg-white/10 hover:bg-white/20 text-[#D4AF37] py-3 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border border-[#D4AF37]/30 transition-all">
                Contact Admissions
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="w-20 h-20 bg-[#D4AF37] text-black rounded-[2.5rem] flex items-center justify-center shadow-2xl hover:bg-[#F9E498] transition-all border-4 border-[#0A0F1C]">
        {isOpen ? <X size={32} /> : <Music size={32} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;