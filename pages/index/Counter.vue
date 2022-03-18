<template>
  <q-btn type="button" @click="state.count++">Counter {{ state.count }}</q-btn>
  <q-btn type="button" @click="link(`/about/${state.count}`)">About/{{ state.count }}</q-btn>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })

</script>
