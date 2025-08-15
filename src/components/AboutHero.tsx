
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Coffee, Scale } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-amber-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
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

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Brains Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-yellow-200 bg-gradient-to-br from-white to-yellow-50">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 group-hover:shadow-lg transition-all">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                🧠 BRAINS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4 text-sm">
                Academic excellence tips and study resources.
              </p>
              <Button variant="outline" className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-500 hover:text-white transition-colors text-sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Bunking Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-gradient-to-br from-white to-orange-50">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 group-hover:shadow-lg transition-all">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ☕ BUNKING
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4 text-sm">
                Event alerts and fun campus activities.
              </p>
              <Button variant="outline" className="w-full border-orange-300 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors text-sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Balance Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-amber-200 bg-gradient-to-br from-white to-amber-50">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 group-hover:shadow-lg transition-all">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                ⚖️ BALANCE
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4 text-sm">
                Mental wellness and skill-building clubs.
              </p>
              <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-500 hover:text-white transition-colors text-sm">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-colors">
            <div className="text-2xl mb-1">📚</div>
            <div className="text-xl font-bold text-yellow-600">500+</div>
            <div className="text-xs text-gray-600">Notes Shared</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-colors">
            <div className="text-2xl mb-1">🎉</div>
            <div className="text-xl font-bold text-orange-600">50+</div>
            <div className="text-xs text-gray-600">Events Covered</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-colors">
            <div className="text-2xl mb-1">🤝</div>
            <div className="text-xl font-bold text-amber-600">1,000+</div>
            <div className="text-xs text-gray-600">Peers Connected</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-3 text-white"
          >
            Join MUJ Toppers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
