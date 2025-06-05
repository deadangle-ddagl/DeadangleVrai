import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ddagl': {
          primary: '#4B0082',
          secondary: '#FFD700'
        }
      }
    }
  },
  plugins: []
} satisfies Config
