import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  test: {
    coverage: {
      all: true,
      exclude: ['src/components/index.ts'],
      include: ['src/components/**', 'src/composables/**'],
      provider: 'v8',
      reporter: ['text', 'cobertura'],
    },
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.spec.ts'],
  },
})
