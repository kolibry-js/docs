import { resolve } from 'path'
import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '@kolibry/client': resolve(__dirname, '.vitepress/@kolibry/client'),
      '@kolibry/parser': resolve(__dirname, '.vitepress/@kolibry/parser'),
      '@kolibry/theme-default': resolve(__dirname, '.vitepress/@kolibry/theme-default'),
    },
  },
  optimizeDeps: {
    exclude: [
      'vue-demi',
      '@vueuse/shared',
      '@vueuse/core',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      dirs: [
        './.vitepress/theme/components',
        './.vitepress/@kolibry/client/builtin',
      ],
      extensions: ['vue', 'md'],
      include: [
        /\.(vue|md)$/,
      ],
      resolvers: [
        IconsResolver({
          prefix: '',
        }),
      ],
    }),
    Icons(),
    Inspect(),
    WindiCSS({
      preflight: false,
    }),
    {
      name: 'code-block-escape',
      enforce: 'post',
      transform(code, id) {
        if (!id.endsWith('.md'))
          return
        return code.replace(/\/\/```/mg, '```')
      },
    },
    {
      name: 'virtual-modules',
      resolveId(id){
        return id === '/@kolibry/configs' ? id : null
      },
      load(id) {
        if(id !== '/@kolibry/configs')
        return
        return 'export default {}'
      }
    },
  ],
})
