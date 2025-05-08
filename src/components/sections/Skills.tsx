
import * as React from "react";

export const Skills = () => {
  const skills = [
    "6 anos de experiência em vídeos",
    "Inglês Avançado",
    "2 anos de experiência em JS",
    "Ótima comunicação"
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold text-center mt-[133px] max-md:text-[40px] max-md:mt-10">
        Minhas habilidades
      </h2>
      <div className="border border-[color:var(--Gray-1,#333)] bg-[#212121] flex w-full max-w-[1168px] flex-col items-center text-2xl text-white font-medium mt-[73px] px-[50px] py-[50px] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-full flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-neutral-800 rounded-lg px-6 py-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
