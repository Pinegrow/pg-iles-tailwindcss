<script setup lang="ts">
  import { useSeoMeta } from 'unhead'

  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'

  import siteDefn from '@/site'
  import image from '@/screenshots/image.jpg'
  import { pg_font_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  type TurboScript = Script & { once: true }

  const link: any = [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  if (pg_font_urls.length) {
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: pg_font_urls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${pg_font_urls.toString()}" />`,
    )
  }

  const { title, description, url, author } = siteDefn

  const { frontmatter, site } = usePage()
  const imgUrl = computed(() => `${site.url}${image}`)

  useSeoMeta({
    // charset: 'utf-8',
    // author,
    // viewport: 'width=device-width, initial-scale=1',
    // keywords: route.meta.tags?.toString(),
    // title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: imgUrl.value,
    ogImageAlt: title,
    // og:image:width
    // og:image:height
    // og:image:alt
    // og:image: type
    // og:image: secure_url
    ogUrl: url,
    ogSiteName: title,
    // og: locale
    // og: type
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imgUrl.value,
    twitterImageAlt: title,
    twitterSite: '@vuedesigner',
    twitterCreator: '@techakayy',
    twitterCard: 'summary_large_image',
  })

  useHead({
    // title,
    // titleTemplate: (titleChunk) => {
    //   return titleChunk ? `${titleChunk} - ${title}` : title
    // },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { name: 'charset', content: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'author', content: author },
      { name: 'keywords', content: computed(() => frontmatter.tags) },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })
</script>

<template>
  <div></div>
</template>
