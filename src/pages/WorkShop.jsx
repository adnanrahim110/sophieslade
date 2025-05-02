import { Calendar, Clock, MapPin, Tag, User } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { BiSupport } from "react-icons/bi";
import { FaEuroSign } from "react-icons/fa6";
import { IoIosQuote } from "react-icons/io";
import { Navigate, useParams } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useLanguage } from "../components/LanguageContext";
import Hero2 from "../components/ui/Hero2";
import "./trainings.css";

const WorkShop = () => {
  const { workshopType } = useParams();
  const currentPage = workshopType.replace("/workshops/", "");

  let pageKey;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (currentPage === "getting-the-love-you-want-workshop-for-couples") {
    pageKey = "gtlWorkshop";
  } else if (currentPage === "satisfying-sex-for-committed-couples-workshop") {
    pageKey = "sccWorkshop";
  } else if (
    currentPage === "keeping-the-love-you-find-a-workshop-for-singles"
  ) {
    pageKey = "klfWorkshop";
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
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      key={idx}
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
                if (block.tableData) {
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <div className="mt-20 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 px-2 lg:px-8 max-lg:overflow-x-auto">
                        <div className="align-middle inline-block min-w-full shadow-[0_0_8px_5px_rgba(0,0,0,0.1)] overflow-hidden bg-white px-8 pt-6 pb-5 rounded-bl-lg rounded-lg">
                          <table className="min-w-full">
                            <thead>
                              <tr className="border-b-2 border-b-neutral-300 text-sm font-black font-serif uppercase text-left text-neutral-600 tracking-wide *:py-3">
                                <th>Title</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Cost</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {block.tableData.map((item, idx) => (
                                <tr
                                  key={idx}
                                  className="not-last:border-b border-b-neutral-200 *:py-2"
                                >
                                  <td className="whitespace-no-wrap max-md:min-w-40">
                                    <div className="leading-5 text-black text-sm md:text-base font-medium max-w-11/12">
                                      {item.title}
                                    </div>
                                  </td>
                                  <td className="whitespace-no-wrap py-1 max-md:min-w-32">
                                    <div className="bg-imago-50 rounded-lg text-[10px] md:text-xs font-medium text-black max-w-10/12 px-3 text-center">
                                      {item.info.map((infoItem, i) => (
                                        <div
                                          key={i}
                                          className={`${
                                            item.info.length === 1
                                              ? "py-3"
                                              : "first:pt-3 first:pb-1 last:pt-1 last:pb-3 not-last:border-b border-b-imago-300"
                                          }`}
                                        >
                                          {infoItem.date}
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                  <td className="whitespace-no-wrap py-1 max-md:min-w-24">
                                    <div className="max-w-10/12 bg-green-50 px-2 text-xs text-green-800 rounded-lg text-center font-semibold">
                                      {item.info.map((infoItem, i) => (
                                        <div
                                          key={i}
                                          className={`${
                                            item.info.length === 1
                                              ? "py-3"
                                              : "first:pt-3 first:pb-1 last:pt-1 last:pb-3 not-last:border-b border-b-gray-300"
                                          }`}
                                        >
                                          {infoItem.time}
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                  <td className="whitespace-no-wrap py-1 max-md:min-w-56">
                                    <div className="max-w-10/12 bg-yellow-50 px-2 text-xs text-yellow-800 rounded-lg text-center font-semibold">
                                      {item.info.map((infoItem, i) => (
                                        <div
                                          key={i}
                                          className={`${
                                            item.info.length === 1
                                              ? "py-3"
                                              : "first:pt-3 first:pb-1 last:pt-1 last:pb-3 not-last:border-b border-b-gray-300"
                                          }`}
                                        >
                                          {infoItem.loc}
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                  <td className="whitespace-no-wrap py-1 max-md:min-w-72">
                                    <div className="max-w-10/12 bg-red-50 px-2 text-xs text-red-800 rounded-lg text-center font-semibold">
                                      {item.info.map((infoItem, i) => (
                                        <div
                                          key={i}
                                          className={`${
                                            item.info.length === 1
                                              ? "py-3"
                                              : "first:pt-3 first:pb-1 last:pt-1 last:pb-3 not-last:border-b border-b-gray-300"
                                          }`}
                                        >
                                          {infoItem.cost}
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                  <td className="whitespace-no-wrap text-right">
                                    <div className="flex flex-col gap-2">
                                      {item.info.map((infoItem, i) => (
                                        <a
                                          key={i}
                                          href={infoItem.url}
                                          className={`text-xs inline-block rounded-sm no-underline! text-white! text-center w-full min-w-24 px-2 py-1.5 bg-green-600 hover:bg-green-800`}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          {infoItem.btnText}
                                        </a>
                                      ))}
                                      {item.info.map((infoItem, i) => (
                                        <a
                                          key={i}
                                          href={`mailto:${infoItem.contact}`}
                                          className={`text-xs inline-block rounded-sm no-underline! text-white! text-center w-full min-w-24 px-2 py-1.5 bg-blue-500 hover:bg-blue-800`}
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          {infoItem.contactBtn}
                                        </a>
                                      ))}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
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
                      <div className="mx-auto max-w-6xl bg-neutral-50 border border-imago-400 shadow-lg rounded-2xl p-8 space-y-8">
                        {block.trainingDetail.title && (
                          <div className="space-y-2 text-center">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                              {block.trainingDetail.title}
                            </h1>
                          </div>
                        )}

                        {(block.trainingDetail.loc ||
                          block.trainingDetail.host) && (
                          <div className="text-center space-y-1">
                            {block.trainingDetail.loc && (
                              <p className="flex flex-wrap mb-3 items-center justify-center gap-2 text-gray-600">
                                <MapPin className="w-5 h-5 text-imago-500" />
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: block.trainingDetail.loc,
                                  }}
                                />
                              </p>
                            )}
                            {block.trainingDetail.host && (
                              <p
                                className="text-sm text-gray-500"
                                dangerouslySetInnerHTML={{
                                  __html: block.trainingDetail.host,
                                }}
                              />
                            )}
                          </div>
                        )}

                        {block.trainingDetail.tagline && (
                          <div
                            className="prose prose-imago mx-auto text-center italic text-gray-700"
                            dangerouslySetInnerHTML={{
                              __html: block.trainingDetail.tagline,
                            }}
                          />
                        )}

                        {(block.trainingDetail.date ||
                          block.trainingDetail.time ||
                          block.trainingDetail.cost ||
                          block.trainingDetail.disc) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {block.trainingDetail.date && (
                              <div className="flex max-md:flex-col max-md:text-center items-center gap-2">
                                <span>
                                  <Calendar className="w-5 h-5 text-imago-500 text-lg" />
                                </span>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: block.trainingDetail.date,
                                  }}
                                />
                              </div>
                            )}
                            {block.trainingDetail.time && (
                              <div className="flex max-md:flex-col max-md:text-center items-center gap-2">
                                <Clock className="w-5 h-5 text-imago-500" />
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: block.trainingDetail.time,
                                  }}
                                />
                              </div>
                            )}
                            {block.trainingDetail.cost && (
                              <div
                                className={`flex max-md:flex-col max-md:text-center items-center gap-2 ${
                                  block.trainingDetail.disc
                                    ? "text-sm"
                                    : "lg:col-span-2 lg:max-w-11/12"
                                }`}
                              >
                                <span>
                                  <FaEuroSign className="w-5 h-5 text-imago-500 text-lg" />
                                </span>
                                {block.trainingDetail.cost}
                              </div>
                            )}
                            {block.trainingDetail.disc && (
                              <div className="flex max-md:flex-col max-md:text-center items-center gap-2">
                                <Tag className="w-5 h-5 text-imago-500 rotate-45" />
                                {block.trainingDetail.disc}
                              </div>
                            )}
                          </div>
                        )}

                        {block.trainingDetail.detail?.length > 0 && (
                          <div className="space-y-6">
                            {block.trainingDetail.detail.map((part, idx) => (
                              <div
                                key={idx}
                                className="bg-white border border-imago-200 rounded-lg p-6 shadow-sm"
                              >
                                {part.title && (
                                  <h2
                                    className="text-2xl font-semibold text-imago-600 mb-4"
                                    dangerouslySetInnerHTML={{
                                      __html: part.title,
                                    }}
                                  />
                                )}
                                {part.text && (
                                  <div
                                    className="text-gray-700 space-y-4 prose prose-imago"
                                    dangerouslySetInnerHTML={{
                                      __html: part.text,
                                    }}
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {block.trainingDetail.policy && (
                          <div className="bg-white border border-red-200 rounded-lg p-4 text-sm text-gray-600 cp">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: block.trainingDetail.policy,
                              }}
                            />
                          </div>
                        )}

                        {block.trainingDetail.contactDetails?.length > 0 && (
                          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            {block.trainingDetail.contactDetails.map(
                              (contact, idx) => (
                                <a
                                  key={idx}
                                  href={contact.email}
                                  className="flex items-center gap-3 bg-white border border-imago-200 hover:shadow-md rounded-lg px-5 py-3 transition"
                                >
                                  <BiSupport className="w-6 h-6 text-blue-500" />
                                  <span className="font-medium text-imago-700">
                                    {contact.name}
                                  </span>
                                </a>
                              )
                            )}
                          </div>
                        )}

                        {block.trainingDetail.regLink &&
                          block.trainingDetail.regText && (
                            <div className="text-center">
                              <a
                                href={block.trainingDetail.regLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block btn-primary bg-imago-600 hover:bg-imago-700 text-white font-semibold rounded-full px-8 py-3 text-lg transition-shadow shadow-md"
                              >
                                {block.trainingDetail.regText}
                              </a>
                            </div>
                          )}
                      </div>
                    </motion.div>
                  );
                }
                if (block.workshopDetail) {
                  const wd = block.workshopDetail;
                  return (
                    <article
                      key={idx}
                      className="max-w-6xl mx-auto md:p-6 space-y-8"
                    >
                      {wd.title && (
                        <section className="bg-white border-l-4 border-imago-500 rounded-xl shadow-md p-6 space-y-4">
                          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {wd.title}
                          </h1>
                          {wd.creator && (
                            <p className="text-gray-600">
                              <span className="font-semibold text-imago-500">
                                {wd.creatorLabel}
                              </span>{" "}
                              <span
                                dangerouslySetInnerHTML={{ __html: wd.creator }}
                              />
                            </p>
                          )}
                          {wd.Presentor && (
                            <p className="text-gray-600">
                              <span className="font-semibold text-imago-500">
                                {wd.PresentorLabel}
                              </span>{" "}
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: wd.Presentor,
                                }}
                              />
                            </p>
                          )}
                        </section>
                      )}

                      {wd.detail?.length > 0 && (
                        <section className="bg-gray-50 rounded-lg p-6 space-y-4 prose prose-imago">
                          {wd.detail.map((part, i) => (
                            <React.Fragment key={i}>
                              {part.text.map((txt, j) => (
                                <div
                                  key={j}
                                  dangerouslySetInnerHTML={{ __html: txt }}
                                />
                              ))}
                            </React.Fragment>
                          ))}
                        </section>
                      )}

                      {wd.part2 && (
                        <section className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                          {wd.part2.title && (
                            <div className="flex items-center space-x-2 text-gray-700">
                              <h2 className="mt-0 text-imago-700">
                                {wd.part2.title}
                              </h2>
                            </div>
                          )}
                          {wd.part2.presentor && (
                            <div className="flex items-center space-x-2 text-gray-700">
                              <User className="w-5 h-5 text-imago-500" />
                              <b>{wd.PresentorLabel}</b>
                              <span>{wd.part2.presentor}</span>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-4 text-sm font-medium">
                            {wd.part2.loc && (
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-5 h-5 text-imago-500" />
                                <span>{wd.part2.loc}</span>
                              </div>
                            )}
                            {wd.part2.date && (
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-5 h-5 text-imago-500" />
                                <span>{wd.part2.date}</span>
                              </div>
                            )}
                            {wd.part2.time && (
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-5 h-5 text-imago-500" />
                                <span>{wd.part2.time}</span>
                              </div>
                            )}
                            {wd.part2.cost && (
                              <div className="flex items-center gap-2 text-gray-600">
                                <Tag className="w-5 h-5 text-imago-500" />
                                <span>{wd.part2.cost}</span>
                              </div>
                            )}
                          </div>
                          {wd.part2.policy && (
                            <div
                              className="border border-red-300 rounded-lg p-3 bg-red-50/50 text-sm text-gray-700 prose prose-sm prose-imago cp"
                              dangerouslySetInnerHTML={{
                                __html: wd.part2.policy,
                              }}
                            />
                          )}
                          <div className="flex flex-wrap items-center gap-6">
                            {wd.part2.contactDetails && (
                              <a
                                href={wd.part2.contactDetails.email}
                                className="no-underline! inline-flex items-center gap-3 bg-blue-500 text-white rounded-full px-5 py-2 hover:bg-blue-600 transition"
                              >
                                <span>
                                  <BiSupport />
                                </span>
                                <span>{wd.part2.contactDetails.name}</span>
                              </a>
                            )}
                            {wd.part2.regLink && wd.part2.regText && (
                              <a
                                href={wd.part2.regLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-underline btn-primary bg-imago-600 hover:bg-imago-700 text-white font-semibold rounded-full px-8 py-3 transition-shadow shadow-md"
                              >
                                {wd.part2.regText}
                              </a>
                            )}
                          </div>
                        </section>
                      )}

                      {wd.part3 && (
                        <section className="bg-gray-50 rounded-lg p-6 space-y-4 prose prose-imago">
                          {wd.part3.title && (
                            <h2 className="text-2xl font-semibold text-imago-600">
                              {wd.part3.title}
                            </h2>
                          )}
                          {wd.part3.text.map((txt, i) => (
                            <div
                              key={i}
                              dangerouslySetInnerHTML={{ __html: txt }}
                            />
                          ))}
                          {wd.part3.alert && (
                            <p className="bg-imago-100 border-l-4 border-imago-500 text-imago-700 p-4 font-medium rounded-md">
                              {wd.part3.alert}
                            </p>
                          )}
                        </section>
                      )}

                      {wd.lastPara && (
                        <section
                          className="bg-white rounded-lg shadow-sm p-6 prose prose-imago text-gray-700"
                          dangerouslySetInnerHTML={{ __html: wd.lastPara }}
                        />
                      )}
                    </article>
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
                                  {review.name && (
                                    <h4 className="text-xl font-bold">
                                      {review.name}
                                    </h4>
                                  )}
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
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkShop;
