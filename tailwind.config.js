/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			playfair: ['"Playfair Display"', 'serif'],
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
				default: '5px 5px 5px 0px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
