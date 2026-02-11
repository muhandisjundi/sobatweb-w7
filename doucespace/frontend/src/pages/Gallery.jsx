import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { url: 'https://idseducation.com/wp-content/uploads/2017/06/Studio.jpg', title: 'Main Cave Space', size: 'large' },
        { url: 'https://www.tagvenue.com/resize/202601/f7/f1/widen-1680-noupsize;60183-1767781015.jpg', title: 'Glass Corner', size: 'small' },
        { url: 'https://snxpstudio.co/wp-content/uploads/2023/11/pexels-photo-3800848.jpeg', title: 'Studio Ambience', size: 'small' },
        { url: 'https://sudutcreative.com/wp-content/uploads/2024/11/Sudut-White-1.jpg', title: 'Minimalist Interior', size: 'small' },
        { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', title: 'Lounge Space', size: 'small' },
        { url: 'https://cnc-magazine.oramiland.com/parenting/images/studio-foto-jakarta.width-800.format-webp.webp', title: 'Furniture Detail', size: 'large' },
        { url: 'https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2024/05/photo-studio-bandung.webp', title: 'Luxury Setup', size: 'small' },
        { url: 'https://i.pinimg.com/564x/e4/e6/e0/e4e6e0ab17900059e0b120cb5b6dd515.jpg', title: 'Cave Aesthetic', size: 'small' },
        { url: 'https://i.pinimg.com/736x/8f/db/97/8fdb976aedd9eeb96333efe4cc6c5b40.jpg', title: 'Soft Lighting', size: 'small' },
        { url: 'https://i.pinimg.com/474x/de/d6/53/ded6530a377ed81e828ea5205a80cd62.jpg', title: 'Minimalist Background', size: 'small' },
        { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop', title: 'Professional Workspace', size: 'large' },
        { url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop', title: 'Creative Area', size: 'small' },
        { url: 'https://images.unsplash.com/photo-1594913217409-f308945d81b3?q=80&w=2070&auto=format&fit=crop', title: 'Shadow Play', size: 'small' },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-cave-grey mb-4 block">Our Space</span>
                    <h2 className="text-4xl md:text-5xl font-light mb-4">Gallery</h2>
                    <p className="text-cave-grey font-light max-w-xl">
                        Explore the different corners of The Cave Studio. Every angle is designed for visual excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden group cursor-pointer rounded-2xl ${img.size === 'large' ? 'md:col-span-2' : 'col-span-1'}`}
                        >
                            <div className="aspect-[16/10] md:aspect-auto h-full">
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-soft duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-soft flex items-end p-8">
                                <p className="text-white text-lg font-medium">{img.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
