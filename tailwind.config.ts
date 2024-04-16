import type { Config } from 'tailwindcss'

const config = {
	content: ['./src/**/*.{html,css,scss,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				padding: '15px',
				center: true
			},
			colors: {
				black: '#000000',
				white: '#ffffff',
				primary: '#59648A',
				'primary-dark': '#374459',
				green: '#00CD86',
				'border-color': '#2F394A'
			},
			backgroundImage: {
				'world-map': "url('./src/app/assets/images/world.svg')"
			}
		},
		fontFamily: {
			conthrax: ['Conthrax', 'sans-serif']
		}
	},
	plugins: []
} satisfies Config

export default config
