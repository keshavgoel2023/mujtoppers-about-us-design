import { Eye, Target, Users, Lightbulb } from "lucide-react";

const OurVision = () => {
  const visionPillars = [
    {
      icon: Eye,
      title: "Academic Excellence",
      description: "PYQs, toppers' notes, and study resources all in one place.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Career Opportunities",
      description: "Placements, internships, and startup opportunities centralized.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Connecting MUJ students for projects and collaboration.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "Campus Life Made Easy",
      description: "From food ordering to event updates - everything simplified.",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To centralize the entire MUJ student experience by providing everything in one place—academics, placements, internships, startup opportunities, projects, food ordering, and more. A one-stop platform to make college life easier and more efficient.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPillars.map((pillar, index) => (
            <div key={pillar.title} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-lg flex items-center justify-center mb-4`}>
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;