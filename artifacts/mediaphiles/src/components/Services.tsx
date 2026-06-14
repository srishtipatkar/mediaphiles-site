import { motion } from "framer-motion";
import { Compass, PenTool, Smartphone, Target, MessageCircle, Star, MousePointerClick, RefreshCw } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Brand Positioning",
      description: "Defining your unique narrative to stand out in a crowded market."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Creation",
      description: "Editorial-style photography and videography that captures the feeling of a stay."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Social Media Management",
      description: "Curated grids and engaging stories that build an aspirational community."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Strategic campaigns designed to capture interest from high-intent travelers."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp Automation",
      description: "Streamlining guest inquiries to convert interest into bookings instantly."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Review Generation",
      description: "Systematic approaches to building trust through authentic guest experiences."
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "Direct Booking Optimisation",
      description: "Reducing OTA dependency by driving traffic to your own booking engine."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Retargeting Ads",
      description: "Staying top-of-mind with travelers who have shown interest in your property."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          >
            Hospitality Growth Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-accent mx-auto"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 border border-border bg-white hover:border-accent/50 hover:shadow-lg transition-all duration-300 group flex flex-col items-start text-left"
            >
              <div className="text-accent mb-6 bg-accent/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 font-light text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
