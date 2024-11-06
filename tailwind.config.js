/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        royal: {
          deep: 'var(--bg-secondary)',
          violet: 'var(--accent-primary)',
          amethyst: 'var(--accent-secondary)',
          celestial: 'var(--text-secondary)',
          gold: 'var(--accent-gold)',
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        title: 'title 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        glow: 'glow 3s infinite',
        'glow-pulse': 'glow-pulse 2s infinite',
      },
      boxShadow: {
        glow: '0 0 20px var(--accent-secondary)',
      },
    },
  },
  plugins: [],
};