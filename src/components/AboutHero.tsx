
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

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-orange-300 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-blue-300 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-green-300 transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-200 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-orange-200 transform rotate-45 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            MUJToppers
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            "Brains, Bunking, Balance. Welcome to MUJToppers."
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Your ultimate platform for academic excellence, peer connection, and balanced student life at MU.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
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
