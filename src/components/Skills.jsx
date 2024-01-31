import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expert",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Intermidiate",
      count: 65,
    },
    {
      logo: "logo-javascript",
      level: "Intermidiate",
      count: 70,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-black relative">
      <div className="mt-8 text-white text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-gold">Skills</span>
        </h3>
        <p className="text-white mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-white relative min-w-[10rem] max-w-[16rem] bg-black p-10 rounded-3xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(205,134,86) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-black rounded-full flex items-center justify-center group-hover:text-gold">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
