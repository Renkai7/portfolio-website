"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";

const techIcons: { [key: string]: IconType } = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-black/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold text-purple-300 transition-colors group-hover:text-purple-400">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="flex gap-2">
          {tech.map((t) => {
            const Icon = techIcons[t];
            return Icon ? (
              <Icon
                key={t}
                className="h-5 w-5 text-gray-500 transition-colors group-hover:text-purple-400"
              />
            ) : null;
          })}
        </div>
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              className="group/link flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-400"
            >
              <span>Live Demo</span>
              <span className="transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="group/link flex items-center gap-1 text-sm text-purple-300 transition-colors hover:text-purple-400"
            >
              <span>GitHub</span>
              <span className="transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
