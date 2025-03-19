"use client"; 
import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/dataseed.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm bg-white z-20">
      <div className="flex justify-center items-center py-3 bg-[#1c4539] text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">We have updated our Terms and Conditions</p>
        <div className="inline-flex gap-1 items-center">
          <p>Read more</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo clickable to redirect to homepage */}
            <a href="/">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </a>

            {/* Mobile Menu Toggle Icon */}
            <MenuIcon 
              className="h-5 w-5 md:hidden cursor-pointer" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-[#9aea89] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-5 md:hidden flex flex-col gap-4">
              {/* Close Button (X) */}
              <button 
                className="absolute top-4 right-4 text-black font-bold text-xl"
                onClick={() => setIsMenuOpen(false)} // Close the menu when clicked
              >
                X
              </button>

              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-[#9aea89] text-white px-4 py-2 rounded-lg font-medium tracking-tight">Get for free</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
