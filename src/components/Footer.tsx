import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 px-4 relative">
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
              <a
                href="https://www.facebook.com/profile.php?id=61569708486523"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-celestial/80 hover:text-royal-gold transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bichitrasgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-celestial/80 hover:text-royal-gold transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bichitras/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-celestial/80 hover:text-royal-gold transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/E6f9DPMntU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-celestial/80 hover:text-royal-gold transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
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
          <div id="contact">
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-royal-celestial/80">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:contact@bichitras.com" className="hover:text-white transition-colors duration-200">
                  contact@bichitras.com
                </a>
              </li>
              <li className="flex items-center text-royal-celestial/80">
                <Phone className="w-4 h-4 mr-2" />

                <a href="tel:+9779806636668" className="hover:text-white transition-colors duration-200">
                  +977-9806636668
                </a>

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
