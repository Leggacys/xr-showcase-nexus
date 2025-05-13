
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-xr-dark/80 backdrop-blur-md py-4 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-space text-gradient">
          XR.Portfolio
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact" isButton>Contact</NavLink>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-x-0 top-[60px] bg-xr-dark/95 backdrop-blur-md p-6 transition-all duration-300 space-y-4 md:hidden",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        )}>
          <NavLink href="#projects" mobile>Projects</NavLink>
          <NavLink href="#skills" mobile>Skills</NavLink>
          <NavLink href="#about" mobile>About</NavLink>
          <NavLink href="#contact" isButton mobile>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isButton?: boolean;
  mobile?: boolean;
}

const NavLink = ({ href, children, isButton, mobile }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "transition-all duration-300 font-medium",
        isButton 
          ? "bg-gradient-to-r from-xr-blue to-xr-purple px-5 py-2 rounded-lg text-white hover:shadow-lg hover:shadow-xr-purple/20" 
          : "text-gray-300 hover:text-gradient relative after:absolute after:bottom-0 after:left-0 after:bg-xr-purple after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300",
        mobile && "block py-2"
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;
