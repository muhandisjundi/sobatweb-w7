import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo! Ada yang bisa kami bantu mengenai Chip Bouquet?' }
  ]);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Pilihan Bouquet?', a: 'Kami sedia Money, Snack, Artificial, Fresh Flower, hingga Bloom Box!' },
    { q: 'Cara Order?', a: 'Pemesanan hanya melalui WhatsApp ya kak agar bisa custom sesuai keinginan.' },
    { q: 'Lokasi?', a: 'Workshop kami di Sangiang Tangerang, Gading Serpong, dan Alam Sutera.' },
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleOptionClick = (opt) => {
    setMessages(prev => [...prev, { role: 'user', text: opt.q }]);
    setIsTyping(true); // Mulai loading berpikir
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: opt.a }]);
      setIsTyping(false); // Selesai loading
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mb-6 w-[320px] h-[450px] bg-white rounded-[2.5rem] shadow-2xl border border-pink-50 overflow-hidden flex flex-col"
          >
            {/* Header - X Button tetap di kanan */}
            <div className="bg-[#FADADD] p-6 flex justify-between items-center">
              <span className="font-black italic text-[#4A4A4A]">CHIP BOT</span>
              <button onClick={() => setIsOpen(false)} className="bg-white/50 p-2 rounded-full">
                <X size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FDF5E6]/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`p-3 rounded-2xl text-xs font-bold max-w-[80%] ${msg.role === 'bot' ? 'bg-white text-slate-600' : 'bg-[#8FBC8F] text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl animate-pulse flex gap-1">
                    <div className="w-1.5 h-1.5 bg-pink-200 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-pink-300 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="text-[10px] font-bold px-3 py-1.5 bg-pink-50 text-[#4A4A4A] rounded-full border border-pink-100">
                    {opt.q}
                  </button>
                ))}
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2">
                <Phone size={12} /> Live WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-[#FADADD] text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white hover:scale-110 transition-transform">
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};
export default Chatbot;