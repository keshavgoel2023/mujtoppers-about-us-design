
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const TeamStructure = () => {
  const teamData = [
    { name: "Founder", level: 1, color: "bg-blue-500", description: "Leading the vision" },
    { name: "Co-founder", level: 1, color: "bg-orange-500", description: "Driving innovation" },
    { name: "President", level: 2, color: "bg-purple-500", description: "Strategic oversight" },
    { name: "Vice President", level: 2, color: "bg-pink-500", description: "Operations lead" },
    { name: "Technical Secretary", level: 3, color: "bg-green-500", description: "Tech coordination" },
    { name: "Head of Sponsorship", level: 3, color: "bg-indigo-500", description: "Partnership development" },
    { name: "Managing Director", level: 3, color: "bg-red-500", description: "Management excellence" },
    { name: "General Secretary", level: 3, color: "bg-yellow-500", description: "Administrative lead" },
    { name: "Head of Design", level: 4, color: "bg-teal-500", description: "Creative direction" },
    { name: "Head of Tech", level: 4, color: "bg-cyan-500", description: "Technical leadership" },
    { name: "Head of Operations", level: 4, color: "bg-rose-500", description: "Operational efficiency" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>();

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % teamData.length;
        api.scrollTo(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [api, teamData.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    api?.scrollTo(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border-4 border-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border-4 border-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-pink-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            "Meet the Brains Behind the Madness"
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Hero Team Member Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {teamData.map((member, index) => (
                <CarouselItem key={member.name}>
                  <div className="flex flex-col items-center justify-center p-8">
                    <div className="relative mb-8">
                      {/* Large animated circle for featured member */}
                      <div className={`w-48 h-48 ${member.color} rounded-full shadow-2xl animate-pulse flex items-center justify-center transform transition-all duration-700 hover:scale-105`}>
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-inner">
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-600">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600 text-center max-w-md">
                      {member.description}
                    </p>
                    
                    {/* Level indicator */}
                    <div className="flex space-x-1 mt-4">
                      {Array.from({ length: member.level }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Team Grid - Smaller version */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4 max-w-6xl mx-auto mb-16">
          {teamData.map((member, index) => (
            <div 
              key={member.name}
              className={`text-center group transition-all duration-500 hover:scale-110 cursor-pointer ${
                index === currentIndex ? 'scale-110 opacity-100' : 'opacity-60'
              }`}
              onClick={() => handleDotClick(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${member.color} rounded-full mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center transform ${
                index === currentIndex ? 'animate-pulse' : ''
              }`}>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <h4 className="font-medium text-gray-800 text-xs text-center leading-tight">
                {member.name.split(' ').map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </h4>
            </div>
          ))}
        </div>

        {/* Core Committee Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Core Committee</h3>
          <div className="flex justify-center items-center space-x-6">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div 
                key={index}
                className="w-20 h-20 bg-gradient-to-br from-purple-400 to-orange-400 rounded-full shadow-lg animate-pulse flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
