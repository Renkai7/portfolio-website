"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer | SaaS Engineer";

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-500 opacity-20"
            animate={{
              x: [
                Math.random() * 1920, // Using a default viewport width
                Math.random() * 1920,
              ],
              y: [
                Math.random() * 1080, // Using a default viewport height
                Math.random() * 1080,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <motion.h1
            className="mb-4 text-6xl font-bold"
            whileHover={{ scale: 1.02 }}
            style={{ perspective: 1000 }}
          >
            Michael Spencer
          </motion.h1>

          <motion.div
            className="mb-6 h-8 text-2xl text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {text}
          </motion.div>

          <motion.p
            className="mb-8 text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting beautiful, user-centric web experiences with modern
            technologies
          </motion.p>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold transition-all hover:scale-105 hover:bg-blue-700 active:scale-95"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold transition-all hover:scale-105 hover:bg-blue-600/10 active:scale-95"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
