import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const DiscordIcon = () => (
  <svg viewBox="0 -28.5 256 256" className="w-5 h-5" fill="currentColor">
    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
  </svg>
);

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
              Transforming visions into digital reality with innovation and
              excellence.
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
                href="https://discord.gg/AH2yns9d5u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-celestial/80 hover:text-royal-gold transition-colors duration-200"
              >
                <DiscordIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#services"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  Brand Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#about"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  Internships
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-royal-celestial/80 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-royal-celestial/80">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:info@bichitras.com"
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@bichitras.com
                </a>
              </li>
              <li className="flex items-center text-royal-celestial/80">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+9779806636668"
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +977-9806636668
                </a>
              </li>
              <li className="flex items-center text-royal-celestial/80">
                <MapPin className="w-4 h-4 mr-2" />
                <a
                  href="https://maps.google.com/?q=Newroad,Pokhara,Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Kathmandu, Nepal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-celestial/20 pt-8 text-center text-royal-celestial/60">
          <p>
            &copy; {new Date().getFullYear()} Bichitras. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
