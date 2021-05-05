<template lang="pug">
q-layout(view="hHh Lpr lFf")
  q-header(elevated).darkStyle
    q-toolbar(q-toolbar row no-wrap items-center q-px-none)
      q-btn(q-btn flat dense round aria-label="Menu" @click="$la.lay.toggleLeft")
        i-ls-tilemenu
      q-toolbar-title Quasar seed
  q-drawer(
    v-model="$la.lay.leftDrawer"
    :mini="$la.lay.miniDrawer"
    show-if-above
    side="left"
    :bordered="!$la.lay.dark"
  )
    template(v-for="(nav, i) of navs" :key="i")
      q-item(:to="nav.to" :exact="nav.exact")
        q-item-section(v-if="nav.icon" avatar)
          q-icon(:name="nav.icon")
        q-item-section
          q-item-label( v-text="nav.label")
  router-view(v-slot="{ Component }")
    Suspense
      template(#fallback)
        q-inner-loading(showing)
          q-spinner-puff(size="120px" color="primary")
      template(#default)
        q-page-container
          component(:is="Component")
</template>

<script setup>
import {outlinedDashboard, outlinedInfo} from "@quasar/extras/material-icons-outlined";

const navs = [
    {label: 'Dashboard', icon: outlinedDashboard, to: '/', exact: true},
    {label: 'About', icon: outlinedInfo, to: '/about'},
];
</script>
