<template>
  <h3>Welcome !</h3>
  <ul>
    <li>Rendered to HTML.</li>
    <pre>props:{{props}}</pre>
    <Counter />
    <q-btn @click="link('/about')">about</q-btn>
    <reload-sw/>
  </ul>
</template>

<script lang="ts" setup>
import Counter from '../index/Counter.vue'
import { navigate } from 'vite-plugin-ssr/client/router'
import ReloadSw from "../../components/reload-sw.vue";



const props = defineProps({
  ok: String
})
</script>
