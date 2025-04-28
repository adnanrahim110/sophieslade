import { BookOpen, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Services = () => {
  const { home } = useLanguage();
  const { services } = home;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconMap = {
    Users: Users,
    BookOpen: BookOpen,
    Heart: Heart,
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="imago-container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-imago-700 mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {services.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.cards.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Users;
            return (
              <motion.div
                key={card.title}
                className="bg-white rounded-lg group shadow-sm cursor-pointer overflow-hidden hover:shadow-lg transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 * index }}
              >
                <div className="bg-imago-100 group-hover:bg-imago-300 transition-all duration-200 ease-linear p-6 flex justify-center">
                  <IconComponent size={48} className="text-imago-600" />
                </div>
                <div className="p-6 flex group-hover:bg-imago-50 flex-col justify-between h-full max-h-[200px]">
                  <h3 className="text-xl font-semibold mb-3 text-imago-700">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.text}</p>
                  <Link
                    to={card.path}
                    className="mt-4 inline-flex items-center gap-2 text-imago-600 font-medium hover:text-imago-700 group"
                  >
                    <span className="underline underline-offset-2 transition-all duration-200 ease-linear decoration-imago-600 hover:decoration-transparent">
                      {services.buttonLabel}
                    </span>
                    <FaArrowRightLong className="group-hover:ml-1 transition-all duration-200 ease-linear" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
