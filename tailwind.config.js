/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        'sigma': {
          '50': '#f2f7fd',
          '100': '#e4edfa',
          '200': '#c4d9f3',
          '300': '#8fbaea',
          '400': '#5497dc',
          '500': '#2D85ED',
          '600': '#1f60ad',
          '700': '#1a4b8a',
          '800': '#194173',
          '900': '#1a3860',
          '950': '#112340',
          '1000': '#020F18',
      },
      },
    },
  },

  plugins: [],
};
