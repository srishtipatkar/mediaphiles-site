import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#3A3E61]">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Luxury hillside resort at golden hour"
          className="h-full w-full object-cover opacity-50 saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-[#3A3E61]/72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,162,39,0.20),transparent_34%),linear-gradient(180deg,rgba(18,53,36,0.25),#3A3E61_96%)]" />
      </div>

      <div className="container relative z-10 mx-auto w-full px-6 py-28 pt-36 text-center text-[#F7F4EE] sm:pt-40">
        <motion.p
          className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#C9A84C] md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE_OUT }}
        >
          Hospitality Marketing Studio
        </motion.p>

        <motion.h1
          className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:max-w-4xl md:text-6xl lg:text-7xl"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE_OUT }}
        >
          A Great Stay Deserves Great Storytelling
        </motion.h1>

        <motion.div
          className="mx-auto mb-8 mt-8 h-[2px] w-28 bg-[#C9A84C] md:w-40"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT }}
        />

        <motion.p
          className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-[#F7F4EE]/85 md:text-xl"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE_OUT }}
        >
          Storytelling-driven marketing for hotels, retreats, resorts, villas, and homestays.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE_OUT }}
        >
          <motion.a
            href="#instagram-audit"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="border border-[#C9A84C] bg-[#C9A84C] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#3A3E61] transition-colors duration-300 hover:border-[#F7F4EE] hover:bg-[#F7F4EE]"
          >
            Request Free Audit
          </motion.a>
          <motion.a
            href="#case-studies"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="border border-[#F7F4EE]/60 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F4EE] transition-colors duration-300 hover:border-[#C9A84C] hover:bg-[#F7F4EE]/10 hover:text-[#C9A84C]"
          >
            View Case Studies
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
