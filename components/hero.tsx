"use client";

import { motion, useAnimate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "./badge";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { HoverButton } from "./ui/hover-button";
import Image from "next/image";

export default function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "h1",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, ease: "easeOut" },
      ],
      [
        "p",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0 },
      ],
      [
        "button",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.5, ease: "easeOut", delay: 0 },
      ],
      [
        "img",
        { opacity: [0, 1], scale: [0.95, 1] },
        { duration: 0.5, ease: "easeOut", delay: 0 },
      ],
    ]);
  }, [animate]);

  return (
    <MaxWidthWrapper className="py-8 sm:py-12 md:py-16 lg:py-20 border bg-gray-50 max-w-screen-xl rounded-[30px] sm:rounded-[40px] md:rounded-[50px] grainy">
      <section ref={scope} className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center md:max-w-3xl mx-auto">
          <Badge className="text-xs bg-white shadow-sm text-secondary-foreground mb-4">
            ✨ AI-Powered Procurement
          </Badge>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Transform Your{" "}
            <span className="relative">
              Procurement
              <Image
                src="/doodle.webp"
                width={26}
                height={26}
                alt="doodle"
                className="absolute -right-8 -top-2 select-none hidden lg:block"
                draggable="false"
              />
            </span>{" "}
            Process with AI
          </motion.h1>
          <motion.p className="text-sm sm:text-base md:text-lg text-zinc-800 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover the power of AI-driven procurement to find the right
            suppliers, predict demand, and optimize your supply chain.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <HoverButton>Join the Waitlist</HoverButton>
            <button className="w-full sm:w-auto text-sm flex items-center justify-center gap-2 border-2 px-4 py-2 border-border rounded-xl shadow-sm bg-white">
              Request a demo <ArrowRight className="size-4" />
            </button>
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-12 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/5 lg:rounded-2xl lg:p-4 w-full sm:w-fit mx-auto">
          <motion.img
            src="/dashboard.webp"
            alt="AI-driven procurement illustration"
            width={800}
            height={400}
            className="select-none rounded-md bg-white p-2 sm:p-4 md:p-8 lg:p-12 shadow-2xl ring-1 ring-gray-900/10 w-full"
            draggable="false"
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
