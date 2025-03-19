import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import HowItWorksSection from "@/sections/howItWorks";
import { LogoTicker } from "@/sections/LogoTicker";
import MobileAppSection from "@/sections/mobileApp";
import ImpactSection from "@/sections/ourImpact";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return <>
  <Header/>
  <Hero/>
  <LogoTicker/>
  <ProductShowcase/>
  <MobileAppSection/>
  <HowItWorksSection/>
  <ImpactSection/>
  <Testimonials/>
  <CallToAction/>
  <Footer/>
  </>;
}
