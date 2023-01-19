/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const socialIcons = [
  {
    name: "Linkedin",
    icon: <FaLinkedin size={30} />,
    background: "bg-blue-600",
    url: "https://www.linkedin.com/in/jonathanmruiz/",
  },
  {
    name: "Github",
    icon: <FaGithub size={30} />,
    background: "bg-black",
    url: "https://github.com/JonathanMRuiz",
  },
];

const Navbar = ({ changeSpanish, changeEnglish }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const { t } = useTranslation(["language"]);

  const navList = [
    { name: "Inicio", path: "/" },
    { name: "Sobre mi", path: "/about" },
    { name: "Experiencia", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Mis Proyectos", path: "/projects" },
    { name: "Contactame", path: "/contact" },
  ];

  const handleClickNav = () => {
    setToggleNav(!toggleNav);
  };

  console.log(t);
  return (
    <div className="w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img src={Logo} alt="Logo" className="h-[70px] w-[120px]" />
      </div>
      <div>
        <button onClick={changeSpanish} className="mr-4">
          ES
        </button>
        <button onClick={changeEnglish}>EN</button>
      </div>

      <div className="flex">
        {navList.map((item, index) => (
          <ul className="hidden md:flex" key={index}>
            <li>
              <Link to={item.path}>{item.name}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div onClick={handleClickNav} className="md:hidden z-10">
        {!toggleNav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !toggleNav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {navList.map((item, index) => (
          <div key={index}>
            <li className="py-6 text-4xl" key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          </div>
        ))}
        <div className="flex justify-center lg:hidden h-6 mt-6">
          {socialIcons.map((item, index) => (
            <div key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="ml-4"
              >
                <span>{item.icon}</span>
              </a>
            </div>
          ))}
        </div>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialIcons.map((item, index) => (
            <div key={index}>
              <li
                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${item.background}`}
              >
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name} {item.icon}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
