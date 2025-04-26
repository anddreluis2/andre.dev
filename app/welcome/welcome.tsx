import { motion, useScroll } from "motion/react";
import { AboutMeSection } from "./components/AboutMeSection";
import { HoverText } from "./components/HoverText";
import { useEffect, useState } from "react";

export function Welcome() {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
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

    return () => observer.disconnect();
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

      {/* Introduction */}
      <motion.div
        className={`text-xl ${
          theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
        } max-w-md w-full pt-28 pb-12 mb-12`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <HoverText
          text="Hi! my name is André Luis de Oliveira, I'm a software engineer and I'm from Brazil."
          className="w-[610px] font-light leading-relaxed text-block"
        />
      </motion.div>

      {/* About Me Section */}
      <AboutMeSection theme={theme} />
    </main>
  );
}
