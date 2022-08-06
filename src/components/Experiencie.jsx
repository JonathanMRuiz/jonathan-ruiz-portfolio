import React from "react";

const experienceTask = [
  {
    title: "Front-end Developer",
    subtitle: "02/2022 - Present",
    description:
      "I currently work with a group of friends doing Front End development and I have access to their Jira to see and carry out the tasks assigned to them, Figma to see the design and adapt it and Gitlab to make the pull requests.",
    tasks: [
      "Responsive design with Tailwind and Bootstrap.",
      "Repeated code fix, to obtain a more scalable application in the future.",
      "Build a more confident test suite with CypressJS, React Testing Library, Jest and MSW.",
      "Creation and correction of components in React.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </p>
          </div>
          <div></div>
        </div>
        {experienceTask.map((item) => (
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right ">
              <p className="text-4xl font-bold">{item.title}</p>
              <p className="text-sm">{item.subtitle}</p>
            </div>
            <div>
              <p>{item.description}</p>
              <div className="mt-5">
                <h3>Tasks in which he contributed:</h3>
                <ul>
                  {item.tasks.map((task) => (
                    <li>- {task}</li>
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
