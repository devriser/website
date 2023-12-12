import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      'primary': 'var(--primary-color)',
      'secondary': 'var(--secondary-color)',
      'secondary-reverse': 'var(--secondary-color-reverse)',
      'tertiary': 'var(--tertiary-color)', 
      'solid-gray': 'var(--solid-gray)',
      'solid-blue': 'var(--solid-blue)',
      'sub-text': 'var(--sub-text)',
      'solid-green': 'var(--solid-green)',
     },
     backgroundImage: {
      'hero-text': 'var(--hero-text)',
      'blue-gradient': 'var(--blue-gradient)',
      'section-gradient': 'var(--section-gradient)',
     } ,
     fontSize: {
       'text-hero': 'var(--text-hero)',
       'text-heading': 'var(--text-heading)',
       'text-title': 'var(--text-title)',
     },
     borderColor: {
       'primary-border': 'var(--primary-border)',
       'blue-border': 'var(--solid-blue)',
     },
     borderRadius: {
       'hero-rounded': 'var(--hero-rounded)',
       'banner-rounded': 'var(--banner-rounded)',
       'large': 'var(--large)',
       'medium': 'var(--medium)',
     }
    },
  },
  plugins: [],
}
export default config
