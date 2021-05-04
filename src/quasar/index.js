
import install from 'quasar/src/install-quasar'

import Dark from 'quasar/src/plugins/Dark'
import ClosePopup from 'quasar/src/directives/ClosePopup'

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
