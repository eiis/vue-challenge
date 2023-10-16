import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    include: ['questions/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      // inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },
}))
