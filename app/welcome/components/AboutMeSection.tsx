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
    "I'm a Software Engineer with 5 years of experience building web interfaces. I'm currently diving into design engineering—bridging the gap between beautiful design and solid code.",
    "I care about the details that make great user experiences: smooth interactions, fast performance, and accessibility. My goal is to ship solutions that work well and look good.",
  ];

  return (
    <div className="w-full flex flex-col items-center">
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
          className="relative mb-8 flex justify-center"
        >
          <div
            className={`absolute -left-4 h-full w-1 ${
              theme === "dark"
                ? "bg-gradient-to-b from-indigo-500 to-blue-500"
                : "bg-gradient-to-b from-[#c19a6b] to-[#926d3f]"
            } rounded-full hidden md:block`}
          ></div>
          <motion.h2
            className={`text-base md:text-2xl tracking-tighter ${
              theme === "dark" ? "text-white" : "text-[#4b3621]"
            } text-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            about me{" "}
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
