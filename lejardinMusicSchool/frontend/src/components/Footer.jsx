import { Instagram, Twitter, Globe, Send, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080C16] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-xl flex items-center justify-center text-black font-black text-xl">L</div>
              <span className="font-black text-2xl tracking-tighter italic uppercase text-white">LE JARDIN</span>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Membentuk masa depan musik Indonesia melalui pendidikan klasik yang berintegritas dan penuh inspirasi.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#D4AF37] mb-6">Programs</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-medium">
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">Classical Piano</li>
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">Contemporary Vocal</li>
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">Music Production</li>
              <li className="hover:text-[#D4AF37] cursor-pointer transition-colors">Kids Music Early Age</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#D4AF37] mb-6">Connect</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <a href="https://instagram.com/lejardinmusicschool" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                <Instagram size={18} className="text-[#D4AF37]" />
                <span>@lejardinmusicschool</span>
              </a>
              <a href="mailto:lejardin@gmail.com" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                <Mail size={18} className="text-[#D4AF37]" />
                <span>lejardin@gmail.com</span>
              </a>
              <a href="https://wa.me/628367787588" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                <Phone size={18} className="text-[#D4AF37]" />
                <span>08367787588</span>
              </a>
              <a href="https://maps.google.com/?q=Ruko+Maggiore+Grande+Blok+H.+3,+Gading,+Kec.+Serpong,+Kabupaten+Tangerang,+Banten+15332" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-[#D4AF37] transition-colors">
                <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <span>Ruko Maggiore Grande Blok H. 3, Gading, Kec. Serpong, Kabupaten Tangerang, Banten 15332</span>
              </a>
            </div>
          </div>

          <div className="text-right">
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#D4AF37] mb-6">Newsletter</h4>
            <div className="relative">
              <input type="text" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              <button className="absolute right-1 top-1 bottom-1 bg-[#D4AF37] text-black px-4 rounded-lg font-bold text-xs uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.4em]">© 2026 LE JARDIN MUSIC SCHOOL. AN ARTISTIC LEGACY.</p>
          <div className="flex gap-4">
            {/* Social Icons with hover gold effect */}
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;