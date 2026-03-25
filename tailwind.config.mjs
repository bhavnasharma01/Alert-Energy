/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F3FB',
          100: '#DCE2F5',
          200: '#B9C5EB',
          300: '#92A5DE',
          400: '#6B83C4',
          500: '#5068AE',
          600: '#3F5494',
          700: '#354878',
          800: '#2C3D66',
          900: '#1E2B4A',
        },
        warm: {
          50: '#FFF9ED',
          100: '#FFF0D1',
          400: '#F0B84D',
          500: '#E5A030',
          600: '#CC8A1D',
          700: '#A87118',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
