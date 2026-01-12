// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import typographyPlugin from '@tailwindcss/typography';

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      // TAMBAHKAN INI:
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            fontFamily: theme('fontFamily.roboto'), 
            h1: { fontFamily: theme('fontFamily.roboto') },
            h2: { fontFamily: theme('fontFamily.roboto') },
          },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    },
  ],
};

export default config;