import { Eye, Target, Users, Lightbulb, ArrowRight, Star } from "lucide-react";

const OurVision = () => {
  const visionPillars = [
    {
      icon: Eye,
      title: "Innovation Excellence",
      description: "Leading the future through cutting-edge solutions and creative thinking that transforms challenges into opportunities.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Strategic Growth",
      description: "Building sustainable success through strategic planning, data-driven decisions, and continuous improvement.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Creating meaningful change in communities by fostering collaboration, inclusion, and shared prosperity.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "Future-Ready Solutions",
      description: "Anticipating tomorrow's needs today through research, adaptation, and forward-thinking approaches.",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: Star },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Target },
    { number: "5+", label: "Years Experience", icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 border-4 border-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 border-4 border-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
                Our Vision
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Shaping tomorrow through innovation, collaboration, and unwavering commitment to excellence
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Driving Change Through Purpose
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We envision a future where technology and human creativity converge to solve the world's most pressing challenges. Our mission is to empower organizations and individuals to reach their full potential through innovative solutions and collaborative partnerships.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every project we undertake is guided by our core belief that sustainable success comes from balancing profit with purpose, innovation with responsibility, and growth with social impact.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-orange-500 rounded-3xl p-1">
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <Eye className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Visionary Leadership</h3>
                      <p className="text-gray-600">Leading with foresight and purpose</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four fundamental principles that guide our journey toward creating lasting impact
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPillars.map((pillar, index) => (
              <div key={pillar.title} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mb-6`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-gray-400 group-hover:text-purple-600 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Measurable impact that reflects our commitment to excellence and growth
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg opacity-90">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Shape the Future Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in our mission to create innovative solutions that make a lasting impact. 
              Together, we can build a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Join Our Mission
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;