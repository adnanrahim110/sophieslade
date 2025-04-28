import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

const Hero = ({ pageKey, img }) => {
  const translations = useLanguage();
  const pageContent = translations[pageKey];
  if (!pageContent || !pageContent.hero) {
    console.warn(`Hero2: no hero content found for pageKey="${pageKey}"`);
    return null;
  }

  const { heading, subheading, actions, scrolldown } = pageContent.hero;

  return (
    <section className="relative max-h-dvh flex flex-col items-center pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-imago-100 to-white z-0"></div>
      <div className="imago-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 pl-5 col-start-1 col-end-auto row-start-1 row-end-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-imago-700 mb-6">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              {subheading}
            </p>
            {actions && (
              <div className="flex flex-col sm:flex-row gap-4">
                {actions.map((action, idx) => (
                  <Link
                    key={action.label}
                    to={action.path}
                    className={idx === 0 ? "btn-primary" : "btn-secondary"}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-0 row-start-1 row-end-auto col-start-1 col-end-3"
          >
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_10px_5px_rgba(0,0,0,0.07)]">
              <img
                src={img}
                alt="Imago Trainer"
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-imago-500/10"></div>
            </div>
            <motion.div
              className="absolute -top-8 -left-6 w-20 h-20 rounded-full bg-imago-300 opacity-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -right-4 w-28 h-28 rounded-full bg-imago-200 opacity-80"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
      {scrolldown && (
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-10 z-10 backdrop-blur-xs bg-imago-400/10 py-2 px-4 rounded-md border border-white/60 hover:bg-white hover:border-black/30 transition-all duration-200 ease-in-out"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <a
            href={scrolldown}
            className="flex flex-col items-center text-imago-600"
          >
            <span className="text-sm mb-2">Scroll</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
