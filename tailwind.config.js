/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0a0f1f',
        accent: '#7c3aed',
        neon: '#22d3ee',
      },
      boxShadow: {
        'soft-glow': '0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
      },
      backgroundImage: {
        'gradient-glow': 'linear-gradient(120deg, rgba(99,102,241,0.35), rgba(45,212,191,0.25))',
      },
    },
  },
  plugins: [],
};
