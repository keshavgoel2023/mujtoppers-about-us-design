
import { useState, useEffect } from "react";

const TeamStructure = () => {
  const teamData = [
    { name: "Swatantra Choudhary", level: 1, color: "bg-blue-500", description: "Leading the vision", image: "/lovable-uploads/swatantra.png" },
    { name: "Sahil Moharil", level: 1, color: "bg-orange-500", description: "Driving innovation", image: "/lovable-uploads/sahil.jpg" },
    { name: "Chirag Jotwani", level: 2, color: "bg-purple-500", description: "Strategic oversight", image: "/lovable-uploads/chirag.jpg" },
    { name: "Chandra Panday", level: 2, color: "bg-pink-500", description: "Operations lead", image: "/lovable-uploads/chandra.jpg" },
    { name: "Vasu Verma", level: 3, color: "bg-green-500", description: "Tech coordination", image: "/lovable-uploads/vasu.jpg" },
    { name: "Robin Singh", level: 3, color: "bg-indigo-500", description: "Partnership development", image: "/lovable-uploads/robin.jpg" },
    { name: "Hardik Bhardwaj", level: 3, color: "bg-red-500", description: "Head of Sponsorship", image: "/lovable-uploads/hardik.jpg" },
    { name: "Chanchal Agrawal", level: 3, color: "bg-yellow-500", description: "Administrative lead", image: "/lovable-uploads/chanchal.jpg" },
    { name: "Harsh Tyagi", level: 4, color: "bg-teal-500", description: "Creative direction", image: "/lovable-uploads/harsh.jpg" },
    { name: "Shaili Saxena", level: 4, color: "bg-cyan-500", description: "Technical leadership", image: "/lovable-uploads/shaili.jpg" },
    { name: "Keshav Goel", level: 4, color: "bg-rose-500", description: "Operational efficiency", image: "/lovable-uploads/keshav.jpg" },
    { name: "Abhi Garg", level: 4, color: "bg-violet-500", description: "Team excellence", image: "/lovable-uploads/abhi.png" }
  ];

  const coreCommittee = [
    { name: "Aakshara Tomar", color: "bg-purple-500", description: "Strategic Excellence", image: "/lovable-uploads/aakshara.jpg" },
    { name: "Ananya Tyagi", color: "bg-blue-500", description: "Innovation Leader", image: "/lovable-uploads/ananya.jpg" },
    { name: "Sahil Lenka", color: "bg-green-500", description: "Growth Catalyst", image: "/lovable-uploads/sahil-jr.jpg" },
    { name: "Udit Mishra", color: "bg-orange-500", description: "Vision Architect", image: "/lovable-uploads/udit.jpg" },
    { name: "Vaishak Yadav", color: "bg-indigo-500", description: "Excellence Driver", image: "/lovable-uploads/vaishak.jpg" }
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

        {/* Executive Team - Multi-row Layout */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {teamData.map((member, index) => (
              <div 
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-40 h-40 ${member.color} rounded-full mx-auto shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden`}>
                    <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {member.description}
                </p>
                
                {/* Level indicator */}
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: member.level }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Committee Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Core Committee</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            The driving force behind our success - dedicated leaders shaping the future
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
              {coreCommittee.map((member, index) => (
                <div 
                  key={member.name}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div className={`w-36 h-36 ${member.color} rounded-full mx-auto shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden`}>
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-28 h-28 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-base mb-2 leading-tight">{member.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  
                  <div className="flex justify-center mt-3">
                    <div className="w-6 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
