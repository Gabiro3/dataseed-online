"use client"
import ProductImage from "@/assets/bg_one.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef= useRef(null);
  const { scrollYProgress } =useScroll({
    target:sectionRef,
    offset:["start end", "end start"]
  });
  
  const translateY =useTransform(scrollYProgress,[0,1],[150,-150]);

  return<section  ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#9ceb8a] py-24 overflow-x-clip">
    <div className="container" >
      <div className="section-heading" >
      <div className="flex justify-center">
      <div className="tag">Dataseed Credit Terminal</div>
      </div>
      <h2 className="section-title mt-5 bg-gradient-to-b from-black to-[#1c4539]">A more effective way to track farmer loans</h2>
      <p className="section-desc mt-5">With our Credit Terminal, farmer cooperatives can apply, track and manage their loans easily.
      </p>
      </div>
      <div className="relative">
      <Image 
      src={ProductImage} 
      alt="product image" 
      className="mt-10 rounded-lg"
      /> 
    </div>
    </div>
  </section>

};
