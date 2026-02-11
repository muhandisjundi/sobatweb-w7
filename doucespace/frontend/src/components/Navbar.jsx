import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initial styles based on whether we are on Home page (which has dark hero) or other pages
    const navBackground = isScrolled
        ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm'
        : (isHome ? 'bg-transparent py-6' : 'bg-white py-4 shadow-sm');

    const textColor = isScrolled || !isHome ? 'text-cave-dark' : 'text-white';
    const logoColor = isScrolled || !isHome ? 'text-cave-grey' : 'text-white/80';
    const buttonStyles = isScrolled || !isHome
        ? 'bg-cave-dark text-white hover:bg-cave-grey'
        : 'bg-white text-cave-dark hover:bg-cave-beige';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Pricelist', path: '/pricelist' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <NavLink to="/" className={`flex items-center space-x-2 transition-soft ${textColor}`}>
                        <Camera size={24} className={logoColor} />
                        <span className="text-xl font-semibold tracking-tight">The Cave Studio</span>
                    </NavLink>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-xs font-bold uppercase tracking-widest transition-soft hover:opacity-100 ${isScrolled || !isHome
                                        ? `hover:text-cave-grey ${isActive ? 'text-cave-dark' : 'text-cave-grey'}`
                                        : `hover:text-white ${isActive ? 'text-white' : 'text-white/60'}`
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <NavLink
                            to="/contact"
                            className={`hidden md:block px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-soft ${buttonStyles}`}
                        >
                            Book Now
                        </NavLink>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2 rounded-xl transition-soft ${isScrolled || !isHome ? 'bg-cave-dark text-white' : 'text-white'
                                }`}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-cave-dark"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-2xl font-light uppercase tracking-[0.3em] transition-soft ${isActive ? 'text-cave-dark underline decoration-cave-beige underline-offset-8' : 'text-cave-grey hover:text-cave-dark'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <NavLink
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-8 px-12 py-4 bg-cave-dark text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-xl active:scale-95"
                        >
                            Book Now
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
