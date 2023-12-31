/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: 'hsl(209, 23%, 22%)',
				darkblue: 'hsl(207, 26%, 17%)',
				verydarkblue: 'hsl(200, 15%, 8%)',
				darkgray: 'hsl(0, 0%, 52%)',
				lightgray: 'hsl(0, 0%, 98%)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
