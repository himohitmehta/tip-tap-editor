/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',  "./ui/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cal)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    // Tailwind plugins
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
}
