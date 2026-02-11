import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-cave-white-grey py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-semibold mb-6">The Cave Studio</h3>
                        <p className="text-cave-grey max-w-sm mb-8 leading-relaxed">
                            Elevate your creative vision in our premium, minimalist space. Designed for professionals who value aesthetic and functionality.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-cave-dark hover:bg-cave-beige transition-soft shadow-sm">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-cave-dark hover:bg-cave-beige transition-soft shadow-sm">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-cave-grey">
                            <li><a href="/" className="hover:text-cave-dark transition-soft">Home</a></li>
                            <li><a href="/about" className="hover:text-cave-dark transition-soft">About</a></li>
                            <li><a href="/gallery" className="hover:text-cave-dark transition-soft">Gallery</a></li>
                            <li><a href="/pricelist" className="hover:text-cave-dark transition-soft">Pricelist</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-cave-grey">
                            <li className="flex items-start space-x-3">
                                <MapPin size={16} className="mt-0.5 shrink-0" />
                                <span>Jakarta Selatan, Indonesia</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={16} className="shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cave-neutral mt-16 pt-8 flex flex-col md:row justify-between items-center text-xs text-cave-grey">
                    <p>© {new Date().getFullYear()} The Cave Studio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-cave-dark transition-soft">Privacy Policy</a>
                        <a href="#" className="hover:text-cave-dark transition-soft">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
