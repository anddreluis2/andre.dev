import { AnimatePresence, motion, MotionConfig, useInView } from "motion/react";
import { useState, useRef } from "react";
import { HoverText } from "./HoverText";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

const projectsThatIHaveWorkedOn: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Description of Project 1. This project involved building a responsive web application using React and TypeScript. It featured real-time data visualization and user authentication.",
    image: "image1.jpg",
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Description of Project 2. A mobile application developed with React Native that included geolocation features, push notifications, and offline capabilities for users on the go.",
    image: "image2.jpg",
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "Description of Project 3. An e-commerce platform built with a modern tech stack including Node.js backend and a React frontend. It integrated with payment gateways and inventory management systems.",
    image: "image3.jpg",
  },
  {
    id: 4,
    name: "Project 4",
    description:
      "Description of Project 4. A data analytics dashboard that processed large datasets and presented insights through interactive visualizations, helping businesses make data-driven decisions.",
    image: "image4.jpg",
  },
];

function ProjectAccordion({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      key={project.id}
      className="overflow-hidden rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 1, 0.5, 1],
      }}
      layout
    >
      {/* Project Header - Always visible */}
      <motion.div
        className="p-6 cursor-pointer flex items-center"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <HoverText
            text={`${project.id}`}
            element="span"
            className="text-2xl font-bold text-pink-500"
          />
        </div>
        <div className="flex-grow">
          <HoverText
            text={project.name}
            element="h3"
            className="text-xl font-bold text-white"
          />
        </div>
        <motion.div
          animate={{
            rotate: isExpanded ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="grid grid-cols-1 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <HoverText
                    text="Description"
                    element="h4"
                    className="text-lg font-semibold mb-2 text-pink-400"
                  />
                  <HoverText
                    text={project.description}
                    className="text-gray-300 mb-4"
                  />
                  <motion.button
                    className="px-4 py-2 border border-pink-500 text-pink-300 rounded-md text-sm font-medium mt-4"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#ffffff",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <HoverText
                      text="View Project Details"
                      element="span"
                      className="text-sm font-medium"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4 mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 2.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.5 }}
        className="mb-6"
      >
        <HoverText
          text="My Projects"
          element="h2"
          className="text-3xl font-bold text-left text-white"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.5 }}
        className="mb-8"
      >
        <HoverText
          text="Here you can see some of the projects that I have worked on"
          className="text-left text-gray-300 max-w-2xl"
        />
      </motion.div>

      <MotionConfig transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projectsThatIHaveWorkedOn.map((project, index) => (
            <ProjectAccordion
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}
