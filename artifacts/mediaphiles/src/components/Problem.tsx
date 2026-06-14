import { motion } from "framer-motion";

const struggles = [
  {
    title: "Generic content",
    description: "Pictures of empty rooms and breakfast buffets that look like every other property."
  },
  {
    title: "Low engagement",
    description: "Followers who never turn into inquiries, and content that gets lost in the feed."
  },
  {
    title: "Booking Platform Dependency",
    description: "Paying 15–20% commissions to OTAs instead of building your own direct booking engine."
  },
  {
    title: "Weak brand positioning",
    description: "Competing on price because travelers can't see the unique value of your experience."
  },
  {
    title: "Limited direct inquiries",
    description: "A beautiful property that remains a hidden secret because the right audience can't find it."
  }
];

export function Problem() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-5 font-medium">The Problem</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 font-semibold">
            Beautiful Properties Deserve Better Marketing
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A84C] mx-auto mb-10" />
          <p className="text-foreground/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Most hotels showcase rooms. Travelers book experiences. Yet, many extraordinary properties struggle to translate their physical beauty into digital presence.
          </p>
        </motion.div>

        <div className="space-y-10">
          {struggles.map((struggle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="pl-8 border-l-2 border-[#C9A84C]/30 relative hover:border-[#C9A84C]/70 transition-colors duration-300"
            >
              <div className="absolute w-2 h-2 rounded-full bg-[#C9A84C] -left-[5px] top-[6px]" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">{struggle.title}</h3>
              <p className="text-foreground/60 font-light leading-relaxed">{struggle.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="w-16 h-[1px] bg-[#C9A84C]/40 mx-auto mb-10" />
          <p className="font-serif text-2xl md:text-3xl text-[#2F4F4F] leading-relaxed italic max-w-2xl mx-auto">
            "We help hospitality brands stand out through strategic storytelling and guest-focused marketing."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
