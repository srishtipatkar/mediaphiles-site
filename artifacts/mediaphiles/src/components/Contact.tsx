// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

// type FormState = "idle" | "submitting" | "success" | "error";

// // Google Form: Hotel Growth Discovery Form
// const GOOGLE_FORM_ACTION =
//   "https://docs.google.com/forms/d/e/1FAIpQLSdHmNXLZJI7fgrb0jJ6WFxkKL_mu6JVs-miOoOq-6Evs-a3Hw/formResponse";

// const GOOGLE_FORM_FIELDS = {
//   name: "entry.2092238618",
//   email: "entry.1556369182",
//   phone: "entry.479301265",
//   property: "entry.1537371043",
//   location: "entry.432850524",
//   message: "entry.1414441701",
// } as const;

// export function Contact() {
//   const [formState, setFormState] = useState<FormState>("idle");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormState("submitting");
//     setErrorMsg("");

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const params = new URLSearchParams();
//     params.append(GOOGLE_FORM_FIELDS.name,     (formData.get("name")     as string) ?? "");
//     params.append(GOOGLE_FORM_FIELDS.email,    (formData.get("email")    as string) ?? "");
//     params.append(GOOGLE_FORM_FIELDS.phone,    (formData.get("phone")    as string) ?? "");
//     params.append(GOOGLE_FORM_FIELDS.property, (formData.get("property") as string) ?? "");
//     params.append(GOOGLE_FORM_FIELDS.location, (formData.get("location") as string) ?? "");
//     params.append(GOOGLE_FORM_FIELDS.message,  (formData.get("message")  as string) ?? "");

//     try {
//       // Google Forms doesn't return CORS headers, so we submit with no-cors.
//       // The browser cannot read the response, but the submission DOES go through.
//       await fetch(GOOGLE_FORM_ACTION, {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: params.toString(),
//       });

