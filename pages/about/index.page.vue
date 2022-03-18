<template>
  <h1>About page</h1>
  <pre>
    props:{{props}}
  </pre>
  <ul>
    <q-btn @click="index()">index</q-btn>
  </ul>
</template>

<script lang="ts" setup>
import Counter from '../index/Counter.vue'
import { navigate } from 'vite-plugin-ssr/client/router'
import {useHead} from "@vueuse/head";

const index = ()=> {
  navigate("/")
}

const props = defineProps({
  title: String,
  urlKey: String
})

</script>
