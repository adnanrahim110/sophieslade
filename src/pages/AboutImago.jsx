import { motion } from "motion/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { ai_bg, imagorelationships } from "../assets";
import Hero from "../components/Hero";
import { useLanguage } from "../components/LanguageContext";
import Reviews from "../components/ui/Reviews";

const AboutImago = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const { aboutImago } = useLanguage();
  const { intro, sec3 } = aboutImago;

  return (
    <>
      <Helmet>
        <title>{aboutImago.pageTitle} - Sophie Slade</title>
      </Helmet>
      <Hero pageKey={"aboutImago"} img={ai_bg} />

      <section id="learn-more" className="pb-20 pt-32 bg-white">
        <div className="imago-container">
          <div className="grid md:grid-cols-12 gap-x-4 gap-y-8">
            <motion.div
              className="col-span-5 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-imago-700 mb-6">
                {intro.heading}
              </h2>
              <div className="space-y-2">
                <div className="bg-white/50 backdrop-blur-xs shadow-[0_0_7px_4px_rgba(0,0,0,0.05)] px-6 py-3 rounded-lg border-l-4 border-l-imago-500">
                  {intro.text.map((para, idx) => (
                    <h3
                      key={idx}
                      className="font-semibold text-base py-2 not-last:border-b border-b-gray-300"
                    >
                      {para}
                    </h3>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-span-7 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-imago-700 mb-6">
                {sec3.heading}
              </h2>
              <div className="space-y-2">
                <div className="bg-white/50 backdrop-blur-xs shadow-[0_0_7px_4px_rgba(0,0,0,0.05)] px-3 py-2 rounded-lg border-l-4 border-l-imago-500">
                  {sec3.points.map((point, idx) => (
                    <h3
                      key={idx}
                      className="font-semibold text-base py-2 not-last:border-b border-b-gray-300"
                    >
                      {point}
                    </h3>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="space-y-2">
                <div className="bg-white/50 backdrop-blur-xs shadow-[0_0_7px_4px_rgba(0,0,0,0.05)] px-3 py-2 rounded-lg border-l-4 border-l-imago-500">
                  {sec3.details.map((detail, idx) => (
                    <h3
                      key={idx}
                      className="font-semibold text-base py-2 not-last:border-b border-b-gray-300"
                    >
                      {detail}
                    </h3>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-span-5 p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img src={imagorelationships} className="w-full h-auto" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
      <Reviews />
    </>
  );
};

export default AboutImago;
