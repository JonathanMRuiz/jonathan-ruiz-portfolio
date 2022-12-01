import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["language"]);
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">{t("hello_myNameIs")} </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jonathan Ruiz
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          {t("developer_fullstack")}
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
          <p className="text-white">{t("description_home")}</p>
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
              {t("project_btn")}
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
