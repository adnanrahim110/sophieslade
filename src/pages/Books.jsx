import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { bookcover } from "../assets";
import { useLanguage } from "../components/LanguageContext";
import Hero2 from "../components/ui/Hero2";
const Books = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const { book } = useLanguage();
  const { bookSec, reviews } = book;
  return (
    <>
      <Helmet>
        <title>{book.pageTitle} - Sophie Slade</title>
      </Helmet>
      <div className="pt-20">
        <Hero2 heroWithoutImg pageKey={"book"} />

        <section className="pt-40 pb-20 bg-white">
          <div className="imago-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center content-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="col-span-7"
              >
                <h2 className="text-3xl font-bold text-imago-700 mb-3">
                  {bookSec.heading}
                </h2>
                <h3 className="text-2xl font-semibold mb-4">
                  {bookSec.subheading}
                </h3>
                <div className="space-y-4 text-gray-700">
                  {bookSec.text.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-start gap-5">
                  <button className="btn-primary">{bookSec.btn1}</button>
                  <a href="#" target="_blank" className="btn-secondary">
                    {bookSec.btn2}
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative z-[1] col-span-5"
              >
                <img
                  src={bookcover}
                  alt="Book cover"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-7 -left-7 w-24 h-24 rounded-full bg-imago-200 -z-[1]"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-imago-50">
          <div className="imago-container">
            <motion.h2
              className="text-4xl font-bold text-imago-700 mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {reviews.heading}
            </motion.h2>

            <motion.div
              className="max-w-5xl mx-auto bg-imago-100 border border-white rounded-lg p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ul className="space-y-6">
                {reviews.comments.map((review, idx) => (
                  <li
                    key={idx}
                    className="border-b border-white pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-start gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-imago-700">
                        {review.name}
                      </h3>
                      <span className="w-4 h-px bg-neutral-500"></span>
                      <p className="text-gray-600 text-[15px] max-w-2/3 w-full line-clamp-1">
                        {review.title}
                      </p>
                    </div>
                    <p className="text-black">{review.comment}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Books;
