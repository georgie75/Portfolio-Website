import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "White Sands Website",
    description: "Collaborated with Sarabia Innovative Consultancy to create a website for White Sands Dive Shop, showcasing their services.",
    image: "/projects/whitesands.png",
    demoUrl: "https://whitesandsdiveshop.com",
  },
  {
    id: 2,
    title: "UB IT Interns Website",
    description: "Developed a website for UB IT Interns showcasing 2024 interns, presentation schedules, and participating host companies.",
    image: "/projects/ubinterns.png",
    demoUrl: "https://georgie75.github.io/Ub-Internswebpage/index.html",
  },
  {
    id: 3,
    title: "UB Personal Chatbot",
    description: "Created a personal chatbot for UB students to answer questions about the university",
    image: "/projects/ubchatbot.png",
    demoUrl: "https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/24/15/20241024150755-HP3OTAEM.json",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative lg:py-30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my top projects. Each project was carefully crafted with the intention to learn, grow and to add to my experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover gradient-border flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex justify-end">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
