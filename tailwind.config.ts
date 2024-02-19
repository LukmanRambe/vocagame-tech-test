import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				heading: '#20184E',
				border: '#d1d5db',
				primary: {
					50: '#e5ffe4',
					100: '#c5ffc4',
					200: '#90ff91',
					300: '#50ff58',
					400: '#16ff29',
					500: '#00e619',
					600: '#00b818',
					700: '#008b13',
					800: '#076d16',
					900: '#0b5c18',
				},
			},
		},
	},
	plugins: [],
};
export default config;
