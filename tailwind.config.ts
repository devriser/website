import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "secondary-reverse": "var(--secondary-color-reverse)",
        tertiary: "var(--tertiary-color)",
        "solid-gray": "var(--solid-gray)",
        "solid-blue": "var(--solid-blue)",
        "solid-danger": "var(--solid-danger)",
        "solid-yellow": "var(--solid-yellow)",
        "sub-text": "var(--sub-text)",
        "solid-green": "var(--solid-green)",
        "solid-purple": "var(--solid-purple)",
        "solid-skyblue": "var(--solid-skyblue)",
        "solid-greenish-yellow": "var(--solid-greenish-yellow)",
        "hero-text": "var(--hero-text)",
        "light-secondary": "var(--light-secondary)",
        "light-secondary-two": "var(--light-secondary-two)",
        "service-text": "var(--service-text)",
        "light-skyblue": "var(--light-skyblue)",
        "sunset-salmon": "var(--sunset-salmon)",
        "dashboard-bg": "var(--dashboard-bg)",
        "dashboard-light-bg": "var(--dashboard-bg-two)",
        "dashboard-input": "var(--dashboard-input)",
        "dashboard-table": "var(--dashboard-table)",
      },

      backgroundImage: {
        "landing-image": "url('../../assets/images/landingPage.webp')",
        "services-image": "url('../../assets/images/Rectangle4193.png')",
        "hero-text": "var(--hero-text)",
        "blue-gradient": "var(--blue-gradient)",
        "section-gradient": "var(--section-gradient)",
        "section-bg": "var(--section-bg)",
        "green-gradient": "var(--green-gradient)",
        "yellow-gradient": "var(--yellow-gradient)",
        "parakeet-gradient": "var(--parakeet-green-gradient)",
        "teal-gradient": "var(--teal-gradient)",
        "orange-gradient": "var(--orange-gradient)",
        "violet-gradient": "var(--violet-gradient)",
        "emerald-gradient": "var(--emerald-gradient)",
        "skyblue-gradient": "var(--skyblue-gradient)",
        "purple-gradient": "var(--purple-gradient)",
        "dashboard-hero-gradient": "var(--dashboard-hero-gradient)",
        "gradient-skeleton": "var(--skeleton-color)",
      },
      fontSize: {
        "text-hero": "var(--text-hero)",
        "text-heading": "var(--text-heading)",
        "text-title": "var(--text-title)",
        "text-subtitle": "var(--text-subtitle)",
      },
      borderColor: {
        "primary-border": "var(--primary-border)",
        "blue-border": "var(--solid-blue)",
        "dark-border": "var(--dark-border)",
        "light-border": "var(--light-border)",
        "blue-gradient": "var(--blue-gradient)",
        "table-border": "var(--table-border)",
      },
      borderRadius: {
        "hero-rounded": "var(--hero-rounded)",
        "banner-rounded": "var(--banner-rounded)",
        large: "var(--large)",
        medium: "var(--medium)",
      },

      animation: {
        skeleton: "skeleton 2s ease-in-out infinite",
      },

      keyframes: {
        skeleton: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "calc(200px + 100%) 0" },
        },
      },
    },

    variants: {
      fill: ["hover", "focus"],
      stroke: ["hover", "focus"],
    },
    fontFamily: {
      "mono-sans": ["var(--font-mona-sans)"],
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
