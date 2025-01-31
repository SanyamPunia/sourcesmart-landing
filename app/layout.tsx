import { inter } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "SourceSmart - AI-Powered Procurement",
  description:
    "Transform your procurement process with AI-driven insights and optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
