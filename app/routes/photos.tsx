import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function meta() {
  return [
    { title: "Photos | André Luis de Oliveira" },
    { name: "description", content: "My photo gallery" },
  ];
}

export default function Photos() {
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

      <motion.h1
        className={`text-4xl font-bold mt-16 mb-8 ${
          theme === "dark" ? "text-white" : "text-[#4b3621]"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Photo Gallery
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <motion.div
            key={i}
            className={`aspect-square rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-700 to-gray-800"
                : "bg-gradient-to-br from-[#e1d5c4] to-[#d4c0a5]"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + i * 0.05,
            }}
          >
            <div
              className={`h-full w-full flex items-center justify-center ${
                theme === "dark" ? "text-gray-400" : "text-[#926d3f]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
