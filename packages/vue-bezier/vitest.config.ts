import { defineConfig } from 'vitest/config'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    coverage: {
      all: true,
      exclude: ['src/components/index.ts'],
      include: ['src/components/**', 'src/composables/**'],
      provider: 'v8',
      reporter: ['text', 'cobertura']
    },
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.spec.ts']
  }
})
