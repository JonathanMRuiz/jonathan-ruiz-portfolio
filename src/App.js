import { Suspense } from "react";
import { Helmet } from "react-helmet";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experiencie";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WhatsappComponent from "./components/WhatsappComponent";
import Projects from "./components/Projects";

import { useTranslation } from "react-i18next";

const Welcolme = () => {
  const { i18n } = useTranslation(["language"]);

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
  };
  const changeToSpanish = () => {
    i18n.changeLanguage("es");
  };
  return (
    <>
      <Helmet>
        <title>Desarrollador FullStack - Jonathan Ruiz</title>
        <meta name="title" content="Desarrollador FullStack - Jonathan Ruiz" />
        <meta
          name="description"
          content="Todo lo que necesitas para el desarrollo de tu aplicación web.  
Desarrollador Fullstack listo para ayudar a crear aplicaciones funcionales, componentes reutilizables. 
"
        />
      </Helmet>
      <Navbar changeEnglish={changeToEnglish} changeSpanish={changeToSpanish} />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <WhatsappComponent />
    </>
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
