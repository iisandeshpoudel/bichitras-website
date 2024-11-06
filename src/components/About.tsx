import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-8 h-8 text-royal-gold mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            About Bichitras
          </h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto">
            Your trusted partner in digital transformation and creative excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Our Journey</h3>
            <p className="text-royal-celestial/80">
              Founded with a vision to revolutionize digital solutions, Bichitras has grown into a leading force in the industry. Our commitment to excellence and innovation drives everything we do.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 rounded-lg">
                <Target className="w-6 h-6 text-royal-gold mb-2" />
                <h4 className="font-bold text-white">Mission</h4>
                <p className="text-sm text-royal-celestial/80">Empowering businesses through digital excellence</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 rounded-lg">
                <Award className="w-6 h-6 text-royal-gold mb-2" />
                <h4 className="font-bold text-white">Vision</h4>
                <p className="text-sm text-royal-celestial/80">Leading the digital transformation revolution</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;