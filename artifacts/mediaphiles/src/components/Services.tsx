import { motion } from "framer-motion";
import { Compass, PenTool, Smartphone, Target, MessageCircle, Star, MousePointerClick, RefreshCw } from "lucide-react";

const services = [
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Brand Positioning",
    description: "Define what makes your property unique and craft a narrative that commands attention."
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Content Creation",
    description: "Reels, photography, stories, and visual storytelling that captures the feeling of a stay."
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Social Media Management",
    description: "Consistent content and audience engagement that builds an aspirational community."
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Lead Generation",
    description: "Turn visibility into guest inquiries with campaigns designed for high-intent travelers."
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp Automation",
    description: "Capture and nurture guest leads automatically — converting interest into bookings."
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Review Generation",
    description: "Build trust through authentic guest reviews that influence new traveler decisions."
  },
  {
    icon: <MousePointerClick className="w-5 h-5" />,
    title: "Direct Booking Optimisation",
    description: "Reduce OTA dependency and drive traffic directly to your own booking engine."
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Retargeting Ads",
    description: "Stay top-of-mind with travelers who have shown genuine interest in your property."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#F8F5F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-5 font-medium"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6 font-semibold"
          >
            Hospitality Growth Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-[#C9A84C] mx-auto"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 border border-[#E8DFC8] bg-white hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-400 group flex flex-col items-start text-left"
            >
              <div className="text-[#C9A84C] mb-6 bg-[#C9A84C]/10 p-3.5 group-hover:bg-[#C9A84C] group-hover:text-white transition-all duration-400">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold mb-3 text-[#1F1F1F] leading-snug">{service.title}</h3>
              <p className="text-[#1F1F1F]/60 font-light text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
