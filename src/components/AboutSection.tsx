
const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl p-12 text-gray-800 shadow-2xl relative overflow-hidden border border-purple-100">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-orange-200/30 rounded-full transform translate-x-32 -translate-y-32"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">About us</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As veterans of MU, we've been through the stress, the endless assignments, last minute exam prep, and the hunt for reliable notes. We've always wished for a platform that made things easy for juniors, and that's exactly what we've created: MuJToppers.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With our dedicated team, we bring you PDFs, toppers' notes, study tips all in one place.
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  Explore the madness!
                </button>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/8360bd53-c928-4b71-99db-254c939cd235.png" 
                  alt="MuJToppers Team" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
