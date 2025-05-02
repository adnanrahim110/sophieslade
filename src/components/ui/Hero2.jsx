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
    <>
      <section className="relative overflow-hidden pb-40 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-foreground via-primary to-accent bg-[length:200%_200%] -z-[1]" />

        <motion.div
          className="absolute -right-24 -bottom-32 w-72 h-72 bg-white/15 rounded-full blur-xs mix-blend-screen"
          animate={{ x: [0, -50, 0], y: [0, -50, 0], rotate: [0, -360, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
        <motion.span
          className="absolute top-1/3 right-10 block w-6 h-6 bg-[var(--accent)] rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-1/4 left-8 block w-4 h-4 bg-[var(--secondary)] rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <div className="relative z-10 imago-container text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg drop-shadow-black/40 max-w-5xl mx-auto"
          >
            {heading}
          </motion.h1>

          {subheading && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mt-4 text-xl md:text-2xl text-white font-medium"
            >
              {subheading}
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>

        <div className="absolute -bottom-0.5 left-0 w-full overflow-hidden leading-none rotate-180 z-[1]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path
              d="M0,0 V40 C300,100 900,0 1200,60 V0 H0 Z"
              fill="var(--card)"
            />
          </svg>
        </div>
      </section>
    </>
  ) : (
    <section className="relative py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-foreground via-primary to-accent bg-[length:200%_200%] -z-[1]" />

      <motion.div
        className="absolute -left-24 -top-32 w-72 h-72 bg-white/15 rounded-full blur-xs mix-blend-screen"
        animate={{ x: [0, -30, 0], y: [0, -30, 0], rotate: [0, -360, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      <div className="imago-container overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-lg drop-shadow-black/40 max-w-5xl mx-auto">
              {heading}
            </h1>
            {subheading && (
              <h2 className="mt-4 text-xl md:text-2xl text-neutral-300 font-medium mb-6">
                {subheading}
              </h2>
            )}
            <p className="text-lg text-neutral-100 mb-6">{text}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={img}
              alt={heading}
              className="rounded-lg shadow-xl relative z-[1]"
            />
            <motion.div
              className="absolute -bottom-10 -left-14 w-32 h-32 rounded-full bg-imago-400 blur-xs z-0"
              animate={{ y: [0, -25, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-0.5 left-0 w-full overflow-hidden leading-none rotate-180 z-[1]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,0 V40 C300,100 900,0 1200,60 V0 H0 Z"
            fill="var(--card)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero2;
