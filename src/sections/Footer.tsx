import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYt from "@/assets/social-youtube.svg";

export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
    <div className="container" >
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92Cf, #FFDD9B,#C2F0B1,#2FDBFE)] before:absolute">
      <Image src={logo} alt="Logo" height={40} className="relative" />
      </div>
      <nav className="flex flex-col gap-6 mt-10 md:flex-row md:justify-center">
        <a href="#" >About</a>
        <a href="#" >features</a>
        <a href="#" >Customers</a>
        <a href="#" >Prices</a>
        <a href="#" >Help</a>
      </nav>
      <div className="flex justify-center gap-6 mt-5">
        <SocialX/>
        <SocialInsta/>
        <SocialLinkedIn/>
        <SocialPin/>
        <SocialYt/>
      </div>
      <p  className="mt-5">
        &copy; 2024 Your Company, Inc. All rights reserved.</p>
    </div>
  </footer>;
};
