import React from "react";
import { useTranslation } from "react-i18next";
import Movies from "../assets/movies.png";
import Cards from "../assets/cards.png";
import Food from "../assets/food.png";
import Login from "../assets/login.png";
import RickAndMorty from "../assets/rickandmorty.png";
import Crud from "../assets/crud.png";
import Twitter from "../assets/twitter-clon.png";
import Youtube from "../assets/youtube-clon.png";
import Lyriks from "../assets/Lyriks.png";
import ChallengeForm from "../assets/challengeform.png";
import Fade from "react-awesome-reveal";

// https://www.gunnygames.com/

const projectsData = [
  {
    name: "Gunny Games",
    img: "https://gunnyvideos.s3.amazonaws.com/background_01.jpg",
    url: "https://www.gunnygames.com/",
    code: "https://github.com/JonathanMRuiz/",
  },
  {
    name: "Lyriks",
    img: Lyriks,
    url: "https://spotify-clone-beta-amber.vercel.app/",
    code: "https://github.com/JonathanMRuiz/spotify-clone",
  },
  {
    name: "Youtube Clon",
    img: Youtube,
    url: "https://youtube-clone-om49.vercel.app/",
    code: "https://github.com/JonathanMRuiz/youtube-clone",
  },
  {
    name: "Twitter Clon with Firebase",
    img: Twitter,
    url: "https://twitter-clon-react-362e.vercel.app/",
    code: "https://github.com/JonathanMRuiz/twitter-clon-next",
  },

  {
    name: "Challenge Movies DB",
    img: Movies,
    url: "https://challenge-moviesdb.vercel.app/",
    code: "https://github.com/JonathanMRuiz/challenge-moviesdb",
  },
  {
    name: "Challenge Form",
    img: ChallengeForm,
    url: "https://challenge-greydive-kappa-ecru.vercel.app/",
    code: "https://github.com/JonathanMRuiz/challenge-greydive",
  },
  {
    name: "Rick and Morty API",
    img: RickAndMorty,
    url: "https://rick-and-morty-app-red.vercel.app/",
    code: "https://github.com/JonathanMRuiz/rick-and-morty-app",
  },
  {
    name: "Food Store Template",
    img: Food,
    url: "https://food-store-five.vercel.app/",
    code: "https://github.com/JonathanMRuiz/food-store",
  },
  {
    name: "Login Template with Tailwind CSS",
    img: Login,
    url: "https://login-template-tailwind.vercel.app/",
    code: "https://github.com/JonathanMRuiz/login-template-tailwind",
  },
  {
    name: "Cards Template with Tailwind CSS",
    img: Cards,
    url: "https://price-cards.vercel.app/",
    code: "https://github.com/JonathanMRuiz/card-price-template",
  },

  {
    name: "CRUD with Context (Challenge for interview)",
    img: Crud,
    url: "https://mini-desafio.vercel.app/",
    code: "https://github.com/JonathanMRuiz/mini-desafio",
  },
];

const Projects = () => {
  const { t } = useTranslation(["language"]);

  return (
    <div name="projects" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mt-10">
            {t("project_text")}
          </p>
          <p className="py-6">{t("text_projects")}</p>
          <p> {t("github_project")}</p>
          <a
            href="https://github.com/JonathanMRuiz"
            target="_blank"
            rel="noreferrer"
            className="text-pink-400"
          >
            Visit my Github
          </a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.map((project, idx) => (
            <Fade key={idx} triggerOnce>
              <div
                style={{
                  backgroundImage: `url(${project.img})`,
                }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100 text-center">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {project.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
