import { defineConfig } from 'vite'
import path from 'node:path'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      formats: ['es'],
      name: 'vue-bezier'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
