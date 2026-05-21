/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF7F2',
        paperWarm: '#F4EFE6',
        ink: '#2A2A2A',
        inkSoft: '#4A4540',
        inkMuted: '#7A7470',
        fuji: '#B8AEC9',
        fujiSoft: '#E8E2EF',
        gold: '#C9A96E',
        goldSoft: '#EDE3CC',
        line: '#E5DED2',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        wider2: '0.18em',
      },
    },
  },
  plugins: [],
};
