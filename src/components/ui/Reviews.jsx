import { motion } from "motion/react";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "../LanguageContext";

const Reviews = () => {
  const { testimonials } = useLanguage();
  const { heading, items } = testimonials;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-imago-100 text-black">
      <div className="imago-container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={40}
          slidesPerView={2}
          className="reviewsSlider"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {items.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-imago-200 p-8 rounded-lg min-h-52 flex flex-col items-start justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <blockquote className="text-xl font-light italic mb-6">
                  "{review.text}"
                </blockquote>
                <cite className="font-medium">— {review.author}</cite>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
