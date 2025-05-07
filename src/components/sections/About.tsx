import * as React from "react";

const InfoCard = ({ icon, title, content }: { icon?: React.ReactNode; title: string; content: string }) => (
  <div className="w-3/12 max-md:w-full max-md:ml-0">
    {icon ? (
      <div className="flex grow flex-col items-center max-md:mt-10">
        <div className="bg-[rgba(33,33,33,1)] flex w-[62px] flex-col items-center justify-center h-[62px] px-3 rounded-[50%]">
          <div className="bg-[rgba(39,174,96,1)] flex w-3 shrink-0 h-3 rounded-[50%]" />
        </div>
        <div className="text-white text-lg font-bold mt-[18px]">{title}</div>
        <div className="text-white text-lg font-normal self-stretch">{content}</div>
      </div>
    ) : (
      <div className="flex grow flex-col items-stretch text-lg text-white mt-20 max-md:mt-10">
        <div className="font-bold self-center">{title}</div>
        <div className="font-normal">{content}</div>
      </div>
    )}
  </div>
);

export const About = () => {
  return (
    <section id="about" className="flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold text-center mt-[47px] max-md:text-[40px] max-md:mt-10">
        About
      </h2>
      <p className="text-white text-lg font-normal text-center mt-[38px] max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>
      <div className="w-full max-w-[1010px] ml-[11px] mt-[65px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <InfoCard title="Full Name" content="Your name goes here" />
          <InfoCard icon={true} title="Email Address" content="Your email goes here" />
          <InfoCard icon={true} title="Twitter" content="Your email goes here" />
          <InfoCard title="Phone" content="Your name goes here" />
        </div>
      </div>
    </section>
  );
};
