module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'sans-serif'],
        judson: ['Judson', 'serif'],
      },
      keyframes: {
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      colors: {
        'color-consola': 'rgb(var(--spotlight-color) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  safelist: [
    {
      pattern: /^bg-(lime|green|blue|purple)-(100|200|300|400|500|600|700|800|900)$/,
    },
  ],
}
