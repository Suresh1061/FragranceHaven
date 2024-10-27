/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Playfair Display": ["Playfair Display", "serif"],
        "Lora": ["Lora", "serif"],
        "Dancing Script": ["Dancing Script", "cursive"],
        "Merriweather": ["Merriweather", "serif"],
        "Roboto Slab": ["Roboto Slab", "serif"],
        "Volkhov": ["Volkhov", "serif"],
        "Niconne": ["Niconne", "serif"],
        "PT Serif": ["PT Serif", "serif"],
        "Poppins": ["Poppins", "serif"],
        "Roboto": ["Roboto", "sans-serif"],
      },
    }
  },
  plugins: [],
}

