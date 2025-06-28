
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-orange-300 transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-pink-300 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 border-2 border-blue-300 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="w-full border-2 border-gray-200 focus:border-purple-500 rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Button */}
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Connect?</h3>
                <p className="text-gray-600 mb-6">
                  Join the MuJToppers community and take your academic journey to the next level.
                </p>
              </div>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                CONTACT US
              </Button>

              <div className="mt-8 text-center text-gray-600">
                <p className="text-sm">Visit us at:</p>
                <p className="text-lg font-semibold text-purple-600">www.mujtoppers.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
