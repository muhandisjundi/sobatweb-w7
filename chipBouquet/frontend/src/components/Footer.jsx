import { Flower2, Heart } from 'lucide-react';
const Footer = () => (
  <footer className="bg-[#2D3A2D] text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
           <h2 className="text-5xl font-black italic tracking-tighter mb-6">CHIP.B</h2>
           <p className="max-w-sm opacity-60 font-medium italic">Premium Flower & Money Bouquet Artistry. Making your special moments more memorable since 2019.</p>
        </div>
        <div>
           <h4 className="font-black uppercase text-[10px] tracking-widest text-[#8FBC8F] mb-6">Explore</h4>
           <ul className="space-y-4 font-bold text-sm">
             <li><a href="#home" className="hover:text-[#FADADD]">Home</a></li>
             <li><a href="#pricelist" className="hover:text-[#FADADD]">Pricelist</a></li>
             <li><a href="#gallery" className="hover:text-[#FADADD]">Gallery</a></li>
           </ul>
        </div>
        <div>
           <h4 className="font-black uppercase text-[10px] tracking-widest text-[#8FBC8F] mb-6">Locations</h4>
           <ul className="space-y-4 font-bold text-xs opacity-80 uppercase tracking-tighter">
             <li>Sangiang, Tangerang</li>
             <li>Gading Serpong</li>
             <li>Alam Sutera</li>
           </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">© 2024 CHIP BOUQUET. ALL RIGHTS RESERVED.</p>
         <div className="flex gap-4 items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#FADADD]">Pemesanan hanya via WhatsApp</span>
         </div>
      </div>
    </div>
  </footer>
);
export default Footer;