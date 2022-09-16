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
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Jonathan, nice to meet you</p>
          </div>
          <div>
            <p>
              I consider myself a proactive, self-learner, team player person.
              I’m always willing to learn new technologies and best practices,
              and share them to the world. Looking forward to get my first
              opportunity to take the next step in my career
              <BtnDownload />
            </p>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
