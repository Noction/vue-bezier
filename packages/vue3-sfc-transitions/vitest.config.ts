/// <reference types="vitest" />

import { defineConfig } from 'vite'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path'
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
      reporter: ['text', 'cobertura'],
      src: ['src']
    },
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.spec.ts']
  }
})
