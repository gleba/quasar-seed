import install from 'quasar/src/install-quasar'
import Dark from 'quasar/src/plugins/Dark'
import ClosePopup from 'quasar/src/directives/ClosePopup'

import QBtn from 'quasar/src/components/btn/QBtn'

function createQuasar(options) {
  return {
    components: {
      QBtn,
    },
    directives: {
      ClosePopup,
    },
    plugins: {
      Dark,
    },
    ...options,
    install,
  }
}

import lang from 'quasar/lang/ru'
import iconSet from 'quasar/icon-set/svg-material-icons-outlined'
export const quasar = createQuasar({
  iconSet,
  lang,
})
