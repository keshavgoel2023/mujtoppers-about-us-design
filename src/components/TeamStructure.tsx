
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Linkedin, Mail } from "lucide-react";

const TeamStructure = () => {
  // Founders - displayed at top
  const founders = [
    { name: "Swatantra Choudhary", role: "Founder", description: "The mind behind MUJ Toppers, uniting vision and people to shape the journey ahead.", image: "/lovable-uploads/swatantra.png", linkedin: "https://www.linkedin.com/in/swatantra-choudhary-b1139321a/" },
    { name: "Sahil Moharil", role: "Founder", description: "The heart of MUJ Toppers, solving at the right time and nurturing a culture of support.", image: "/lovable-uploads/sahil.jpg", linkedin: "https://www.linkedin.com/in/sahil-moharil/" },
    { name: "Dr. Chandrapal Dangi", role: "Mentor", description: "The guiding force, giving us freedom to think big while keeping us grounded with wisdom.", image: "/lovable-uploads/chandrapal.png", linkedin: "https://www.linkedin.com/in/chandrapal-singh-dangi-4a226134/?originalSubdomain=in" }
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
  const [coreCurrentIndex, setCoreCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>();
  const [coreApi, setCoreApi] = useState<any>();

  // Auto-advance carousel every 3 seconds for executives
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

  // Auto-advance carousel every 3 seconds for core committee
  useEffect(() => {
    if (!coreApi) return;

    const interval = setInterval(() => {
      setCoreCurrentIndex((prev) => {
        const next = (prev + 1) % coreCommittee.length;
        coreApi.scrollTo(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [coreApi, coreCommittee.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    api?.scrollTo(index);
  };

  const handleCoreDotClick = (index: number) => {
    setCoreCurrentIndex(index);
    coreApi?.scrollTo(index);
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
              <div key={founder.name} className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
                {/* Enhanced decorative pattern background */}
                <div className="absolute inset-0 opacity-10">
                  {/* Geometric patterns */}
                  <div className="absolute top-2 left-2 w-20 h-20 border-2 border-gradient-to-r from-orange-300 to-purple-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-6 right-4 w-12 h-12 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full"></div>
                  <div className="absolute bottom-4 left-6 w-16 h-16 border border-gradient-to-r from-pink-300 to-orange-300 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full"></div>
                  <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Additional pattern elements */}
                  <div className="absolute top-12 right-12 w-4 h-4 border border-pink-200 rotate-12"></div>
                  <div className="absolute bottom-16 left-2 w-6 h-6 border-2 border-orange-200 rounded-full"></div>
                  <div className="absolute top-32 left-8 w-3 h-3 bg-purple-200 rounded-full"></div>
                  <div className="absolute bottom-8 right-16 w-5 h-5 border border-yellow-200 rotate-45"></div>
                  
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 69, 19, 0.1) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="relative mb-6 z-10">
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
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 relative z-10">
                  {founder.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed relative z-10">
                  {founder.description}
                </p>
                
                <div className="text-xs font-semibold text-gray-700 mb-4 uppercase tracking-wide relative z-10">
                  {founder.role}
                </div>
                
                {/* Social Icons */}
                <div className="flex justify-center space-x-3 relative z-10">
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </a>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 text-orange-600" />
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
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/70930428-30af-42d3-a670-163eed7264cf.png" 
                        alt="MUJ Logo" 
                        className="w-6 h-6 rounded-full object-contain"
                      />
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
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/70930428-30af-42d3-a670-163eed7264cf.png" 
                        alt="MUJ Logo" 
                        className="w-6 h-6 rounded-full object-contain"
                      />
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
          
          {/* Desktop Grid Layout */}
          <div className="hidden md:block max-w-6xl mx-auto px-4">
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

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel 
              setApi={setCoreApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {coreCommittee.map((member, index) => (
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
                      
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center px-4">
                        {member.name}
                      </h4>
                      <p className="text-base sm:text-lg text-gray-600 text-center max-w-md px-4">
                        {member.description}
                      </p>
                      
                      <div className="flex justify-center mt-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dot indicators for mobile */}
            <div className="flex justify-center space-x-2 mt-8">
              {coreCommittee.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCoreDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === coreCurrentIndex
                      ? 'bg-gradient-to-r from-purple-500 to-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
