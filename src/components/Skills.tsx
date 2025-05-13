
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: string;
  category: 'xr' | 'development' | 'design';
  proficiency: number; // 1-100
}

const skills: Skill[] = [
  // XR Technologies
  { name: "Unity", icon: "🎮", category: "xr", proficiency: 95 },
  { name: "Unreal Engine", icon: "🎲", category: "xr", proficiency: 85 },
  { name: "Oculus SDK", icon: "👓", category: "xr", proficiency: 90 },
  { name: "ARKit", icon: "📱", category: "xr", proficiency: 80 },
  { name: "ARCore", icon: "🤖", category: "xr", proficiency: 75 },
  { name: "WebXR", icon: "🌐", category: "xr", proficiency: 85 },
  { name: "Microsoft Mesh", icon: "📊", category: "xr", proficiency: 70 },
  
  // Development
  { name: "C#", icon: "🧩", category: "development", proficiency: 95 },
  { name: "JavaScript", icon: "🟨", category: "development", proficiency: 90 },
  { name: "Three.js", icon: "🌟", category: "development", proficiency: 85 },
  { name: "React", icon: "⚛️", category: "development", proficiency: 80 },
  { name: "WebGL", icon: "🖥️", category: "development", proficiency: 75 },
  { name: "Python", icon: "🐍", category: "development", proficiency: 65 },
  { name: "Swift", icon: "🎯", category: "development", proficiency: 60 },
  
  // Design
  { name: "3D Modeling", icon: "🧊", category: "design", proficiency: 80 },
  { name: "UX Design", icon: "🎨", category: "design", proficiency: 85 },
  { name: "3D Animation", icon: "🏃", category: "design", proficiency: 75 },
  { name: "Blender", icon: "🔄", category: "design", proficiency: 80 },
  { name: "Adobe Suite", icon: "✏️", category: "design", proficiency: 70 },
  { name: "Sound Design", icon: "🔊", category: "design", proficiency: 65 },
];

const categoryColors: Record<string, string> = {
  xr: "from-xr-blue to-xr-purple",
  development: "from-blue-500 to-cyan-500",
  design: "from-purple-500 to-pink-500",
};

const categoryTitles: Record<string, string> = {
  xr: "XR Technologies",
  development: "Development",
  design: "Design & 3D",
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const filteredSkills = filter 
    ? skills.filter(skill => skill.category === filter) 
    : skills;
  
  const categories = ["xr", "development", "design"];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-xr-dark to-xr-dark/90 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={cn(
          "transform transition duration-700",
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <h2 className="section-title text-center">Technical Skills</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Specialized in creating immersive experiences with expertise in XR technologies, 
            development frameworks, and 3D design tools.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            <button 
              onClick={() => setFilter(null)}
              className={cn(
                "px-6 py-2 rounded-full transition-all",
                filter === null
                  ? "bg-gradient-to-r from-xr-blue to-xr-purple text-white font-medium"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              )}
            >
              All Skills
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all capitalize",
                  filter === category
                    ? `bg-gradient-to-r ${categoryColors[category]} text-white font-medium`
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                )}
              >
                {categoryTitles[category]}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className={cn(
                "p-5 rounded-lg border border-white/5 hover:border-white/20 bg-white/5 backdrop-blur-sm",
                "animate-fade-in transform transition-all hover:-translate-y-1 opacity-0",
                "hover:shadow-lg hover:shadow-xr-blue/10"
              )}
              style={{ 
                animationDelay: `${(isVisible ? index * 50 : 0)}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="font-medium text-white">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div 
                  className={cn(
                    "h-1.5 rounded-full bg-gradient-to-r",
                    categoryColors[skill.category]
                  )}
                  style={{ 
                    width: `${skill.proficiency}%`,
                    transition: 'width 1s ease-in-out',
                    transitionDelay: `${(isVisible ? index * 50 + 300 : 0)}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
