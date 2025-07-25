import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'xr' | 'development' | 'design' | 'cicd';
  proficiency: number; 
}


const skills: Skill[] = [
  // XR Technologies
  { name: "Unity", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" className="w-6 h-6 inline" />, category: "xr", proficiency: 95 },
  { name: "Oculus SDK", icon: "👓", category: "xr", proficiency: 90 }, // No official CDN logo, using emoji
  { name: "ARKit", icon: <img src="https://developer.apple.com/assets/elements/icons/arkit/arkit-96x96_2x.png" alt="ARKit" className="w-6 h-6 inline" />, category: "xr", proficiency: 80 },
  { name: "ARCore", icon: "📱", category: "xr", proficiency: 75 }, // No official CDN logo, using emoji

  // Development
  { name: "C#", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-6 h-6 inline" />, category: "development", proficiency: 90 },
  { name: "Dart", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" className="w-6 h-6 inline" />, category: "development", proficiency: 50 },
  { name: "Flutter", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-6 h-6 inline" />, category: "development", proficiency: 60 },
  { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 inline" />, category: "development", proficiency: 40 },
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6 inline" />, category: "development", proficiency: 65 },
  {
    name: "JavaScript",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 inline" />,
    category: "development",
    proficiency: 55
  },
  {
    name: "C++",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-6 h-6 inline" />,
    category: "development",
    proficiency: 60
  },

  // CI/CD & DevOps
  { name: "GitHub Actions", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions" className="w-6 h-6 inline" />, category: "cicd", proficiency: 70 },
  { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6 inline" />, category: "cicd", proficiency: 60 },
  { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6 inline" />, category: "cicd", proficiency: 80 },
  { name: "Jenkins", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-6 h-6 inline" />, category: "cicd", proficiency: 50 },
  { name: "Linux", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-6 h-6 inline" />, category: "cicd", proficiency: 75 },

  // Design
  { name: "Blender", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="Blender" className="w-6 h-6 inline" />, category: "design", proficiency: 80 },
  { 
    name: "Adobe Suite", 
    icon: "🎨", 
    category: "design", 
    proficiency: 70 
  },
  { name: "Photoshop", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-6 h-6 inline" />, category: "design", proficiency: 80 },
  { name: "Premiere Pro", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" className="w-6 h-6 inline" />, category: "design", proficiency: 70 },
  { name: "After Effects", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" alt="After Effects" className="w-6 h-6 inline" />, category: "design", proficiency: 65 },
];

const categoryColors: Record<string, string> = {
  xr: "from-xr-blue to-xr-purple",
  development: "from-blue-500 to-cyan-500",
  design: "from-purple-500 to-pink-500",
  cicd: "from-yellow-500 to-orange-500",
};

const categoryTitles: Record<string, string> = {
  xr: "XR Technologies",
  development: "Development",
  design: "Design & 3D",
  cicd: "CI/CD & DevOps",
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
  
  const categories = ["xr", "development", "design", "cicd"];

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
