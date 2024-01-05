import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': '#0701A8',
        'secondary-yellow': '#EACB03',
        'grey-custom': '#F5F5F5',
        'light-grey': '#F2F2F2',
        'black-custom': '#1E1B1B'
      },
    },
  },
  plugins: [],
}
export default config
