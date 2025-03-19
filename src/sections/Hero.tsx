'use client'
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/bg_farmer.jpg";
import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const Hero = () => {

  const heroRef= useRef(null);
  const { scrollYProgress } = useScroll({
    target : heroRef,
    offset  :["start end" , "end start"],
  });
  const translateY= useTransform(scrollYProgress,[0,1],[150,-150]);

  return <section  ref={heroRef} className="pt-8 pb-10 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#d2ffd5,#FFFFFF_100%)]">
    <div className="container">
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
        <div className="tag">Dataseed Africa</div>
        <h1 className="text-6xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-black to-[#1c4539] bg-clip-text text-transparent mt-4">Enabling Farmers Access to finance</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">We provide farmers with access to finance, data and market linkages to improve their livelihoods and ensure food security.
        </p>
        <div className="flex gap-1 mt-[30px] items-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn-text btn gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-5"/>
            </button>
        </div>
      </div>
        <div className="mt-30 md:mt-0 md:h-[600px] md:flex-1 relative ml-5">
          <motion.img
            src={cogImage.src}
            alt="cog image"
            className="md:absolute md:h-3/4 md:w-auto md:max-w-none md:-left-8 lg:left-0 rounded-2xl"
            animate={{
              translateY: [-10, 10],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />

      </div>
      </div>
    </div>
  </section>;
};
