import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation(["language"]);

  const experienceTask = [
    {
      title: "Neurocann",
      subtitle: "10/2021 - Present",
      description: t("description_exp"),
      tasks: [
        t("task_one"),
        t("task_two"),
        t("task_three"),
        t("task_four"),
        t("task_five"),
        t("task_six"),
        t("task_seven"),
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {t("title_experience")}
            </p>
          </div>
        </div>
        {experienceTask.map((item, index) => (
          <div
            className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
            key={index}
          >
            <div className="sm:text-right ">
              <p className="text-4xl font-bold">{item.title}</p>
              <p className="text-sm">{item.subtitle}</p>
            </div>
            <div>
              <p>{item.description}</p>
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
        ))}
      </div>
    </div>
  );
};

export default Experience;
