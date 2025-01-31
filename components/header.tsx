"use client";

import { poppins } from "@/app/fonts";
import { ArrowRight, Box, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#product", label: "Solutions" },
    { href: "#resources", label: "Resources" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background"
      }`}
    >
      <MaxWidthWrapper className="max-w-screen-xl px-6 py-2">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-foreground font-semibold text-lg flex items-center gap-2">
            <Box className="size-5 fill-green-200" /> SourceSmart
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className={`flex lg:gap-8 tracking-wide ${poppins.className}`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm hover:underline underline-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div
            className={`${poppins.className} hidden lg:flex items-center gap-8`}
          >
            <Link
              href="#"
              className="text-sm hover:underline underline-offset-2"
            >
              Sign in
            </Link>
            <button className="text-sm flex items-center gap-1 border-2 px-3 py-2 border-border rounded-xl shadow-sm transition-shadow ease-in-out duration-300 hover:shadow-md">
              Request a Demo <ArrowRight className="size-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 z-30 bg-background/80 backdrop-blur-md">
            <nav className={`${poppins.className}`}>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm hover:underline underline-offset-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex flex-col gap-4">
              <Link
                href="#"
                className="text-sm hover:underline underline-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <button className="text-sm flex items-center justify-center gap-1 border-2 px-3 py-2 border-border rounded-xl shadow-sm transition-shadow ease-in-out duration-300 hover:shadow-md">
                Get demo
              </button>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </header>
  );
}
