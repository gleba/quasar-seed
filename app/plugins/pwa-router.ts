import type { Router } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'
import {defineAsyncComponent} from "vue";
export const registerPWA = (router: Router) => {
    router.isReady().then(async() => {
        const { registerSW } = await import('virtual:pwa-register')
        registerSW({ immediate: true })
    })
}


export const pwaRouter = app =>{
    if (!__IS_PROD){
        return false
    }
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: defineAsyncComponent(() => import('../../pages/index/index.page.vue')) },
        { path: '/about', component: defineAsyncComponent(() => import('../../pages/about/index.page.vue')) },
      ],
    })
    app.use(router)
}