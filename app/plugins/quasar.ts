
import { Quasar } from 'quasar'

// Import icon libraries
// import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css

export function initQuasar(app){
    app.use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
    })
}