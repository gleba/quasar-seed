
//@ts-ignore
import install from 'quasar/src/install-quasar'
//@ts-ignore

import {ClosePopup, Dark} from "quasar";
// //@ts-ignore
// import ClosePopup from 'quasar/src/directives/ClosePopup'
/**
 * Create quasar plugin
 * @param {import('quasar').QuasarPluginOptions} options
 */
console.log({install})
export function createQuasar(options) {
  return {
    directives: {
      ClosePopup,
    },
    plugins: {
      Dark
    },
    ...options,
    install
  }
}

ClosePopup
