import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'iles'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  siteUrl: 'https://pg-iles-tailwindcss.netlify.app',
  turbo: true,
  modules: [
    // 'prismjs/themes/prism-tomorrow.css' via app.ts
    '@islands/prism',
    [
      '@pinegrow/iles-module',
      {
        liveDesigner: {
          iconPreferredCase: 'unocss', // default value (can be removed), nuxtlabs/ui uses the unocss format for icon names
          devtoolsKey: 'devtools', // see app.ts
          tailwindcss: {
            configPath: 'tailwind.config.ts',
            cssPath: '@/assets/css/tailwind.css',
          },
        },
      },
    ],
    //...
  ],
  markdown: {
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
          rel: ['noopener'],
          test: (node: any) => /^https?:\/\//.test(node.properties.href),
        },
      ],
    ],
  },
  vite: {
    resolve: {
      alias: {
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
    plugins: [
      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
      }),
      VueDevTools(),
    ],
  },
  //...
})
