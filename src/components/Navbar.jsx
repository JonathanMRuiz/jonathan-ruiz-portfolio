import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import argentinaFlag from "../assets/arg.jpg";
import eeuuFlag from "../assets/eeuu.jpg";

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
  const { t, i18n } = useTranslation(["language"]);
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [language, setLanguage] = useState(i18n.language);

  const navList = [
    { name: t("nav_home"), path: "/" },
    // { name: t("nav_about"), path: "/about" },
    { name: t("nav_exp"), path: "/experience" },
    { name: t("nav_skill"), path: "/skills" },
    { name: t("nav_project"), path: "/projects" },
    { name: t("nav_contact"), path: "/contact" },
  ];

  useEffect(() => {
    const index = navList.findIndex((item) => item.path === location.pathname);
    setActiveIndex(index);
  }, [location.pathname, navList]);

  const handleClickNav = () => {
    setToggleNav(!toggleNav);
    document.body.style.overflow = toggleNav ? "auto" : "hidden";
  };

  const handleLanguageChange = (lang) => {
    if (lang === "es") {
      changeSpanish();
      setLanguage("es");
    } else if (lang === "en") {
      changeEnglish();
      setLanguage("en");
    }
  };

  const handleItemClick = () => {
    setToggleNav(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full h-[80px] flex justify-around items-center px-4 bg-[#0a192f] text-gray-300 relative">
      <div>
        <img src={Logo} alt="Logo" className="h-[70px] w-[120px]" />
      </div>
  
      <div className="flex">
        {navList.map((item, index) => (
          <ul className="hidden md:flex" key={index}>
            <li>
              <Link
                to={item.path}
                onClick={handleItemClick}
                className={`${
                  location.pathname === item.path && index === activeIndex
                    ? "active-link"
                    : ""
                } ${
                  location.pathname === item.path && index === activeIndex
                    ? "border-b-2 border-pink-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex">
        <button
          onClick={() => handleLanguageChange("es")}
          className={`mr-4 w-[30px] h-[30px] rounded-full overflow-hidden`}
        >
          <img src={argentinaFlag} alt="Argentina Flag" className="w-full h-full object-cover" />
        </button>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={language === "en"}
            onChange={() => handleLanguageChange(language === "es" ? "en" : "es")}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
        </label>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`ml-4 w-[30px] h-[30px] rounded-full overflow-hidden`}
        >
          <img src={eeuuFlag} alt="EEUU Flag" className="w-full h-full object-cover" />
        </button>
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
              <Link
                to={item.path}
                onClick={handleItemClick}
                className={`${
                  location.pathname === item.path && index === activeIndex
                    ? "active-link"
                    : ""
                } ${
                  location.pathname === item.path && index === activeIndex
                    ? "border-b-2 border-pink-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
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
