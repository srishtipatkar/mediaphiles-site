import { motion } from "framer-motion";

export function WhyMediaPhiles() {
  const reasons = [
    {
      title: "Hospitality Focus",
      description: "We specialize in creating content and marketing strategies tailored for hotels, resorts, and hospitality brands."
    },
    {
      title: "Travel Storytelling",
      description: "We understand what inspires travelers to discover destinations and book experiences."
    },
    {
      title: "Creator Perspective",
      description: "We understand how travelers consume content and what influences their travel decisions."
    },
    {
      title: "Growth-Oriented",
      description: "We focus on attracting the right audience and turning attention into genuine interest."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          >
            Why Hotels Choose MediaPhiles
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-accent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 bg-white border border-border hover:border-accent transition-colors duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="text-accent font-serif text-4xl opacity-20 absolute top-6 right-8">
                0{index + 1}
              </div>
              <h3 className="text-xl font-medium mb-4 text-foreground relative z-10">{reason.title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed relative z-10">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
