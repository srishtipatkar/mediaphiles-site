import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Luxury hillside resort at golden hour"
          className="w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white mt-16">
        <motion.p
          className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#C9A84C] mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hospitality Marketing Studio
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-[88px] max-w-5xl mx-auto leading-[1.08] font-bold"
          style={{ textShadow: "0 2px 32px rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Helping Boutique Hotels Turn Attention Into Bookings
        </motion.h1>

        <motion.div
          className="w-16 h-[1px] bg-[#C9A84C] mx-auto mt-10 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Storytelling-driven marketing for hotels, retreats, resorts, villas, and homestays.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-[#C9A84C] border border-[#C9A84C] text-white hover:bg-[#b8963e] hover:border-[#b8963e] transition-all duration-300 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Book a Discovery Call
          </a>
          <a
            href="#case-studies"
            className="px-10 py-4 border border-white/60 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white/30" />
      </motion.div>
    </section>
  );
}
