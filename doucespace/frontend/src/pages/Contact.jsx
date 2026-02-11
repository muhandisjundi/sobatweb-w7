import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly.');
    };

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Information Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">Connect</span>
                        <h2 className="text-4xl md:text-5xl font-light mb-8 italic">Ready to <span className="font-semibold not-italic">create?</span></h2>
                        <p className="text-cave-grey text-lg leading-relaxed mb-12 font-light max-w-md">
                            Whether you're planning a professional photoshoot, video production, or a creative project, we're here to provide the perfect space.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-cave-white-grey flex items-center justify-center text-cave-dark group-hover:bg-cave-beige transition-soft shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Our Studio</h4>
                                    <p className="text-cave-grey text-sm">Jakarta Selatan, Indonesia</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-cave-white-grey flex items-center justify-center text-cave-dark group-hover:bg-cave-beige transition-soft shrink-0">
                                    <Instagram size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Instagram</h4>
                                    <p className="text-cave-grey text-sm">@thecavestudio</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-cave-white-grey flex items-center justify-center text-cave-dark group-hover:bg-cave-beige transition-soft shrink-0">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                                    <p className="text-cave-grey text-sm">+62 812-3456-7890</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#128C7E] transition-soft shadow-lg md:shadow-none md:hover:shadow-md"
                        >
                            <MessageCircle size={18} />
                            <span>Direct Booking on WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-cave-white-grey rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-cave-neutral/30"
                    >
                        <h3 className="text-2xl font-light mb-8 italic">Booking Inquiry</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-cave-grey ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-cave-beige transition-soft"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-cave-grey ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-cave-beige transition-soft"
                                        placeholder="example@mail.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-cave-grey ml-1">Choice of Space</label>
                                <select className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-cave-beige transition-soft appearance-none">
                                    <option>Cave Space</option>
                                    <option>Glass Space</option>
                                    <option>Full Studio</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-cave-grey ml-1">Message / Project Details</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-cave-beige transition-soft resize-none"
                                    placeholder="Tell us about your shoot..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cave-dark text-white py-4 rounded-2xl text-sm font-semibold hover:bg-cave-grey transition-soft"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
