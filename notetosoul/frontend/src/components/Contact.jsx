import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, Phone, ShoppingCart } from "lucide-react";

const Contact = () => {
  const channels = [
    { icon: Phone, label: "WhatsApp Chat", info: "08xx-xxxx-xxxx", link: "https://wa.me/yournumber", color: "hover:bg-green-50" },
    { icon: Instagram, label: "Instagram", info: "@notetosoul", link: "https://instagram.com/notetosoul", color: "hover:bg-pink-50" },
    { icon: ShoppingCart, label: "Shopee", info: "Official Shop", link: "https://shopee.co.id/notetosoul", color: "hover:bg-orange-50" }
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif text-[#2C2C2C] mb-6 italic">Stay in the Light.</h2>
              <p className="text-stone-500 mb-10 leading-relaxed">
                Butuh bantuan memilih hadiah atau menanyakan stok? Hubungi kami melalui kanal favorit Anda. Kami siap melayani dengan kasih.
              </p>
              
              <div className="space-y-4">
                {channels.map((c, i) => (
                  <motion.a 
                    key={i}
                    href={c.link}
                    target="_blank"
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-6 p-6 rounded-[2rem] border border-stone-100 transition-all ${c.color} group`}
                  >
                    <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center text-[#717D51] group-hover:scale-110 transition-transform">
                      <c.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none mb-1">{c.label}</p>
                      <p className="text-sm font-bold text-[#2C2C2C]">{c.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[4rem] bg-[#717D51] overflow-hidden relative shadow-2xl">
                <img src="https://images.unsplash.com/photo-1523199455310-87b16c09e1c8?w=800" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <p className="text-white font-serif text-2xl italic">"He leads me beside quiet waters, He restores my soul."</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#717D51]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;