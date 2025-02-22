"use client";
import styles from "./Projects.module.css";
import ProjectCard from "../components/ProjectCard";

// Example projects data
const projects = [
  {
    name: "Project One",
    description:
      "A full-stack SaaS application built with Next.js and Node.js, featuring real-time updates and AI integration.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "OpenAI"],
    demoLink: "https://demo1.example.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    name: "Project Two",
    description:
      "An open-source library for React components with over 1000 GitHub stars.",
    techStack: ["React", "TypeScript", "Storybook", "Jest"],
    demoLink: "https://demo2.example.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    name: "Project Three",
    description:
      "A mobile-first e-commerce platform with seamless payment integration.",
    techStack: ["React Native", "Redux", "Stripe", "Firebase"],
    demoLink: "https://demo3.example.com",
    githubLink: "https://github.com/yourusername/project3",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <h1 className={styles.glowingTitle}>My Projects</h1>
        <p className={styles.description}>
          A collection of my best work in SaaS, Web Development, and Open
          Source.
        </p>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </main>
  );
}
