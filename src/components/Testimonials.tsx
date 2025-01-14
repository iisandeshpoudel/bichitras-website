import React, { useState, useEffect } from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Apekshya Shah",
    role: "CEO, TechVision",
    content: "Bichitras has transformed our digital presence completely. Their innovative approach to web development and attention to detail has helped us achieve a 40% increase in user engagement. Their team's dedication to excellence is truly remarkable.",
    image: "https://nepaleconomicforum.org/wp-content/uploads/2021/11/Apekshya-Shah_headshot-e1623095590109-1.jpg",
    rating: 5
  },
  {
    name: "Amigo Khadka",
    role: "Marketing Director, InnovateCo",
    content: "The level of creativity and technical excellence they bring to every project is extraordinary. Our e-commerce platform's conversion rate doubled after their optimization work. They don't just build websites; they create digital experiences.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFkz0DTMja7Jw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647852347863?e=1736380800&v=beta&t=MP5VqP8FBZ8Xv8wN4tScDwEh5k-Rhrkch0JJw5NE0jw",
    rating: 5
  },
  {
    name: "Manish Ghimire",
    role: "Founder, DesignHub",
    content: "Working with Bichitras has been an incredible experience. Their team's expertise in both design and development helped us launch our platform two weeks ahead of schedule. The ongoing support has been exceptional.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFMQwIT-Gau8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724697353314?e=1736380800&v=beta&t=5no7yNnoMA3jfvicxT7n4jd_4B2I4A3t46XQMCgdXdI",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "CTO, CloudTech Nepal",
    content: "The AI integration solutions provided by Bichitras revolutionized our customer service. We've seen a 60% reduction in response time and a significant improvement in customer satisfaction scores. Their technical prowess is unmatched.",
    image: "/testimonials/priya.jpg",
    rating: 5
  },
  {
    name: "Rajesh Hamal",
    role: "Director, Digital Ventures",
    content: "Bichitras delivered a complex e-learning platform for us that exceeded all expectations. The intuitive user interface and robust backend have received praise from both students and educators. A truly remarkable team!",
    image: "/testimonials/rajesh.jpg",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, TechAsia",
    content: "As an international client, I was impressed by Bichitras's ability to handle cross-cultural communication and deliver a product that perfectly suited our Asian market. The attention to cultural nuances in the UX design was exceptional.",
    image: "/testimonials/sarah.jpg",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Founder, EduTech Solutions",
    content: "The mobile app developed by Bichitras garnered over 100,000 downloads in the first month. Their expertise in React Native and ability to optimize performance while maintaining beautiful design is impressive.",
    image: "/testimonials/david.jpg",
    rating: 5
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
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
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
          <div className="flex justify-center mt-12">
            <div className="bg-gradient-to-r from-royal-deep/30 to-royal-violet/30 backdrop-blur-sm p-4 rounded-full shadow-lg">
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative ${
                      index === activeIndex 
                        ? 'w-16 h-4 bg-gradient-to-r from-royal-celestial via-royal-violet to-purple-500' 
                        : 'w-4 h-4 bg-white/20 hover:bg-white/40'
                    } rounded-full shadow-lg hover:scale-110 transition-all duration-300 group overflow-hidden`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {index === activeIndex && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                        style={{
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 5s linear infinite'
                        }}
                      />
                    )}
                    <span className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-royal-deep px-3 py-1.5 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl`}>
                      {testimonials[index].name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
