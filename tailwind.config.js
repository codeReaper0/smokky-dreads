/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./assets/**/*.{vue,js,css}",
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	// important: true,
	theme: {
	  fontFamily: {
		'poppins': ['Poppins', 'sans-serif'],
		'maven': ['"Maven Pro"', 'sans-serif'],
	  },
	  extend: {},
	},
  }
  