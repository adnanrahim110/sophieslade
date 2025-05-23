import { Users } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import Hero2 from "../components/ui/Hero2";

const Trainings = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const { trainingsPage } = useLanguage();
  const { trainings, buttonLabel } = trainingsPage;

  return (
    <>
      <Helmet>
        <title>{trainingsPage.pageTitle} - Sophie Slade</title>
      </Helmet>
      <div className="pt-20">
        <Hero2 heroWithoutImg pageKey="trainingsPage" />

        <section className="pt-32 pb-20 bg-white">
          <div className="imago-container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-8">
              {trainings.map((training, index) => (
                <motion.div
                  key={index}
                  className={`bg-imago-50/50 border border-imago-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-imago-400 hover:bg-imago-50 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden h-full ${
                    training.expanded
                      ? "md:col-span-12 lg:col-span-7"
                      : training.embedLink
                      ? "md:col-span-6 lg:col-span-5"
                      : "md:col-span-6 lg:col-span-4"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col h-full group">
                    <div className="p-6 text-sm">
                      <Link
                        to={training.link}
                        className={`${
                          training.embedLink ? "" : "mb-4"
                        } flex gap-4 *:transition-all *:duration-300 *:ease-in-out ${
                          training.expanded || training.embedLink
                            ? "flex-row items-center"
                            : " flex-col"
                        }`}
                      >
                        <div className="w-12 h-12 bg-imago-100 rounded-full flex items-center justify-center group-hover:bg-imago-200">
                          <Users
                            size={24}
                            className="text-imago-500 group-hover:text-imago-700 transition-all duration-300 ease-in-out"
                          />
                        </div>
                        <h3 className="text-lg line-clamp-1 font-semibold text-imago-700 hover:text-imago-800 underline underline-offset-2 decoration-transparent hover:decoration-imago-800">
                          {training.title}
                        </h3>
                      </Link>
                      {training.text && (
                        <p className="text-gray-700 line-clamp-3">
                          {training.text}
                        </p>
                      )}
                    </div>
                    {training.embedLink ? (
                      <div className="h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src={training.embedLink}
                          title="Movie on 2017 07 11 at 10 15 PM"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="p-6 bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 ease-in-out border-y border-imago-200">
                        <h4 className="font-semibold mb-3 text-gray-900 text-lg">
                          {training.subtitle}
                        </h4>
                        <ul
                          className={`space-y-2 text-sm ${
                            training.expanded ? "grid grid-cols-2" : ""
                          }`}
                        >
                          {training.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start text-gray-700"
                            >
                              <span className="text-imago-600 mr-2">•</span>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="p-6">
                      <Link
                        to={training.link}
                        className="text-imago-600 font-medium hover:text-imago-700 inline-flex items-center group"
                      >
                        {buttonLabel}{" "}
                        <span className="ml-1 group-hover:translate-x-1.5 transition-all duration-200 ease-linear">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Trainings;
