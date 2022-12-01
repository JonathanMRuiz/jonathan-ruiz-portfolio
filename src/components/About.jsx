import React from "react";
import { useTranslation } from "react-i18next";
import BtnDownload from "./DownloadPdf/DownloadPdf";
import { socialIcons } from "./Navbar";

const About = () => {
  const { t } = useTranslation(["language"]);
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {t("about_title")}
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{t("subtitle_about")}</p>
          </div>
          <div>
            <p>{t("description_about")}</p>
            <BtnDownload text={t("btn_about")} />
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
