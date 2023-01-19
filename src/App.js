import { Suspense } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experiencie";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WhatsappComponent from "./components/WhatsappComponent";
import Projects from "./components/Projects";

import { useTranslation } from "react-i18next";
import Metadata from "./components/Metadata";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Welcolme = () => {
  const { i18n } = useTranslation(["language"]);

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
  };
  const changeToSpanish = () => {
    i18n.changeLanguage("es");
  };
  return (
    <BrowserRouter>
      <Metadata />
      <Navbar changeEnglish={changeToEnglish} changeSpanish={changeToSpanish} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsappComponent />
    </BrowserRouter>
  );
};

function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <Welcolme />
    </Suspense>
  );
}

export default App;
