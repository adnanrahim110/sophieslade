import Hero from "../components/Hero";
import { useLanguage } from "../components/LanguageContext";

import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { hero_bg, hero_bg_sm } from "../assets";
import Reviews from "../components/ui/Reviews";
import Services from "../components/ui/Services";

const Home = () => {
  const { home } = useLanguage();
  const { intro } = home;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>{home.pageTitle} - Sophie Slade</title>
      </Helmet>
      <Hero pageKey={"home"} img={hero_bg} img_sm={hero_bg_sm} />

      <section id="learnmore" className="py-20 bg-white">
        <div className="imago-container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-imago-700 mb-6">
              {intro.heading}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {intro.text}
            </p>
          </motion.div>
        </div>
      </section>

      <Services />

      <Reviews />
    </>
  );
};

export default Home;
