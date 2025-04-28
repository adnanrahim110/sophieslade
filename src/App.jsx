import { AnimatePresence } from "motion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";
import { LanguageProvider } from "./components/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnimatePresence>
          <AppContent />
        </AnimatePresence>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
