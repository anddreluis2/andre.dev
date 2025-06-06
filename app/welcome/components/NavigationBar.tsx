import { Link } from "react-router";
import { HoverText } from "./HoverText";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function NavigationBar() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetRoute, setTargetRoute] = useState("");

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    // Save preference
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Handle smooth navigation transitions
  const handleNavigate = (route: string) => {
    if (isNavigating) return;

    setIsNavigating(true);
    setTargetRoute(route);

    // Add a full-screen overlay with transition
    const overlay = document.createElement("div");
    overlay.className = `fixed inset-0 z-50 ${
      isDarkMode ? "bg-black" : "bg-white"
    }`;
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.5s ease-in-out";
    document.body.appendChild(overlay);

    // Trigger transition
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 10);

    // Navigate after transition completes
    setTimeout(() => {
      window.location.href = route;
    }, 500);
  };

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isDarkMode ? "text-white" : "text-[#4b3621]"}
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      to: "/projects",
      label: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isDarkMode ? "text-white" : "text-[#4b3621]"}
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      to: "/articles",
      label: "Articles",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isDarkMode ? "text-white" : "text-[#4b3621]"}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      to: "/social",
      label: "Social",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isDarkMode ? "text-white" : "text-[#4b3621]"}
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <nav
        className={`flex items-center justify-center ${
          isDarkMode ? "bg-white/10" : "bg-[#4b3621]/10"
        } backdrop-blur-md rounded-full p-2 shadow-lg relative`}
      >
        {navItems.map((item) => (
          <div key={item.to} className="relative mx-1">
            <button
              onClick={() => handleNavigate(item.to)}
              className={`p-4 rounded-full ${
                isDarkMode ? "hover:bg-white/10" : "hover:bg-[#e2d5c0]/30"
              } transition-all flex items-center justify-center cursor-pointer`}
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <motion.div
                whileHover={{
                  scale: 1.3,
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                animate={{
                  y: activeTooltip === item.label ? -5 : 0,
                  scale: activeTooltip === item.label ? 1.2 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                {item.icon}
              </motion.div>

              {activeTooltip === item.label && (
                <motion.div
                  className={`absolute -top-14 left-1/2 transform -translate-x-1/2 ${
                    isDarkMode ? "bg-white/10" : "bg-[#4b3621]/10"
                  } backdrop-blur-md rounded-lg px-3 py-2 min-w-max`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <HoverText
                    text={item.label}
                    element="span"
                    className={
                      isDarkMode
                        ? "text-white text-sm font-medium"
                        : "text-[#4b3621] text-sm font-medium"
                    }
                  />
                </motion.div>
              )}
            </button>
          </div>
        ))}

        {/* Theme Toggle Button */}
        <div className="relative mx-1">
          <button
            className={`p-4 rounded-full ${
              isDarkMode ? "hover:bg-white/10" : "hover:bg-[#e2d5c0]/30"
            } transition-all flex items-center justify-center`}
            onClick={toggleTheme}
            onMouseEnter={() => setActiveTooltip("Theme")}
            onMouseLeave={() => setActiveTooltip(null)}
            aria-label="Toggle theme"
          >
            <motion.div
              whileHover={{
                scale: 1.3,
                y: -8,
                rotate: 180,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              animate={{
                y: activeTooltip === "Theme" ? -5 : 0,
                scale: activeTooltip === "Theme" ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#4b3621]"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </motion.div>

            {activeTooltip === "Theme" && (
              <motion.div
                className={`absolute -top-14 left-1/2 transform -translate-x-1/2 ${
                  isDarkMode ? "bg-white/10" : "bg-[#4b3621]/10"
                } backdrop-blur-md rounded-lg px-3 py-2 min-w-max`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <HoverText
                  text={isDarkMode ? "Light Mode" : "Dark Mode"}
                  element="span"
                  className={
                    isDarkMode
                      ? "text-white text-sm font-medium"
                      : "text-[#4b3621] text-sm font-medium"
                  }
                />
              </motion.div>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
