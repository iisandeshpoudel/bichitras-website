import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            About bichitras
          </h2>
          <p className="text-royal-celestial/80">
            Your trusted partner in digital transformation and creative excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-royal-celestial/80">
                Empowering businesses through digital excellence
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-royal-celestial/80">
                Leading the digital transformation revolution
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
            <p className="text-royal-celestial/80 mb-8">
              Founded with a vision to revolutionize digital solutions, Bichitras has grown into a leading force in the industry. Our commitment to excellence and innovation drives everything we do. We provide opportunity to freshers and graduate it/engineering students . We provide industry based solutions and practices in our workoholic environment.
            </p>
            <p className="text-royal-celestial/80 text-right">
              Establish: 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;