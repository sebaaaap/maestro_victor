/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--metallic-light))",
                input: "hsl(var(--metallic-light))",
                ring: "hsl(var(--bull-red))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--bull-red))",
                    foreground: "white",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--dark-steel))",
                    foreground: "hsl(var(--foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "white",
                },
                "brand-yellow": "hsl(var(--brand-yellow))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
