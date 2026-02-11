import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, ChevronRight } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Halo! Ada yang bisa kami bantu mengenai The Cave Studio?', timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    const faqResponses = {
        'harga': 'Tarif rental kami mulai dari 500k untuk 2 jam. Detail lengkap bisa Anda cek di halaman Pricelist!',
        'price': 'Tarif rental kami mulai dari 500k untuk 2 jam. Detail lengkap bisa Anda cek di halaman Pricelist!',
        'lokasi': 'Kami berlokasi di area strategis yang nyaman. Alamat lengkap ada di halaman Contact kami.',
        'location': 'Kami berlokasi di area strategis yang nyaman. Alamat lengkap ada di halaman Contact kami.',
        'booking': 'Anda bisa melakukan booking langsung melalui form di halaman Contact atau hubungi kami via WhatsApp.',
        'pesan': 'Anda bisa melakukan booking langsung melalui form di halaman Contact atau hubungi kami via WhatsApp.',
        'fasilitas': 'Kami menyediakan lighting setup profesional, makeup area, dan ruang ganti di setiap paket rental.',
        'fasilitas': 'Kami menyediakan lighting setup profesional, makeup area, dan ruang ganti di setiap paket rental.',
        'jam': 'Kami buka setiap hari dengan beberapa pilihan slot booking mulai pukul 08.00 pagi.',
    };

    const faqSuggestions = [
        { label: 'Berapa tarif rental?', query: 'berapa harganya?' },
        { label: 'Dimana lokasi studio?', query: 'dimana lokasinya?' },
        { label: 'Bagaimana cara booking?', query: 'bagaimana cara booking?' },
        { label: 'Apa saja fasilitas studio?', query: 'apa saja fasilitasnya?' },
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const sendMessage = (text) => {
        const userMessage = { id: Date.now(), type: 'user', text, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);

        setIsTyping(true);
        setTimeout(() => {
            const botResponse = getBotResponse(text.toLowerCase());
            const botMessage = { id: Date.now() + 1, type: 'bot', text: botResponse, timestamp: new Date() };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
        setInputValue('');
    };

    const handleQuickQuestion = (query) => {
        sendMessage(query);
    };

    const getBotResponse = (text) => {
        for (const key in faqResponses) {
            if (text.includes(key)) return faqResponses[key];
        }
        return 'Terima kasih atas pertanyaannya. Tim kami akan segera menjawab secara detail melalui WhatsApp jika Anda meninggalkan pesan di sana!';
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-3xl shadow-2xl w-[350px] md:w-[400px] h-[500px] flex flex-col overflow-hidden border border-cave-neutral/30 mb-4"
                    >
                        {/* Chat Header */}
                        <div className="bg-cave-dark p-6 flex justify-between items-center">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="w-10 h-10 bg-cave-beige rounded-full flex items-center justify-center">
                                    <Bot size={20} className="text-cave-dark" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-tight">Cave Assistant</h4>
                                    <span className="text-[10px] opacity-60 flex items-center italic">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/40 hover:text-white transition-soft"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-grow p-6 overflow-y-auto space-y-4 bg-cave-white-grey/30"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.type === 'user'
                                        ? 'bg-cave-dark text-white rounded-tr-none'
                                        : 'bg-white text-cave-dark border border-cave-neutral/20 rounded-tl-none shadow-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-cave-neutral/20 shadow-sm flex space-x-1">
                                        <span className="w-1.5 h-1.5 bg-cave-grey rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-cave-grey rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-cave-grey rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </motion.div>
                            )}

                            {/* FAQ Suggestions */}
                            {!isTyping && (
                                <div className="mt-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cave-grey mb-4 block">Common Questions</span>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {faqSuggestions.map((faq, index) => (
                                            <motion.button
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                key={index}
                                                onClick={() => handleQuickQuestion(faq.query)}
                                                className="group flex justify-between items-center bg-white border border-cave-neutral/20 p-4 rounded-2xl hover:border-cave-dark transition-soft text-left shadow-sm hover:shadow-md active:scale-95 transition-all"
                                            >
                                                <span className="text-[11px] font-medium text-cave-dark">{faq.label}</span>
                                                <ChevronRight size={14} className="text-cave-neutral group-hover:text-cave-dark transition-soft" />
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 border-t border-cave-neutral/20 bg-white">
                            <div className="flex items-center space-x-2 bg-cave-white-grey rounded-full px-4 py-2">
                                <input
                                    type="text"
                                    placeholder="Tanya sesuatu..."
                                    className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-1 font-light"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="text-cave-dark disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-soft"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-cave-white text-cave-dark' : 'bg-cave-dark text-white'
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
