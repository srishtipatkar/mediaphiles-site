import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { WhyMediaPhiles } from "@/components/WhyMediaPhiles";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <CaseStudies />
      <Process />
      <WhyMediaPhiles />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}