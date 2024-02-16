/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			playfair: ['"Playfair Display Variable"', 'serif'],
			atkinson: ['"Atkinson Hyperlegible"', 'serif'],
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				lightBackground: 'var(--lightBackground)',
				accent: 'var(--accent)',
			},
			boxShadow: {
				default: '5px 5px 5px 0px var(--shadowColor)',
				light: '3px 3px 3px 0px var(--shadowColor)',
				heavy: '10px 10px 10px 0px var(--shadowColor)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
