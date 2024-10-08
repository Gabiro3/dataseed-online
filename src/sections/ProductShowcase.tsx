"use client"
import ProductImage from "@/assets/product-image.png";
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

  return<section  ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container" >
      <div className="section-heading" >
      <div className="flex justify-center">
      <div className="tag">Boost your productivity</div>
      </div>
      <h2 className="section-title mt-5">A more effective way to track progress</h2>
      <p className="section-desc mt-5">Effortlessly turn your ideas into a fully functional, responsive,
        Saas website in just minutes with this templete.
      </p>
      </div>
      <div className="relative">
      <Image 
      src={ProductImage} 
      alt="product image" 
      className="mt-10 " />
      <motion.img 
      src={PyramidImage.src} 
      alt="pyramid"  
      height={262} 
      width={262} 
      className="absolute -right-36 -top-32 hidden md:block"
      style={{
        translateY,
      }}/>
      <motion.img
      src={TubeImage.src}
      alt="tube"
      height={248}
      width={248}
      className="absolute -bottom-24 -left-36 hidden md:block"
      style={{
        translateY,
      }}
      /> 
    </div>
    </div>
  </section>

};
