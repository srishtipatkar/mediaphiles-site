import { Instagram } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
              className="font-serif text-3xl mb-4 block"
            >
              MediaPhiles
            </a>
            <p className="text-white/60 font-light text-sm max-w-xs">
              Hospitality Marketing Studio
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Navigation</h4>
            <ul className="space-y-3 text-white/70 font-light text-sm">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }} className="hover:text-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollTo("case-studies"); }} className="hover:text-accent transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("process"); }} className="hover:text-accent transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Connect</h4>
            <ul className="space-y-3 text-white/70 font-light text-sm">
              <li>
                <a href="https://instagram.com/mediaphiles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:info@mediaphiles.in" className="hover:text-accent transition-colors">
                  info@mediaphiles.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs font-light">
          <p>MediaPhiles © {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Boutique Hospitality.</p>
        </div>
      </div>
    </footer>
  );
}
