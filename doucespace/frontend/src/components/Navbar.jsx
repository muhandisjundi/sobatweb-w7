import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <NavLink to="/" className={`flex items-center space-x-2 transition-soft ${textColor}`}>
                    <Camera size={24} className={logoColor} />
                    <span className="text-xl font-semibold tracking-tight">The Cave Studio</span>
                </NavLink>

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

                <NavLink
                    to="/contact"
                    className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-soft ${buttonStyles}`}
                >
                    Book Now
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
