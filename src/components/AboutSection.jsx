import { Database, Code, Smartphone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>

      {/* about me details 2 colms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Passionate Web & Mobile App Developer</h3>
          <p className="text-muted-foreground">
            I'm a recent bachelor's graduate with a strong foundation in web and mobile app development. While I may be early in my professional journey, I've built real-world projects during my
            studies that showcase my skills and dedication. I'm constantly learning new technologies and refining my craft to deliver work that stands out.
          </p>

          <p className="text-muted-foreground">
            When I’m not deep in code, I’m probably troubleshooting something just for the thrill of solving it. I’ve uninstalled GTA V more times than I’ve played it, just to reclaim disk space and
            keep my system lean. I get oddly excited about fixing obscure bugs and tweaking workflows until they run like clockwork. I believe good design starts with clean logic, and I’m the kind of
            person who reads changelogs for fun. Whether it’s geotagging data or experimenting with Docker containers, I love diving into the details that make tech tick.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>

            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> Web Development</h4>
                <p className="text-muted-foreground">Creating responsive, user-friendly websites and web applications with a focus on clean design and smooth user experience.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">App Development</h4>
                <p className="text-muted-foreground">Building cross-platform mobile apps with modern frameworks, emphasizing performance and intuitive interfaces.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-lg">Database Design & Management</h4>
                <p className="text-muted-foreground">Designing and managing relational databases with real-time syncing, authentication, and scalable backend integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
