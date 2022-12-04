/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          "primary": '#8a2be2',
          "secondary": '#9400d3',
          "accent": '#9966cc',
          "neutral": '#fff0f5',
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
}
