"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BackgroundParticles from "./components/BackgroundParticles";
import ScanLines from "./components/ScanLines";
import TechStack from "./components/TechStack";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

const roles = ["Frontend Developer", "SaaS Engineer", "Full Stack Developer"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      <BackgroundParticles />
      <ScanLines />
      <motion.div
        className="container relative z-20 mx-auto px-4 pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="text-center">
          <motion.h1
            className="mb-4 font-mono text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-300 to-[#a29bfe] bg-clip-text text-transparent">
              JOHN DOE
            </span>
          </motion.h1>

          <motion.div
            className="relative h-8 font-mono text-xl text-purple-300"
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[roleIndex]}
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              View Projects
            </button>
            <button className="rounded-lg border border-purple-600 px-6 py-3 font-semibold text-purple-300 transition-all hover:bg-purple-600/10 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.section
          className="mx-auto mt-32 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            <div className="relative">
              <motion.h2
                className="relative mb-6 inline-block text-3xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="animate-pulse bg-gradient-to-r from-[#a29bfe] via-purple-500 to-[#8e44ad] bg-clip-text text-transparent">
                  Who Am I?
                </span>
                <span className="absolute left-0 top-0 animate-glow blur-sm bg-gradient-to-r from-[#a29bfe] via-purple-500 to-[#8e44ad] bg-clip-text text-transparent">
                  Who Am I?
                </span>
              </motion.h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Full-stack developer with a passion for creating innovative
                  digital experiences. Specializing in modern web technologies
                  and cyberpunk aesthetics, I bring creative visions to life
                  through code.
                </p>
                <p>My focus areas include:</p>
                <ul className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    "SaaS Development",
                    "Cyberpunk UI Design",
                    "React/Next.js",
                    "Full Stack Solutions",
                    "UI/UX Design",
                    "Performance Optimization",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-purple-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto mt-32 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            <div className="relative">
              <motion.h2
                className="relative mb-6 inline-block text-3xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="animate-pulse bg-gradient-to-r from-[#a29bfe] via-purple-500 to-[#8e44ad] bg-clip-text text-transparent">
                  Tech Stack
                </span>
                <span className="absolute left-0 top-0 animate-glow blur-sm bg-gradient-to-r from-[#a29bfe] via-purple-500 to-[#8e44ad] bg-clip-text text-transparent">
                  Tech Stack
                </span>
              </motion.h2>
              <TechStack />
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto mt-32 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
            <div className="relative space-y-6">
              <motion.h2
                className="relative inline-block text-3xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="animate-pulse bg-gradient-to-r from-[#a29bfe] via-purple-500 to-[#8e44ad] bg-clip-text text-transparent">
                  Featured Projects
                </span>
                <span className="absolute left-0 top-0 animate-glow blur-sm bg-gradient-to-r from-[#a29bfe] via-purple-500 to-[#8e44ad] bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </motion.h2>

              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Exploring the intersection of design and technology through
                SaaS, Web Development, and Open Source projects.
              </motion.p>

              {/* Featured Project Card */}
              <motion.div
                className="mt-8 overflow-hidden rounded-xl border border-purple-500/20 bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/featured-project.gif"
                    alt="Project Preview"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="space-y-4 p-6 text-left">
                  <h3 className="text-2xl font-bold text-purple-300">
                    Cyberpunk Dashboard
                  </h3>
                  <p className="text-gray-400">
                    A modern analytics dashboard with a cyberpunk aesthetic.
                    Built with Next.js, TailwindCSS, and Framer Motion. Features
                    real-time data visualization, dark mode, and responsive
                    design.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Next.js",
                      "TailwindCSS",
                      "Framer Motion",
                      "TypeScript",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-purple-300 transition-colors hover:text-purple-400"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-purple-300 transition-colors hover:text-purple-400"
                    >
                      <span>GitHub</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Projects Grid */}
              <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                <ProjectCard
                  title="AI Chat Interface"
                  description="Modern chat application with AI integration, real-time responses, and code highlighting."
                  image="/project1.jpg"
                  tech={["React", "Next.js", "TypeScript", "MongoDB"]}
                  liveUrl="#"
                  githubUrl="#"
                  index={0}
                />
                <ProjectCard
                  title="E-Commerce Platform"
                  description="Full-featured e-commerce solution with cart management and payment processing."
                  image="/project2.jpg"
                  tech={["Next.js", "TailwindCSS", "Prisma", "MongoDB"]}
                  liveUrl="#"
                  githubUrl="#"
                  index={1}
                />
                <ProjectCard
                  title="Task Management"
                  description="Collaborative task management tool with real-time updates and team features."
                  image="/project3.jpg"
                  tech={["React", "TypeScript", "TailwindCSS"]}
                  liveUrl="#"
                  githubUrl="#"
                  index={2}
                />
                <ProjectCard
                  title="Portfolio Generator"
                  description="Dynamic portfolio generator with customizable themes and content management."
                  image="/project4.jpg"
                  tech={["Next.js", "TailwindCSS", "MongoDB"]}
                  liveUrl="#"
                  githubUrl="#"
                  index={3}
                />
              </div>

              {/* View All Projects Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <button className="group relative rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all hover:bg-purple-700">
                  <span className="relative z-10">View All Projects</span>
                  <div
                    className="absolute inset-0 -z-10 rounded-lg opacity-0 blur transition-opacity group-hover:opacity-50"
                    style={{ backgroundColor: "#8e44ad" }}
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
