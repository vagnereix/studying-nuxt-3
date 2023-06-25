// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/': { swr: true },
    // '/': { cache: { swr: true, maxAge: 30 } },
    // '/': { ssr: false },
    // '/': { static: true },

    // Static page generated on-demand, revalidates in background
    // '/blog/**': { swr: true },
    // Static page generated on-demand once
    // '/articles/**': { static: true },
    // Set custom headers matching paths
    // '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
    // Render these routes with SPA
    // '/admin/**': { ssr: false },
    // Add cors headers
    // '/api/v1/**': { cors: true },
    // Add redirect headers
    // '/old-page': { redirect: '/new-page' },
    // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } },
  },
});
