import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
              Bichitras
            </h3>
            <p className="text-royal-celestial/80">
              Transforming visions into digital reality with innovation and excellence.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-royal-celestial/80 hover:text-royal-gold transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Digital Marketing", "Web Development", "UI/UX Design", "Brand Strategy"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-royal-celestial/80 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-royal-celestial/80 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-royal-celestial/80">
                <Mail className="w-4 h-4 mr-2" />
                contact@bichitras.com
              </li>
              <li className="flex items-center text-royal-celestial/80">
                <Phone className="w-4 h-4 mr-2" />
                +9846488103
              </li>
              <li className="flex items-center text-royal-celestial/80">
                <MapPin className="w-4 h-4 mr-2" />
                Newroad, Pokhara
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-celestial/20 pt-8 text-center text-royal-celestial/60">
          <p>&copy; {new Date().getFullYear()} Bichitras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
