
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
    title: "Catálogo de Livros Interativo",
    description: "Um catálogo interativo para exibição de livros com filtros dinâmicos e detalhes ampliados.",
    longDescription: "Desenvolvido com foco na experiência do leitor, este catálogo digital permite explorar de forma intuitiva nossa coleção de livros. Inclui sistema de categorização, busca avançada, e visualização detalhada com informações sobre autor, sinopse, ano de publicação e estado de conservação de cada exemplar.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 2,
    title: "Sistema de Gerenciamento de Acervo",
    description: "API para controle de estoque, aquisições, vendas e histórico de transações do acervo literário.",
    longDescription: "Backend completo para gestão de acervo literário, incluindo cadastro de novos títulos, controle de estoque, registro de aquisições, vendas realizadas e histórico de transações. Possui sistema de alertas para livros em falta e relatórios detalhados sobre o desempenho de vendas por autor, gênero e período.",
    stack: ["Node.js", "Express", "MongoDB", "AWS S3"],
    category: "Back-end",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 3,
    title: "Dashboard de Análise de Vendas",
    description: "Sistema de análise de tendências de vendas com métricas detalhadas e relatórios personalizáveis.",
    longDescription: "Ferramenta avançada de análise para livreiros que fornece insights detalhados sobre o desempenho de vendas, preferências dos clientes, gêneros mais procurados e autores populares. Oferece relatórios personalizáveis e recomendações baseadas em dados para otimizar o estoque e estratégias de venda da livraria.",
    stack: ["React", "Redux", "Chart.js", "Node.js"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1572059196837-49a60a3e2b5d?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 4,
    title: "Encanto dos Livros - Website",
    description: "Site completo de sebo literário com exibição de catálogo, blog de resenhas e sistema de contato via WhatsApp.",
    longDescription: "Portal completo para divulgação do acervo da livraria Encanto dos Livros, com áreas para destaque de novidades, raridades e promoções. Inclui blog com resenhas literárias, sistema simplificado de busca por título/autor e integração direta com WhatsApp para facilitar o contato entre clientes e livreiro para a finalização das compras.",
    stack: ["React", "Next.js", "Styled Components", "WhatsApp API"],
    category: "Front-end",
    images: [
      "https://images.unsplash.com/photo-1521123845560-14093637aa7d?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 5,
    title: "Sistema de Recomendação Literária",
    description: "API inteligente que sugere livros com base em leituras anteriores, preferências e tendências do mercado.",
    longDescription: "Algoritmo de recomendação que analisa o histórico de compras, interesses manifestados por clientes e tendências do mercado literário para sugerir títulos relevantes. O sistema aprende constantemente com as interações dos usuários para melhorar a precisão das recomendações, combinando fatores como gênero, autor, época e temáticas.",
    stack: ["Python", "Machine Learning", "Django", "RESTful API"],
    category: "Back-end",
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&h=500"
    ]
  },
  {
    id: 6,
    title: "Painel Administrativo de Gestão",
    description: "Interface administrativa para cadastro, atualização e controle de livros, vendas e clientes do sebo.",
    longDescription: "Painel administrativo completo desenvolvido exclusivamente para o proprietário do sebo gerenciar todo seu negócio. Oferece funcionalidades de CRUD para cadastro de novos títulos, atualização de informações, registros de vendas, controle de estoque e cadastro de clientes frequentes. Inclui geração de relatórios financeiros e sistema de backup automático dos dados.",
    stack: ["React", "Firebase", "Material UI", "Redux"],
    category: "Other Features",
    images: [
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?auto=format&fit=crop&w=800&h=500"
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
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
