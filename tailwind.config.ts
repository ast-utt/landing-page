import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      lineHeight: {
        'headline-1': '4.375 rem' /* 70px */,
        'headline-2': '3.375 rem' /* 54px */,
        'headline-3': '1.625 rem' /* 26px */,
      },
      space: {
        max: '7.5rem' /* 120px */,
      },
      backgroundColor: {
        orange: {
          primary: '#FA7436',
          light: '#FD8D3A',
          'extra-light': '#FEFCFB',
        },
        smoke: '#F7F8FC',
      },
      colors: {
        primary: {
          orange: '#FA7436',
          black: '#222222',
        },
        secondary: {
          blue: '#4086F4',
          yellow: '#FFB60A',
        },
        typography: {
          black: '#222222',
          gray: {
            light: '#666666',
            dark: '#444444',
          },
          'light-orange': '#FD8D3A',
        },
        icon: {
          gray: '#999999',
          smoke: '#E5E5E5',
          orange: '#FA7436',
        },
      },
    },
  },
  plugins: [],
};
export default config;
