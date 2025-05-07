
import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="bg-neutral-900 flex flex-col overflow-hidden items-center pt-7 pb-[93px] px-20 max-md:px-5">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>
      <footer className="text-[#4F4F4F] text-sm font-medium mt-40 max-md:mt-10">
        © Marco Antonio Bennes 2024
      </footer>
    </div>
  );
};

export default Index;
