"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import cogImage from "@/assets/home_screen.png"
import { motion } from "framer-motion"

export default function MobileAppSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
          <div className="tag">Agaseke Finance</div>
                      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-b from-black to-[#1c4539] bg-clip-text text-transparent">
                          A Digital Bank for Farmers
                      </h2>

            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Agaseke Finance is a digital bank that provides farmers with access to financial services such
                as loans, savings, and insurance. Our platform is designed to help farmers grow their businesses
                and improve their livelihoods.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/mobile">
                <button
                  className="bg-[#9aea89] hover:bg-[#1c4539] text-white btn btn-primary"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Explore Features
                </button>
              </Link>
            </div>
          </div>
          <div className="relative lg:ml-10">
            <div className="relative mx-auto max-w-[320px]">
              <motion.div initial={{ y: 0 }} animate={{ y: isHovered ? -10 : 0 }} transition={{ duration: 0.3 }}>
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-20 h-20 text-pink-500 opacity-20">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 text-orange-400 opacity-20">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-12">
                    <svg width="100%" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 0C10 50 90 50 90 100C90 150 10 150 10 200"
                        stroke="#FF84B7"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl p-4 pt-8 pb-2">
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-8 border-white">
                      <div className="relative w-full aspect-[9/19]">
                        <Image
                          src={cogImage}
                          alt="Mobile app interface"
                          width={375}
                          height={800}
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
