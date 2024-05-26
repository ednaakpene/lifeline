/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')

  ],

}
