import React from "react";

const educationData = [
  {
    title: "Universidad nacional de Hurlingham",
    subtitle: "Bachelor of Computer Science ",
    age: "2019-Present",
    description:
      "First year of computer science degree, in which I saw the topics Introduction to programming, Object Oriented Programming(OOP), Python, Gobstones, Mumuki, Computer organization",
  },
  {
    title: "Course It",
    subtitle: "Course of Frontend ",
    age: "2021",
    description:
      "On this platform I learned to use Github, HTML and CSS, React JS, Javascript",
  },
  {
    title: "Education It",
    subtitle: "Introduction to programming",
    age: "2017",
    description:
      "In education it was where I had my first contact with programming. In this institute I learned HTML5: Basics web, CSS3, Object-oriented programming (OOP), Database introduction",
  },
];

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Education
            </p>
          </div>
        </div>
        {educationData.map((item) => (
          <div className=" w-full grid sm:grid-cols-2 gap-8 px-4 mb-10 items-center">
            <div className="sm:text-right">
              <p className="text-4xl font-bold">{item.title}</p>
              <p className="text-sm">
                {item.subtitle} [{item.age}]
              </p>
            </div>
            <div>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
