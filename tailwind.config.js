module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blobby: "blobby 5s infinite",
      },
      keyframes: {
        blobby: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundColor: {
        base: {
          accent: "var(--color-accent)",
          "accent-hover": "var(--color-accent-hover)",
          "primary-hover": "var(--color-primary-hover)",
          "animation-purple": "var(--color-animation-purple)",
          "animation-orange": "var(--color-animation-orange)",
          "animation-blue": "var(--color-animation-blue)",
          "animation-red": "var(--color-animation-red)",
        },
      },
      textColor: {
        base: {
          accent: "var(--color-text-accent)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
      },
    },
  },
  plugins: [],
}
