/** @type {import('tailwindcss').Config} */
// font-family: 'Arimo', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Sora', sans-serif;
// font-family: 'Work Sans', sans-serif;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "work-sans": "Nunito Sans"
      }
    },
  },
  plugins: [],
}
