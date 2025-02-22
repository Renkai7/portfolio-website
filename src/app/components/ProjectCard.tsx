"use client";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  name,
  description,
  techStack,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.techStack}>
        {techStack.map((tech, index) => (
          <span key={index} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.buttons}>
        {demoLink && (
          <motion.a
            href={demoLink}
            className={`${styles.button} ${styles.demoButton}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </motion.a>
        )}
        {githubLink && (
          <motion.a
            href={githubLink}
            className={`${styles.button} ${styles.githubButton}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
