import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const outDir = path.resolve(__dirname, '..', '..', 'docs')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir,
  },
  plugins: [vue({
    script: {
      propsDestructure: true,
    },
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['vue'],
  },
})
