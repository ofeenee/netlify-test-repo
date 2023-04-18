const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			archivo: ['Archivo Narrow', 'sans-serif'],
			abel: ['Abel', 'sans-serif'],
			abelLocal: ['abelregularfont','sans-serif'],
			archivoLocal:['archivo','sans-serif']
		},
		extend: {}
	},

	plugins: [require('daisyui'), require('@tailwindcss/typography')]
};

module.exports = config;
