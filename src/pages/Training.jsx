import { motion } from "motion/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { BiSupport } from "react-icons/bi";
import { IoIosQuote } from "react-icons/io";
import { Link, Navigate, useParams } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useLanguage } from "../components/LanguageContext";
import Hero2 from "../components/ui/Hero2";
import ResponsiveTable from "../components/ui/ResponsiveTable";
import "./trainings.css";

const Training = () => {
  const { trainingType } = useParams();

  const currentPage = trainingType.replace("/trainings/", "");

  let pageKey;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (currentPage === "clinical-training-program") {
    pageKey = "clinicalTraining";
  } else if (currentPage === "imago-professional-facilitator-training") {
    pageKey = "ipfTraining";
  } else if (currentPage === "workshop-presenter-training") {
    pageKey = "wpTraining";
  } else if (currentPage === "advanced-trainings") {
    pageKey = "advancedTraining";
  } else if (currentPage === "training-videos") {
    pageKey = "trainingVideos";
  } else {
    return <Navigate to="/404" replace />;
  }

  const translations = useLanguage();
  const page = translations[pageKey];
  const { content } = page;

  return (
    <>
      <Helmet>
        <title>{page.pageTitle} - Sophie Slade</title>
      </Helmet>
      <div className="pt-20">
        <Hero2 heroWithoutImg pageKey={pageKey} />
        <section className="pb-20 pt-14 bg-white">
          <div className="imago-container">
            <div className="xl:max-w-6xl mx-auto trainingDiv">
              {content.map((block, idx) => {
                if (block.text) {
                  return (
                    <div key={idx} className="mb-8 text-neutral-600 md:text-lg">
                      {block.title && (
                        <motion.h2
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeInUp}
                          className="mb-4"
                        >
                          {block.title}
                        </motion.h2>
                      )}
                      {block.img && (
                        <motion.img
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeInUp}
                          src={block.img}
                          alt={block.imgAlt}
                        />
                      )}
                      {block.text.map((line, j) => (
                        <motion.p
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeInUp}
                          className="mb-4"
                          key={j}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      ))}
                    </div>
                  );
                }
                if (block.embedLink) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="w-full my-20 h-80 md:h-[500px]"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={block.embedLink}
                        title="Dr. Harville Hendrix on Relationships | IIN Depth"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </motion.div>
                  );
                }
                if (block.cards) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className=" bg-imago-50 rounded-lg px-6 py-8 overflow-hidden"
                    >
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        breakpoints={{
                          0: { slidesPerView: 1 },
                          768: { slidesPerView: 2 },
                        }}
                        navigation
                        loop
                        className=" *:items-center cardSlider overflow-visible!"
                      >
                        {block.cards.map((course, idx) => (
                          <SwiperSlide
                            key={idx}
                            className="items-stretch h-full"
                          >
                            <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 transition-transform duration-300 transform hover:scale-105 h-full">
                              <h2 className="text-xl font-bold text-gray-800">
                                {course.title}
                              </h2>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {course.text}
                              </p>

                              <div className="space-y-4">
                                {course.info.map((session, sidx) => (
                                  <div
                                    key={sidx}
                                    className="border-t border-gray-200 pt-4"
                                  >
                                    <p className="text-sm text-gray-700">
                                      <span className="font-semibold">
                                        Date:
                                      </span>{" "}
                                      {session.date}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                      <span className="font-semibold">
                                        Time:
                                      </span>{" "}
                                      {session.time}
                                    </p>
                                    {session.host && (
                                      <p className="text-sm text-gray-700">
                                        <span className="font-semibold">
                                          Host:
                                        </span>{" "}
                                        {session.host}
                                      </p>
                                    )}
                                    <div className="flex justify-center gap-4 items-center mt-4 bg-imago-50 -mx-6 p-3">
                                      <Link
                                        to={session.regLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary no-underline! text-xs"
                                      >
                                        Register Here
                                      </Link>
                                      {session.contactDetails && (
                                        <div className=" space-y-1">
                                          {session.contactDetails.map(
                                            (contact, cidx) => (
                                              <Link
                                                key={cidx}
                                                to={contact.email}
                                                className="btn-primary flex items-center gap-2 text-xs bg-blue-500 no-underline! hover:bg-blue-800"
                                              >
                                                <BiSupport />
                                                <span>{contact.name}</span>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </motion.div>
                  );
                }
                if (block.tableData) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <ResponsiveTable table={block.tableData} />
                    </motion.div>
                  );
                }
                if (block.trainingDetail) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="mt-16 border-t border-t-neutral-300 pt-10"
                    >
                      <div className=" mx-auto bg-neutral-100 border border-imago-400 shadow-lg rounded-2xl p-8 space-y-6">
                        <div className="space-y-2">
                          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                            {block.trainingDetail.title}
                          </h1>
                          <p className="text-sm text-gray-500 mt-3">
                            <span className="text-imago-500">
                              {block.trainingDetail.loc}
                            </span>{" "}
                            &bull; {block.trainingDetail.host}
                          </p>
                        </div>
                        <p className="italic text-gray-600 font-medium">
                          {block.trainingDetail.tagline}
                        </p>
                        <div className="space-y-3">
                          {block.trainingDetail.detail.map((part, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg">
                              <h2 className="text-2xl mb-2 mt-0! font-semibold text-imago-600">
                                {part.title}
                              </h2>
                              <p className="text-gray-600">{part.text}</p>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {block.trainingDetail.contactDetails.map(
                            (contact, idx) => (
                              <a
                                key={idx}
                                href={contact.email}
                                className="flex items-center text-imago-700 hover:underline"
                              >
                                <BiSupport className="mr-3 bg-blue-200 text-blue-500 p-1 text-2xl rounded-sm" />
                                {contact.name}
                              </a>
                            )
                          )}
                        </div>
                        <div className="text-center flex justify-center">
                          <a
                            href={block.trainingDetail.regLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary no-underline! block w-full max-w-md text-lg"
                          >
                            {block.trainingDetail.regText}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                if (block.reviews) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="text-center mt-16"
                    >
                      <h1 className="text-5xl">{block.reviewsHeading}</h1>
                      <p></p>
                      <div className="relative w-full mt-10">
                        <Swiper
                          modules={[Autoplay, Pagination]}
                          loop
                          pagination
                          autoplay={{ delay: 30000 }}
                          slidesPerView={1}
                          spaceBetween={20}
                          className=" *:items-center cardSlider"
                        >
                          {block.reviews.map((review, idx) => (
                            <SwiperSlide
                              key={idx}
                              className="flex-col flex items-center justify-center h-full"
                            >
                              <div className="bg-imago-200 relative rounded-lg p-10 flex flex-col items-center justify-center gap-7">
                                <p>{review.comment}</p>
                                <div className="text-center">
                                  <h4 className="text-xl font-bold">
                                    {review.name}
                                  </h4>
                                </div>
                                <IoIosQuote className="text-primary absolute -bottom-5 -right-5 rotate-180 text-[180px] opacity-20 leading-none" />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </motion.div>
                  );
                }
                if (block.cta) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="border-t border-t-gray-200 mt-16 pt-6"
                    >
                      <div className="border border-imago-300 bg-imago-50 p-6 mt-10 rounded-lg text-center">
                        <div className="flex flex-col gap-5 py-5">
                          <h3 className="m-0">{block.cta.text}</h3>
                          <div>
                            <Link
                              to={block.cta.url}
                              className="btn-primary no-underline! md:text-base py-3 px-6"
                            >
                              {block.cta.btn}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
                if (block.regBtn) {
                  return (
                    <Link
                      key={idx}
                      to={block.regLink}
                      className="btn-primary no-underline! md:text-base py-3 px-6 w-full block mt-20 text-center max-w-md"
                    >
                      {block.regtext}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;
