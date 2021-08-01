import { DefineComponent } from 'vue'
import { NS } from 'lasens'

declare module 'avuef/sens' {
  export declare const vi:any
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  interface ComponentCustomProperties {
    $v: GlobalValues<NS>;
    $value: GlobalValues<NS>;
    $a: ActionsAndAtoms<NS>;
    $action: ActionsAndAtoms<NS>;
  }
}