//       setFormState("success");
//       form.reset();
//     } catch (err) {
//       setErrorMsg(
//         err instanceof Error ? err.message : "Something went wrong. Please try again."
//       );
//       setFormState("error");
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-white">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="text-xs tracking-[0.25em] uppercase text-[#C9A84C] mb-5 font-medium">Start the Conversation</p>
//             <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8 font-semibold">Get in Touch</h2>
//             <p className="text-foreground/70 font-light text-lg mb-12 max-w-md leading-relaxed">
//               Ready to elevate your property's digital presence? We'd love to hear from you.
//             </p>

//             <div className="space-y-8">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#C9A84C]">
//                   <Phone className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Phone</h4>
//                   <p className="text-foreground font-light">+91 93155 34690<br />+91 70383 16173</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#C9A84C]">
//                   <Mail className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Email</h4>
//                   <p className="text-foreground font-light">info@mediaphiles.in</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#C9A84C]">
//                   <MapPin className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Location</h4>
//                   <p className="text-foreground font-light">Delhi NCR, India</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#C9A84C]">
//                   <Globe className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Website</h4>
//                   <p className="text-foreground font-light">www.mediaphiles.in</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 border border-[#E8DFC8] flex items-center justify-center shrink-0 text-[#C9A84C]">
//                   <Instagram className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Instagram</h4>
//                   <a
//                     href="https://instagram.com/mediaphiles"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-foreground font-light hover:text-[#C9A84C] transition-colors"
//                   >
//                     @mediaphiles
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-[#F8F5F0] p-8 md:p-12 border border-[#E8DFC8]"
//           >
//             {formState === "success" ? (
//               <div className="h-full flex flex-col items-center justify-center text-center py-12">
//                 <div className="w-16 h-16 bg-[#C9A84C]/15 flex items-center justify-center mb-6 text-[#C9A84C]">
//                   <Mail className="w-7 h-7" />
//                 </div>
//                 <h3 className="font-serif text-2xl text-foreground mb-4">Thank You</h3>
//                 <p className="text-foreground/60 font-light leading-relaxed max-w-sm">
//                   Your inquiry has been received. We'll be in touch with you shortly.
//                 </p>
//                 <button
//                   onClick={() => setFormState("idle")}
//                   className="mt-8 text-[#C9A84C] text-xs tracking-[0.15em] uppercase hover:text-[#2F4F4F] transition-colors border-b border-current pb-0.5"
//                 >
//                   Send another inquiry
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label htmlFor="name" className="text-xs uppercase tracking-wide text-foreground/60">Full Name</label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       disabled={formState === "submitting"}
//                       className="w-full bg-transparent border-b border-[#E8DFC8] py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-foreground/30 disabled:opacity-50"
//                       placeholder="Jane Doe"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="email" className="text-xs uppercase tracking-wide text-foreground/60">Email Address</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       disabled={formState === "submitting"}
//                       className="w-full bg-transparent border-b border-[#E8DFC8] py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-foreground/30 disabled:opacity-50"
//                       placeholder="jane@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label htmlFor="phone" className="text-xs uppercase tracking-wide text-foreground/60">Phone Number</label>
//                     <input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       required
//                       disabled={formState === "submitting"}
//                       className="w-full bg-transparent border-b border-[#E8DFC8] py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-foreground/30 disabled:opacity-50"
//                       placeholder="+91 xxxxx xxxxx"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="property" className="text-xs uppercase tracking-wide text-foreground/60">Property Name</label>
//                     <input
//                       id="property"
//                       name="property"
//                       type="text"
//                       required
//                       disabled={formState === "submitting"}
//                       className="w-full bg-transparent border-b border-[#E8DFC8] py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-foreground/30 disabled:opacity-50"
//                       placeholder="The Grand Retreat"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="location" className="text-xs uppercase tracking-wide text-foreground/60">Property Location</label>
//                   <input
//                     id="location"
//                     name="location"
//                     type="text"
//                     required
//                     disabled={formState === "submitting"}
//                     className="w-full bg-transparent border-b border-[#E8DFC8] py-3 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-foreground/30 disabled:opacity-50"
//                     placeholder="City, State"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-xs uppercase tracking-wide text-foreground/60">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={4}
//                     disabled={formState === "submitting"}
//                     className="w-full bg-transparent border-b border-[#E8DFC8] py-3 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none placeholder:text-foreground/30 disabled:opacity-50"
//                     placeholder="Tell us about your property and goals..."
//                   />
//                 </div>

//                 {formState === "error" && (
//                   <p className="text-red-500 text-sm font-light">{errorMsg}</p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={formState === "submitting"}
//                   className="w-full py-4 bg-[#2F4F4F] text-white hover:bg-[#243d3d] transition-colors uppercase tracking-widest text-xs font-semibold mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
//                 </button>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

// Baserow survey form URL
const BASEROW_FORM_URL =
  "https://baserow.io/form/Rm2vRbI_XFvgCryVbpQR9y5K2lCIN4mbCffC73-kCPA";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#F8F5F0]">
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
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">
              Start the Conversation
            </p>
            <h2 className="font-serif text-[#1F1F1F] text-4xl md:text-5xl max-w-xl leading-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-[#1F1F1F]/60 text-base max-w-md leading-relaxed">
              Ready to elevate your property's digital presence? We'd love to hear from you.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-[#1F1F1F]/40 tracking-[0.15em] uppercase mb-2">
                    Phone
                  </p>
                  <p className="text-sm text-[#1F1F1F]">+91 93155 34690</p>
                  <p className="text-sm text-[#1F1F1F]">+91 70383 16173</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-[#1F1F1F]/40 tracking-[0.15em] uppercase mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@mediaphiles.in"
                    className="text-sm text-[#1F1F1F] hover:text-[#C9A84C] transition-colors"
                  >
                    info@mediaphiles.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-[#1F1F1F]/40 tracking-[0.15em] uppercase mb-2">
                    Location
                  </p>
                  <p className="text-sm text-[#1F1F1F]">Delhi NCR, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-[#1F1F1F]/40 tracking-[0.15em] uppercase mb-2">
                    Website
                  </p>
                  <a
                    href="https://www.mediaphiles.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1F1F1F] hover:text-[#C9A84C] transition-colors"
                  >
                    www.mediaphiles.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-[#1F1F1F]/40 tracking-[0.15em] uppercase mb-2">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/mediaphiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1F1F1F] hover:text-[#C9A84C] transition-colors"
                  >
                    @mediaphiles
                  </a>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="pt-4 border-t border-[#E8DFC8]">
                <p className="text-xs text-[#1F1F1F]/40 leading-relaxed">
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
            <div className="w-full rounded-sm overflow-hidden border border-[#E8DFC8] shadow-sm">
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

