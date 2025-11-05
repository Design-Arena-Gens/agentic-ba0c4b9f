import type { Metadata } from "next";
import "./globals.css";
import { mono, sans } from "./fonts";

export const metadata: Metadata = {
  title: "Synthesis Orbit | Enterprise Workflow Intelligence",
  description:
    "Convert proprietary enterprise knowledge into orchestrated workflow intelligence for next-generation AI agents and multimodal copilots."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
