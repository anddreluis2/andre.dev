import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { HoverText } from "./HoverText";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectsSectionProps {
  theme: "dark" | "light";
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A minimalist portfolio website built to showcase my projects and skills. Features smooth animations and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    link: "https://github.com/username/portfolio",
  },
  {
    id: 2,
    name: "Task Management App",
    description:
      "A productivity application that helps users organize tasks, set priorities, and track progress. Includes drag-and-drop functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/username/task-app",
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description:
      "An online store with product catalog, shopping cart, and secure payment processing. Includes admin dashboard for inventory management.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    link: "https://github.com/username/ecommerce",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts for any location. Features interactive maps and data visualization.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet"],
    link: "https://github.com/username/weather-app",
  },
];

function ProjectAccordion({
  project,
  index,
  isLastItem,
  theme,
}: {
  project: Project;
  index: number;
  isLastItem: boolean;
  theme: "dark" | "light";
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      key={project.id}
      className={`border-b ${isLastItem ? "border-b-0" : ""} ${
        theme === "dark" ? "border-gray-800" : "border-[#d8cbbe]"
      } overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 1.4 + index * 0.15,
      }}
      layout
    >
      {/* Project Header */}
      <motion.div
        className={`py-5 cursor-pointer flex items-center justify-between ${
          theme === "dark" ? "hover:bg-gray-900/50" : "hover:bg-[#e2d5c0]/30"
        } transition-colors`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div
            className={`mr-4 text-sm font-medium ${
              theme === "dark" ? "text-indigo-400" : "text-[#926d3f]"
            }`}
          >
            {project.id.toString().padStart(2, "0")}
          </div>
          <HoverText
            text={project.name}
            element="h3"
            className={`text-xl font-medium tracking-tight ${
              theme === "dark" ? "text-white" : "text-[#4b3621]"
            }`}
          />
        </div>
        <motion.div
          animate={{
            rotate: isExpanded ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`w-6 h-6 flex items-center justify-center ${
            theme === "dark" ? "text-gray-400" : "text-[#926d3f]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>

      {/* Project Content - Expandable */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="pb-6 space-y-4">
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
                }`}
              >
                <HoverText
                  text={project.description}
                  className="mb-4 leading-relaxed"
                />

                <div className="mt-4">
                  <div
                    className={`text-xs font-medium mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-[#926d3f]"
                    }`}
                  >
                    TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 rounded-full text-xs ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-[#e2d5c0] text-[#4b3621]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div className="mt-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm ${
                        theme === "dark" ? "text-indigo-400" : "text-[#926d3f]"
                      } hover:underline`}
                      whileHover={{ x: 5 }}
                    >
                      View project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectsSection({ theme }: ProjectsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mb-32">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mb-12 relative"
        >
          <div
            className={`absolute -left-4 h-full w-1 ${
              theme === "dark"
                ? "bg-gradient-to-b from-indigo-500 to-blue-500"
                : "bg-gradient-to-b from-[#c19a6b] to-[#926d3f]"
            } rounded-full`}
          ></div>
          <motion.h2
            className={`text-4xl font-bold tracking-tighter ${
              theme === "dark" ? "text-white" : "text-[#4b3621]"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Projects
          </motion.h2>
        </motion.div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="max-w-[56ch]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <MotionConfig transition={{ duration: 0.4 }}>
                <div className="divide-y divide-gray-800">
                  {projectsData.map((project, index) => (
                    <ProjectAccordion
                      key={project.id}
                      project={project}
                      index={index}
                      isLastItem={index === projectsData.length - 1}
                      theme={theme}
                    />
                  ))}
                </div>
              </MotionConfig>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative element */}
        <motion.div
          className={`h-1 w-24 mt-16 ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500/60 to-transparent"
              : "bg-gradient-to-r from-[#c19a6b]/60 to-transparent"
          } rounded-full`}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.0 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
