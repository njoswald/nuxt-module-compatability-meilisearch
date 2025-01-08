// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  modules: [
      // Comment out 'nuxt-security' or the 'serverSideUsage' line to make error go away.
      'nuxt-security',
      'nuxt-meilisearch',
  ],

  experimental: { appManifest: false },

  meilisearch: {
      // Not needed for reproduction. It will show "[nitro] [uncaughtException] The provided host is not valid." if not provided.
      hostUrl: process.env.MEILISEARCH_HOST_URL,
      searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,

      // Comment out 'nuxt-security' or the 'serverSideUsage' line to make error go away.
      serverSideUsage: true
  },

  compatibilityDate: '2025-01-08',
})