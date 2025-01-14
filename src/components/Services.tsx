import React from 'react';
import { Sparkles, Code, Palette, BarChart, Monitor, Camera, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development Solutions",
    description: "Cutting-edge development for modern digital solutions",
    features: [
      "Custom Development",
      "E-commerce Excellence",
      "Web Applications",
      "Technical Consultation",
      "Ongoing Support"
    ]
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Virtual Internship Program",
    description: "Visualize your potential through one month - three months internship program of your choice.",
    features: [
      "Flutter Development",
      "UI/UX Designer",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "AI/ML Development"
    ]
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Content Shoot Production",
    description: "Ignite your creativity in our fully equipped content studio, designed for creators, influencers, and businesses with ready-made setups for any project.",
    features: [
      "Professional Studio Access",
      "Ready-Made Setups",
      "On-Site Assistance",
      "Flexible Pricing"
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analysis Services",
    description: "Provide businesses with data-driven insights by analyzing their raw data to uncover trends, patterns, and actionable information.",
    features: [
      "Data Cleaning and Preparation",
      "Statistical Analysis and Reporting",
      "Customer Behavior Analytics",
      "Market and Competitor Analysis",
      "Custom Dashboards and Reporting"
    ]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Design Expertise",
    description: "Transforming visions into stunning visual experiences",
    features: [
      "Brand Identity Creation",
      "UI/UX Mastery",
      "Visual Design",
      "Motion Graphics",
      "Design Consultation"
    ]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Digital Marketing Mastery",
    description: "Strategic digital presence optimization with data-driven insights",
    features: [
      "SEO Excellence",
      "Social Media Dominance",
      "Content Strategy",
      "Market Analysis",
      "ROI Tracking"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 text-royal-gold mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto">
            Elevate your digital presence with our comprehensive suite of premium services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;