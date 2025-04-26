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

  // Process the text by words instead of individual letters to keep words together
  const content: ReactNode[] = [];
  const words = text.split(" ");

  words.forEach((word, wordIndex) => {
    // Add each letter of the word
    const wordLetters = word
      .split("")
      .map((letter, letterIndex) => (
        <HoverLetter
          key={`${wordIndex}-${letterIndex}`}
          letter={letter}
          isDark={isDark}
        />
      ));

    // Add the word as a span with nowrap to prevent breaking
    content.push(
      <span
        key={`word-${wordIndex}`}
        style={{ whiteSpace: "nowrap", display: "inline-block" }}
      >
        {wordLetters}
      </span>
    );

    // Add space between words (except after the last word)
    if (wordIndex < words.length - 1) {
      content.push(
        <span key={`space-${wordIndex}`} style={{ display: "inline" }}>
          &nbsp;
        </span>
      );
    }
  });

  return createElement(
    element,
    {
      className: `${className}`,
      style: {
        overflowWrap: "normal",
        wordBreak: "keep-all",
        hyphens: "none",
      },
    },
    content
  );
}
