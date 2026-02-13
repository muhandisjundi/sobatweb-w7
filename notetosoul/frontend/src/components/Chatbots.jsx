import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircleHeart, Loader2, Bird, Phone } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Shalom! Ada yang bisa kami bantu hari ini?' }]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleAsk = (q, a) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: a }]);
      setIsTyping(false);
    }, 1500); 
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] sm:w-[360px] bg-white shadow-2xl rounded-[2.5rem] border border-stone-100 overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-[#717D51] p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Bird size={16} /></div>
                <h4 className="text-sm font-bold font-serif italic">NoteToSoul Help</h4>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={18} /></button>
            </div>
            
            {/* Chat Area with Auto-Scroll */}
            <div ref={scrollRef} className="h-[300px] overflow-y-auto p-5 space-y-4 bg-[#F9F7F2]/30 scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[12px] leading-relaxed ${
                    m.role === 'user' ? 'bg-[#717D51] text-white rounded-tr-none' : 'bg-white text-stone-600 shadow-sm rounded-tl-none border border-stone-50'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-[#717D51] text-[10px] font-medium animate-pulse">
                  <Loader2 size={12} className="animate-spin" /> NoteToSoul is thinking...
                </div>
              )}
            </div>

            {/* Quick Actions & WA */}
            <div className="p-4 bg-white border-t border-stone-50 space-y-3">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => handleAsk("Cek Stok", "Ready stock! Koleksi terbaru bisa dicek di Shopee/Tokped kami.")} className="text-[10px] border border-stone-100 px-3 py-2 rounded-xl hover:bg-[#F9F7F2]">Cek Stok</button>
                <button onClick={() => handleAsk("Promo IG", "Follow @notetosoul untuk klaim diskon 5%!")} className="text-[10px] border border-stone-100 px-3 py-2 rounded-xl hover:bg-[#F9F7F2]">Promo IG</button>
              </div>
              
              <a href="https://wa.me/yournumber" target="_blank" className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-bold transition-all">
                <Phone size={14} /> Tanya Live Agent (WA)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-[#717D51] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-all active:scale-95 pointer-events-auto">
        {isOpen ? <X size={28} /> : <MessageCircleHeart size={28} />}
      </button>
    </div>
  );
};

export default Chatbot;