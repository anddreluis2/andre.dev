import { motion, useScroll } from "motion/react";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-[200vh] flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-10">Scroll down to reveal</h1>

      <div className="h-[60vh]"></div>

      <div className="relative w-full max-w-md mx-auto overflow-hidden">
        <motion.div
          className="w-full h-1 bg-blue-500 fixed top-0 left-0 right-0"
          style={{ scaleX: scrollYProgress }}
        />

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.img
            src="/profile.jpeg"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-xl shadow-lg"
            initial={{
              filter: "grayscale(100%) brightness(50%)",
              rotateY: 45,
            }}
            whileInView={{
              filter: "grayscale(0%) brightness(100%)",
              rotateY: 0,
            }}
            transition={{ duration: 1.2 }}
          />

          <motion.h2
            className="text-2xl font-bold mt-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Welcome to my portfolio
          </motion.h2>

          <motion.p
            className="text-center mt-4 max-w-md text-gray-600"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Scroll to explore the animations and transitions powered by Motion
          </motion.p>
        </motion.div>
      </div>

      <div className="h-[50vh]"></div>

      <motion.div
        className="w-full max-w-md p-8 rounded-xl bg-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold mb-4">About Me</h3>
        <p className="text-gray-600">
          This is a scroll-triggered animation example using Motion. As you
          scroll down the page, elements animate into view with different
          effects.
        </p>
      </motion.div>
    </div>
  );
}
