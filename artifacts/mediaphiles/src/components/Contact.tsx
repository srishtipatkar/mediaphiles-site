import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      property: formData.get("property"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    const subject = `Discovery Call Inquiry: ${data.property}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Property: ${data.property}
Location: ${data.location}

Message:
${data.message}
    `.trim();

    window.location.href = `mailto:info@mediaphiles.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">Get in Touch</h2>
            <p className="text-foreground/70 font-light text-lg mb-12 max-w-md leading-relaxed">
              Ready to elevate your property's digital presence? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Phone</h4>
                  <p className="text-foreground">+91 93155 34690<br/>+91 70383 16173</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Email</h4>
                  <p className="text-foreground">info@mediaphiles.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Location</h4>
                  <p className="text-foreground">Delhi NCR, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 text-accent">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Website</h4>
                  <p className="text-foreground">www.mediaphiles.in</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0 text-accent">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-1">Instagram</h4>
                  <a href="https://instagram.com/mediaphiles" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">@mediaphiles</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background p-8 md:p-12 border border-border"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Thank You</h3>
                <p className="text-foreground/70 font-light">
                  Your email client has been opened to send your inquiry. We look forward to connecting with you soon.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-accent underline text-sm tracking-wide hover:text-primary transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wide text-foreground/70">Full Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wide text-foreground/70">Email Address</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-wide text-foreground/70">Phone Number</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      required
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="property" className="text-xs uppercase tracking-wide text-foreground/70">Property Name</label>
                    <input 
                      id="property"
                      name="property"
                      type="text" 
                      required
                      className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                      placeholder="The Grand Retreat"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-xs uppercase tracking-wide text-foreground/70">Property Location</label>
                  <input 
                    id="location"
                    name="location"
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30"
                    placeholder="City, State"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wide text-foreground/70">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-foreground/30"
                    placeholder="Tell us about your property and goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-white hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium mt-4"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
