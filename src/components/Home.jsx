import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
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
                "React.Js",
                "Next.Js",
                "HTML5 y CSS3",
                "Javascript",
                "API REST",
                "Node.Js",
                "MongoDb",
                "Express",
                "Firebase",
                "Redux",
                "Material UI",
                "Responsive Designer",
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
          <Link to="/projects">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700">
              {t("project_text")}
          
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
