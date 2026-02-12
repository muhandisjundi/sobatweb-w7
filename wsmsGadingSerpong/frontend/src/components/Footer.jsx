import { Instagram, Twitter, Globe, Send, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080C16] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center text-[#0a192f] font-black text-xl border border-white/20">W</div>
              <span className="font-serif font-bold text-xl tracking-widest uppercase text-white">WILLY SOEMANTRY</span>
            </div>
            <p className="text-blue-100/60 text-sm font-sans leading-relaxed">
              Membentuk masa depan musik Indonesia melalui pendidikan klasik yang berintegritas dan penuh inspirasi.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase text-xs tracking-[0.2em] text-white mb-6">Programs</h4>
            <ul className="space-y-3 text-blue-100/60 text-sm font-sans">
              <li className="hover:text-white cursor-pointer transition-colors">Classical Piano</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contemporary Vocal</li>
              <li className="hover:text-white cursor-pointer transition-colors">Music Production</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kids Music Early Age</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase text-xs tracking-[0.2em] text-white mb-6">Connect</h4>
            <div className="space-y-4 text-blue-100/60 text-sm font-sans">
              <a href="https://instagram.com/willysoemantrymusicschool" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Instagram size={18} className="text-white" />
                <span>@wsmsgadingserpong</span>
              </a>
              <a href="mailto:info@willysoemantry.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-white" />
                <span>wsmsgadingserpong@gmail.com</span>
              </a>
              <a href="https://wa.me/6281112111567" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-white" />
                <span>0811-1211-1567</span>
              </a>
              <a href="https://maps.google.com/?q=WSMS+GS+Ruko+Spark+Blok+Blok+B11,+Gading+Serpong,+Tangerang" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin size={18} className="text-white mt-1 shrink-0" />
                <span>WSMS GS Ruko Spark Blok Blok B11, Gading Serpong, Tangerang</span>
              </a>
            </div>
          </div>

          <div className="text-right">
            <h4 className="font-serif font-bold uppercase text-xs tracking-[0.2em] text-white mb-6">Newsletter</h4>
            <div className="relative">
              <input type="text" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white font-sans placeholder:text-white/20" />
              <button className="absolute right-1 top-1 bottom-1 bg-white text-[#0a192f] px-5 font-sans font-bold text-xs uppercase hover:bg-blue-50 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-sans text-blue-100/40 uppercase tracking-[0.2em]">© 2026 WILLY SOEMANTRY MUSIC SCHOOL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            {/* Social Icons with hover gold effect */}
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;