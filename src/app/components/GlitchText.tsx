"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="relative inline-block animate-glitch">{text}</span>
      <span className="absolute left-0 top-0 inline-block -translate-x-[1px] translate-y-[1px] animate-glitch text-[#8e44ad] opacity-50">
        {text}
      </span>
      <span className="absolute left-0 top-0 inline-block translate-x-[1px] -translate-y-[1px] animate-glitch text-[#a29bfe] opacity-50">
        {text}
      </span>
    </motion.div>
  );
}
