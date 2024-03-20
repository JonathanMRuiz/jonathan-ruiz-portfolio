import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiMaterialui,
  SiMongodb,
  SiFigma,
  SiDiscord,
  SiJira,
  SiCypress,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiSlack,
  SiGitlab,
  SiVercel,
  SiGraphql,
  SiPhp,
  SiMysql,
  SiSass,
  SiHiveBlockchain
} from "react-icons/si";
import Fade from "react-awesome-reveal";

const skills = [
  { name: "React", icon: <SiReact /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Blockchain web", icon: <SiHiveBlockchain /> },
  { name: "Node JS", icon: <SiNodedotjs /> },
  { name: "Mongo DB", icon: <SiMongodb /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMaterialui /> },
  { name: "Crypress Test", icon: <SiCypress /> },
  { name: "Testing Library", icon: <SiTestinglibrary /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Vercel", icon: <SiVercel /> },
];

const tools = [
  { name: "Github", icon: <SiGithub /> },
  { name: "Gitlab", icon: <SiGitlab /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Slack", icon: <SiSlack /> },
  { name: "Discord", icon: <SiDiscord /> },
];

const Skills = () => {
  const { t } = useTranslation(["language"]);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    // Mostrar las habilidades después de un breve retraso para permitir el efecto de fade-in
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 500); // 500 milisegundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      name="skills"
      className="w-full h-full bg-[#0a192f] text-gray-300 wrap"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">{t("text_skills")}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <Fade key={index} triggerOnce={true} cascade damping={0.1} delay={index * 100}>
              <div
                className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center flex-col items-center ${
                  showSkills ? "opacity-100" : "opacity-0"
                }`}
                id="skill"
              >
                <span className="text-5xl">{skill.icon}</span>
                <p className="my-4">{skill.name}</p>
              </div>
            </Fade>
          ))}
        </div>
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Tools
          </p>
          <p className="py-4">{t("tools_skills")}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {tools.map((skill, index) => (
            <Fade key={index} triggerOnce={true} cascade damping={0.1} delay={index * 50}>
            <div
              className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center flex-col items-center ${
                showSkills ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-5xl">{skill.icon}</span>
              <p className="my-4">{skill.name}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </div>
);
};

export default Skills;

