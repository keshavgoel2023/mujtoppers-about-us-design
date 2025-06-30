
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isFormFocused, setIsFormFocused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Background Pattern with animations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-orange-300 transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-blue-300 transform rotate-12 animate-ping"></div>
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-purple-200 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/2 w-8 h-8 bg-orange-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:scale-105 hover:text-purple-600 transition-all duration-300">
              Send Us a Message
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full transform scale-x-0 animate-scale-x" style={{ animation: 'scale-x 1s ease-out 0.5s forwards' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Enhanced Contact Form */}
            <div className={`bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl p-8 shadow-lg transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            } ${isFormFocused ? 'scale-105 shadow-2xl' : ''}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 hover:text-purple-600">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                    placeholder="Enter your name"
                    required
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg transform focus:scale-105"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 hover:text-purple-600">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                    placeholder="Enter your email"
                    required
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-lg transition-all duration-300 hover:shadow-md focus:shadow-lg transform focus:scale-105"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 hover:text-purple-600">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-lg resize-none transition-all duration-300 hover:shadow-md focus:shadow-lg transform focus:scale-105"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-500 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
                >
                  <span className="relative">
                    Send Message
                    <span className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity duration-300 group-hover:opacity-20"></span>
                  </span>
                </Button>
              </form>
            </div>

            {/* Enhanced Contact Button Section */}
            <div className={`flex flex-col items-center justify-center h-full transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-all duration-300 hover:scale-105 hover:text-purple-600">
                  Ready to Connect?
                </h3>
                <p className="text-gray-600 mb-6 transition-all duration-300 hover:text-gray-800">
                  Join the MuJToppers community and take your academic journey to the next level.
                </p>
              </div>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
              >
                <span className="relative z-10">CONTACT US</span>
                <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-full"></span>
              </Button>

              <div className="mt-8 text-center text-gray-600">
                <p className="text-sm transition-all duration-300 hover:text-gray-800">Visit us at:</p>
                <p className="text-lg font-semibold text-purple-600 mb-6 transition-all duration-300 hover:scale-105 hover:text-purple-700 cursor-pointer">
                  www.mujtoppers.in
                </p>
                
                {/* Enhanced Social Media Links */}
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.instagram.com/mujtoppers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white hover:scale-125 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <Instagram size={24} className="transform transition-all duration-300 group-hover:rotate-12" />
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/company/muj-toppers/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white hover:scale-125 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <Linkedin size={24} className="transform transition-all duration-300 group-hover:rotate-12" />
                  </a>
                  
                  <a
                    href="https://wa.me/+919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white hover:scale-125 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    <MessageCircle size={24} className="transform transition-all duration-300 group-hover:rotate-12" />
                  </a>
                </div>
                
                <p className="text-xs text-gray-500 mt-3 transition-all duration-300 hover:text-gray-700">
                  Follow us on social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scale-x animation */}
      <style>{`
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

export default ContactSection;
