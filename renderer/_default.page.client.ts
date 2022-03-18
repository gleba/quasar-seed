import { createVueApp } from '../app/app'

import { useClientRouter } from 'vite-plugin-ssr/client/router'

import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router'

let app
const router = useClientRouter({
    render(pageContext: any ) {
        if (!app) {
            app = createVueApp(pageContext)
            app.mount('#app')
        } else {
            app.changePage(pageContext)
        }
        //@ts-ignore
        document.title = pageContext?.pageProps?.title || __PROJECT_NAME
    },

    // Vue needs the first render to be a hydration
    ensureHydration: true,
    prefetchLinks: true,
    // onTransitionStart,
    // onTransitionEnd,
})

router


// hydrationPromise.then(() => {
//     console.log('Hydration finished; page is now interactive.')
// })

// function onTransitionStart() {
//     console.log('Page transition start')
//     document.querySelector('.content')!.classList.add('page-transition')
// }
// function onTransitionEnd() {
//     console.log('Page transition end')
//     document.querySelector('.content')!.classList.remove('page-transition')
// }

