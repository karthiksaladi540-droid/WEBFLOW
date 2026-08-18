/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { coral: '#E8432E', ink: '#111111', green: '#16332B', lavender: '#EEF0F8', charcoal: '#222222' },
      fontFamily: { display: ['Montserrat', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
      boxShadow: { soft: '0 18px 50px rgba(17,17,17,.10)' }
    }
  },
  plugins: []
};
