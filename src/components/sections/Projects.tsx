
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
    title: "E-Commerce Dashboard",
    description: "Um dashboard administrativo para gerenciar uma plataforma de e-commerce com análises, pedidos e rastreamento de inventário.",
    longDescription: "Dashboard completo para administração de e-commerce, oferecendo controle total sobre vendas, estoque, pedidos e análises de desempenho. Interface moderna e responsiva com gráficos interativos e relatórios personalizáveis para tomada de decisões baseada em dados.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "Uma rede social com mensagens em tempo real, compartilhamento de posts e perfis de usuário.",
    longDescription: "Plataforma completa de mídia social construída com uma arquitetura moderna. Oferece recursos de chat em tempo real, compartilhamento de mídia, perfis personalizáveis e feed de notícias com algoritmo inteligente para mostrar conteúdo relevante.",
    stack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    category: "Back-end",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Uma ferramenta de gerenciamento de tarefas colaborativa com interface drag-and-drop, atribuições de equipe e rastreamento de prazos.",
    longDescription: "Sistema completo de gerenciamento de projetos e tarefas voltado para equipes remotas. Inclui recursos avançados como Kanban, gráficos de Gantt, acompanhamento de tempo e integração com ferramentas de comunicação para maior produtividade.",
    stack: ["React", "Redux", "Express", "PostgreSQL"],
    category: "Other Features",
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 4,
    title: "Fitness Tracking Application",
    description: "Um aplicativo de fitness para rastreamento de treinos, nutrição e progresso com recomendações personalizadas.",
    longDescription: "Aplicativo completo para acompanhamento de atividades físicas, planos de dieta e métricas de saúde. Possui integração com dispositivos wearables, planos de treinamento personalizados baseados em IA e comunidade para compartilhar resultados.",
    stack: ["React Native", "Firebase", "Chart.js", "Node.js"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Um aplicativo meteorológico com previsões baseadas em localização, análise de dados históricos e mapas interativos.",
    longDescription: "Plataforma meteorológica avançada que fornece previsões precisas para qualquer localização do mundo. Inclui visualizações de dados, alertas em tempo real, análises históricas e integração com API de satélites para maior precisão.",
    stack: ["JavaScript", "OpenWeatherAPI", "Chart.js", "Leaflet"],
    category: "Back-end",
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "Uma plataforma comunitária de compartilhamento de receitas com funcionalidade de pesquisa, classificações e coleções personalizadas.",
    longDescription: "Comunidade online dedicada a entusiastas de culinária para descobrir, compartilhar e salvar receitas. Inclui recursos como categoria por dieta, calculadora nutricional, planejador de refeições e ferramentas para adaptar porções.",
    stack: ["Vue.js", "Firebase", "Algolia", "Tailwind CSS"],
    category: "Other Features",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500"
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
                  variant="outline" 
                  className="border-[#333] text-white hover:bg-[#27AE60] hover:text-white hover:border-[#27AE60]"
                  onClick={() => {
                    setSelectedProject(project);
                    setModalOpen(true);
                  }}
                >
                  Ver detalhes
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#333] text-white hover:bg-neutral-800"
                >
                  Demo
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
