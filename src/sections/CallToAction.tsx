import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return(
    <section className="py-24 bg-gradient-to-b from-white to-[#d6ffd9] overflow-x-clip">
      <div className="container">
        <div className="sectionn-heading relative">
        <h2 className="section-title">Join our community</h2>
        <p className="section-desc mt-5">Join our community of farmers, financial institutions and other stakeholders to improve the livelihoods of farmers and ensure food security.
        </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-text gap-1"><span>Learn more</span>
          <ArrowRight  className="h-5 w-5 "/>
          </button>
        </div>
      </div>
    </section>
  );
};
