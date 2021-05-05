import { MakeThing } from 'lasens'
import A from 'alak'
import { stored } from 'lasens/decor'

class layoutModel {
  @stored leftDrawer: boolean
  @stored miniDrawer: boolean
  dark: boolean
}

export const layoutThing = MakeThing(layoutModel)
  .controller((model) => {
    return {
      toggleLeft() {
        if (model.leftDrawer.value) {
          model.miniDrawer(!model.miniDrawer.value)
        }
        model.leftDrawer(!model.leftDrawer.value)
      },
    }
  })
  .domain('lay')
  .register()

declare module 'lasens' {
  export interface NS {
    lay: typeof layoutThing
  }
}
