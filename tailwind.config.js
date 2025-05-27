/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 20s linear infinite',
        'matrix-effect': 'matrix-effect 20s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'matrix-effect': {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
}
