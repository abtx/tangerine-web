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
		fontFamily: {
			sans: ['"Palanquin"', "sans-serif"],
		},
		extend: {
			keyframes: {
				shine: {
					"0%": { transform: "translate(-100%, 0) rotate(45deg)" },
					"45%": { transform: "translate(-100%, 0) rotate(45deg)" },
					"50%": { transform: "translate(0, 0) rotate(45deg)" },
					"55%": { transform: "translate(100%, 0) rotate(45deg)" },
					"100%": { transform: "translate(100%, 0) rotate(45deg)" },
				},
			},
			animation: {
				shine: "shine 8s linear infinite",
			},
		},
	},
	plugins: [],
};
