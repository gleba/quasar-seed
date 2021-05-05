import { DefineComponent } from 'vue'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  interface Vue {
    $la: NS
  }
  interface ComponentCustomProperties {
    $la: NS
  }
  $la: NS
}

// declare module 'vue' {
//   interface Vue {
//     $la: NS
//   }
// }
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $la: NS
//   }
// }
// declare module 'vue/types/vue' {
//   interface Vue {
//     $la: NS
//   }
// }
