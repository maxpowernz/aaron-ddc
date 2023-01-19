/** @type {number} */
const baseWidth = 48;
const basePixel = 6;
const widths = Array.from(Array(13).keys()).map((num) => `${num * baseWidth + basePixel * (num > 0 ? num - 1 : 0)}px`);

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fmg-green': '#209400',
        text: {
          DEFAULT: 'rgba(25, 30, 38, 1)',
          primary: 'rgba(25, 30, 38, 1)',
          placeholder: 'rgba(25, 30, 38, .5)',
          secondary: 'rgba(0, 0, 0, 0.05)',
          disabled: 'rgba(0, 0, 0, 0.05)',
        },
        // named by percent of gray
        gray: {
          5: 'rgba(0, 0, 0, 0.05)',
          10: 'rgba(0, 0, 0, 0.10)',
          15: 'rgba(0, 0, 0, 0.15)',
          20: 'rgba(0, 0, 0, 0.20)',
          100: 'rgba(0, 0, 0, 1)',
        },
      },
      fontSize: {
        sm: ['12px', '14px'],
        base: ['14px', '18px'],
        md: ['16px', '20px'],
        lg: ['18px', '22px'],
        xl: ['20px', '24px'],
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
      },

      width: widths.map((val, idx) => ({ [`grid-${idx}`]: val })).reduce((acc, val) => ({ ...acc, ...val }), {}),
      height: {
        42: 42,
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        //3: 'repeat(3, minmax(0, 1fr))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#209400',
          error: '#A62F1F',
          warning: '#EFAE41',
          secondary: '#00A8CB',

          fontSize: 14,
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
