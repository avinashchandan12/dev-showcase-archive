
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['SF Pro Display', 'Inter', 'sans-serif'],
				mono: ['SF Mono', 'monospace'],
			},
			colors: {
				border: {
					DEFAULT: 'hsl(var(--border))',
					dark: 'hsl(var(--border-dark))'
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					dark: 'hsl(var(--input-dark))'
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					dark: 'hsl(var(--ring-dark))'
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					dark: 'hsl(var(--background-dark))'
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					dark: 'hsl(var(--foreground-dark))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-down": {
					"0%": { transform: "translateY(-20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-left": {
					"0%": { transform: "translateX(20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"slide-right": {
					"0%": { transform: "translateX(-20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				},
				"text-reveal": {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"bounce-gentle": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" }
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-out forwards",
				"scale-in": "scale-in 0.5s ease-out forwards",
				"slide-up": "slide-up 0.5s ease-out forwards",
				"slide-down": "slide-down 0.5s ease-out forwards",
				"slide-left": "slide-left 0.5s ease-out forwards",
				"slide-right": "slide-right 0.5s ease-out forwards",
				"pulse-slow": "pulse-slow 3s infinite",
				"text-reveal": "text-reveal 0.5s ease-out forwards",
				"float": "float 6s ease-in-out infinite",
				"bounce-gentle": "bounce-gentle 3s ease-in-out infinite",
				"spin-slow": "spin-slow 20s linear infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4S8BQAAAAXVSURBVUAA3YxLEoAgDENRiiAg4POz7H9PdUwduHQ5JnMT0FrPpayEnIK0IgYyDJIg0UgQkSQH+cJIu0j9CHqRGBQEgrzEGiQIvkA6EQYbQNCLRKAkkNxzhxhXKGsAbThjhAFT8CCBAAAAASUVORK5CYII=')",
				'primary-gradient': 'linear-gradient(to right, #1E3A8A, #9333EA)',
				'accent-gradient': 'linear-gradient(to right, #0D9488, #06B6D4)',
				'secondary-gradient': 'linear-gradient(to right, #F87171, #FACC15)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
