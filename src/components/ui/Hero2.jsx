import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const Hero2 = ({ img, pageKey, heroWithoutImg = false }) => {
  const translations = useLanguage();
  const pageContent = translations[pageKey];
  if (!pageContent || !pageContent.hero) {
    console.warn(`Hero2: no hero content found for pageKey="${pageKey}"`);
    return null;
  }

  const { heading, subheading, text } = pageContent.hero;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return heroWithoutImg ? (
    <section className="bg-gradient-to-b from-imago-100 to-white py-20">
      <div className="imago-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-imago-700 mb-6">
            {heading}
          </h1>
          <p className="text-lg text-gray-700">{text}</p>
        </motion.div>
      </div>
    </section>
  ) : (
    <section className="bg-imago-100 py-8">
      <div className="imago-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-7xl font-bold text-imago-700 mb-2">
              {heading}
            </h1>
            {subheading && (
              <h2 className="text-xl font-medium mb-6 text-gray-500 font-sans">
                {subheading}
              </h2>
            )}
            <p className="text-lg text-gray-700 mb-6">{text}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src={img} alt={heading} className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-imago-300 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
