import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundColor: {
        'card-dark': '#212223',
        'card-light': '#ffffff',
        'theme':'#0474f1'
      },
      textColor: {
        'theme-blue':'#0474f1',
        'theme-dark':'#334155'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
