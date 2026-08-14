import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
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
        isScrolled ? "border-b border-[#C9A84C]/20 bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
          className="block"
          aria-label="MediaPhiles home"
        >
          {logoFailed ? (
            <span className="block leading-none">
              <span
                className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl ${
                  isScrolled ? "text-[#3A3E61]" : "text-[#F7F4EE]"
                }`}
              >
                Media<span className="text-[#C9A84C]">Philes</span>
              </span>
            </span>
          ) : (
            <img
              src={isScrolled ? logoDark : logoLight}
              alt="MediaPhiles"
              className="h-24 w-auto transition-opacity md:h-36"
              onError={() => setLogoFailed(true)}
            />
          )}
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
                isScrolled ? "text-[#3A3E61]/80 hover:text-[#C9A84C]" : "text-[#F7F4EE]/85 hover:text-[#C9A84C]"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#instagram-audit"
            onClick={(e) => { e.preventDefault(); scrollTo("instagram-audit"); }}
            className={`px-6 py-3 border transition-all text-sm font-medium tracking-widest uppercase ${
              isScrolled
                ? "border-[#3A3E61] text-[#3A3E61] hover:bg-[#3A3E61] hover:text-[#F7F4EE]"
                : "border-[#F7F4EE]/60 text-[#F7F4EE] hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[#3A3E61]/30"
            }`}
          >
            Request Free Audit
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
