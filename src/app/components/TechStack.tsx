"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function TechStack() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll-left gap-8">
        {[...technologies, ...technologies].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <div className="group relative rounded-xl bg-white/5 p-4 transition-all hover:bg-white/10">
              <tech.icon
                className="h-12 w-12 transition-all group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <div
                className="absolute inset-0 -z-10 rounded-xl opacity-0 blur transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: tech.color }}
              />
            </div>
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
