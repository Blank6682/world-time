import path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components(),
    AutoImport({
      imports: ['vue', 'vue/macros'],
      dirs: ['./src/utils'],
      vueTemplate: true,
    }),
    UnoCss({
      presets: [
        presetUno(),
        // 开启属性Css
        presetAttributify(),
        // Icon
        presetIcons(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve('./src'),
    },
  },
})
