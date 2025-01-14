import React, { useState, useEffect } from 'react';
import { MessageSquare, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Biswas Lamichhane",
    role: "CEO, TechVision",
    content: "Bichitras has transformed our digital presence completely. Their innovative approach to web development and attention to detail has helped us achieve a 40% increase in user engagement. Their team's dedication to excellence is truly remarkable.",
    image: "testimonials/biswas.jpg"
  },
  {
    name: "Prabesh Poudel ",
    role: "CEO, Towing Nepal",
    content: "The level of creativity and technical excellence they bring to every project is extraordinary. Our e-commerce platform's conversion rate doubled after their optimization work. They don't just build websites; they create digital experiences.",
    image: "testimonials/towing-nepal.jpg"
  },
  {
    name: "Sandip Bhattarai",
    role: "Founder, NepoLive",
    content: "Working with Bichitras has been an incredible experience. Their team's expertise in both design and development helped us launch our platform two weeks ahead of schedule. The ongoing support has been exceptional.",
    image: "/testimonials/sandip.jpg"
  },
  {
    name: "Priya Sharma",
    role: "CTO, CloudTech Nepal",
    content: "The AI integration solutions provided by Bichitras revolutionized our customer service. We've seen a 60% reduction in response time and a significant improvement in customer satisfaction scores. Their technical prowess is unmatched.",
    image: "/testimonials/priya.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-royal-deep to-royal-violet rounded-2xl mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto text-lg">
            Trusted by leading companies for delivering exceptional digital solutions
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6">
                <Quote className="w-24 h-24 text-royal-celestial/10" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-royal-celestial/20">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover transform transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-royal-violet rounded-full p-2">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-royal-celestial/90 italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-royal-celestial/80">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-12 h-4 bg-gradient-to-r from-royal-celestial to-royal-violet opacity-100' 
                    : 'w-4 h-4 bg-white/50 hover:bg-white/70'
                } rounded-full shadow-lg hover:scale-110 group`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-royal-deep px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                  {testimonials[index].name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
