
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const TeamStructure = () => {
  // Founders - displayed at top
  const founders = [
    { name: "Swatantra Choudhary", role: "Founder", description: "Leading the vision with strategic innovation and driving the future of our organization", image: "/lovable-uploads/swatantra.png" },
    { name: "Sahil Moharil", role: "Founder", description: "Driving innovation through creative solutions and fostering a culture of excellence", image: "/lovable-uploads/sahil.jpg" },
    { name: "Mentor Name", role: "Mentor", description: "Guiding our journey with wisdom, experience and strategic insights for sustainable growth", image: "/lovable-uploads/swatantra.png" }
  ];

  // Rest of the team members
  const teamData = [
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            "Meet the Brains Behind the Madness"
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Founders Section - Card Format */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {founders.map((founder, index) => (
              <div key={founder.name} className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-full p-1">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  {founder.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {founder.description}
                </p>
                
                <div className="text-xs font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  {founder.role}
                </div>
                
                {/* Social Icons */}
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting arrows and dots */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Executive Team Section */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Meet the Executives</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
              {teamData.slice(0, 5).map((member, index) => (
                <div key={member.name} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{member.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
              {teamData.slice(5, 10).map((member, index) => (
                <div key={member.name} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
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
                    <div className="flex flex-col items-center justify-center p-4 sm:p-6">
                      <div className="relative mb-6">
                        <div className={`w-48 h-48 sm:w-56 sm:h-56 ${member.color} rounded-full shadow-2xl animate-pulse flex items-center justify-center transform transition-all duration-700 hover:scale-105`}>
                          <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Floating decorative elements */}
                        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center px-4">
                        {member.name}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 text-center max-w-md px-4">
                        {member.description}
                      </p>
                      
                      {/* Level indicator */}
                      <div className="flex space-x-1 mt-4">
                        {Array.from({ length: member.level }).map((_, i) => (
                          <div key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dot indicators for mobile */}
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
        </div>

        {/* Core Committee Section - Organized Layout */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Core Committee</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            The driving force behind our success - dedicated leaders shaping the future
          </p>
          
          {/* Organized Grid Layout */}
          <div className="max-w-6xl mx-auto px-4">
            {/* First row - 3 members */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl">
                {coreCommittee.slice(0, 3).map((member, index) => (
                  <div 
                    key={member.name}
                    className="text-center"
                  >
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 ${member.color} rounded-full mx-auto shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center overflow-hidden`}>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-2 px-2">{member.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">{member.description}</p>
                    
                    <div className="flex justify-center mt-3">
                      <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second row - 2 members */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-2xl">
                {coreCommittee.slice(3, 5).map((member, index) => (
                  <div 
                    key={member.name}
                    className="text-center"
                  >
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 ${member.color} rounded-full mx-auto shadow-xl transition-all duration-300 hover:shadow-2xl flex items-center justify-center overflow-hidden`}>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-2 px-2">{member.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">{member.description}</p>
                    
                    <div className="flex justify-center mt-3">
                      <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
