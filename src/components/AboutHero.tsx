
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Coffee, Scale, Users, BookOpen, Calendar } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            MUJ Toppers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your ultimate platform for academic excellence at MUJ
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with peers, access resources, and maintain perfect work-life balance
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Brains Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
                <span>🧠</span> BRAINS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Academic excellence tips, comprehensive notes, and curated study resources to boost your grades.
              </p>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Bunking Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-secondary/20 bg-gradient-to-br from-background to-secondary/5">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Coffee className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-bold text-secondary flex items-center justify-center gap-2">
                <span>☕</span> BUNKING
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Stay updated with event alerts, fun campus activities, and never miss out on the college experience.
              </p>
              <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Balance Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-accent/20 bg-gradient-to-br from-background to-accent/5">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Scale className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-accent-foreground flex items-center justify-center gap-2">
                <span>⚖️</span> BALANCE
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mental wellness support, skill-building clubs, and tools to maintain perfect work-life balance.
              </p>
              <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-center mb-8">Trusted by MUJ Students</h2>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Notes Shared</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
              <div className="text-3xl mb-2">🎉</div>
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-muted-foreground">Events Covered</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-2xl font-bold text-accent-foreground">1,000+</div>
              <div className="text-muted-foreground">Peers Connected</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">
                      "MUJ Toppers helped me ace my exams with their amazing notes and study tips. The community is so supportive!"
                    </p>
                    <p className="font-semibold">- Ananya Sharma, CSE 3rd Year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">
                      "Never missed an event thanks to their alerts! Found my study group and best friends here."
                    </p>
                    <p className="font-semibold">- Rohit Verma, ECE 2nd Year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
          >
            Join MUJ Toppers Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
