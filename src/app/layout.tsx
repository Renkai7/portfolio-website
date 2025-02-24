import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased min-h-screen bg-black`}
        suppressHydrationWarning
      >
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

        {/* Background Overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="relative">
          <Navbar />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
