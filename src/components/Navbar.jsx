/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const socialIcons = [
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
  {
    name: "Email",
    icon: <HiOutlineMail size={30} />,
    background: "bg-[#6fc2b0]",
    url: "",
  },
];

const navList = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Works", path: "work" },
  { name: "Contact", path: "contact" },
];

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleClickNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" className="h-[80px] w-[120px]" />
      </div>

      <ul className="hidden md:flex">
        {navList.map((item) => (
          <li>
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

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
        {navList.map((item) => (
          <li className="py-6 text-4xl">
            <Link
              activeClass="active"
              to={item.path}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialIcons.map((item) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
