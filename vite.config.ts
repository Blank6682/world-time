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
      imports: ['vue', 'vue/macros', '@vueuse/core'],
      dirs: ['./src/utils'],
      vueTemplate: true,
    }),
    UnoCss({
      shortcuts: {
        'border-base': 'border-gray/15 dark:border-gray/15',
        'bg-base': ' bg-white dark:bg-truegray-900',
        'bg-canvas': 'bg-gray:15 dark:bg-truegray-800',
      },
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
