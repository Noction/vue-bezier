import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const outDir = path.resolve(__dirname, '..', '..', 'docs')

export default defineConfig({
  build: {
    outDir,
  },
  plugins: [
    Components({
      resolvers: [
        IconsResolver(),
      ],
    }),
    vue({
      script: {
        propsDestructure: true,
      },
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['vue'],
  },
})
