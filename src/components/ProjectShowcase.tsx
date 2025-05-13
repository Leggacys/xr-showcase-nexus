
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "VR Training Simulator",
    description: "An immersive VR training program for industrial safety procedures with interactive scenarios and real-time feedback.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&fit=crop",
    technologies: ["Unity", "C#", "Oculus SDK", "3D Modeling"],
    liveDemoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "AR Product Visualizer",
    description: "Augmented reality application allowing users to visualize furniture products in their real-world environment before purchasing.",
    image: "https://images.unsplash.com/photo-1633269540827-728aabbb45c9?q=80&w=800&fit=crop",
    technologies: ["ARKit", "ARCore", "React Native", "Three.js"],
    liveDemoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Interactive Medical Visualization",
    description: "Medical education platform featuring interactive 3D models of human anatomy with detailed information and guided learning paths.",
    image: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?q=80&w=800&fit=crop",
    technologies: ["WebXR", "Three.js", "React", "WebGL"],
    liveDemoUrl: "#"
  },
  {
    title: "Mixed Reality Game",
    description: "An innovative MR game that blends virtual elements with the physical world, creating unique gameplay interactions based on the player's environment.",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&fit=crop",
    technologies: ["Unity", "Microsoft Mesh", "C#", "3D Animation"],
    liveDemoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Virtual Art Gallery",
    description: "A virtual exhibition space showcasing digital art in an immersive environment with interactive elements and audio guides.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&fit=crop",
    technologies: ["WebXR", "A-Frame", "JavaScript", "3D Design"],
    liveDemoUrl: "#"
  },
  {
    title: "Spatial Computing Interface",
    description: "Next-generation user interface for spatial computing applications with gesture recognition and voice commands.",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800&fit=crop",
    technologies: ["Unity", "ARKit", "Machine Learning", "UX Design"],
    liveDemoUrl: "#",
    codeUrl: "#"
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
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Explore my portfolio of immersive XR experiences, from virtual reality training simulators to augmented reality applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
