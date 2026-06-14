import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logoLight from "@/assets/logo-light.svg";  // shown on transparent hero
import logoDark  from "@/assets/logo-dark.svg";   // shown after scroll


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          className={`font-serif text-2xl tracking-wide transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            className="block"
            aria-label="MediaPhiles — home"
          >
            <img
              src={isScrolled ? logoDark : logoLight}
              alt="MediaPhiles"
              className="h-50 md:h-60 w-auto transition-opacity"
            />
          </a>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Case Studies", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.toLowerCase().replace(" ", "-"));
              }}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className={`px-6 py-3 border transition-all text-sm font-medium tracking-widest uppercase ${
              isScrolled 
                ? "border-primary text-primary hover:bg-primary hover:text-white" 
                : "border-white/50 text-white hover:border-accent hover:text-accent hover:bg-black/20"
            }`}
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
