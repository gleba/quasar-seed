import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";
import { VitePWA } from 'vite-plugin-pwa'

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import {resolve} from "path";
import {readFileSync} from "fs";
import {loadDotEnv} from "./server/load.env";
import {pwaSetup} from "./core/pwa.setup";



const packageJson = readFileSync('./package.json')
const {name} = JSON.parse(packageJson.toString())



const env = loadDotEnv()
const define = {
  __PROJECT_NAME:  JSON.stringify(name),
  __BUILD_TIME: JSON.stringify(Date.now()),
  __IS_PROD:  JSON.stringify(env.isProd),
  __QUASAR_SSR__: false,
  __QUASAR_SSR_SERVER__: false,
  __QUASAR_SSR_CLIENT__: false,
  __QUASAR_SSR_PWA__: false,
}


Object.keys(env).forEach((name) => {
  define['__' + name] = JSON.stringify(env[name])
})

const isSsr = process.argv[3] === "--ssr"
const config = (args)=>{
  return {
  define,
  plugins: [
    Components({
      resolvers: [IconsResolver()]
    }),
    vue({
      template: {transformAssetUrls}
    }),
    VitePWA(Object.assign({mode:env.isProd ? "production" : "development"}, pwaSetup)),
    ssr(),
    vueJsx(),
    Icons(),
    env.isProd && !isSsr && quasar()
  ],
  publicDir: isSsr ? false :['public', 'dist-public'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './src'),
      },
    },
  css:{
    // preprocessorOptions:{
    //   sass:{
    //     quietDeps: true,
    //   },
    // }
  }
}
}

export default config
