
import * as React from "react";

export const Skills = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold text-center mt-[133px] max-md:text-[40px] max-md:mt-10">
        Minhas habilidades
      </h2>
      <div className="border border-[color:var(--Gray-1,#333)] bg-[#212121] flex w-full max-w-[1168px] flex-col items-center text-7xl text-[#4F4F4F] font-bold whitespace-nowrap text-center justify-center mt-[73px] px-[70px] py-[71px] border-solid max-md:max-w-full max-md:text-[40px] max-md:mt-10 max-md:px-5">
        <div className="flex w-[919px] max-w-full items-stretch gap-[40px_100px] flex-wrap max-md:text-[40px]">
          <div className="text-[#4F4F4F] grow shrink w-[138px] max-md:text-[40px]">50%</div>
          <div className="text-[#4F4F4F] grow shrink w-[134px] max-md:text-[40px]">20%</div>
          <div className="text-[#4F4F4F] grow shrink w-[118px] max-md:text-[40px]">10%</div>
          <div className="text-[#4F4F4F] grow shrink w-[83px] max-md:text-[40px]">2%</div>
        </div>
      </div>
    </section>
  );
};
