"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Badge } from "./badge";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HoverButton } from "./ui/hover-button";

const features = [
  {
    title: "AI-Powered Dashboard",
    description:
      "Get real-time insights and analytics for smarter decision-making.",
    image: "/dashboard.webp",
  },
  {
    title: "Supplier Management",
    description: "Efficiently manage and evaluate your supplier network.",
    image: "/dashboard.webp",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast demand and optimize inventory with machine learning.",
    image: "/dashboard.webp",
  },
];

export default function ProductGlimpse() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20 bg-gray-50 grainy border"
      id="product"
    >
      <MaxWidthWrapper className="max-w-screen-xl p-0 px-4">
        <Badge className="text-xs bg-white shadow-sm text-secondary-foreground mb-4">
          Product Preview
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left text-zinc-800 mb-2">
          See What You Can Achieve
        </h2>
        <p className="text-sm md:text-base text-center md:text-left text-zinc-800 mb-12">
          Powered by AI architecture, our software is designed to help you
          minimize turnaround time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-sm cursor-pointer transition-all duration-300 border-2 border-border ${
                  activeFeature === index
                    ? "bg-white border-[#019964]"
                    : "bg-zinc-100 hover:bg-zinc-100"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="relative h-[400px] md:h-auto bg-white shadow-2xl rounded-sm border border-border p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm select-none max-h-full"
                  draggable="false"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <HoverButton>Join the Waitlist</HoverButton>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
