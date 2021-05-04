import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import voie from 'vite-plugin-voie';
import {Quasar} from 'quasar';
import ViteComponents from 'vite-plugin-components'
import {resolve} from 'path'
import resolveQuasar from './scripts/resolver'
import tsconfigPaths from 'vite-tsconfig-paths'
import analyze from 'rollup-plugin-analyzer'

export default defineConfig({
    plugins: [vue(), vueJsx(), voie(),
        tsconfigPaths(),
        // analyze(),
        ViteComponents({
            customComponentResolvers: [
                resolveQuasar
            ]
        })
    ],
    resolve: {
        //@ts-ignore
        alias: {
            'quasar$': resolve('node_modules/quasar/dist/quasar.esm.prod.js'),
            '@': [resolve(__dirname, './src')],
        }
    },
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: '@import "@/quasar/variables.sass"\n'
            }
        }
    },
    define: {
        __QUASAR_VERSION__: JSON.stringify(Quasar.version),
        __QUASAR_SSR__: false,
        __QUASAR_SSR_SERVER__: false,
        __QUASAR_SSR_CLIENT__: false,
        __QUASAR_SSR_PWA__: false
        // __QUASAR_SSR_PWA__: 'navigator.standalone || window.matchMedia("(display-mode: standalone)").matches'
    },
    build: {
        // outDir: './dist',
        // polyfillDynamicImport:false,
        // cssCodeSplit:false,
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
                manualChunks: undefined
            }
        }
    }
})