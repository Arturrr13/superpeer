/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'a': '#000000',
        'b': '#222222',
        'c': '#555555',
        'd': '#666666',
        'e': '#999999',
        'f': '#FFFFFF',
        'btn': '#FFD338',
      },
      gridTemplateColumns: {
        '16': 'repeat(auto-fill, 320px)',
        '17': 'repeat(auto-fill, 300px)'
      },
      gridTemplateRows: {
        '8': '1fr',
      }
    },
    letterSpacing: {
      normal: '1px',
    }
  },
  plugins: [],
}

