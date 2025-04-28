import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import Hero2 from "../components/ui/Hero2";

const WorkShops = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const { workshopsPage } = useLanguage();
  const { workshopTypes, buttonLabel, buttonLabel2 } = workshopsPage;

  const [selectedId, setSelectedId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (selectedId && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedId]);

  return (
    <div className="pt-20">
      <Hero2 heroWithoutImg pageKey={"workshopsPage"} />

      <section className="pt-32 pb-10 bg-white">
        <div className="imago-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className={`${
                  selectedId === type.id
                    ? "bg-imago-500 border-imago-500"
                    : "bg-imago-50/50 hover:bg-imago-200 border-imago-200 hover:border-imago-500 hover:shadow-none shadow-md"
                } cursor-pointer transition-all duration-200 ease-in-out group border rounded-lg overflow-hidden h-full`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={() =>
                  setSelectedId(selectedId === type.id ? null : type.id)
                }
              >
                <div
                  className={`p-6 border-b ${
                    selectedId === type.id
                      ? "border-white"
                      : "border-gray-100 group-hover:border-white"
                  }`}
                >
                  <div
                    className={`w-16 *:w-10 h-16 *:h-10 ${
                      selectedId === type.id
                        ? "bg-imago-100 fill-imago-800"
                        : "bg-imago-100 group-hover:bg-white"
                    } rounded-full flex items-center justify-center mb-4`}
                  >
                    {type.id === 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="icons"
                        viewBox="0 0 60 60"
                        width="512"
                        height="512"
                      >
                        <path d="M4,60H28a3.972,3.972,0,0,0,3-1.382A3.975,3.975,0,0,0,34,60H56a4,4,0,0,0,4-4V46A11.977,11.977,0,0,0,49,34.049V32.164a10.032,10.032,0,0,0,5.962-8.28A4.009,4.009,0,0,0,58,20V14.958c0-.084-.095-6.526-6.031-9.491C51.654,2.408,48.651,0,45,0c-3.634,0-6.629,2.387-6.966,5.429C32.1,8.376,32,14.873,32,14.958V20a4.008,4.008,0,0,0,3.039,3.883A10.029,10.029,0,0,0,41,32.163v1.881a11.917,11.917,0,0,0-1.739.271,5.08,5.08,0,0,0-1.6-1.575,5.347,5.347,0,0,0-6.489.739L31,33.64l-.163-.154a5.35,5.35,0,0,0-6.5-.746,5.083,5.083,0,0,0-1.6,1.575A12.047,12.047,0,0,0,20,34V32.243a11.019,11.019,0,0,0,6.965-9.36A4.009,4.009,0,0,0,30,19V11A7.011,7.011,0,0,0,24.3,4.12,2.417,2.417,0,0,0,22.58,0H13A11.013,11.013,0,0,0,2,11v8a4.009,4.009,0,0,0,3.036,3.883A11.02,11.02,0,0,0,12,32.243V34A11.994,11.994,0,0,0,0,46V56A4,4,0,0,0,4,60ZM45,2a5.073,5.073,0,0,1,4.663,2.594A17.827,17.827,0,0,0,44.929,4h-.012a17.512,17.512,0,0,0-4.569.564A5.092,5.092,0,0,1,45,2Zm-.078,4C55.819,6,56,14.6,56,14.958v.226a2.926,2.926,0,0,0-2.789.41,8.588,8.588,0,0,0-7.5-4.572,2.9,2.9,0,0,0-1.844.53l-6.356,4.807A2.951,2.951,0,0,0,34,15.184v-.223C34,14.6,34.181,6,44.923,6ZM37,23a1,1,0,0,0-1-1,2,2,0,0,1-2-2V18a1,1,0,0,1,2,0,1,1,0,0,0,1.6.8l7.426-5.619a.859.859,0,0,1,.556-.16,6.473,6.473,0,0,1,6.427,5.138A1,1,0,0,0,54,18a1,1,0,0,1,2,0v2a2,2,0,0,1-2,2,1,1,0,0,0-1,1,8,8,0,0,1-16,0Zm8,10a10.124,10.124,0,0,0,2-.2V35a2,2,0,0,1-4,0V32.8A10.132,10.132,0,0,0,45,33Zm-3.838,3.062a3.977,3.977,0,0,0,7.684-.021A9.98,9.98,0,0,1,58,46V56a2,2,0,0,1-2,2H54V48a1,1,0,0,0-2,0V58H38V48a1,1,0,0,0-2,0V58H34a2,2,0,0,1-2-2V46.433l6.483-6.113v0a4.754,4.754,0,0,0,1.493-3.942c-.005-.048-.016-.094-.023-.141A9.924,9.924,0,0,1,41.163,36.062ZM25.4,34.436a3.1,3.1,0,0,1,1.651-.46,3.54,3.54,0,0,1,2.411.963l.849.8a1,1,0,0,0,1.372,0l.858-.807a3.388,3.388,0,0,1,4.056-.5,2.84,2.84,0,0,1,1.387,2.139,2.765,2.765,0,0,1-.877,2.29L31,44.626l-6.108-5.76a2.762,2.762,0,0,1-.879-2.289A2.838,2.838,0,0,1,25.4,34.436ZM13,2H22.58a.4.4,0,0,1,.385.258.4.4,0,0,1-.09.454L21.294,4.293A1,1,0,0,0,22,6h1a5.006,5.006,0,0,1,5,5v2.184a2.926,2.926,0,0,0-2.762.39,4.233,4.233,0,0,0-2.885-1.782A9.864,9.864,0,0,1,17.3,9.979a1.948,1.948,0,0,0-2.6,0,9.857,9.857,0,0,1-5.05,1.813,4.223,4.223,0,0,0-2.885,1.782A2.928,2.928,0,0,0,4,13.184V11A9.01,9.01,0,0,1,13,2ZM7,22a1,1,0,0,0-1-1,2,2,0,0,1-2-2V16a1,1,0,0,1,2,0v0a1,1,0,0,0,2,0H8v0a2.25,2.25,0,0,1,1.923-2.225A11.6,11.6,0,0,0,16,11.5a11.6,11.6,0,0,0,6.078,2.276A2.25,2.25,0,0,1,24,16a1,1,0,0,0,2,0,1,1,0,0,1,2,0v3a2,2,0,0,1-2,2,1,1,0,0,0-1,1A9,9,0,0,1,7,22Zm9,11a10.98,10.98,0,0,0,2-.187V35a2,2,0,1,1-4,0V32.813A11,11,0,0,0,16,33ZM2,46A9.993,9.993,0,0,1,12,36h.142a3.981,3.981,0,0,0,7.716,0H20a10.042,10.042,0,0,1,2.047.235c-.006.049-.018.095-.023.144a4.747,4.747,0,0,0,1.5,3.941L30,46.431V56a2,2,0,0,1-2,2H26V48a1,1,0,0,0-2,0V58H8V48a1,1,0,0,0-2,0V58H4a2,2,0,0,1-2-2Z" />
                        <path d="M20.8,25.6a1,1,0,1,0-1.6-1.2,4,4,0,0,1-6.4,0,1,1,0,1,0-1.6,1.2,6,6,0,0,0,9.6,0Z" />
                        <path d="M47.8,27.6a1,1,0,1,0-1.6-1.2,1.544,1.544,0,0,1-2.4,0,1,1,0,1,0-1.6,1.2A3.472,3.472,0,0,0,45,29,3.52,3.52,0,0,0,47.8,27.6Z" />
                      </svg>
                    ) : (
                      <svg
                        id="Layer_1"
                        enableBackground="new 0 0 30 32"
                        viewBox="0 0 30 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m25.2 16.4c-1.2 0-2.3.4-3.2 1.2-2-1.7-5.1-1.5-6.8.5-1.5 1.8-1.6 4.4-.1 6.2.1.1 2.2 2.3 6.2 6.4l.7.7.7-.7c3.9-4 6-6.2 6.2-6.4 1.7-2.1 1.3-5.1-.7-6.8-.8-.7-1.9-1.1-3-1.1zm2.2 6.6c-.3.3-3.1 3.2-5.4 5.6-2.3-2.3-5.2-5.3-5.4-5.5-.4-.5-.6-1.1-.6-1.8 0-1.6 1.3-2.8 2.8-2.8.9 0 1.8.5 2.3 1.2l.8 1.2.8-1.2c.9-1.3 2.7-1.6 3.9-.7.8.5 1.2 1.4 1.2 2.3.2.6 0 1.2-.4 1.7z" />
                        <path d="m7.9 9.4c.1-.3.1-.7.1-1.1.2-3.8 2.6-6.3 6-6.3 3.9 0 5.8 3.4 6 6.5 0 .4.1.8.1 1.2l.3 1.7c.1.3.2 1 .4 1.6.1.5.2 1 .3 1.2l2-.4c-.1-.3-.2-.8-.3-1.3-.1-.6-.3-1.2-.3-1.5l-.3-1.7c-.1-.3-.2-.6-.2-.9-.3-5-3.5-8.4-8-8.4s-7.7 3.4-8 8.2v.9l-.3 1.7c-.4 2.7-1 5.4-1.6 8l-.1 2.2h5c.4 0 .8.3 1 .7l-8.1 3.3c-1.1.4-1.9 1.5-1.9 2.7v4.3h14v-2h-12v-2.3c0-.3.3-.6.6-.7l9.4-4v-1c0-1.7-1.3-3-3-3h-3c.6-2.6 1.2-5.3 1.6-7.9z" />
                      </svg>
                    )}
                  </div>
                  <h3
                    className={`text-2xl font-serif font-semibold ${
                      selectedId === type.id
                        ? "text-white"
                        : "text-imago-700 group-hover:text-imago-800"
                    } mb-2`}
                  >
                    {type.heading}
                  </h3>
                  <h4
                    className={`text-lg mb-4 font-sans font-medium ${
                      selectedId === type.id
                        ? "text-imago-200"
                        : "text-gray-600 group-hover:text-gray-800"
                    }`}
                  >
                    {type.subheading}
                  </h4>
                </div>
                <div className="p-6 bg-gray-200/50">
                  {type.text.slice(0, 2).map((para, idx) => (
                    <p key={idx} className="text-gray-700 line-clamp-1">
                      {para}
                    </p>
                  ))}
                </div>
                <div
                  className={`p-6 border-t ${
                    selectedId === type.id
                      ? "border-white"
                      : "border-gray-200/50 group-hover:border-white"
                  }`}
                >
                  <button
                    className={`${
                      selectedId === type.id
                        ? "text-white"
                        : "text-imago-600 group-hover:text-imago-800"
                    } font-medium inline-flex items-center group`}
                  >
                    {selectedId === type.id ? buttonLabel2 : buttonLabel}
                    <span
                      className={`ml-1 ${
                        selectedId === type.id
                          ? "group-hover:-translate-y-1"
                          : "group-hover:translate-y-1"
                      } transition-all duration-200 ease-linear`}
                    >
                      {selectedId === type.id ? "↑" : "↓"}
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedId > 0 && (
        <section ref={sectionRef} className="py-20 bg-imago-50/60">
          <div className="imago-container">
            <div className="space-y-8">
              {workshopTypes
                .find((workshop) => workshop.id === selectedId)
                .list.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-imago-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12">
                      <div className="bg-imago-100 p-6 md:col-span-7">
                        <h3 className="text-xl font-semibold text-imago-600 mb-4">
                          {item.title}
                        </h3>
                        <div className="space-y-3 text-gray-900">
                          <div className="flex items-center">
                            <Calendar
                              size={18}
                              className="text-imago-800 mr-2"
                            />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={18} className="text-imago-800 mr-2" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={18} className="text-imago-800 mr-2" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="py-6 px-10 md:col-span-5 flex flex-col items-start justify-between">
                        <p className="text-black font-medium mb-6">
                          {item.cost}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          {item.expired ? (
                            <button disabled className="btn-primary dis">
                              Expired
                            </button>
                          ) : (
                            <a href={item.regLink} className="btn-primary">
                              Register Now
                            </a>
                          )}
                          <Link className="btn-secondary">
                            More information
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WorkShops;
