import { motion } from "motion/react";
import React from "react";
import { author } from "../assets";
import { useLanguage } from "./LanguageContext";

const SplashPage = () => {
  const { splash, selectLanguage } = useLanguage();
  const { welcomeHeading, welcomeSubheading, chooseLang, options } = splash;

  return (
    <div className="min-h-screen bg-gradient-to-b from-imago-100 to-white flex items-center justify-center p-4">
      <motion.div
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 bg-bouquet-400 p-8 flex items-center justify-center">
          <img
            src={author}
            alt="Imago Trainer"
            className="rounded-full w-64 h-64 object-cover border-4 border-bouquet-100 shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-bouquet-800 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {welcomeHeading}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {welcomeSubheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {chooseLang}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectLanguage(opt.value)}
                  className="btn-primary flex-1 py-3 text-base"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SplashPage;
