import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { HoverText } from "../welcome/components/HoverText";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function meta() {
  return [
    { title: "Projects | André Luis de Oliveira" },
    { name: "description", content: "My projects and work" },
  ];
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Humantrack",
    description:
      "Co-founded a HealthTech platform focused on evidence-based psychological care. Developed a system handling sensitive health data that grew to 2,000 professional users within 6 months. Implements robust security measures for healthcare data protection.",
    technologies: [
      "React",
      "TypeScript",
      "Go",
      "Docker",
      "CI/CD",
      "REST",
      "PostgreSQL",
    ],
    link: "https://humantrack.io",
  },
  {
    id: 2,
    name: "MercadoFarma (EMS)",
    description:
      "Leading the frontend development for MercadoFarma, the e-commerce platform for EMS pharmaceutical company that sells directly to points of sale. Manages high-volume transactions and user traffic as the Frontend Lead.",
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "RESTful"],
    link: "https://mercadofarma.com.br",
  },
  {
    id: 3,
    name: "Meteor Software (Galaxy Team)",
    description:
      "Major contribution to Meteor Software's Galaxy hosting platform, enabling developers to deploy and scale Node.js, Go, Python applications and MongoDB databases. Worked with open-source technologies and helped build the product from scratch.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Go",
      "Meteor",
      "tRPC",
      "Playwright",
      "GraphQL",
      "DynamoDB",
      "MongoDB",
    ],
    link: "https://www.meteor.com",
  },
  {
    id: 4,
    name: "Monest",
    description:
      "Developed financial management interfaces for a startup focused on credit management and collections. Implemented UX/UI best practices to create intuitive financial interfaces for users managing credit operations.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "NestJS",
      "MySQL",
    ],
    link: "https://monest.com.br",
  },
  {
    id: 5,
    name: "MadeiraMadeira",
    description:
      "Contributed to frontend development at MadeiraMadeira, a unicorn e-commerce company based in Curitiba. Worked on improving user experience and interface components for the online shopping platform.",
    technologies: ["React", "JavaScript", "PHP", "Next.js"],
    link: "https://www.madeiramadeira.com.br",
  },
  {
    id: 6,
    name: "Personal Portfolio",
    description:
      "My personal website built with modern web technologies to showcase my projects and professional experience. Features responsive design, theme switching, and custom animations.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    link: "https://github.com/anddreluis2/andre.dev",
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
        theme === "dark" ? "border-gray-800/80" : "border-[#d8cbbe]"
      } overflow-hidden rounded-lg ${
        isExpanded ? "shadow-lg" : "shadow-sm"
      } transition-shadow duration-300 ${
        theme === "dark" ? "bg-gray-900/30" : "bg-white/30"
      } backdrop-blur-sm mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.1,
      }}
      layout
    >
      {/* Project Header */}
      <motion.div
        className={`py-5 px-4 cursor-pointer flex items-center justify-between ${
          theme === "dark" ? "hover:bg-gray-800/50" : "hover:bg-[#e2d5c0]/40"
        } transition-all duration-300 rounded-t-lg`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div
            className={`mr-4 text-sm font-medium rounded-full w-8 h-8 flex items-center justify-center ${
              theme === "dark"
                ? "bg-indigo-500/20 text-indigo-300"
                : "bg-[#926d3f]/20 text-[#926d3f]"
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
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            theme === "dark"
              ? "bg-gray-800/80 text-gray-300"
              : "bg-[#e2d5c0]/60 text-[#926d3f]"
          }`}
        >
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
            <div className="pb-6 px-6 space-y-4">
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
                }`}
              >
                <HoverText
                  text={project.description}
                  className="mb-4 leading-relaxed"
                />

                <div className="mt-6">
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
                        className={`px-3 py-1.5 rounded-full text-xs ${
                          theme === "dark"
                            ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80"
                            : "bg-[#e2d5c0]/80 text-[#4b3621] hover:bg-[#d8cbbe]/80"
                        } transition-colors duration-200 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div className="mt-6">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm px-4 py-2 rounded-full ${
                        theme === "dark"
                          ? "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30"
                          : "bg-[#926d3f]/20 text-[#926d3f] hover:bg-[#926d3f]/30"
                      } transition-all duration-200`}
                      whileHover={{ x: 5 }}
                    >
                      Visit project
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
                        className="ml-1.5"
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

export default function Projects() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check theme from html class
    const updateTheme = () => {
      const isDark = !document.documentElement.classList.contains("light");
      setTheme(isDark ? "dark" : "light");
    };

    // Initial check
    updateTheme();

    // Create a mutation observer to watch for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Set visible after small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <main
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white"
          : "text-gray-800"
      } font-sans px-8 md:px-16 lg:px-20 relative`}
      style={
        theme === "light"
          ? {
              background:
                "radial-gradient(ellipse at center, #f9f6e9 0%, #f3ebd3 40%, #e8d8a7 80%, #d9c38b 100%)",
            }
          : {}
      }
    >
      {/* Background gradient elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {theme === "dark" ? (
          <>
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
          </>
        ) : (
          <>
            {/* Overlay for light theme texture */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b08d57' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: "cover",
              }}
            />

            {/* Enhanced vignette effect for vintage book page look */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 180px 60px rgba(161, 123, 67, 0.45)",
                zIndex: 1,
              }}
            />

            {/* Add corner darkening for more vintage effect */}
            <div
              className="absolute top-0 left-0 w-1/3 h-1/3 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(161, 123, 67, 0.4) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-1/3 h-1/3 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(161, 123, 67, 0.4) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at bottom left, rgba(161, 123, 67, 0.4) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-1/3 h-1/3 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at bottom right, rgba(161, 123, 67, 0.4) 0%, transparent 70%)",
              }}
            />
          </>
        )}
      </div>

      <div className="w-full mb-32 max-w-4xl mx-auto">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 relative mt-20"
          >
            <div
              className={`absolute -left-4 h-full w-1 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-indigo-500 to-blue-500"
                  : "bg-gradient-to-b from-[#c19a6b] to-[#926d3f]"
              } rounded-full`}
            ></div>
            <motion.h1
              className={`text-5xl md:text-6xl font-bold tracking-tighter ${
                theme === "dark" ? "text-white" : "text-[#4b3621]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My Projects
            </motion.h1>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div
                className={`h-1 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                    : "bg-gradient-to-r from-[#c19a6b] to-[#926d3f]"
                } rounded-full`}
              ></div>
            </motion.div>

            <motion.p
              className={`mt-6 text-lg md:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
              } max-w-lg`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Here's a collection of projects I've worked on. Each one
              represents different challenges and learning experiences
              throughout my professional journey.
            </motion.p>
          </motion.div>

          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <MotionConfig transition={{ duration: 0.4 }}>
                  <div
                    className={`divide-y ${
                      theme === "dark" ? "divide-gray-800" : "divide-[#d8cbbe]"
                    }`}
                  >
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
            className="h-8 mt-16 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className={`h-1 w-24 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                  : "bg-gradient-to-r from-[#c19a6b] to-[#926d3f]"
              } rounded-full self-end`}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            ></motion.div>
            <motion.div
              className={`h-1 w-12 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-indigo-500"
                  : "bg-gradient-to-r from-[#b88d5f] to-[#c19a6b]"
              } rounded-full self-end opacity-80`}
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            ></motion.div>
            <motion.div
              className={`h-1 w-6 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-300 to-indigo-400"
                  : "bg-gradient-to-r from-[#d8c9b1] to-[#e9dfd2]"
              } rounded-full self-end opacity-60`}
              initial={{ width: 0 }}
              animate={{ width: 24 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
