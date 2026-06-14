import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

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

export function Process() {
  return (
    <section id="process" className="py-28 bg-[#2F4F4F] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-5 font-medium"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl mb-6 text-white font-semibold"
          >
            Our Hotel Growth Framework
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-[#C9A84C] mx-auto"
          />
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-start justify-between gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center flex-1 px-2"
              >
                <div className="w-20 h-20 rounded-full border border-[#C9A84C]/60 bg-[#2F4F4F] flex items-center justify-center mb-5 text-[#C9A84C] font-serif text-xl shadow-[0_0_20px_rgba(201,168,76,0.15)] relative z-10">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold mb-2 text-white leading-snug">{step.title}</h3>
                <p className="text-white/60 font-light text-xs leading-relaxed max-w-[130px]">{step.description}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="flex items-center mt-9 flex-shrink-0"
                >
                  <div className="w-8 h-[1px] bg-[#C9A84C]/40" />
                  <ChevronRight className="w-4 h-4 text-[#C9A84C]/70 -ml-1 flex-shrink-0" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="flex lg:hidden flex-col items-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center max-w-xs w-full px-4"
              >
                <div className="w-20 h-20 rounded-full border border-[#C9A84C]/60 bg-[#2F4F4F] flex items-center justify-center mb-4 text-[#C9A84C] font-serif text-xl shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{step.description}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="flex flex-col items-center my-4"
                >
                  <div className="w-[1px] h-6 bg-[#C9A84C]/40" />
                  <ChevronDown className="w-4 h-4 text-[#C9A84C]/70 -mt-1" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
