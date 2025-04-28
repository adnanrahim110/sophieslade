import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  fac_meeting,
  sophie_and_Harvilleed,
  Sophie_in_Africa,
  Sophie_Slade,
} from "../assets";
import { useLanguage } from "../components/LanguageContext";
import Hero2 from "../components/ui/Hero2";

const About = () => {
  const { about } = useLanguage();
  const { bio } = about;
  const { heading, text, imgdesc } = about.awards;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>{about.pageTitle} - Sophie Slade</title>
      </Helmet>
      <div className="pt-20">
        <Hero2 pageKey={"about"} img={sophie_and_Harvilleed} />

        <section className="py-20 bg-white">
          <div className="imago-container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="md:col-span-5">
                <img src={Sophie_Slade} className="rounded-lg" alt="Sophie" />
              </div>
              <div className="col-span-6">
                {bio.map((item, idx) => (
                  <div key={idx} className="not-last:mb-12">
                    <h2 className="text-4xl font-bold text-imago-700 mb-6">
                      {item.heading}
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      {item.text.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-16 bg-imago-50">
          <div className="imago-container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="col-span-6">
                <div className="not-last:mb-12">
                  <h2 className="text-4xl font-bold text-imago-700 mb-6">
                    {heading}
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    {text.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 relative rounded-xl overflow-hidden bg-neutral-200 p-2 pb-8">
                <img
                  src={Sophie_in_Africa}
                  className="rounded-lg"
                  alt="Sophie"
                />
                <span className="absolute w-full h-8 text-sm text-neutral-500 font-semibold flex items-center justify-center bottom-0 left-0">
                  {imgdesc}
                </span>
              </div>
              {/* <div className="md:col-span-12">
              <img src={fac_meeting} alt="" />
            </div> */}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
