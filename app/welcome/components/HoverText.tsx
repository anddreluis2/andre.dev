import { motion } from "motion/react";
import { createElement, useEffect, useState } from "react";
import type { ReactNode } from "react";

// Letter component with hover effect
const HoverLetter = ({
  letter,
  isDark,
}: {
  letter: string;
  isDark: boolean;
}) => {
  return (
    <motion.span
      className="inline-block relative"
      whileHover={{
        scale: 1.3,
        color: isDark ? "#ffffff" : "#4b3621",
        y: -2,
        transition: { duration: 0.1 },
      }}
      style={{ display: "inline-block" }}
    >
      {letter === " " ? <span>&nbsp;</span> : letter}
    </motion.span>
  );
};

// Text component that splits text into individual letters
export function HoverText({
  text,
  className = "",
  element = "p",
}: {
  text: string;
  className?: string;
  element?: "p" | "h1" | "h2" | "h3" | "h4" | "span" | "div";
}) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const isDarkMode = !document.documentElement.classList.contains("light");
      setIsDark(isDarkMode);
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

    return () => observer.disconnect();
  }, []);

  const content: ReactNode[] = text
    .split("")
    .map((letter, index) => (
      <HoverLetter key={index} letter={letter} isDark={isDark} />
    ));

  return createElement(element, { className: `${className}` }, content);
}
