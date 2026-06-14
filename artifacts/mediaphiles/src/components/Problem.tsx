import { motion } from "framer-motion";

export function Problem() {
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
      description: "Paying 15-20% commissions to OTAs instead of building your own direct booking engine."
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

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Beautiful Properties Deserve Better Marketing</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mb-10"></div>
          <p className="text-foreground/80 font-light text-lg md:text-xl leading-relaxed">
            Most hotels showcase rooms. Travelers book experiences. Yet, many extraordinary properties struggle to translate their physical beauty into digital presence.
          </p>
        </motion.div>

        <div className="space-y-12">
          {struggles.map((struggle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="pl-8 border-l border-accent/30 relative"
            >
              <div className="absolute w-2 h-2 rounded-full bg-accent -left-[4.5px] top-2"></div>
              <h3 className="text-xl font-medium mb-2 text-foreground">{struggle.title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{struggle.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-primary leading-relaxed italic">
            "We help hospitality brands stand out through strategic storytelling and guest-focused marketing."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
