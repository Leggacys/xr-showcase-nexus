import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  video?: string; 
  technologies: string[];
  liveDemoUrl?: string;
  codeUrl?: string;
  playStoreUrl?: string; // Add this
  appStoreUrl?: string;  // Add this
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  video,
  technologies, 
  liveDemoUrl, 
  codeUrl,
  playStoreUrl,
  appStoreUrl,
  index
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden hover:border-glow transition-all duration-500",
        "border border-white/5 hover:border-xr-blue/30 transform hover:-translate-y-1 h-full",
        "animate-fade-in opacity-0",
        // Apply different animation delays based on index
      )}
      style={{ 
        animationDelay: `${index * 150}ms`, 
        animationFillMode: 'forwards' 
      }}
    >
      <div className="relative overflow-hidden aspect-video">
        {video ? (
          video.includes("youtube.com") || video.includes("youtu.be") ? (
            <iframe
              src={video.replace("watch?v=", "embed/").split("&")[0] + "?controls=1"}
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <video
              src={video}
              controls
              className="w-full h-full object-cover"
              poster={image}
            />
          )
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-xr-dark to-transparent opacity-70 pointer-events-none"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-space">{title}</h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-white/5 text-xs rounded-md border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveDemoUrl && (
            <a 
              href={liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-gradient-to-r from-xr-blue to-xr-purple text-white rounded-lg hover:shadow-lg hover:shadow-xr-blue/20 transition"
            >
              View Project
            </a>
          )}

          {codeUrl && (
            <a 
              href={codeUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              View Code
            </a>
          )}

          {playStoreUrl && (
            <a 
              href={playStoreUrl}
              target="_blank" 
              rel="noopener noreferrer"
              title="Get it on Google Play"
              className="h-10"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto"
                style={{ minWidth: 120 }}
              />
            </a>
          )}

          {appStoreUrl && (
            <a 
              href={appStoreUrl}
              target="_blank" 
              rel="noopener noreferrer"
              title="Download on the App Store"
              className="h-10"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 w-auto"
                style={{ minWidth: 120 }}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
