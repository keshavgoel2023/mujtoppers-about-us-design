
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Coffee, Scale } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute inset-0 opacity-10">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-amber-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Squiggly Lines */}
        <div className="absolute top-32 left-1/4 w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full transform rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-1 bg-gradient-to-l from-orange-400 to-transparent rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Zigzag Patterns */}
        <div className="absolute top-1/2 left-5 w-2 h-16 bg-gradient-to-b from-amber-400 to-transparent opacity-30 transform -rotate-45" style={{ clipPath: 'polygon(0 0, 100% 25%, 0 50%, 100% 75%, 0 100%)' }}></div>
        <div className="absolute top-1/3 right-10 w-2 h-20 bg-gradient-to-b from-yellow-400 to-transparent opacity-30 transform rotate-45" style={{ clipPath: 'polygon(0 0, 100% 25%, 0 50%, 100% 75%, 0 100%)' }}></div>
        
        {/* Scattered Dots */}
        <div className="absolute top-16 left-1/2 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-16 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-40 right-1/3 w-4 h-4 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Dashed Curves */}
        <div className="absolute top-24 right-1/2 w-40 h-40 border-2 border-dashed border-yellow-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-24 left-1/2 w-32 h-32 border-2 border-dashed border-orange-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        
        {/* Star Shapes */}
        <div className="absolute top-28 left-3/4 text-yellow-400 text-2xl animate-pulse" style={{ animationDelay: '1.2s' }}>✨</div>
        <div className="absolute bottom-36 right-1/5 text-orange-400 text-lg animate-pulse" style={{ animationDelay: '2.8s' }}>⭐</div>
        <div className="absolute top-1/2 left-1/5 text-amber-400 text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>💫</div>
      </div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
        <div className="w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent"></div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <div className="w-full h-1 bg-gradient-to-l from-orange-400 to-transparent"></div>
        <div className="w-1 h-full bg-gradient-to-b from-orange-400 to-transparent ml-auto"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            MUJ Toppers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your ultimate platform for academic excellence at MUJ
          </p>
        </div>

        {/* Combined Cards with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in relative" style={{ animationDelay: '0.2s' }}>
          {/* Decorative floating elements around cards */}
          <div className="absolute -top-4 left-1/4 w-8 h-8 border-2 border-dashed border-yellow-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute -bottom-4 right-1/4 w-6 h-6 bg-orange-200 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}></div>
          
          {/* Brains Card with Stats */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-yellow-200 bg-gradient-to-br from-white to-yellow-50 relative overflow-hidden">
            {/* Card doodles */}
            <div className="absolute top-2 right-2 w-4 h-4 border border-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-200 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 right-1 w-1 h-8 bg-gradient-to-b from-yellow-300 to-transparent opacity-20 transform rotate-12"></div>
            
            <CardHeader className="text-center pb-2 relative">
              <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 group-hover:shadow-lg transition-all relative">
                <Brain className="w-6 h-6 text-white" />
                {/* Icon sparkles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
              </div>
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-2">
                🧠 BRAINS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-gray-600 text-sm">
                Academic excellence tips and study resources.
              </p>
              <div className="pt-2 border-t border-yellow-100">
                <div className="text-2xl mb-1">📚</div>
                <div className="text-2xl font-bold text-yellow-600">500+</div>
                <div className="text-xs text-gray-500">Notes Shared</div>
              </div>
            </CardContent>
          </Card>

          {/* Bunking Card with Stats */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden">
            {/* Card doodles */}
            <div className="absolute top-3 right-3 w-3 h-3 border border-orange-300 transform rotate-45 opacity-20"></div>
            <div className="absolute bottom-3 left-3 w-2 h-6 bg-orange-200 opacity-30 transform -rotate-12"></div>
            <div className="absolute top-1/3 left-1 text-orange-200 text-xs opacity-30">☕</div>
            
            <CardHeader className="text-center pb-2 relative">
              <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 group-hover:shadow-lg transition-all relative">
                <Coffee className="w-6 h-6 text-white" />
                {/* Icon sparkles */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                ☕ BUNKING
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-gray-600 text-sm">
                Event alerts and fun campus activities.
              </p>
              <div className="pt-2 border-t border-orange-100">
                <div className="text-2xl mb-1">🎉</div>
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-xs text-gray-500">Events Covered</div>
              </div>
            </CardContent>
          </Card>

          {/* Balance Card with Stats */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-amber-200 bg-gradient-to-br from-white to-amber-50 relative overflow-hidden">
            {/* Card doodles */}
            <div className="absolute top-2 left-2 w-5 h-1 bg-amber-200 opacity-30 transform rotate-45"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-amber-300 opacity-20 transform rotate-12"></div>
            <div className="absolute top-2/3 right-1 w-1 h-4 bg-amber-200 opacity-30"></div>
            
            <CardHeader className="text-center pb-2 relative">
              <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 group-hover:shadow-lg transition-all relative">
                <Scale className="w-6 h-6 text-white" />
                {/* Icon sparkles */}
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                ⚖️ BALANCE
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-gray-600 text-sm">
                Mental wellness and skill-building clubs.
              </p>
              <div className="pt-2 border-t border-amber-100">
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-2xl font-bold text-amber-600">1,000+</div>
                <div className="text-xs text-gray-500">Peers Connected</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-3 text-white"
            onClick={() => window.open('https://chat.whatsapp.com/EU9X6uJp8skIqRE1loeSDq?mode=ac_t', '_blank')}
          >
            Join MUJ Toppers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
