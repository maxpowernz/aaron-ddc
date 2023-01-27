/** @type {number} */
const baseWidth = 48;
const basePixel = 6;
const widths = Array.from(Array(13).keys())
  .map((num) => `${num * baseWidth + basePixel * (num > 0 ? num - 1 : 0)}px`)
  .map((val, idx) => ({ [`grid-${idx}`]: val }))
  .reduce((acc, val) => ({ ...acc, ...val }), {});

widths['4.5'] = '18px';

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'fmg-green': {
          DEFAULT: '#209400',
          20: 'rgba(32, 148, 0, 0.2)',
        },
        light: '#00A8CB',
        text: {
          DEFAULT: 'rgba(25, 30, 38, 1)',
          primary: 'rgba(25, 30, 38, 1)',
          secondary: 'rgba(25, 30, 38, .75)',
          placeholder: 'rgba(25, 30, 38, .5)',
          disabled: 'rgba(25, 30, 38, .5)',
        },

        error: {
          DEFAULT: '#A62F1F',
          20: 'rgba(166, 47, 31, 0.2)',
        },
        // named by percent of gray
        gray: {
          5: 'rgba(0, 0, 0, 0.05)',
          10: 'rgba(0, 0, 0, 0.10)',
          15: 'rgba(0, 0, 0, 0.15)',
          20: 'rgba(0, 0, 0, 0.20)',
          25: 'rgba(0, 0, 0, 0.25)',
          30: 'rgba(0, 0, 0, 0.30)',
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

      width: widths,
      height: {
        4.5: 18,
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
          'primary-focus': '#1b7e00',
          error: '#A62F1F',
          warning: '#EFAE41',
          secondary: '#E5E5E5',
        },
      },
    ],
  },
  safelist: [
    {
      pattern: /grid-cols-./,
    },
  ],
  plugins: [require('daisyui')],
};
