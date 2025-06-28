
const TeamStructure = () => {
  const teamData = [
    { name: "Founder", level: 1, color: "bg-blue-500" },
    { name: "Co-founder", level: 1, color: "bg-orange-500" },
    { name: "President", level: 2, color: "bg-purple-500" },
    { name: "Vice President", level: 2, color: "bg-pink-500" },
    { name: "Technical Secretary", level: 3, color: "bg-green-500" },
    { name: "Head of Sponsorship", level: 3, color: "bg-indigo-500" },
    { name: "Managing Director", level: 3, color: "bg-red-500" },
    { name: "General Secretary", level: 3, color: "bg-yellow-500" },
    { name: "Head of Design", level: 4, color: "bg-teal-500" },
    { name: "Head of Tech", level: 4, color: "bg-cyan-500" },
    { name: "Head of Operations", level: 4, color: "bg-rose-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border-4 border-purple-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border-4 border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-pink-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            "Meet the Brains Behind the Madness"
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Overlapping Circles Visualization */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="flex justify-center items-center min-h-96 relative">
            {/* Large overlapping circles */}
            <div className="relative w-80 h-80">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-70 animate-pulse"></div>
              <div className="absolute top-8 right-0 w-64 h-64 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-0 left-8 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 right-8 w-48 h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamData.map((member, index) => (
            <div 
              key={member.name}
              className="text-center group animate-fade-in hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 ${member.color} rounded-full mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">{member.name}</h3>
            </div>
          ))}
        </div>

        {/* Core Committee Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Core Committee</h3>
          <div className="flex justify-center items-center space-x-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div 
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full shadow-lg animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
