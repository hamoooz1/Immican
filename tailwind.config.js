import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'mx2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mxxl': {'max': '1400px'},
        // => @media (max-width: 1400px) { ... }
  
        'mxlg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mxmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'mxsm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'background': "url('/images/background.png')",
        'background_2': "url('/images/background_2.png')"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"]
      },
      colors: {
        textColour: "#605B56",
        subheader: '#50514F',
        btnBlue: '#236DE4',
        peach: '#F8E1D8',
        red: '#DD5471',
        yellow: '#FFE47A',
        violet: '#E8F0FE',
        paleYellow: '#F5F8D8',
        paleGreen: '#DDEBE6',
        mission: '#0496FF',
        purple: '#A393FF'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      maxWidth: {
        mw: '950px'
      },
      maxHeight: {
        mh: 'h-screen'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
