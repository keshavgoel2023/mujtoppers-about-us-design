
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/197e2dc3-1ddb-4466-b2eb-532d113b0ab4.png" 
          alt="Architectural Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-orange-50/60"></div>
      </div>

      {/* Thinking & Doodle Graphics */}
      <div className="absolute inset-0 opacity-20 z-5">
        {/* Lightbulb Doodles */}
        <div className="absolute top-16 left-16 w-12 h-16 border-2 border-yellow-400 rounded-t-full animate-pulse">
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-2 border-2 border-yellow-400"></div>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-yellow-400"></div>
        </div>
        
        {/* Brain Doodle */}
        <div className="absolute top-20 right-24 w-16 h-12 border-2 border-pink-400 rounded-full">
          <div className="absolute top-2 left-2 w-3 h-3 border border-pink-400 rounded-full"></div>
          <div className="absolute top-1 right-3 w-2 h-2 border border-pink-400 rounded-full"></div>
          <div className="absolute bottom-2 left-4 w-4 h-2 border border-pink-400 rounded"></div>
        </div>

        {/* Mathematical Symbols */}
        <div className="absolute top-1/3 left-8 text-4xl font-bold text-blue-400 transform rotate-12 animate-pulse">∑</div>
        <div className="absolute top-1/2 right-16 text-3xl font-bold text-green-400 transform -rotate-12">∞</div>
        <div className="absolute bottom-32 left-32 text-2xl font-bold text-purple-400 transform rotate-45">π</div>
        
        {/* Thought Bubbles */}
        <div className="absolute top-1/4 right-1/3 flex space-x-1">
          <div className="w-2 h-2 bg-cyan-300 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Coffee Cup Doodle */}
        <div className="absolute bottom-1/4 right-8 w-8 h-10 border-2 border-amber-400 rounded-b-lg">
          <div className="absolute -top-1 left-6 w-3 h-4 border-2 border-amber-400 rounded-r-full border-l-0"></div>
          <div className="absolute top-1 left-1 w-6 h-2 bg-amber-200 rounded animate-pulse"></div>
        </div>

        {/* Book Stack Doodle */}
        <div className="absolute bottom-16 left-8">
          <div className="w-12 h-2 bg-red-300 mb-1 transform -rotate-2"></div>
          <div className="w-10 h-2 bg-blue-300 mb-1 transform rotate-1"></div>
          <div className="w-11 h-2 bg-green-300 transform -rotate-1"></div>
        </div>

        {/* Arrow Doodles */}
        <div className="absolute top-1/2 left-1/3 w-16 h-0.5 bg-orange-400 transform rotate-45">
          <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-orange-400 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
        </div>
        
        {/* Scribbled Notes */}
        <div className="absolute bottom-1/3 right-1/4">
          <div className="w-8 h-0.5 bg-gray-400 mb-1 transform -rotate-12"></div>
          <div className="w-6 h-0.5 bg-gray-400 mb-1 transform rotate-6"></div>
          <div className="w-7 h-0.5 bg-gray-400 transform -rotate-3"></div>
        </div>

        {/* Geometric Study Elements */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-indigo-300 transform rotate-45">
          <div className="absolute top-1/2 left-1/2 w-6 h-6 border border-indigo-300 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>

        {/* DNA Helix Doodle */}
        <div className="absolute top-3/4 left-1/2 flex flex-col space-y-1">
          <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-teal-400 rounded-full ml-2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-1 h-1 bg-teal-400 rounded-full ml-2 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Question Mark Doodle */}
        <div className="absolute top-1/3 right-1/4 text-3xl font-bold text-violet-400 transform -rotate-12 animate-bounce">?</div>
        
        {/* Exclamation Mark */}
        <div className="absolute bottom-1/3 left-1/3 text-2xl font-bold text-rose-400 transform rotate-12 animate-pulse">!</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
            MUJ Toppers
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            "Brains, Bunking, Balance. Welcome to MUJ Toppers."
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Your ultimate platform for academic excellence, peer connection, and balanced student life at MUJ.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
            style={{ animationDelay: '0.6s' }}
          >
            Explore the Madness!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
