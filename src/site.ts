const image = new URL('./screenshots/image.png', import.meta.url).href

export default {
  title: `Vue Designer`,
  description: 'Vue Designer îles Tailwind CSS - Quick start template',
  image,
  author: 'Pinegrow',
  url: 'https://pg-iles-tailwindcss.netlify.app',
  nav: [
    { text: 'Home', link: '/' },
    { text: `Quick Start`, link: '/quick-start' },
    { text: 'Subscribe', link: '/subscribe' },
  ],
}
