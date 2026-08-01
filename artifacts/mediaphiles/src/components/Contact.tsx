import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHmNXLZJI7fgrb0jJ6WFxkKL_mu6JVs-miOoOq-6Evs-a3Hw/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.2092238618",
  email: "entry.1556369182",
  phone: "entry.479301265",
  property: "entry.1537371043",
  location: "entry.432850524",
  instagramUrl: "entry.1414441701",
} as const;

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();

    params.append(GOOGLE_FORM_FIELDS.name, String(formData.get("name") ?? ""));
    params.append(GOOGLE_FORM_FIELDS.email, String(formData.get("email") ?? ""));
    params.append(GOOGLE_FORM_FIELDS.phone, String(formData.get("phone") ?? ""));
    params.append(GOOGLE_FORM_FIELDS.property, String(formData.get("property") ?? ""));
    params.append(GOOGLE_FORM_FIELDS.location, String(formData.get("location") ?? ""));
    params.append(GOOGLE_FORM_FIELDS.instagramUrl, String(formData.get("instagramUrl") ?? ""));

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setFormState("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="bg-[#F8F6F2] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D96C2F]">
              Start the Conversation
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-[#111111] md:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#111111]/60">
              Ready to elevate your property's digital presence? We'd love to hear from you.
            </p>

            <div className="mt-10 space-y-8">
              <ContactItem icon={<Phone size={16} />} label="Phone">
                <a href="tel:+919315534690" className="block hover:text-[#D96C2F]">
                  +91 93155 34690
                </a>
                <a href="tel:+917038316173" className="block hover:text-[#D96C2F]">
                  +91 70383 16173
                </a>
              </ContactItem>

              <ContactItem icon={<Mail size={16} />} label="Email">
                <a href="mailto:info@mediaphiles.in" className="hover:text-[#D96C2F]">
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
                  className="hover:text-[#D96C2F]"
                >
                  www.mediaphiles.in
                </a>
              </ContactItem>

              <ContactItem icon={<Instagram size={16} />} label="Instagram">
                <a
                  href="https://instagram.com/mediaphiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D96C2F]"
                >
                  @mediaphiles
                </a>
              </ContactItem>

              <div className="border-t border-[#D6C3A5] pt-4">
                <p className="text-xs leading-relaxed text-[#111111]/45">
                  Fill out the form to tell us about your property. We'll reach out within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="border border-[#D6C3A5] bg-white p-8 shadow-[0_18px_60px_rgba(17,17,17,0.08)] md:p-12">
              {formState === "success" ? (
                <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#D96C2F]/12 text-[#D96C2F]">
                    <Mail className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-[#111111]">Thank You</h3>
                  <p className="max-w-sm font-light leading-relaxed text-[#111111]/60">
                    Your inquiry has been received. We'll be in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="mt-8 border-b border-current pb-0.5 text-xs uppercase tracking-[0.15em] text-[#D96C2F] transition-colors hover:text-[#234336]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Full Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={formState === "submitting"}
                        className="contact-input"
                        placeholder="Jane Doe"
                      />
                    </FormField>

                    <FormField label="Email Address" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={formState === "submitting"}
                        className="contact-input"
                        placeholder="jane@example.com"
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField label="Phone Number" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        disabled={formState === "submitting"}
                        className="contact-input"
                        placeholder="+91 xxxxx xxxxx"
                      />
                    </FormField>

                    <FormField label="Property Name" htmlFor="property">
                      <input
                        id="property"
                        name="property"
                        type="text"
                        required
                        disabled={formState === "submitting"}
                        className="contact-input"
                        placeholder="The Grand Retreat"
                      />
                    </FormField>
                  </div>

                  <FormField label="Property Location" htmlFor="location">
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      disabled={formState === "submitting"}
                      className="contact-input"
                      placeholder="City, State"
                    />
                  </FormField>

                  <FormField label="Instagram URL" htmlFor="instagramUrl">
                    <input
                      id="instagramUrl"
                      name="instagramUrl"
                      type="url"
                      required
                      disabled={formState === "submitting"}
                      className="contact-input"
                      placeholder="https://instagram.com/yourproperty"
                    />
                  </FormField>

                  {formState === "error" && (
                    <p className="text-sm font-light text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="mt-4 w-full bg-[#111111] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAFAFA] transition-colors hover:bg-[#D96C2F] hover:text-[#111111] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
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
      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center text-[#D96C2F]">
        {icon}
      </div>
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#111111]/40">{label}</p>
        <div className="text-sm text-[#111111] transition-colors">{children}</div>
      </div>
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-xs uppercase tracking-wide text-[#111111]/55">
        {label}
      </label>
      {children}
    </div>
  );
}
