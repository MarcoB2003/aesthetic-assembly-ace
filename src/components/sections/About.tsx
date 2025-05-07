
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
        Sobre
      </h2>
      <p className="text-white text-lg font-normal text-center mt-[38px] max-md:max-w-full">
        Desenvolvedor web e editor de vídeos, com experiência de 6 anos em tradução de filmes/vídeos, edição e criação de thumbnails. 
        Formado em Análise e Desenvolvimento de Sistemas (ADS) em 2025, possui habilidades sólidas em tecnologia, design visual e comunicação. 
        Atuou também com atendimento ao cliente, gestão de loja e liderança de equipe. Profissional proativo, adaptável e com disponibilidade 
        para mudança de país, busca crescer no mercado internacional.
      </p>
      <div className="w-full max-w-[1010px] ml-[11px] mt-[65px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <InfoCard title="Nome Completo" content="Marco Antonio Bennes" />
          <InfoCard icon={true} title="Email" content="marcobennes0@gmail.com" />
          <InfoCard icon={true} title="LinkedIn" content="linkedin.com/in/marco-bennes-75a6a2248" />
          <InfoCard title="Celular" content="11 937399990" />
        </div>
      </div>
    </section>
  );
};
