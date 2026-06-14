import { motion } from "framer-motion";

export function CaseStudies() {
  const cases = [
    {
      title: "Fredy's Bungalow",
      image: "/fredys.png",
      stats: [
        "7,545+ Reel Views · 79 Saves · 87 Shares",
        "8,790+ Carousel Views · 14 Saves · 11 Shares"
      ],
      story: "Heritage charm, mountain setting, slow travel."
    },
    {
      title: "Itmenaan Estate",
      image: "/itmenaan.png",
      stats: [
        "4,570+ Reel Views · 40 Saves · 30 Shares"
      ],
      story: "Stone cottages, Himalayan views, waking up in nature."
    },
    {
      title: "Mulberry House Kasar",
      image: "/mulberry.png",
      stats: [
        "3,901+ Reel Views · 15 Saves · 7 Shares",
        "3,436+ Carousel Views"
      ],
      story: "Slow living, mountain calm, city escape."
    },
    {
      title: "Golden Pines Retreat",
      image: "/golden-pines.png",
      stats: [
        "3,118+ Reel Views · 14 Saves · 21 Shares",
        "3,049+ Carousel Views"
      ],
      story: "Serene atmosphere, Kainchi Dham proximity."
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          >
            Properties We've Worked With
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-accent mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{study.title}</h3>
              <p className="text-accent font-medium text-sm mb-4 uppercase tracking-wider">{study.story}</p>
              <div className="space-y-2 border-l-2 border-accent pl-4">
                {study.stats.map((stat, i) => (
                  <p key={i} className="text-foreground/70 font-light text-sm">{stat}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="/MediaPhiles_1781429427369.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-b border-foreground text-foreground pb-1 hover:text-accent hover:border-accent transition-colors font-medium tracking-wide uppercase text-sm"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
