// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { inject } from 'vue'
import type { App } from 'vue'


const key = 'Symbol()'

export function usePageContext() {
  const pageContext = inject(key)
  return pageContext as PageContext
}

export function setPageContext(app: App, pageContext: PageContext) {
  app.provide(key, pageContext)
}


export type PageProps = {}
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: any
  pageProps?: PageProps
  title?: string
  description?: string
}
