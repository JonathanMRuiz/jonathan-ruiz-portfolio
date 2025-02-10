import React from "react";
import { useTranslation } from "react-i18next";
import BtnDownload from "./DownloadPdf/DownloadPdf";

const Experience = () => {
  const { t } = useTranslation(["language"]);

  const experienceTask = [
    {
      title: "Nerd",
      subtitle: "04/2022 - Presente",
      description: t("description_exp_nerd"),
      position: "Frontend developer",
      website: "https://nerdinteractive.com/",
      tasks: [
        t("task_one_nerd"),
        t("task_two_nerd"),
        t("task_three_nerd"),
        t("task_four_nerd"),
      
      ],
    },
    {
      title: "Gunny Games",
      subtitle: "09/2023 - 01/2024",
      description: t("description_exp_gunny"),
      position: "Frontend developer (Contractor)",
      tasks: [t("task_one_gunny"), t("task_two_gunny"), t("task_three_gunny")],
      website: "https://www.gunnygames.com/",
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
    <div name="experience" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-start items-start w-full h-full">
        {/* Contenedor principal */}
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
          {/* Título y descripción */}
          <div className="mb-12">
            <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-pink-600">
              {t("title_experience")}
            </p>
            <p className="mt-4 text-lg">{t("description_about")}</p>
            <div className="mt-6">
              <BtnDownload text={t("btn_about")} />
            </div>
          </div>

          {/* Lista de experiencias */}
          {experienceTask.map((item, index) => (
            <div key={index} className="mb-12">
              <div className="flex flex-col md:flex-row">
                {/* Columna izquierda (Título y subtítulo) */}
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Website
                    </a>
                  )}
                </div>

                {/* Columna derecha (Descripción y tareas) */}
                <div className="md:w-3/4">
                  <h4 className="text-xl font-medium text-white mb-2">
                    {item.position}
                  </h4>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <ul className="list-disc pl-5">
                    {item.tasks.map((task, idx) => (
                      <li key={idx} className="mb-2">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;