import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const REPO_PATH = '/frontendmentor-easybank-landing-page'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      colors: {
        'primarty-one': 'hsl(233, 26%, 24%)',
        'primarty-two': 'hsl(136, 65%, 51%)',
        'primarty-three': 'hsl(192, 70%, 51%)',
        'neutral-one': 'hsl(233, 8%, 62%)',
        'neutral-two': 'hsl(220, 16%, 96%)',
        'neutral-three': 'hsl(0, 0%, 98%)',
        'link-footer': 'hsl(228, 45%, 44%)',
      },
      margin: {
        '5percen': '5%',
        '8percen': '8%',
        '10percen': '10%',
        '18percen': '18%',
      },
      padding: {
        '5percen': '5%',
        '8percen': '8%',
        '10percen': '10%',
        '18percen': '18%',
      },
      backgroundImage: {
        'hero-intro-mobile': `url('${REPO_PATH}/images/bg-intro-mobile.svg')`,
        'hero-intro-desktop': `url('${REPO_PATH}/images/bg-intro-desktop.svg')`,
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {},
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
