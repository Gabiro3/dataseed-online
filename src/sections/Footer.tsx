import Image from "next/image";
import logo from "@/assets/dataseed.png";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYt from "@/assets/social-youtube.svg";

export const Footer = () => {
  return <footer className="bg-[#1c4539] text-[#BCBCBC] text-sm py-10 text-center">
    <div className="container" >
      <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92Cf, #FFDD9B,#C2F0B1,#2FDBFE)] before:absolute">
      <Image src={logo} alt="Logo" height={40} className="relative" />
      </div>
      <nav className="flex flex-col gap-6 mt-10 md:flex-row md:justify-center">
        <a href="#" >About</a>
        <a href="#" >features</a>
        <a href="#" >Privacy Policy</a>
        <a href="#" >Agaseke Finance</a>
        <a href="#" >Help</a>
      </nav>
      <div className="flex justify-center gap-6 mt-5">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialX className="transition-transform transform hover:scale-110 hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialInsta className="transition-transform transform hover:scale-110 hover:text-pink-500" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <SocialLinkedIn className="transition-transform transform hover:scale-110 hover:text-blue-700" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <SocialPin className="transition-transform transform hover:scale-110 hover:text-red-500" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <SocialYt className="transition-transform transform hover:scale-110 hover:text-red-600" />
        </a>
      </div>

      <p  className="mt-5">
        &copy; 2025 Dataseed Africa. All rights reserved.</p>
    </div>
  </footer>;
};
