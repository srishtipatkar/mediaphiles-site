import { Instagram } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#3A3E61] text-[#F7F4EE] pt-20 pb-10 border-t border-[#C9A84C]/20">
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
            <p className="text-[#F7F4EE]/60 font-light text-sm max-w-xs">
              Hospitality Marketing Studio
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Navigation</h4>
            <ul className="space-y-3 text-[#F7F4EE]/70 font-light text-sm">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="hover:text-[#C9A84C] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }} className="hover:text-[#C9A84C] transition-colors">Services</a>
              </li>
              <li>
                <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollTo("case-studies"); }} className="hover:text-[#C9A84C] transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("process"); }} className="hover:text-[#C9A84C] transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="hover:text-[#C9A84C] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Connect</h4>
            <ul className="space-y-3 text-[#F7F4EE]/70 font-light text-sm">
              <li>
                <a href="https://instagram.com/mediaphiles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:info@mediaphiles.in" className="hover:text-[#C9A84C] transition-colors">
                  info@mediaphiles.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A84C]/20 pt-8 flex flex-col md:flex-row items-center justify-between text-[#F7F4EE]/45 text-xs font-light">
          <p>MediaPhiles © {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Boutique Hospitality.</p>
        </div>
      </div>
    </footer>
  );
}
