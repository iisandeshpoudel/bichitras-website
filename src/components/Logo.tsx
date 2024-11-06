import React from 'react';

const Logo = () => {
  return (
    <div className="relative">
      <svg width="40" height="40" viewBox="0 0 100 100" className="fill-current">
        <path
          className="text-royal-gold"
          d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
        />
        <path
          className="text-royal-amethyst"
          d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
        />
        <text
          x="50"
          y="60"
          textAnchor="middle"
          className="text-3xl font-bold fill-white"
        >
          B
        </text>
      </svg>
      <div className="absolute inset-0 animate-glow-pulse"></div>
    </div>
  );
};

export default Logo;