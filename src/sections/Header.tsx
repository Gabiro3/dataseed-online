import Arrow from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className=" sticky top-0 backdrop-blur-sm z-20">
    <div className="flex justify-center items-center py-3 text-white bg-black">
      <div className="items-center inline-flex gap-1">
      <p>Get started for free</p>
      <Arrow className="h-4 w-4 inline-flex items-center justify-center " />
    </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
        <Image src={Logo} alt="saas logo" height={40} width={40}/>
        <MenuIcon className=" h-5 w-5 md:hidden cursor-pointer"/>
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Testimonials</a>
          <a href="#">Help</a>
          <button className="bg-black text-white rounded-lg align-items inline-flex justify-center px-4 py-2 font-medium tracking-tight">Get for free</button>
        </nav>
        </div>
      </div>
    </div>
    </header>

  );
};
