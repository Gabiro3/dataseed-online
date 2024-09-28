import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodles from "@/assets/noodle.png"
import Image from "next/image";
export const Hero = () => {
  return <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
    <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
        <div className="text-sm border border-[#222]/10 px-3 py-1 tracking-tight rounded-lg inline-flex">Version 2.0 is here</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-4">Pathway to productivity</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">Celebrate the joy of accomplishment with an app designed to track your progress,
          motivate your efforts, and celebrate your success.
        </p>
        <div className="flex gap-1 mt-[30px] items-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn-text btn gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5"/>
            </button>
        </div>
      </div>
      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <Image src={cogImage} alt="cog image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"/>
        <Image src={cylinder} 
        alt="cylinder image" 
        height={220}
        width={220}
        className="hidden md:block -top-8  -left-32 md:absolute"
        />
        <Image 
        src={noodles} 
        width={220}
        alt="noodles" 
        className=" hidden lg:block absolute top-[534px] left-[448px] rotate-[30deg]"/>
      </div>
      </div>
    </div>
  </section>;
};
