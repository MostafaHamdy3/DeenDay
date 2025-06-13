/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bgScreen: '#232321',
        bgContainer: '#31312F',
        whiteColor: '#fff',
        mainColor: '#3BAE49',
        secondaryColor: '#e6b106',
      },
      fontFamily: {
        quicksand: ['Quicksand-Regular'],
        'numMd': ['Quicksand-Medium'],
        'numB': ['Quicksand-Bold'],
        'enR': ['SourceSans3-Regular'],
        'enMd': ['SourceSans3-Medium'],
        'enB': ['SourceSans3-Bold'],
        'arR': ['Tajawal-Regular'],
        'arMd': ['Tajawal-Medium'],
        'arB': ['Tajawal-Bold'],
      },
    },
  },
  plugins: [],
};
