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
      hostUrl: 'https://edge.meilisearch.com',

      // Comment out 'nuxt-security' or the 'serverSideUsage' line to make error go away.
      serverSideUsage: true
  },

  compatibilityDate: '2025-01-08',
})