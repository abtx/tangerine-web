/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		spacing: {
			1: "4px",
			2: "8px",
			3: "16px",
			4: "24px",
			5: "32px",
			6: "48px",
		},
		extend: {},
	},
	plugins: [],
};
