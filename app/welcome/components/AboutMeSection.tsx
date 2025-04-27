import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { HoverText } from "./HoverText";

interface AboutMeSectionProps {
  theme: "dark" | "light";
}

export function AboutMeSection({ theme }: AboutMeSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const paragraphs = [
    "I'm a Software Engineer with nearly 5 years of experience crafting web solutions. My journey in tech began at age 14, and I've been passionate about creating engaging digital experiences ever since.",
    "As a software engineer diving into design, I blend technical expertise with an eye for aesthetics. I specialize in React, TypeScript, and Next.js, with experience in both product development and open-source contributions.",
    "When I'm not coding, you'll find me reading, playing football, or running. I believe in balanced living—challenging my mind with the latest tech while keeping my body active through sports and outdoor activities.",
  ];

  return (
    <div className="w-full mb-32 flex flex-col items-center">
      <motion.div
        className="w-full flex flex-col items-center"
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
          className="mb-12 relative flex justify-center"
        >
          <div
            className={`absolute -left-4 h-full w-1 ${
              theme === "dark"
                ? "bg-gradient-to-b from-indigo-500 to-blue-500"
                : "bg-gradient-to-b from-[#c19a6b] to-[#926d3f]"
            } rounded-full hidden md:block`}
          ></div>
          <motion.h2
            className={`text-4xl font-bold tracking-tighter ${
              theme === "dark" ? "text-white" : "text-[#4b3621]"
            } text-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              className={`space-y-8 ${
                theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
              } max-w-[610px] mx-auto text-center`}
            >
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.25,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="font-light"
                >
                  <HoverText
                    text={paragraph}
                    className="font-light leading-relaxed"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative element */}
        <motion.div
          className={`h-1 w-24 mt-16 ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500/60 to-transparent"
              : "bg-gradient-to-r from-[#c19a6b]/60 to-transparent"
          } rounded-full mx-auto`}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.0 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
