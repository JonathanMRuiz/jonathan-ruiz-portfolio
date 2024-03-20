import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Metadata from "./components/Metadata";
import Navbar from "./components/Navbar";
import WhatsappComponent from "./components/WhatsappComponent";
import Loading from "./components/Loading";

const Home = lazy(() => import("./components/Home"));
// const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const LazyLoadedComponent = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="bg-primary h-screen flex justify-center items-center bg-[#0a192f]">
          <Loading />
        </div>
      ) : (
        <Suspense fallback="Cargando traducciones">
          <Component {...rest} />
        </Suspense>
      )}
    </div>
  );
};

const Welcome = () => {
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
        <Route path="/" element={<LazyLoadedComponent component={Home} />} />
        {/* <Route
          path="/about"
          element={<LazyLoadedComponent component={About} />}
        /> */}
        <Route
          path="/experience"
          element={<LazyLoadedComponent component={Experience} />}
        />
        <Route
          path="/skills"
          element={<LazyLoadedComponent component={Skills} />}
        />
        <Route
          path="/projects"
          element={<LazyLoadedComponent component={Projects} />}
        />
        <Route
          path="/contact"
          element={<LazyLoadedComponent component={Contact} />}
        />
      </Routes>

      <WhatsappComponent />
    </BrowserRouter>
  );
};

function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <Welcome />
    </Suspense>
  );
}

export default App;
