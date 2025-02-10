import React from "react";
import { MdCode, MdPlayArrow } from "react-icons/md"; // Iconos para los proyectos

const MiniProjects = () => {
  // Lista de mini proyectos
  const projects = [
    {
      id: 1,
      title: "To-Do List",
      description: "Una aplicación simple para gestionar tareas.",
      image: "https://via.placeholder.com/300", // URL de la imagen
      demoLink: "https://todos-app.vercel.app", // Enlace al proyecto desplegado
      codeLink: "https://github.com/tu-usuario/todo-app", // Enlace al código
    },
    {
      id: 2,
      title: "Clima en Tiempo Real",
      description: "Consulta el clima actual de cualquier ciudad.",
      image: "https://via.placeholder.com/300",
      demoLink: "https://weather-app.vercel.app",
      codeLink: "https://github.com/tu-usuario/weather-app",
    },
    {
      id: 3,
      title: "Calculadora",
      description: "Una calculadora funcional con operaciones básicas.",
      image: "https://via.placeholder.com/300",
      demoLink: "https://calculator-app.vercel.app",
      codeLink: "https://github.com/tu-usuario/calculator-app",
    },
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-[#0a192f] text-gray-300 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
          Mini Proyectos
        </h2>
        <p className="py-6">Interactúa con algunos de mis proyectos funcionales.</p>

        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#112240] rounded-lg shadow-lg p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-pink-500 hover:text-pink-400"
                >
                  <MdPlayArrow className="mr-2" />
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-gray-300"
                >
                  <MdCode className="mr-2" />
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniProjects;