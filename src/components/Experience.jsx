import React from "react";
import { useTranslation } from "react-i18next";
import BtnDownload from "./DownloadPdf/DownloadPdf";

const Experience = () => {
  const { t } = useTranslation(["language"]);

  const experienceTask = [
    {
      title: "Nerd",
      subtitle: "04/2022 - Present",
      description: t("description_exp_nerd"),
      position: "Frontend developer",
      website: "https://nerdinteractive.com/",
      tasks: [
        t("task_one_nerd"),
        t("task_two_nerd"),
        t("task_three_nerd"),
        t("task_four_nerd"),
        t("task_five_nerd"),
      ],
    },

    {
      title: "Gunny Games",
      subtitle: "09/2023 - 01/2024",
      description: t("description_exp_gunny"),
      position: "Frontend developer (Contractor)",
      tasks: [t("task_one_gunny"), t("task_two_gunny"), t("task_three_gunny")],
      website:"https://www.gunnygames.com/"
    },

    {
      title: "Neurocann",
      subtitle: "09/2021 - 04/2022",
      description: t("description_exp_neurocann"),
      position: "Frontend developer (Contractor)",
      tasks: [
        t("task_one_neurocann"),
        t("task_two_neurocann"),
        t("task_three_neurocann"),
        t("task_four_neurocann"),
        t("task_five_neurocann"),
        t("task_six_neurocann"),
        t("task_seven_neurocann"),
      ],
    },
  ];

  return (
    <div name="experience" className="w-full  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-start items-start w-full h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              {t("title_experience")}
            </p>
            <p className="py-6">{t("description_about")}</p>
            <BtnDownload text={t("btn_about")} />
          </div>
        </div>
        {experienceTask.map((item, index) => (
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"></div>

                <div className="md:flex-grow">
                  <span className="font-semibold title-font text-white">
                    {item.title}
                  </span>
                  <span className="mt-1 ml-4 text-gray-500 text-sm">
                    {item.subtitle}
                  </span>
                  {
                    item.website ? ( // Verifica si la propiedad 'website' de 'item' está presente y no es falsy
                      <span className="mt-1 ml-4 text-white text-sm">
                        <a href={item?.website} target="_blank">
                          Website
                        </a>{" "}
                        {/* Renderiza un enlace con el valor de 'item.website' como href */}
                      </span>
                    ) : // Si la propiedad 'website' de 'item' no está presente o es falsy
                    null // No renderiza nada
                  }

                  <h2 className="text-2xl font-medium text-white title-font mb-2">
                    {item.position}
                  </h2>
                  <p className="leading-relaxed">{item.description}</p>
                  <div className="mt-5">
                    <ul>
                      {item.tasks.map((task, idx) => (
                        <div key={idx}>
                          <li>
                            <span className="p-0">- {task}</span>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
