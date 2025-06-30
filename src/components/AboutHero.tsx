
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const animatedTexts = [
    "Brains, Bunking, Balance. Welcome to MUJ Toppers.",
    "Your Academic Journey Starts Here.",
    "Excellence Made Simple."
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Animate text changes
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 4000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Enhanced Background Image with parallax effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/197e2dc3-1ddb-4466-b2eb-532d113b0ab4.png" 
          alt="Architectural Background" 
          className="w-full h-full object-cover opacity-60 transform scale-105 transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-orange-50/60"></div>
      </div>

      {/* Enhanced Background Pattern with more animations */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-orange-300 transform rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-blue-300 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-green-300 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-200 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-orange-200 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-pink-200 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-cyan-200 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced animated title */}
          <h1 className={`text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}>
            <span className="inline-block animate-pulse">M</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>U</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>J</span>
            <span className="inline-block mx-4"></span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>T</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>o</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>p</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>p</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.7s' }}>e</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.8s' }}>r</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.9s' }}>s</span>
          </h1>
          
          {/* Animated changing subtitle */}
          <p className={`text-2xl md:text-3xl text-gray-700 mb-8 font-medium transition-all duration-1000 transform min-h-[4rem] flex items-center justify-center ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            <span className="transition-all duration-500 transform">
              "{animatedTexts[textIndex]}"
            </span>
          </p>
          
          <p className={`text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            Your ultimate platform for academic excellence, peer connection, and balanced student life at MUJ.
          </p>
          
          <Button 
            size="lg" 
            className={`bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
              isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <span className="relative">
              Explore the Madness!
              <span className="absolute inset-0 bg-white opacity-0 rounded-full transition-opacity duration-300 hover:opacity-20"></span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
