
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0F172A] opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] animate-grid-flow"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-xr-blue/20 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full bg-xr-purple/10 filter blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 md:pr-10">
          <span className={cn(
            "inline-block py-1 px-3 rounded-full bg-xr-blue/10 text-xr-blue border border-xr-blue/20 mb-4 transform transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            XR Developer & Designer
          </span>
          
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 transform transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Creating <span className="text-gradient">Immersive</span> Digital Experiences
          </h1>
          
          <p className={cn(
            "text-gray-300 text-lg mb-8 transform transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Specialized in building cutting-edge XR applications, 
            immersive experiences, and interactive 3D environments 
            that push the boundaries of reality.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <a href="#projects" className="bg-gradient-to-r from-xr-blue to-xr-purple hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-xr-purple/20 text-center">
              View My Work
            </a>
            <a href="#contact" className="bg-transparent hover:bg-white/5 text-white border border-white/20 font-medium py-3 px-8 rounded-lg transition transform hover:-translate-y-1 text-center">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className={cn(
          "md:w-1/2 mt-12 md:mt-0 transform transition-all duration-1000 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="relative">
            {/* Hero illustration or 3D element */}
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-xr-blue/20 to-xr-purple/20 animate-pulse-glow"></div>
              <div className="absolute inset-4 rounded-full bg-xr-dark flex items-center justify-center">
                <div className="absolute h-full w-full rounded-full border border-white/10"></div>
                <div className="absolute h-3/4 w-3/4 rounded-full border border-white/10 animate-pulse" style={{animationDuration: "4s"}}></div>
                <div className="absolute h-1/2 w-1/2 rounded-full border border-white/10 animate-pulse" style={{animationDuration: "5s"}}></div>
                <div className="text-5xl font-bold text-gradient">XR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
