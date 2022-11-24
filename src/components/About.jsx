import React from "react";
import BtnDownload from "./DownloadPdf/DownloadPdf";
import { socialIcons } from "./Navbar";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre mi
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Te cuento un poco de mi.</p>
          </div>
          <div>
            <p>
              Siempre estoy dispuesto a aprender nuevas tecnologías , mejores
              prácticas y trabajar en equipo.
            </p>
            <br />
            <p>
              Cuento con mas de 1 año y medio de experiencia como Freelance para
              una startup de Colorado. No soy un empleado oficial por lo cual no
              puedo asistir a las reuniones del equipo y negocio (razón por la
              cual quiero cambiar, para poder crecer profesionalmente con un
              equipo y no solo en lo técnico).
            </p>
            <BtnDownload />
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
