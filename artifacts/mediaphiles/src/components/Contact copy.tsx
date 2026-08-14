import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

// Baserow survey form URL
const BASEROW_FORM_URL =
  "https://baserow.io/form/Rm2vRbI_XFvgCryVbpQR9y5K2lCIN4mbCffC73-kCPA";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Header + contact details — left column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C9A227] text-xs tracking-[0.3em] uppercase mb-4">
              Start the Conversation
            </p>
            <h2 className="font-serif text-[#123524] text-4xl md:text-5xl max-w-xl leading-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-[#123524]/60 text-base max-w-md leading-relaxed">
              Ready to elevate your property's digital presence? We'd love to hear from you.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-[#123524]/40 tracking-[0.15em] uppercase mb-2">
                    Phone
                  </p>
                  <p className="text-sm text-[#123524]">+91 93155 34690</p>
                  <p className="text-sm text-[#123524]">+91 70383 16173</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-[#123524]/40 tracking-[0.15em] uppercase mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@mediaphiles.in"
                    className="text-sm text-[#123524] hover:text-[#C9A227] transition-colors"
                  >
                    info@mediaphiles.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-[#123524]/40 tracking-[0.15em] uppercase mb-2">
                    Location
                  </p>
                  <p className="text-sm text-[#123524]">Delhi NCR, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-[#123524]/40 tracking-[0.15em] uppercase mb-2">
                    Website
                  </p>
                  <a
                    href="https://www.mediaphiles.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#123524] hover:text-[#C9A227] transition-colors"
                  >
                    www.mediaphiles.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-[#123524]/40 tracking-[0.15em] uppercase mb-2">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/mediaphiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#123524] hover:text-[#C9A227] transition-colors"
                  >
                    @mediaphiles
                  </a>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="pt-4 border-t border-[#C9A227]">
                <p className="text-xs text-[#123524]/40 leading-relaxed">
                  Fill out the survey to tell us about your property. We'll reach out within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Baserow form — right column, starts at same y as the header label */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="w-full rounded-sm overflow-hidden border border-[#C9A227] shadow-sm">
              <iframe
                src={BASEROW_FORM_URL}
                title="MediaPhiles Property Survey"
                className="w-full"
                style={{ height: "500px", border: "none" }}
                allow="clipboard-write"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

