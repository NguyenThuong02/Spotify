/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit', //Sang tailwind 3.0 thì không cần cái này
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      height: {
        'screen-navbar-player': 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
}

