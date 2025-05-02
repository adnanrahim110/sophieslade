import { motion } from "motion/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLanguage } from "./components/LanguageContext";
import SplashPage from "./components/SplashPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import About from "./pages/About";
import AboutImago from "./pages/AboutImago";
import Books from "./pages/Books";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Training from "./pages/Training";
import Trainings from "./pages/Trainings";
import WorkShop from "./pages/WorkShop";
import WorkShops from "./pages/WorkShops";

const AppContent = () => {
  const { showSplash } = useLanguage();
  return (
    <>
      {showSplash ? (
        <SplashPage />
      ) : (
        <div className="flex flex-col min-h-dvh">
          <Header />
          <ScrollToTop />
          <motion.main
            className="grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-imago" element={<AboutImago />} />
              <Route path="/books" element={<Books />} />
              <Route path="/trainings" element={<Trainings />} />
              <Route path="/trainings/:trainingType" element={<Training />} />
              <Route path="/workshops" element={<WorkShops />} />
              <Route path="/workshops/:workshopType" element={<WorkShop />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppContent;
