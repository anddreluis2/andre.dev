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
      className={`min-h-screen flex flex-col items-center ${
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

      {/* Introduction */}
      <motion.div
        className={`flex flex-col items-center gap-6 ${
          theme === "dark" ? "text-gray-300" : "text-[#5f574f]"
        } max-w-2xl w-full pt-28 pb-12 mb-12 text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
      >
        <div className="text-xl max-w-xl text-semibold">
          <HoverText
            text="Hi! my name is André Luis de Oliveira, I'm a software engineer and I'm from Brazil."
            className="font-light leading-relaxed text-block w-full text-center"
          />
        </div>
      </motion.div>

      {/* About Me Section */}
      <div className="w-full">
        <AboutMeSection theme={theme} />
      </div>
    </main>
  );
}
