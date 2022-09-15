import React from "react";
import Movies from "../assets/movies.png";
import Cards from "../assets/cards.png";
import Food from "../assets/food.png";
import Login from "../assets/login.png";
import RickAndMorty from "../assets/rickandmorty.png";
import Crud from "../assets/crud.png";

const projectsData = [
  {
    name: "Challenge Movies DB",
    img: Movies,
    url: "https://challenge-moviesdb.vercel.app/",
    code: "https://github.com/JonathanMRuiz/challenge-moviesdb",
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
    name: "CRUD with Context",
    img: Crud,
    url: "https://mini-desafio.vercel.app/",
    code: "https://github.com/JonathanMRuiz/mini-desafio",
  },
];
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-full md:h-screen text-gray-300 bg-[#0a192f] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mt-10">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.map((project, idx) => (
            <div
              style={{ backgroundImage: `url(${project.img})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              key={idx}
            >
              {/* Hover Effects */}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
