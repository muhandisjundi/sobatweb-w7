import { motion } from 'framer-motion';

const Pricelist = () => {
    const rentalRates = [
        { hours: '2 hours', price: '500' },
        { hours: '4 hours', price: '800' },
        { hours: '6 hours', price: '1,250' },
        { hours: '8 hours', price: '1,500' },
        { hours: 'Overtime', price: '250' },
    ];

    const bookingSlots = [
        { duration: '2 Hours Booking', slots: ['Slot 1: 08.00 – 10.00', 'Slot 2: 10.30 – 12.30', 'Slot 3: 15.30 – 17.30'] },
        { duration: '4 Hours Booking', slots: ['Slot 1: 10.00 – 12.00', 'Slot 2: 13.00 – 17.00'] },
        { duration: '6 Hours Booking', slots: ['Slot 1: 08.00 – 14.00', 'Slot 2: 11.00 – 17.00'] },
    ];

    return (
        <div className="pt-32 pb-24 bg-cave-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">Investment</span>
                    <h2 className="text-4xl md:text-5xl font-light mb-6 underline decoration-cave-beige underline-offset-8">Rental Rates</h2>
                </div>

                {/* Rates Table */}
                <div className="max-w-4xl mx-auto mb-32">
                    <div className="bg-cave-white-grey rounded-3xl p-8 md:p-12 shadow-sm">
                        <div className="grid grid-cols-2 border-b border-cave-neutral pb-6 mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-cave-grey">Duration</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-cave-grey text-right">Price (IDRk)</span>
                        </div>
                        {rentalRates.map((rate, index) => (
                            <div key={index} className="grid grid-cols-2 py-4 border-b border-cave-neutral/50 last:border-0 hover:bg-white/50 transition-soft px-2 rounded-xl">
                                <span className="text-lg font-medium text-cave-dark">{rate.hours}</span>
                                <span className="text-lg font-semibold text-cave-dark text-right tracking-tight">{rate.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Booking Slots */}
                <div className="mb-32">
                    <h3 className="text-3xl font-light text-center mb-16 italic">Available Time Slots</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {bookingSlots.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white border border-cave-neutral p-8 rounded-3xl transition-soft"
                            >
                                <div className="w-12 h-12 bg-cave-beige rounded-full flex items-center justify-center mb-6 text-cave-dark font-bold text-sm">
                                    {index === 0 ? '2h' : index === 1 ? '4h' : '6h'}
                                </div>
                                <h4 className="text-xl font-semibold mb-6">{item.duration}</h4>
                                <ul className="space-y-4">
                                    {item.slots.map((slot, sIndex) => (
                                        <li key={sIndex} className="text-cave-grey text-sm flex items-center">
                                            <div className="w-1.5 h-1.5 bg-cave-beige rounded-full mr-3"></div>
                                            {slot}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Layout Illustration */}
                <div className="bg-cave-dark text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">Space Map</span>
                            <h3 className="text-3xl md:text-4xl font-light mb-8 italic">Understanding the Canvas</h3>
                            <div className="grid grid-cols-2 gap-8 text-sm opacity-80">
                                <ul className="space-y-4">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-cave-beige rounded-full mr-3"></span>Woody Space</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-cave-beige rounded-full mr-3"></span>Round Space</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-cave-beige rounded-full mr-3"></span>Wavy Space</li>
                                </ul>
                                <ul className="space-y-4">
                                    <li className="flex items-center"><span className="w-2 h-2 bg-cave-beige rounded-full mr-3"></span>Metal Space</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-cave-beige rounded-full mr-3"></span>Changing / Makeup</li>
                                    <li className="flex items-center"><span className="w-2 h-2 bg-cave-beige rounded-full mr-3"></span>Toilet</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative w-full max-w-[320px] mx-auto bg-white/5 border border-white/10 rounded-xl overflow-hidden p-4">
                            <div className="flex flex-col h-[500px] w-full border border-white/20 rounded-lg overflow-hidden bg-white/5">
                                {/* Woody Space */}
                                <div className="h-[11.5%] flex items-center border-b border-white/20">
                                    <div className="w-[60%] h-full bg-[#8B7E74]/40 border-r border-white/20 flex items-center justify-center">
                                        <span className="text-[8px] uppercase tracking-tighter opacity-70">Woody Space</span>
                                    </div>
                                    <div className="w-[40%] h-full border-dashed border-l border-white/10"></div>
                                </div>

                                {/* Round Space */}
                                <div className="h-[36%] flex items-center justify-center border-b border-white/20 relative">
                                    <span className="text-[10px] uppercase font-light tracking-widest opacity-60">Round Space</span>
                                    <div className="absolute top-2 left-2 text-[6px] opacity-30">4.7 m</div>
                                </div>

                                {/* Wavy Space */}
                                <div className="h-[31.5%] bg-cave-beige/20 flex items-center justify-center border-b border-white/20 relative">
                                    <span className="text-[10px] uppercase font-light tracking-widest text-cave-beige">Wavy Space</span>
                                    <div className="absolute top-2 left-2 text-[6px] opacity-30">4.1 m</div>
                                </div>

                                {/* Metal Space */}
                                <div className="h-[7.7%] bg-white/10 flex items-center justify-center border-b border-white/20">
                                    <span className="text-[8px] uppercase tracking-tighter opacity-50">Metal Space</span>
                                </div>

                                {/* Utility Area */}
                                <div className="h-[13.3%] flex">
                                    <div className="w-[70%] border-r border-white/20 flex items-center justify-center bg-white/5 text-center p-1">
                                        <span className="text-[7px] uppercase leading-none opacity-60">Changing Room /<br />Makeup Room</span>
                                    </div>
                                    <div className="w-[30%] flex items-center justify-center bg-cave-grey/10">
                                        <span className="text-[8px] uppercase opacity-40">Toilet</span>
                                    </div>
                                </div>
                            </div>

                            {/* Dimension Labels */}
                            <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-6 px-1 text-[6px] opacity-30 pointer-events-none">
                                <span>13 m</span>
                            </div>
                            <div className="absolute top-0 left-4 w-full flex justify-center pt-1 text-[6px] opacity-30 pointer-events-none">
                                <span>Total Width: 4.5 m</span>
                            </div>
                            <div className="absolute bottom-1 w-full text-center text-[8px] font-medium opacity-40">
                                Ceiling Height : 3m
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricelist;
