import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-royal-amethyst/20">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-royal-violet to-royal-amethyst opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-royal-violet to-royal-amethyst flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-royal-celestial/80 mb-6">
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-royal-celestial/70">
              <Check className="w-4 h-4 mr-2 text-royal-gold" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;