import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  // Custom handler for Formspree
  const handleFormspreeResponse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyzpwepn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setIsSent(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-xr-dark/90 to-xr-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:30px_30px] opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-xr-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Interested in working together? 
          Send me a message and let's discuss your next immersive project.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold font-space mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Leggacys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-bogatu-6ab61617a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/Leggacyss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3 space-y-6">
            {isSent ? (
              <div className="flex flex-col items-center justify-center py-12">
                <h3 className="text-2xl font-bold text-xr-blue mb-4">Thank you!</h3>
                <p className="text-gray-300 text-center">
                  Your message has been sent.<br />
                  I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormspreeResponse}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
                      "focus:outline-none focus:ring-2 focus:ring-xr-blue/50 focus:border-transparent",
                      "text-white placeholder-gray-400"
                    )}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
                      "focus:outline-none focus:ring-2 focus:ring-xr-blue/50 focus:border-transparent",
                      "text-white placeholder-gray-400"
                    )}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
                      "focus:outline-none focus:ring-2 focus:ring-xr-blue/50 focus:border-transparent",
                      "text-white placeholder-gray-400"
                    )}
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "w-full py-3 px-6 rounded-lg text-white font-medium",
                    "bg-gradient-to-r from-xr-blue to-xr-purple",
                    "hover:shadow-lg hover:shadow-xr-purple/20 transition transform hover:-translate-y-1"
                  )}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
