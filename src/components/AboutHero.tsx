
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
          {/* Graphical Thinking Format for Brains, Bunking, Balance */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            
            <div className="flex flex-col items-center group">
              <div className="relative mb-4">
                {/* Brain Graphic */}
                <div className="w-16 h-12 md:w-20 md:h-16 border-3 md:border-4 border-pink-500 rounded-full relative bg-pink-100/30">
                  <div className="absolute top-1.5 left-2.5 md:top-2 md:left-3 w-3 h-3 md:w-4 md:h-4 border-2 border-pink-500 rounded-full"></div>
                  <div className="absolute top-0.5 right-3 md:top-1 md:right-4 w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-pink-500 rounded-full"></div>
                  <div className="absolute bottom-2 left-4 md:bottom-3 md:left-5 w-5 h-2.5 md:w-6 md:h-3 border-2 border-pink-500 rounded"></div>
                  {/* Thinking sparks */}
                  <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2.5 left-6 md:-top-3 md:left-8 w-0.5 h-0.5 md:w-1 md:h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                {/* Mathematical symbols around brain */}
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 text-base md:text-lg font-bold text-purple-600 transform -rotate-12">∑</div>
                <div className="absolute -bottom-1.5 -right-3 md:-bottom-2 md:-right-4 text-xs md:text-sm font-bold text-blue-600 transform rotate-12">π</div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-pink-600 group-hover:scale-110 transition-transform">BRAINS</h3>
            </div>

            {/* Connector Line - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-green-400 rounded-full"></div>
              <div className="w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            </div>

            {/* BUNKING */}
            <div className="flex flex-col items-center group">
              <div className="relative mb-4">
                {/* Coffee + Chill Graphic */}
                <div className="relative">
                  <div className="w-12 h-16 md:w-16 md:h-20 border-3 md:border-4 border-amber-500 rounded-b-lg bg-amber-100/30 relative">
                    <div className="absolute -top-0.5 right-10 md:-top-1 md:right-14 w-3 h-5 md:w-4 md:h-6 border-3 md:border-4 border-amber-500 rounded-r-full border-l-0"></div>
                    {/* Steam */}
                    <div className="absolute -top-6 left-4.5 md:-top-8 md:left-6 flex space-x-1">
                      <div className="w-0.5 h-4 md:w-1 md:h-6 bg-gray-400 rounded-full animate-pulse opacity-60"></div>
                      <div className="w-0.5 h-3 md:w-1 md:h-4 bg-gray-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    {/* Coffee level */}
                    <div className="absolute top-2.5 left-1.5 md:top-3 md:left-2 w-9 h-2.5 md:w-12 md:h-3 bg-amber-400 rounded animate-pulse"></div>
                  </div>
                  {/* Zzz symbols */}
                  <div className="absolute -top-5 -right-5 md:-top-6 md:-right-6 text-base md:text-lg font-bold text-blue-500 animate-bounce">Z</div>
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 text-sm font-bold text-blue-400 animate-bounce" style={{ animationDelay: '0.3s' }}>z</div>
                  <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 text-xs font-bold text-blue-300 animate-bounce" style={{ animationDelay: '0.6s' }}>z</div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-amber-600 group-hover:scale-110 transition-transform">BUNKING</h3>
            </div>

            {/* Connector Line - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
              <div className="w-0 h-0 border-l-4 border-l-emerald-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            </div>

            {/* BALANCE */}
            <div className="flex flex-col items-center group">
              <div className="relative mb-4">
                {/* Balance Scale Graphic */}
                <div className="relative">
                  {/* Scale base */}
                  <div className="w-0.5 h-12 md:w-1 md:h-16 bg-emerald-600 mx-auto"></div>
                  {/* Scale beam */}
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-12 h-0.5 md:top-2 md:w-16 md:h-1 bg-emerald-600 rounded-full"></div>
                  {/* Left pan */}
                  <div className="absolute top-0 left-0 w-5 h-0.5 md:w-6 md:h-1 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -top-1.5 left-0.5 md:-top-2 md:left-1 w-3 h-3 md:w-4 md:h-4 border-2 border-emerald-500 rounded-full bg-emerald-100/30"></div>
                  {/* Right pan */}
                  <div className="absolute top-0 right-0 w-5 h-0.5 md:w-6 md:h-1 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -top-1.5 right-0.5 md:-top-2 md:right-1 w-3 h-3 md:w-4 md:h-4 border-2 border-emerald-500 rounded-full bg-emerald-100/30"></div>
                  {/* Equilibrium indicators */}
                  <div className="absolute -top-5 left-1.5 md:-top-6 md:left-2 text-xs text-green-600">📚</div>
                  <div className="absolute -top-5 right-1.5 md:-top-6 md:right-2 text-xs text-green-600">🎯</div>
                </div>
                {/* Harmony symbols */}
                <div className="absolute -top-3 left-6 md:-top-4 md:left-8 w-2.5 h-2.5 md:w-3 md:h-3 border border-green-500 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">BALANCE</h3>
            </div>
          </div>
          
          {/* Welcome Message */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Welcome to MUJ Toppers
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
