import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Kaleido",
    description: "An immersive VR experience that allows you to see artworks in a virtual enviroment",
    video: "https://www.youtube.com/watch?v=FOWjoneNx0c&ab_channel=DanielBogatu",
    technologies: ["Unity", "C#", "Oculus SDK", "3D Modeling","Blender"],
  },
  {
    title: "AR Escape Room",
    description: "I have created an AR escape room game using ARFoundation and Unity",
    video: "https://www.youtube.com/watch?v=e-AS6Qu486w&ab_channel=DanielBogatu",
    technologies: ["ARKit", "ARCore", "Unity", "Blender"],
  },
  {
    title: "Kaleido Mobile App",
    description: "A mobile app using Image Recognition to display artworks in a virtual gallery with details about the artist and the artwork.",
    video: "https://www.youtube.com/watch?v=trhahyojOoA&ab_channel=DanielBogatu",
    technologies: ["Unity", "Vuforia", "C#", "React"],
    liveDemoUrl: "#"
  },
  {
    title: "Move The Square",
    description: "A mobile game released on both Android and iOS",
    image: "public/MoveTheSquare.png",
    technologies: ["Unity", "Adobe Suite", "C#", "2D Animation"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.UnknownGames.MoveTheSquare",
    appStoreUrl: "https://apps.apple.com/za/app/movethesquare/id6451136590",
  },
  {
    title: "Geometry War",
    description: "A hyper casual game where you control a triangle moving with lighting speed",
    image: "public/GeometryWar.jpg",
    technologies: ["Unity", "2D", "Adobe Suite", "3D Design"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.OrthrusGames.GeometryWar",
    appStoreUrl: "https://apps.apple.com/us/app/geometry-war/id6745021765",
  },
  {
    title: "Betia Oradea",
    description: "PC Shooter game with a unique art style and engaging gameplay",
    video: "https://www.youtube.com/watch?v=xLWOiO91mTw",
    technologies: ["Unity3D", "Blender", "3D", "UX Design"],
  },
  {
    title: "BudgetBuddy",
    description: "A personal finance app that helps you manage your budget and expenses using Open Banking APIs",
    image: "public/BudgetBuddy.png",
    technologies: ["Flutter", "Dart", "Python", "UX Design"],
  }
];

const ProjectShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-60 h-60 rounded-full bg-xr-purple/10 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-xr-blue/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className={`transform transition duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title text-center">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              {...project}
              image={project.image ?? "https://via.placeholder.com/400x300?text=No+Image"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
