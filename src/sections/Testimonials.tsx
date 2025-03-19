"use client"
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import  { motion } from "framer-motion";

const testimonials = [
  {
    text: "Dataseed has revolutionized the way we farm. With data-driven insights, I can now make informed decisions on what crops to plant and when to harvest, leading to better yields and profitability.",
    name: "John Kamanzi",
    username: "@johnkamanzi_farmer",
  },
  {
    text: "Agaseke Finance has given us the access to credit we never had before. Their data-backed approach helps us get fair loans, allowing us to invest in better equipment and expand our farm.",
    name: "Amina Uwase",
    username: "@amina_uwase_farmer",
  },
  {
    text: "As a financial institution, we’ve seen significant improvements in loan approval accuracy and customer satisfaction thanks to Dataseed's data analytics. It allows us to make smarter, risk-adjusted lending decisions.",
    name: "Eric Niyonzima",
    username: "@eric_financial",
  },
  {
    text: "Thanks to Agaseke Finance, I was able to secure a loan to buy better irrigation systems. It’s a game-changer, and I’m already seeing the positive effects on my farm's productivity.",
    name: "Sophie Mutoni",
    username: "@sophie_mutoni_farmer",
  },
  {
    text: "Working with Dataseed has allowed us to better understand farming trends and predict market prices. This data-driven approach has helped our business become more competitive and sustainable.",
    name: "Jean-Pierre Nkurunziza",
    username: "@jeanp_financeexpert",
  },
  {
    text: "Agaseke Finance has transformed how I access financing. Before, it was difficult to get a loan due to the lack of proper data, but now with their system, I can easily apply and get approved.",
    name: "Moses Niyigena",
    username: "@moses_niyigena_farmer",
  },
  {
    text: "We are now able to give loans based on actual data, reducing our risk and ensuring fairer lending. Dataseed’s technology has helped us better understand our clients and their needs.",
    name: "Beatrice Ndayisenga",
    username: "@beatrice_finance",
  },
  {
    text: "With the insights from Dataseed, I’ve been able to optimize my farm’s operations and secure long-term financial stability. It’s like having a smart assistant guiding every decision I make.",
    name: "David Karangwa",
    username: "@david_karangwa_farmer",
  },
  {
    text: "The data-driven solutions provided by Agaseke Finance have enabled us to lend with greater confidence. The transparency and accuracy of the data have led to a stronger relationship with our clients.",
    name: "Francine Mugisha",
    username: "@francine_m_finance",
  },
];


const firstColumn=testimonials.slice(0,3);
const secondColumn=testimonials.slice(3,6);
const thirdColumn=testimonials.slice(6,9);

const TestimonialsColumn =(props:{ 
  className?: string; 
  testimonials :typeof testimonials;
  duration? : number;
 }) => (
  <div className={props.className}>
  <motion.div
  animate={{
    translateY:"-50%",
  }}
  transition={{
    duration:props.duration || 10,
    repeat:Infinity,
    ease:"linear",
    repeatType:"loop",
  }}
  className="flex flex-col gap-6 ">
    {[...new Array(2).fill(0).map((_,index)=>(
      <React.Fragment key="index">
        {props.testimonials.map(({text,name,username})=>(
            <div key={text} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <div className="flex flex-col">
                  <div className="tracking-tight font-medium leading-5">{name}</div>
                  <div className="tracking-tight leading-5">{username}</div>
                </div>
                </div>
            </div>
          
          ))}
      </React.Fragment>
    ))]}
        </motion.div>
        </div>
)

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
        <div className="tag">Testimonials</div>
        </div>
        <h2 className="section-title mt-5 bg-gradient-to-b from-black to-[#1c4539]">What our clients say</h2>
        <p className="section-desc mt-5">From enabling banks to reduce lending risk to helping farmers access finance, our solutions have made a difference in the lives of many.
        </p>
        </div>
        <div className="flex justify-center gap-6  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn}  className="hidden md:block" duration={19}/>
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17}/>
        
        </div>
      </div>
    </section>
  );
};
