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
        theme === "dark" ? "border-gray-800" : "border-[#d8cbbe]"
      } overflow-hidden`}
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
          ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white"
          : "bg-[#f9f0e3] text-[#292524]"
      } font-sans px-8 md:px-16 lg:px-20`}
    >
      {/* Background gradient elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {theme === "dark" ? (
          <>
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          </>
        ) : (
          <>
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#c19a6b]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-[#926d3f]/20 rounded-full blur-3xl"></div>
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
              className={`text-5xl font-bold tracking-tighter ${
                theme === "dark" ? "text-white" : "text-[#4b3621]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My Projects
            </motion.h1>

            <motion.p
              className={`mt-6 text-lg ${
                theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
              } max-w-lg`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Here's a collection of projects I've worked on. Each one
              represents different challenges and learning experiences.
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
            className={`h-1 w-32 mt-16 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-500/60 to-transparent"
                : "bg-gradient-to-r from-[#c19a6b]/60 to-transparent"
            } rounded-full`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          ></motion.div>
        </motion.div>
      </div>
    </main>
  );
}
