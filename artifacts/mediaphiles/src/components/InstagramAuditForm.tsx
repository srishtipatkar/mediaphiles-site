import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { BUSINESS_TYPE_OPTIONS } from "@/lib/businessTypes";

// Google Form configuration
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHmNXLZJI7fgrb0jJ6WFxkKL_mu6JVs-miOoOq-6Evs-a3Hw/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.2092238618",
  email: "entry.1556369182",
  phone: "entry.479301265",
  property: "entry.1537371043",
  location: "entry.432850524",
  instagramUrl: "entry.1414441701",
  businessType: "entry.114236841",
} as const;
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


const businessTypeValues = BUSINESS_TYPE_OPTIONS.map((o) => o.value) as [string, ...string[]];

const formSchema = z.object({
  name: z.string().trim().min(1, "Enter your name"),
  businessName: z.string().trim().min(1, "Enter your business name"),
  businessType: z.enum(businessTypeValues, { message: "Select a business type" }),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(1, "Enter your phone number"),
  location: z.string().trim().min(1, "Enter your property location"),
  instagramUrl: z
    .string()
    .trim()
    .min(1, "Enter your Instagram profile")
    .refine(
      (v) => /^@[a-zA-Z0-9._]{1,30}$/.test(v) || /instagram\.com\//i.test(v),
      "Use a profile URL (instagram.com/yourhandle) or @yourhandle",
    ),
  consent: z.literal(true, { message: "Please accept to continue" }),
});

type FormValues = z.infer<typeof formSchema>;

const businessTypeLabel = (value: string) =>
  BUSINESS_TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value;

/** The live Google Form's "Instagram URL" question enforces URL-format validation server-side — a bare @handle is rejected with a 400. */
function toInstagramUrl(value: string): string {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://instagram.com/${trimmed.replace(/^@/, "")}`;
}

/** The live Google Form's "Contact Number" question enforces numeric-only validation server-side — "+", spaces, etc. are rejected with a 400. */
function toPlainDigits(value: string): string {
  return value.replace(/[^\d]/g, "");
}

function submitToGoogleForm(values: FormValues) {
  const params = new URLSearchParams();
  params.append(GOOGLE_FORM_FIELDS.name, values.name);
  params.append(GOOGLE_FORM_FIELDS.email, values.email);
  params.append(GOOGLE_FORM_FIELDS.phone, toPlainDigits(values.phone));
  params.append(GOOGLE_FORM_FIELDS.property, values.businessName);
  params.append(GOOGLE_FORM_FIELDS.location, values.location);
  params.append(GOOGLE_FORM_FIELDS.instagramUrl, toInstagramUrl(values.instagramUrl));
  params.append(GOOGLE_FORM_FIELDS.businessType, businessTypeLabel(values.businessType));

  return fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
}

export function InstagramAuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      location: "",
      instagramUrl: "",
      consent: undefined as unknown as true,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await submitToGoogleForm(values);
    } catch (error) {
      console.error("Submission error:", error);
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto w-full max-w-xl rounded-2xl border-2 border-[#3A3E61]/10 bg-card p-8 text-left shadow-[0_10px_0_0_rgba(58,62,97,0.06)] sm:p-10"
    >
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mb-4 text-5xl">✓</div>
              <h3 className="mb-3 text-2xl font-semibold text-[#3A3E61] sm:text-3xl">
                Thank you!
              </h3>
              <p className="mb-2 text-[#3A3E61]/70">
                Ready to discuss your strategy?
              </p>
              <p className="mb-6 text-[#3A3E61]/70">
                Book a call with our team below.
              </p>
              <a
                href="https://calendly.com/mediaphiles-marketing/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#3A3E61] shadow-[0_10px_28px_rgba(201,168,76,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(201,168,76,0.5)]"
              >
                Book Your Call Now
              </a>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                        Your name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Priya Sharma" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                          Business name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Whispering Pines Resort" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                          Business type
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {BUSINESS_TYPE_OPTIONS.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@yourproperty.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                        Property location
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Manali, Himachal Pradesh" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="instagramUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                        Instagram profile
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="@yourhandle" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start gap-3 space-y-0 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value === true}
                          onCheckedChange={field.onChange}
                          className="border-[#3A3E61]/40 data-[state=checked]:border-[#C9A84C] data-[state=checked]:bg-[#C9A84C] data-[state=checked]:text-[#3A3E61]"
                        />
                      </FormControl>
                      <div className="leading-snug">
                        <FormLabel className="text-xs font-normal text-muted-foreground">
                          I agree that Mediaphiles may look at my public Instagram profile and
                          contact me about the results. We never post or message on your behalf.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#3A3E61] shadow-[0_10px_28px_rgba(201,168,76,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(201,168,76,0.5)] disabled:pointer-events-none disabled:opacity-60"
                >
                  {submitting && <Loader2 size={14} className="animate-spin" />}
                  {submitting ? "Submitting..." : "Get My Free Audit"}
                </button>
              </form>
            </Form>
          )}
    </motion.div>
  );
}
