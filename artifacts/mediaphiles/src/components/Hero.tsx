import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Luxury hillside resort at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white mt-16">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Helping Boutique Hotels Turn Attention Into Bookings
        </motion.h1>
        
        <motion.p 
          className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Storytelling-driven marketing for hotels, retreats, resorts, villas, and homestays.
        </motion.p>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-accent/90 border border-accent text-white hover:bg-accent transition-all text-sm font-medium tracking-widest uppercase"
          >
            Book a Discovery Call
          </a>
          <a
            href="#case-studies"
            className="px-8 py-4 border border-white/50 text-white hover:bg-white/10 transition-all text-sm font-medium tracking-widest uppercase"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
}
