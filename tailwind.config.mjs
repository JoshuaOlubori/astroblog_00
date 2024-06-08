/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '450px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		  },
		extend: {},
	},
	plugins: [],
}
