import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Facilities from "@/components/sections/Facilities";
import Services from "@/components/sections/Services";
import Memberships from "@/components/sections/Memberships";
import Trainers from "@/components/sections/Trainers";
import Hours from "@/components/sections/Hours";
import Classes from "@/components/sections/Classes";
import Testimonials from "@/components/sections/Testimonials";
import Transformations from "@/components/sections/Transformations";
import Location from "@/components/sections/Location";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <Services />
      <Memberships />
      <Trainers />
      <Hours />
      <Classes />
      <Testimonials />
      <Transformations />
      <Location />
      <FAQ />
      <ContactForm />
      <CTAFinal />
    </>
  );
}
