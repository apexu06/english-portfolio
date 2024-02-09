/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				navBackground: 'var(--navBackground)',
				accent: 'var(--accent)',
			},
			boxShadow: {
				default: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
};
