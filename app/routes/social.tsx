import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function meta() {
  return [
    { title: "Social Media | André Luis de Oliveira" },
    { name: "description", content: "Connect with me on social media" },
  ];
}

export default function Social() {
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

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com",
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
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      color: theme === "dark" ? "bg-blue-500" : "bg-[#926d3f]",
      hoverColor: theme === "dark" ? "hover:bg-blue-600" : "hover:bg-[#7d5a2d]",
    },
    {
      name: "GitHub",
      url: "https://github.com",
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
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      color: theme === "dark" ? "bg-gray-700" : "bg-[#a88b65]",
      hoverColor: theme === "dark" ? "hover:bg-gray-800" : "hover:bg-[#8d7251]",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
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
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: theme === "dark" ? "bg-blue-600" : "bg-[#b39a7c]",
      hoverColor: theme === "dark" ? "hover:bg-blue-700" : "hover:bg-[#997f64]",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
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
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      color: theme === "dark" ? "bg-pink-500" : "bg-[#c19a6b]",
      hoverColor: theme === "dark" ? "hover:bg-pink-600" : "hover:bg-[#a57f53]",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
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
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
      color: theme === "dark" ? "bg-red-600" : "bg-[#d0b394]",
      hoverColor: theme === "dark" ? "hover:bg-red-700" : "hover:bg-[#b6957a]",
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
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
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      color: theme === "dark" ? "bg-gray-500" : "bg-[#e2d5c0]",
      hoverColor: theme === "dark" ? "hover:bg-gray-600" : "hover:bg-[#c9b8a2]",
    },
  ];

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
        Connect With Me
      </motion.h1>

      <div className="max-w-md w-full mx-auto space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-4 rounded-lg ${link.color} ${link.hoverColor} transition-all duration-300 shadow-sm hover:shadow-md`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <div className="mr-4">{link.icon}</div>
            <span
              className={`text-lg font-medium ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              {link.name}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
