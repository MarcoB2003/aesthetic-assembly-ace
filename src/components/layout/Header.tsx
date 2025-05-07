
import * as React from "react";

export const Header = () => {
  return (
    <header className="self-stretch flex w-full items-stretch gap-5 text-white flex-wrap justify-between max-md:max-w-full">
      <div className="text-4xl font-bold">Marco Antonio</div>
      <nav className="flex items-stretch gap-10 text-lg font-normal my-auto">
        <a href="#about" className="hover:text-gray-300 transition-colors">Sobre</a>
        <a href="#services" className="hover:text-gray-300 transition-colors">Especialidades</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors">Contato</a>
      </nav>
    </header>
  );
};
