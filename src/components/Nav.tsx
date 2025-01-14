import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Internship', path: '/internship' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname !== '/') {
        // If we're not on the home page, navigate to home with hash
        window.location.replace('/#' + id);
      } else {
        // If we're already on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.location.href = path;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E0B36]/80 backdrop-blur-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-[#D8B4FE] bg-clip-text text-transparent">
              bichitras
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`text-white/80 hover:text-white transition-colors duration-200 ${
                  (location.pathname === '/' && item.path.startsWith('/#')) ||
                  location.pathname === item.path
                    ? 'text-white'
                    : ''
                }`}
                onClick={(e) => handleNavigation(e, item.path)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-[#1E0B36]/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 py-0'
        }`}
      >
        <div className="px-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`block text-white/80 hover:text-white transition-colors duration-200 ${
                (location.pathname === '/' && item.path.startsWith('/#')) ||
                location.pathname === item.path
                  ? 'text-white'
                  : ''
              }`}
              onClick={(e) => handleNavigation(e, item.path)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;