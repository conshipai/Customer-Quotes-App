module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'conship-purple': '#5B21B6',
        'conship-orange': '#FB923C',
      }
    }
  },
  plugins: [],
  safelist: [
    // Dynamic color classes used in components
    {
      pattern: /bg-(blue|green|purple|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(blue|green|purple|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(blue|green|purple|orange|red|yellow|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ]
}
