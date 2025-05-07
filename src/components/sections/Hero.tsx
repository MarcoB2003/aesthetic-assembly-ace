
import * as React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section className="w-full max-w-[1214px] mt-28 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[41%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch text-white font-medium my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="text-5xl font-bold self-stretch max-md:max-w-full max-md:text-[40px]">
              Olá, eu sou<br />Marco Antonio Bennes
            </h1>
            <p className="text-[#828282] text-lg mt-[9px]">Desenvolvedor Web e Editor de Vídeos</p>
            <div className="flex items-stretch gap-2.5 text-sm mt-[35px]">
              <a href="/CV_Marco_Bennes.pdf" download className="bg-[#27AE60] px-[27px] py-3 max-md:px-5 hover:bg-[#219652] transition-colors">
                Download CV
              </a>
              <button className="border border-[color:var(--Gray-6,#F2F2F2)] bg-neutral-900 px-[34px] py-3 border-solid max-md:px-5 hover:bg-neutral-800 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
        <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0 flex items-center justify-center">
          <Avatar className="h-[400px] w-[400px] max-md:h-[300px] max-md:w-[300px]">
            <AvatarImage 
              src="/lovable-uploads/d207ed60-abfb-47eb-a9f6-267e89bb60e5.png"
              alt="Marco Antonio Bennes"
              className="object-cover"
            />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};
