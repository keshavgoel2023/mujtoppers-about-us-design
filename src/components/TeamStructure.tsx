
import { useState, useEffect, useRef } from "react";
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

  const coreCommittee = [
    { name: "Core Member 1", color: "bg-gradient-to-r from-purple-500 to-pink-500", description: "Strategic Excellence" },
    { name: "Core Member 2", color: "bg-gradient-to-r from-blue-500 to-cyan-500", description: "Innovation Leader" },
    { name: "Core Member 3", color: "bg-gradient-to-r from-green-500 to-teal-500", description: "Growth Catalyst" },
    { name: "Core Member 4", color: "bg-gradient-to-r from-orange-500 to-red-500", description: "Vision Architect" },
    { name: "Core Member 5", color: "bg-gradient-to-r from-indigo-500 to-purple-500", description: "Excellence Driver" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel every 4 seconds (increased from 3)
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % teamData.length;
        api.scrollTo(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [api, teamData.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    api?.scrollTo(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-50 to-orange-50 relative overflow-hidden"
    >
      {/* Enhanced Background Decorations with more animations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border-4 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border-4 border-orange-300 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-pink-300 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">
            "Meet the Brains Behind the Madness"
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full transform scale-x-0 animate-scale-x" style={{ animation: 'scale-x 1s ease-out 0.5s forwards' }}></div>
        </div>

        {/* Enhanced Hero Team Member Carousel */}
        <div 
          ref={carouselRef}
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
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
                    <div className="relative mb-8 group">
                      {/* Enhanced large animated circle for featured member */}
                      <div className={`w-64 h-64 ${member.color} rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-700 hover:scale-110 hover:rotate-6 group-hover:shadow-purple-500/50`}>
                        <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center shadow-inner transform transition-all duration-500 group-hover:scale-105">
                          <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12">
                            <span className="text-5xl font-bold text-gray-600 transform transition-all duration-300 group-hover:scale-110">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced floating decorative elements */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce transform transition-all duration-300 group-hover:scale-125"></div>
                      <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce transform transition-all duration-300 group-hover:scale-125" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute -top-2 -left-8 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-70"></div>
                      <div className="absolute -bottom-2 -right-8 w-8 h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.7s' }}></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center transform transition-all duration-500 hover:scale-105 hover:text-purple-600">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600 text-center max-w-md transform transition-all duration-300 hover:text-gray-800">
                      {member.description}
                    </p>
                    
                    {/* Enhanced level indicator */}
                    <div className="flex space-x-1 mt-4">
                      {Array.from({ length: member.level }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-3 h-3 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full transform transition-all duration-300 hover:scale-125 animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Enhanced dot indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-150 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-orange-500 scale-125 animate-pulse'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Core Committee Section */}
        <div 
          ref={coreRef}
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4 transform transition-all duration-500 hover:scale-105 hover:text-purple-600">
            Core Committee
          </h3>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto transform transition-all duration-300 hover:text-gray-800">
            The driving force behind our success - dedicated leaders shaping the future
          </p>
          
          {/* Enhanced Core Committee layout */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {coreCommittee.map((member, index) => (
                <div 
                  key={member.name}
                  className={`group text-center transform transition-all duration-700 hover:scale-110 hover:-translate-y-2 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${0.8 + index * 0.2}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="relative mb-6">
                    {/* Enhanced core member circle */}
                    <div className={`w-32 h-32 ${member.color} rounded-full mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center transform group-hover:rotate-12`}>
                      <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-inner transform transition-all duration-300 group-hover:scale-110">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12">
                          <span className="text-2xl font-bold text-gray-700 transform transition-all duration-300 group-hover:scale-110">
                            {member.name.split(' ')[2]}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced floating elements around each core member */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-70 transform transition-all duration-300 group-hover:scale-125"></div>
                    <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce opacity-70 transform transition-all duration-300 group-hover:scale-125" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-50"></div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-2 transform transition-all duration-300 group-hover:text-purple-600 group-hover:scale-105">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed transform transition-all duration-300 group-hover:text-gray-800">
                    {member.description}
                  </p>
                  
                  {/* Enhanced premium indicator */}
                  <div className="flex justify-center mt-3">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full transform transition-all duration-500 group-hover:w-12 group-hover:h-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scale-x animation */}
      <style jsx>{`
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TeamStructure;
