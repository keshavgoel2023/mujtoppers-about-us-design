
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Decorative Circles with more animations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20 animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-10 right-1/3 w-16 h-16 bg-blue-200 rounded-full opacity-15 animate-spin" style={{ animationDuration: '20s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl p-12 text-gray-800 shadow-2xl relative overflow-hidden border border-purple-100 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}>
            {/* Enhanced Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-orange-200/30 rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-200/20 to-cyan-200/20 rounded-full transform -translate-x-24 translate-y-24 animate-bounce" style={{ animationDuration: '4s' }}></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className={`transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <h2 className="text-4xl font-bold mb-6 text-gray-800 transform transition-all duration-500 hover:scale-105 hover:text-purple-600">
                  About us
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed transform transition-all duration-300 hover:text-gray-800">
                  As veterans of MUJ, we've been through the stress, the endless assignments, last minute exam prep, and the hunt for reliable notes. We've always wished for a platform that made things easy for juniors, and that's exactly what we've created: MuJToppers.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed transform transition-all duration-300 hover:text-gray-800">
                  With our dedicated team, we bring you PDFs, toppers' notes, study tips all in one place.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group">
                  <span className="relative">
                    Explore the madness!
                    <span className="absolute inset-0 bg-white opacity-0 rounded-full transition-opacity duration-300 group-hover:opacity-20"></span>
                  </span>
                </button>
              </div>
              
              <div 
                ref={imageRef}
                className={`relative transition-all duration-1000 delay-500 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/8360bd53-c928-4b71-99db-254c939cd235.jpeg" 
                    alt="MUJ Toppers Team" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl transition-all duration-300 group-hover:from-black/20"></div>
                  
                  {/* Floating elements around the image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-70"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse opacity-70"></div>
                  <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
