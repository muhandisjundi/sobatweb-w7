import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/232/2025/05/23/radar-mlg-36-4257374636.png"
                        alt="The Cave Studio Luxury Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-12 leading-[1.1] max-w-6xl mx-auto uppercase tracking-tighter">
                            Creative Space <br />
                            <span className="font-light italic">& Studio Design</span>
                        </h1>
                        <div className="flex flex-col sm:row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                            <Link
                                to="/contact"
                                className="group bg-white text-cave-dark px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cave-beige transition-soft"
                            >
                                Book Your Slot
                            </Link>
                            <Link
                                to="/gallery"
                                className="text-white border-b border-white pb-1 text-xs font-bold uppercase tracking-widest hover:text-white/70 hover:border-white/70 transition-soft"
                            >
                                Explore Space
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
                <div className="w-[1px] h-12 bg-white"></div>
            </motion.div>

            {/* The Spaces Section - New Visual Focus */}
            <section className="py-32 bg-cave-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">The Studio</span>
                            <h2 className="text-4xl md:text-6xl font-light leading-tight">
                                Ruang yang berbicara melalui <span className="italic font-semibold">kesederhanaan</span>.
                            </h2>
                        </div>
                        <Link to="/gallery" className="group flex items-center space-x-2 text-cave-dark font-medium pb-2 border-b border-cave-dark">
                            <span>Explore All Spaces</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
                        {/* Cave Space - Main Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 group relative rounded-[2rem] overflow-hidden"
                        >
                            <img
                                src="https://idseducation.com/wp-content/uploads/2017/06/Studio.jpg"
                                alt="Cave Space"
                                className="w-full h-full object-cover transition-soft duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-soft p-12 flex flex-col justify-end">
                                <h3 className="text-white text-3xl font-light italic">Cave Space</h3>
                                <p className="text-white/80 font-light">The heart of our minimalist sanctuary.</p>
                            </div>
                        </motion.div>

                        {/* Side visuals */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex-grow group relative rounded-[2rem] overflow-hidden"
                            >
                                <img
                                    src="https://www.tagvenue.com/resize/202601/f7/f1/widen-1680-noupsize;60183-1767781015.jpg"
                                    alt="Glass Space"
                                    className="w-full h-full object-cover transition-soft duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 text-white bg-gradient-to-t from-black/40 to-transparent">
                                    <h4 className="text-xl font-light">Glass Space</h4>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex-grow group relative rounded-[2rem] overflow-hidden"
                            >
                                <img
                                    src="https://images.stockcake.com/public/c/4/8/c48b9c79-ad34-45c7-8d26-1314e6985411_large/artistic-studio-setup-stockcake.jpg"
                                    alt="Makeup Area"
                                    className="w-full h-full object-cover transition-soft duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 text-white bg-gradient-to-t from-black/40 to-transparent">
                                    <h4 className="text-xl font-light">Makeup Area</h4>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ambience Section - Full Width Visual */}
            <section className="py-24 bg-cave-white-grey">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[3rem] overflow-hidden"
                    >
                        <img
                            src="https://snxpstudio.co/wp-content/uploads/2023/11/pexels-photo-3800848.jpeg"
                            alt="Studio Ambience"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-cave-dark/20 flex items-center justify-center text-center p-6">
                            <div className="max-w-2xl text-white">
                                <h3 className="text-4xl md:text-5xl font-light italic mb-6">"Where every detail is a reflection of precision."</h3>
                                <p className="text-lg font-light opacity-90">Experience the harmony of light and shadow in a space designed for perfection.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-32 bg-cave-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-16">
                            "Simple solutions for complex visions. Our space is your canvas."
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-16 border-t border-cave-neutral">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">01. Aesthetic</span>
                                <p className="text-cave-grey font-light">Carefully curated interiors that provide a naturally beautiful backdrop for any shoot.</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">02. Minimalist</span>
                                <p className="text-cave-grey font-light">Clean lines and soft tones that ensure your subject remains the primary focus.</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">03. Premium</span>
                                <p className="text-cave-grey font-light">High-end facilities and professional lighting setup to meet the highest standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
