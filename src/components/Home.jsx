import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hola, soy </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Matias Ruiz
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Desarrollador Frontend
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">
          <Typewriter
            options={{
              strings: [
                "React.js",
                "HTML5 y CSS3",
                "Javascript",
                "API Services",
                "Node.js",
                "MongoDb",
                "Express",
                "Redux",
                "Material UI",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <div>
          <p className="text-white">
            Desarrollador Frontend con dos años de experiencia desarrollando
            aplicaciones por mi cuenta y 1 año trabajando como desarrollador
            Freelance para una Startup de Colorado.
          </p>
          <br />
          <p className="text-white">
            Estoy listo para ayudar con mis conocimientos a crear aplicaciones
            funcionales, reutilizables y escalables a futuro.
          </p>
        </div>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Mis Proyectos
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
