import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Business Audit",
      description: "Identifying your audience and business goals."
    },
    {
      number: "02",
      title: "Content Strategy",
      description: "Creating a content and positioning roadmap."
    },
    {
      number: "03",
      title: "Content Creation",
      description: "Producing visuals and storytelling driven content."
    },
    {
      number: "04",
      title: "Lead Management",
      description: "Managing guest inquiries through AI automation."
    },
    {
      number: "05",
      title: "Performance Analysis",
      description: "Tracking content performance and lead generation."
    }
  ];

  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl mb-6 text-white"
          >
            Our Hotel Growth Framework
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-accent mx-auto"
          />
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-accent/30 z-0"></div>

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center max-w-xs mx-auto lg:w-1/5"
              >
                <div className="w-24 h-24 rounded-full bg-primary border border-accent flex items-center justify-center mb-6 text-accent font-serif text-2xl relative shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                  {step.number}
                  {/* Connecting line for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-accent/30"></div>
                  )}
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{step.title}</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
