/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],

  themes: {
      theme: {
        "BackgroundColor": "#0A2239",

        "primary": "#661AE6",

        "secondary": "#D926AA",

        "accent": "#1FB2A5",

        "neutral": "#191D24",

        "base-100": "#2A303C",

        "info": "#3ABFF8",

        "success": "#36D399",

        "warning": "#FBBD23",

        "error": "#F87272",
      },
    },
  plugins: [require("daisyui"),
  require("tailwindcss-animated")]
}

