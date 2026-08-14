import { motion } from "framer-motion";
import { InstagramAuditForm } from "@/components/InstagramAuditForm";

export function FinalCTA() {
  return (
    <section id="instagram-audit" className="py-32 bg-[#3A3E61] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] border border-[#C9A84C]/35 rounded-full rotate-12 blur-[1px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[150%] border border-[#C9A84C]/35 rounded-full -rotate-12 blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl text-[#F7F4EE] mb-8"
        >
          Let's Tell Your Story
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#F7F4EE]/80 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Whether you're a boutique hotel, retreat, resort, villa, or homestay, we help bring your story to life and attract more travellers.
        </motion.p>
        
        <InstagramAuditForm />
      </div>
    </section>
  );
}
