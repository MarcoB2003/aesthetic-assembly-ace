
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Tipo para os projetos
type ProjectType = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  category: string;
  images: string[];
};

// Dados dos projetos
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Plataforma de Cursos Online",
    description: "Uma plataforma interativa para cursos de vídeo com sistema de avaliação e certificados digitais.",
    longDescription: "Desenvolvida com foco na experiência do usuário, esta plataforma oferece recursos avançados para criação e consumo de conteúdo em vídeo. Inclui sistema de avaliação, certificados digitais, e dashboards personalizáveis para acompanhamento do progresso dos alunos e métricas para criadores de conteúdo.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 2,
    title: "API de Gerenciamento de Conteúdo",
    description: "Uma API RESTful para gerenciamento de conteúdos em vídeo com recursos de transcodificação e distribuição.",
    longDescription: "Backend completo para gestão de conteúdo em vídeo, incluindo upload, transcodificação automática, CDN para distribuição global, análise de métricas de visualização e integração com plataformas de monetização. Suporta controle de acesso baseado em papéis e integrações com sistemas de pagamento.",
    stack: ["Node.js", "Express", "MongoDB", "AWS S3"],
    category: "Back-end",
    images: [
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 3,
    title: "Dashboard de Análise de Vídeos",
    description: "Um sistema de análise de engajamento para vídeos com métricas detalhadas e visualizações personalizáveis.",
    longDescription: "Ferramenta avançada de análise para produtores de conteúdo em vídeo que fornece insights detalhados sobre engajamento do público, retenção de visualizadores, pontos de abandono e comportamento da audiência. Oferece relatórios personalizáveis e recomendações baseadas em dados para otimizar o desempenho do conteúdo.",
    stack: ["React", "Redux", "Chart.js", "Node.js"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 4,
    title: "Sistema de Comunicação Empresarial",
    description: "Uma plataforma de comunicação interna para empresas com recursos de vídeo chamadas, mensagens e compartilhamento de arquivos.",
    longDescription: "Solução completa para comunicação empresarial que integra diversos canais: vídeo conferências, chat em tempo real, compartilhamento de arquivos e gestão de documentos. Desenvolvida com foco em segurança e usabilidade, suporta equipes remotas e híbridas com recursos de agendamento e gravação automática de reuniões.",
    stack: ["React Native", "WebRTC", "Socket.io", "Firebase"],
    category: "Other Features",
    images: [
      "https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 5,
    title: "Sistema de Tradução Automática",
    description: "Uma API para tradução automática de legendas em vídeos com suporte para múltiplos idiomas, incluindo inglês avançado.",
    longDescription: "Desenvolvido para permitir a internacionalização eficiente de conteúdo em vídeo, este sistema utiliza algoritmos de IA para tradução automática de legendas. Suporta mais de 40 idiomas com alta precisão e oferece ferramentas de edição para ajustes finos. Ideal para produtores de conteúdo que buscam alcançar audiências globais.",
    stack: ["Python", "NLP", "TensorFlow", "RESTful API"],
    category: "Back-end",
    images: [
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 6,
    title: "Editor de Vídeo Online",
    description: "Um editor de vídeo baseado na web com interface intuitiva para edição básica e avançada sem necessidade de download.",
    longDescription: "Editor de vídeo completo e acessível via navegador, eliminando a necessidade de software desktop pesado. Oferece recursos como corte, transição, adição de textos e efeitos, correção de cor e exportação em diversos formatos. A interface foi projetada para ser intuitiva tanto para iniciantes quanto para profissionais com recursos avançados.",
    stack: ["JavaScript", "WebAssembly", "FFmpeg", "Canvas API"],
    category: "Other Features",
    images: [
      "https://images.unsplash.com/photo-1569017388533-ab55855a8312?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1574717024453-e569ec7c7866?auto=format&fit=crop&w=800&h=500"
    ]
  }
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const categories = ["All", "Front-end", "Back-end", "Other Features"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="flex flex-col items-center mt-[133px] max-md:mt-10">
      <h2 className="text-white text-5xl font-bold text-center max-md:text-[40px]">
        Meus Projetos
      </h2>
      <p className="text-[#828282] text-lg mt-4 text-center max-w-[800px]">
        Explore uma seleção dos meus trabalhos recentes e projetos pessoais
      </p>

      {/* Filtro de categorias */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-[#27AE60] text-white"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-[1168px]">
        {filteredProjects.map((project) => (
          <Card 
            key={project.id} 
            className="bg-[#212121] border-[#333] overflow-hidden hover:border-[#4a4a4a] transition-all"
          >
            <div className="h-[200px] bg-neutral-800 flex items-center justify-center overflow-hidden">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#BDBDBD] text-sm mb-4 line-clamp-2 h-10">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-neutral-800 border-neutral-700 text-[#BDBDBD]">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  className="bg-[#27AE60] text-white hover:bg-white hover:text-black transition-colors"
                  onClick={() => {
                    setSelectedProject(project);
                    setModalOpen(true);
                  }}
                >
                  Ver detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal para detalhes do projeto */}
      {selectedProject && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="bg-[#212121] border-[#333] text-white max-w-5xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-[#BDBDBD]">
                {selectedProject.category}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${selectedProject.title} - imagem ${index + 1}`} 
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none text-white" />
                <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none text-white" />
              </Carousel>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Descrição</h4>
              <p className="text-[#BDBDBD]">{selectedProject.longDescription}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-medium mb-2">Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <Badge key={tech} className="bg-[#27AE60] text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button 
                variant="outline" 
                className="border-[#333] text-white hover:bg-neutral-800"
              >
                Ver código
              </Button>
              <Button 
                className="bg-[#27AE60] text-white hover:bg-[#219652]"
              >
                Ver demo
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
