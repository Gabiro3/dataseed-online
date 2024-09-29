import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {

  return <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container" >
      <div className=" max-w-[540px] mx-auto" >
      <div className="flex justify-center">
      <div className="tag">Boost your productivity</div>
      </div>
      <h2 className="section-title mt-5">A more effective way to track progress</h2>
      <p className="section-desc mt-5">Effortlessly turn your ideas into a fully functional, responsive,
        Saas website in just minutes with this templete.
      </p>
      </div>
      <div className="relative">
      <Image src={ProductImage} 
      alt="product image" 
      className="mt-10 " />
      <Image src={PyramidImage} 
      alt="pyramid"  
      height={262} 
      width={262} 
      className="absolute -right-36 -top-32 hidden md:block"/>
      <Image src={TubeImage}
      alt="tube"
      height={248}
      className="absolute -bottom-24 -left-36 hidden md:block"
      /> 
    </div>
    </div>
  </section>

};
