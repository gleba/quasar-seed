export function onBeforeRender(pageContext) {
    const urlKey = pageContext.routeParams["*"]
    return {
        pageContext: {
            pageProps: {
                title: "About Page" + (urlKey ? ` ${urlKey}` : ""),
                urlKey
            }
        }
    }
}