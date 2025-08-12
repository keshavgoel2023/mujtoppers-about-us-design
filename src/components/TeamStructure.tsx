
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>();

  // Auto-advance main carousel every 3 seconds
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
        <div className="max-w-4xl mx-auto mb-20">
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
                      <div className={`w-64 h-64 ${member.color} rounded-full shadow-2xl animate-pulse flex items-center justify-center transform transition-all duration-700 hover:scale-105`}>
                        <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-48 h-48 rounded-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
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

        {/* Core Committee Section - Static Display */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Core Committee</h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            The driving force behind our success - dedicated leaders shaping the future
          </p>
          
          {/* Static Grid Layout for All Screen Sizes */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
              {coreCommittee.map((member, index) => (
                <div 
                  key={member.name}
                  className="text-center w-full max-w-xs"
                >
                  <div className="relative mb-6">
                    <div className={`w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 ${member.color} rounded-full mx-auto shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center overflow-hidden`}>
                      <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-2">{member.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  
                  <div className="flex justify-center mt-3">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
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
