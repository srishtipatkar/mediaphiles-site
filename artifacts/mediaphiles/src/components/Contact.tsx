import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-[#F7F4EE] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9A84C]">
            Start the Conversation
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#3A3E61] md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#3A3E61]/60">
            Ready to elevate your property's digital presence? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-8 text-left sm:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <ContactItem icon={<Phone size={16} />} label="Phone">
            <a href="tel:+919315534690" className="block hover:text-[#C9A84C]">
              +91 93155 34690
            </a>
            <a href="tel:+917038316173" className="block hover:text-[#C9A84C]">
              +91 70383 16173
            </a>
          </ContactItem>

          <ContactItem icon={<Mail size={16} />} label="Email">
            <a href="mailto:info@mediaphiles.in" className="hover:text-[#C9A84C]">
              info@mediaphiles.in
            </a>
          </ContactItem>

          <ContactItem icon={<MapPin size={16} />} label="Location">
            Delhi NCR, India
          </ContactItem>

          <ContactItem icon={<Globe size={16} />} label="Website">
            <a
              href="https://www.mediaphiles.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A84C]"
            >
              www.mediaphiles.in
            </a>
          </ContactItem>

          <ContactItem icon={<Instagram size={16} />} label="Instagram">
            <a
              href="https://instagram.com/mediaphiles"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A84C]"
            >
              @mediaphiles
            </a>
          </ContactItem>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center text-[#C9A84C]">
        {icon}
      </div>
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#3A3E61]/40">{label}</p>
        <div className="text-sm text-[#3A3E61] transition-colors">{children}</div>
      </div>
    </div>
  );
}
