import { Leaf, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F9F7F2] pt-20 pb-10">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-[#717D51] mb-6">
              <Leaf size={24} fill="#717D51" />
              <span className="font-serif text-2xl font-bold text-[#2C2C2C]">NoteToSoul</span>
            </div>
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              Mengingatkan anak-anak terang tentang kabar baik melalui perhiasan bermakna. Dikirim dengan cinta dari Indonesia ke seluruh Asia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#717D51] mb-6">Marketplace</h4>
            <ul className="text-sm text-stone-500 space-y-4">
              <li><a href="#" className="hover:text-[#717D51]">Shopee Indonesia</a></li>
              <li><a href="#" className="hover:text-[#717D51]">Tokopedia Official</a></li>
              <li><a href="#" className="hover:text-[#717D51]">Instagram Shop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-[#717D51] mb-6">Newsletter</h4>
            <div className="flex border-b border-stone-200 pb-2">
              <input type="email" placeholder="Your email" className="bg-transparent text-sm outline-none w-full" />
              <button className="text-[#717D51] text-xs font-bold italic">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">© 2024 NOTETOSOUL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 text-stone-400">
            <Instagram size={18} className="hover:text-[#717D51] cursor-pointer" />
            <Twitter size={18} className="hover:text-[#717D51] cursor-pointer" />
            <Facebook size={18} className="hover:text-[#717D51] cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;