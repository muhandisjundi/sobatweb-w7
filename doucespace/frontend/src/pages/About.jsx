import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Concept Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                            A minimalist sanctuary for <span className="italic">creative minds</span>.
                        </h2>
                        <p className="text-cave-grey text-lg leading-relaxed mb-8 font-light">
                            The Cave Studio lahir dari keinginan untuk menciptakan ruang yang jujur, tenang, dan inspiratif. Kami percaya bahwa kreativitas membutuhkan ruang bernapas—sebuah kanvas kosong yang tidak mendominasi, melainkan melengkapi setiap visi visual yang hadir di dalamnya.
                        </p>
                        <p className="text-cave-grey text-lg leading-relaxed font-light">
                            Berlokasi di pusat kreativitas, studio kami dirancang dengan pendekatan arsitektur minimalis modern, mengandalkan natural light, tekstur halus, dan harmoni warna netral.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                            <img
                                src="https://images.soco.id/689-stulokalmacan-14.jpeg.jpeg"
                                alt="Studio Aesthetic"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-soft duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cave-beige rounded-full -z-10 opacity-30 blur-2xl"></div>
                    </motion.div>
                </div>

                {/* Visual Focus Section */}
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-light mb-12 italic">Capture the essence of simplicity.</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                        <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden">
                            <img src="https://sudutcreative.com/wp-content/uploads/2024/11/White-Classic-1.jpg" className="w-full h-full object-cover" alt="Interior 1" />
                        </div>
                        <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden">
                            <img src="https://www.99.co/id/panduan/wp-content/uploads/2025/08/04072826/ide-desain-studio-foto-rumahan.jpg" className="w-full h-full object-cover" alt="Interior 2" />
                        </div>
                        <div className="col-span-1 md:col-span-1 rounded-2xl overflow-hidden font-light">
                            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Interior 3" />
                        </div>
                        <div className="col-span-1 md:col-span-1 rounded-2xl overflow-hidden">
                            <img src="https://sudutcreative.com/wp-content/uploads/2024/11/Sudut-White-1.jpg" className="w-full h-full object-cover" alt="Interior 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
