import React from 'react';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Apekshya Shah",
    role: "CEO, TechVision",
    content: "In Nepal has Bichitras transformed our digital presence completely. Their expertise in both design and development is unmatched.",
    image: "https://nepaleconomicforum.org/wp-content/uploads/2021/11/Apekshya-Shah_headshot-e1623095590109-1.jpg"
  },
  {
    name: "Amigo Khadka",
    role: "Marketing Director, InnovateCo",
    content: "The level of creativity and technical excellence they bring to every project is extraordinary. Truly a game-changer for our business.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFkz0DTMja7Jw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647852347863?e=1736380800&v=beta&t=MP5VqP8FBZ8Xv8wN4tScDwEh5k-Rhrkch0JJw5NE0jw"
  },
  {
    name: "Manish Ghimire",
    role: "Founder, DesignHub",
    content: "Working with Bichitras has been an incredible experience. They don't just deliver projects; they deliver excellence.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFMQwIT-Gau8g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724697353314?e=1736380800&v=beta&t=5no7yNnoMA3jfvicxT7n4jd_4B2I4A3t46XQMCgdXdI"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <MessageSquare className="w-8 h-8 text-royal-gold mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto">
            Hear what our clients say about their experience with Bichitras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-royal-celestial/80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-royal-celestial/90 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
