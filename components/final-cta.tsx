"use client";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { Badge } from "./badge";
import { ArrowRight } from "lucide-react";
import { HoverButton } from "./ui/hover-button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-background text-foreground px-4">
      <MaxWidthWrapper className="max-w-screen-xl">
        <div className="text-center">
          <Badge className="text-xs bg-white shadow-sm text-secondary-foreground mb-4">
            Transform Your Procurement
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-xl mx-auto">
            Ready to Revolutionize Your Supply Chain?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto mb-8">
            Join the waitlist today and be among the first to experience the
            future of AI-powered procurement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <HoverButton>Join the Waitlist</HoverButton>
            <button className="text-sm flex items-center gap-2 border border-zinc-200 px-6 py-2 rounded-xl shadow-sm bg-white hover:bg-zinc-50 transition-colors justify-center w-full sm:w-auto">
              Request a Demo
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
