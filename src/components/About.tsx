
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-80 h-80 rounded-full bg-xr-blue/5 filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-xr-purple/5 filter blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image/Avatar Section */}
          <div className={cn(
            "md:w-2/5 transform transition-all duration-700",
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          )}>
            <div className="relative">
              {/* Profile image with decorative elements */}
              <div className="w-full max-w-md aspect-square rounded-2xl relative mx-auto overflow-hidden">
                {/* Border gradient */}
                <div className="absolute inset-0 p-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-xr-blue to-xr-purple animate-pulse-glow"></div>
                </div>
                
                {/* Image */}
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden bg-xr-dark">
                  <img 
                    src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?q=80&w=800&fit=crop" 
                    alt="XR Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute -right-5 bottom-10 bg-gradient-to-r from-xr-blue to-xr-purple p-[1px] rounded-xl shadow-lg">
                  <div className="bg-xr-dark rounded-xl px-4 py-2">
                    <p className="text-sm font-medium">5+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className={cn(
            "md:w-3/5 transform transition-all duration-700",
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          )}>
            <h2 className="section-title">About Me</h2>
            
            <p className="text-lg mb-6 text-gray-200">
              I'm a passionate XR Developer specializing in creating immersive digital experiences that bridge the gap between the physical and virtual worlds.
            </p>
            
            <p className="text-gray-300 mb-6">
              With over 5 years of experience in XR development, I've had the privilege of working on cutting-edge projects across various industries including healthcare, education, and entertainment. My expertise spans virtual reality, augmented reality, and mixed reality applications, with a strong foundation in both technical development and user experience design.
            </p>
            
            <p className="text-gray-300 mb-8">
              I'm driven by the potential of immersive technologies to transform how we learn, work, and connect. Whether it's creating virtual training environments that enhance skill development or developing augmented reality applications that blend digital information with our physical surroundings, I'm committed to pushing the boundaries of what's possible in the XR space.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Experience Items */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-xr-blue/30 transition-all hover-glow">
                <h3 className="font-bold text-xl mb-1 font-space">Education</h3>
                <p className="text-gray-300">MSc in Computer Science<br />Specialization in Interactive Media</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-xr-purple/30 transition-all hover-glow">
                <h3 className="font-bold text-xl mb-1 font-space">Certifications</h3>
                <p className="text-gray-300">Unity Certified Developer<br />Google ARCore Certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
