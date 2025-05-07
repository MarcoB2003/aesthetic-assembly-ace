
import * as React from "react";

const ServiceCard = ({ icon, title }: { icon: string; title: string }) => (
  <div className="w-[33%] max-md:w-full max-md:ml-0">
    <div className="bg-[rgba(33,33,33,1)] grow text-4xl text-[rgba(83,83,83,1)] font-medium whitespace-nowrap w-full px-[50px] py-9 max-md:mt-10 max-md:px-5">
      <img src={icon} className="aspect-[1.24] object-contain w-[57px] fill-[#27AE60]" alt={title} />
      <div className="mt-[30px]">{title}</div>
    </div>
  </div>
);

export const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold text-center mt-[120px] max-md:text-[40px] max-md:mt-10">
        Especialidades
      </h2>
      <div className="w-full max-w-[1168px] mt-32 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <ServiceCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/72c8e58514dfcebdbf51a57bea6025e587591d3b?placeholderIfAbsent=true" title="Full Stack" />
          <ServiceCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8e303b46cdcdd0a0470987e63a5b1e48361c7d?placeholderIfAbsent=true" title="Web Development" />
          <ServiceCard icon="https://cdn.builder.io/api/v1/image/assets/TEMP/621a95dd81cbf4369bc8c2418c205b58b11032a3?placeholderIfAbsent=true" title="Web Design" />
        </div>
      </div>
    </section>
  );
};
