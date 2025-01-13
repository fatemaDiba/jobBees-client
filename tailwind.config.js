/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-text": "#04070b",
        "light-background": "#f2f7fb",
        "light-primary": " #0057d1",
        "light-secondary": " #9dbae1",
        "light-accent": " #6c9ada",
        "dark-text": "#ebeff5",
        "dark-background": "#05080a",
        "dark-primary": " #2e85ff",
        "dark-secondary": "#1e3b62",
        "dark-accent": "#255393",
      },
    },
  },
  plugins: [require("daisyui")],
};
