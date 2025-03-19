"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

type NodeInfo = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
}

export default function HowItWorksSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const nodes: NodeInfo[] = [
    {
      id: "farmers",
      title: "Farmers",
      description:
        "Small and medium-scale farmers who need access to financial services and data-driven insights to improve productivity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      position: { top: "15%", left: "15%" },
    },
    {
      id: "data-collection",
      title: "Data Collection",
      description:
        "We collect and analyze agricultural data including farm size, crop types, yields, and farming practices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      position: { top: "15%", right: "15%" },
    },
    {
      id: "financial-institutions",
      title: "Financial Institutions",
      description:
        "Banks, microfinance institutions, and insurance providers that offer financial services to farmers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      position: { bottom: "15%", right: "15%" },
    },
    {
      id: "agaseke-finance",
      title: "Agaseke Finance",
      description:
        "Our digital bank that connects farmers to various financial services including loans, savings, and insurance products.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      position: { bottom: "15%", left: "15%" },
    },
    {
      id: "market-access",
      title: "Market Access",
      description:
        "We connect farmers to markets, enabling them to sell their produce at fair prices and access a wider customer base.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      position: { top: "50%", left: "5%" },
    },
    {
      id: "analytics",
      title: "Data Analytics",
      description:
        "We provide actionable insights based on collected data to help farmers make informed decisions and improve productivity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      position: { top: "50%", right: "5%" },
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">How It Works</h2>
          <p className="mt-4 max-w-[700px] text-gray-600 md:text-xl">
            Dataseed Africa bridges the gap between farmers and financial institutions, providing both data insights and
            financial services through our platform.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-square">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-2 border-green-200 opacity-50"></div>

          {/* Middle circle */}
          <div className="absolute inset-[15%] rounded-full border-2 border-green-300 opacity-50"></div>

          {/* Inner circle with gradient border */}
          <div className="absolute inset-[30%] rounded-full bg-white p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-teal-300 to-green-500 opacity-30"></div>
              <div className="absolute inset-[3px] rounded-full bg-white"></div>
              <div className="relative z-10 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                    />
                    <path
                      d="M15 9.354a4 4 0 11-6 0M12 12v5"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="0.5" stopColor="#14b8a6" />
                        <stop offset="1" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-800">Dataseed Africa</h3>
                <p className="text-sm text-gray-600">Data & Financial Layer</p>
              </div>
            </div>
          </div>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute"
              style={{
                top: node.position.top,
                bottom: node.position.bottom,
                left: node.position.left,
                right: node.position.right,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                className={`relative group cursor-pointer`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-300 to-green-500 opacity-20"></div>
                  <div className="relative z-10 text-green-700">{node.icon}</div>
                </div>

                {/* Info tooltip */}
                <div
                  className={`absolute z-20 w-64 p-4 rounded-lg bg-white shadow-xl border border-green-100 transition-all duration-200 ${
                    activeNode === node.id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                  }`}
                  style={{
                    top: node.position.bottom ? "auto" : "calc(100% + 12px)",
                    bottom: node.position.bottom ? "calc(100% + 12px)" : "auto",
                    left: node.position.right ? "auto" : "50%",
                    right: node.position.right ? "50%" : "auto",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className="absolute w-3 h-3 bg-white border-t border-l border-green-100 transform rotate-45"
                    style={{
                      top: node.position.bottom ? "auto" : "-6px",
                      bottom: node.position.bottom ? "-6px" : "auto",
                      left: "50%",
                      marginLeft: "-6px",
                      borderRight: node.position.bottom ? "1px solid #dcfce7" : "none",
                      borderBottom: node.position.bottom ? "1px solid #dcfce7" : "none",
                      borderLeft: !node.position.bottom ? "1px solid #dcfce7" : "none",
                      borderTop: !node.position.bottom ? "1px solid #dcfce7" : "none",
                    }}
                  ></div>
                  <h4 className="font-semibold text-green-800 mb-1">{node.title}</h4>
                  <p className="text-sm text-gray-600">{node.description}</p>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <g stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1.5" fill="none">
              {/* Connect center to all nodes */}
              {nodes.map((node) => {
                // Calculate approximate coordinates based on position
                const centerX = 50
                const centerY = 50
                let nodeX = 50
                let nodeY = 50

                if (node.position.top) nodeY = (Number.parseInt(node.position.top) / 100) * 100
                if (node.position.bottom) nodeY = 100 - (Number.parseInt(node.position.bottom) / 100) * 100
                if (node.position.left) nodeX = (Number.parseInt(node.position.left) / 100) * 100
                if (node.position.right) nodeX = 100 - (Number.parseInt(node.position.right) / 100) * 100

                return (
                  <line
                    key={node.id}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${nodeX}%`}
                    y2={`${nodeY}%`}
                    className={`transition-all duration-300 ${activeNode === node.id ? "stroke-green-500 stroke-[2.5]" : ""}`}
                  />
                )
              })}
            </g>
          </svg>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hover over each icon to learn more about how Dataseed Africa connects farmers with financial services and
            provides valuable data insights.
          </p>
        </div>
      </div>
    </section>
  )
}
