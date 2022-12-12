const baseWidth = '48px';
const widths = Array.from(Array(13).keys()).map((num) => `calc(${num} * ${baseWidth})`);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './**/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fmg-green': '#209400',
        default: '#191E26',
        'base-1': '#0000000D',
        'base-2': '#0000001A',
        amber: '#EFAE41',
        error: '#A62F1F',
      },
      width: Object.assign({}, widths),
      gridTemplateColumns: {
        // Simple 16 column grid
        //3: 'repeat(3, minmax(0, 1fr))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
};
