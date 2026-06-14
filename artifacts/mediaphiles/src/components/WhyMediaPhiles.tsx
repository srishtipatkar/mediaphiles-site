import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Hospitality Focus",
    description: "We work exclusively with hospitality brands. Every strategy is built around the unique rhythms of travel and guest experience."
  },
  {
    number: "02",
    title: "Travel Storytelling",
    description: "We don't just create content — we craft narratives that make travellers feel they must visit your property."
  },
  {
    number: "03",
    title: "Creator Perspective",
    description: "Our team thinks like travellers and creators, producing content that feels authentic, not promotional."
  },
  {
    number: "04",
    title: "Growth-Oriented",
    description: "Every piece of content, every campaign, every automation is designed with one goal: more direct bookings for you."
  }
];

export function WhyMediaPhiles() {
  return (
    <section className="py-28 bg-[#F8F5F0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-5 font-medium"
          >
            Our Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6 font-semibold"
          >
            Why Hotels Choose MediaPhiles
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-[#C9A84C] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 bg-white border border-[#E8DFC8] hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-400 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="text-[#C9A84C]/15 font-serif text-7xl absolute top-4 right-6 leading-none select-none">
                {reason.number}
              </div>
              <div className="relative z-10">
                <div className="w-8 h-[1px] bg-[#C9A84C]/60 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-[#1F1F1F]">{reason.title}</h3>
                <p className="text-[#1F1F1F]/60 font-light leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
