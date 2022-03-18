//@ts-ignore
import {createApp, defineComponent, defineAsyncComponent, h, markRaw, reactive} from 'vue'



import '../styles/index.scss'
import BaseNav from '../renderer/layouts/BaseNav.vue'

import {PageContext, setPageContext} from '../renderer/usePageContext'

import link from "./plugins/link";
import {initQuasar} from "./plugins/quasar";
import {pwaRouter} from "./plugins/pwa-router";



export function createVueApp(pageContext: PageContext) {

  const { Page, pageProps } = pageContext

  let rootComponent: any
  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: pageProps && markRaw(pageProps),
    }),
    created() {
      rootComponent = this
    },
    render() {
      return h(
          BaseNav,
          {},
          {
            default: () => {
              return h(this.Page, this.pageProps)
            },
          },
      )
    },
  })

  const app = createApp(PageWithWrapper)

  initQuasar(app)
  app.use(link)
  // We use `app.changePage()` to do Client Routing, see `_default.page.client.js`
  objectAssign(app, {
    changePage: (pageContext: PageContext) => {
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(pageContext.Page)
      rootComponent.pageProps = markRaw(pageContext.pageProps || {})
    },
  })

  // When doing Client Routing, we mutate pageContext (see usage of `app.changePage()` in `_default.page.client.js`).
  // We therefore use a reactive pageContext.
  const pageContextReactive = reactive(pageContext)

  // Make `pageContext` accessible from any Vue component
  setPageContext(app, pageContextReactive)

  pwaRouter(app)

  return app
}

// Same as `Object.assign()` but with type inference
function objectAssign<Obj, ObjAddendum>(obj: Obj, objAddendum: ObjAddendum): asserts obj is Obj & ObjAddendum {
  Object.assign(obj, objAddendum)
}


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/public/sw.js', {scope: '/public/'})
//       .then((reg) => {
//         // registration worked
//         console.log('Registration succeeded. Scope is ' + reg.scope);
//       }).catch((error) => {
//     // registration failed
//     console.log('Registration failed with ' + error);
//   });
//
//   navigator.serviceWorker.ready.then(()=>{
//     console.log("ready")
//   });
// }

