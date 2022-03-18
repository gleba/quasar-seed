import { navigate } from 'vite-plugin-ssr/client/router'

export default {
    install: (app, options) => {
        app.config.globalProperties.link = navigate
    }
}