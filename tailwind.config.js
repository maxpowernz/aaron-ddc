const baseWidth = '48px';
const basePixel = '6px';
const widths = Array.from(Array(13).keys()).map((num) => `calc((${num} * ${baseWidth}) + (${basePixel} * ${num > 0 ? num - 1 : 0}))`);
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
        blue: '#00A8CB',
      },
      fontSize: {
        sm: ['12px', '14px'],
        base: ['14px', '18px'],
        md: ['16px', '20px'],
        lg: ['18px', '22px'],
        xl: ['20px', '24px'],
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
