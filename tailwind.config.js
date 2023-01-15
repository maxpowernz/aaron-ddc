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
        primary: {
          light: '#20940033',
          main: '#209400',
          DEFAULT: '#209400',
          dark: '#1B7E00',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#00A8CB',
          DEFAULT: '#00A8CB',
          dark: '#ba000d',
          contrastText: '#000',
        },
        error: {
          main: '#A62F1F',
          DEFAULT: '#A62F1F',
          dark: '#8D281A',
        },
        text: {
          primary: '#191E26',
          secondary: '#0000000D',
          disabled: '#0000001A',
        },
      },
      fontSize: {
        sm: ['12px', '14px'],
        base: ['14px', '18px'],
        md: ['16px', '20px'],
        lg: ['18px', '22px'],
        xl: ['20px', '24px'],
      },
      width: widths.map((val, idx) => ({ [`grid-${idx}`]: val })).reduce((acc, val) => ({ ...acc, ...val }), {}),
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
