import Image from "next/image";
import Hero from "./components/Hero";
import TailoredExpertise from "./components/TailoredExpertise";
import PartnershipSection from "./components/PartnershipSection";
import ServicesGlance from "./components/ServicesGlance";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TailoredExpertise />
      <PartnershipSection></PartnershipSection>
      <ServicesGlance></ServicesGlance>
      <Testimonials></Testimonials>
      <ContactCTA></ContactCTA>
    </>
  );
}
