import React from "react";
import { useTranslation } from "react-i18next";
const experienceTask = [
  {
    title: "Neurocann",
    subtitle: "10/2021 - Present",
    description:
      "Neurocann es una aplicación ERP de cannabis que gestiona los datos de producción y cumplimiento en un solo sistema para que sus clientes los vean en una vista general.",
    tasks: [
      "Diseño responsive con Tailwind.",
      "Corrección de errores de la aplicación.",
      "Refactorización de código para construir una aplicación más escalable a futuro.",
      "Cree un conjunto de pruebas más seguro con CypressJS, React Testing Library, Jest y MSW.",
      "Creación de componentes React reutilizables en una biblioteca compartida para usar en diferentes aplicaciones.",
      "Manejo intensivo de formularios con React-hook-form.",
      "Gestión y virtualización de mesas con React-table y React-virtual.",
    ],
  },
];

const Experience = () => {
  const { t } = useTranslation(["language"]);

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
