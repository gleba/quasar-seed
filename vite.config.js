import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import voie from "vite-plugin-voie";
import {Quasar} from "quasar";
import ViteComponents from "vite-plugin-components";

import quasarResolver from "./scripts/resolver";
import csxResolver from "./scripts/csx.resolver";
import tsconfigPaths from "vite-tsconfig-paths";
import Icons, {ViteIconsResolver} from "vite-plugin-icons";
import {resolve} from "path";
import analyze from "rollup-plugin-analyzer";

export default defineConfig({
  plugins: [
    vue(),
    analyze({
      limit:10
    }),
    ViteComponents({
      extensions: ["tsx", "vue"],
      customComponentResolvers: [
        quasarResolver,
        csxResolver,
        ViteIconsResolver(),
      ],
    }),

    vueJsx(),
    voie(),
    Icons(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      quasar$: resolve("node_modules/quasar/dist/quasar.esm.prod.js"),
      "@": resolve(__dirname, "./src"),
      "~": resolve(__dirname, "./src"),
    },
  },
  // css: {
  //     preprocessorOptions: {
  //         sass: {
  //             additionalData: '@import "@/quasar/variables.sass"\n'
  //         }
  //     }
  // },
  define: {
    __BUILD_TIME__: JSON.stringify(Date.now()),
    __QUASAR_VERSION__: JSON.stringify(Quasar.version),
    __QUASAR_SSR__: false,
    __QUASAR_SSR_SERVER__: false,
    __QUASAR_SSR_CLIENT__: false,
    __QUASAR_SSR_PWA__: false,
    // __QUASAR_SSR_PWA__: 'navigator.standalone || window.matchMedia("(display-mode: standalone)").matches'
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        manualChunks: undefined,
      },
    },
  },
});
