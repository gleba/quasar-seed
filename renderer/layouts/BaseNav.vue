<template>
  <slot></slot>
<!--  <v-app>-->
<!--      <v-app-bar-->
<!--          color="primary"-->
<!--          class="toolbar"-->
<!--          height="48"-->
<!--      >-->
<!--        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->

<!--        <v-toolbar-title >My files</v-toolbar-title>-->

<!--        <v-spacer></v-spacer>-->

<!--        <v-btn variant="text" icon="mdi-magnify"></v-btn>-->

<!--        <v-btn variant="text" icon="mdi-filter"></v-btn>-->

<!--        <v-btn variant="text" icon="mdi-account"></v-btn>-->
<!--      </v-app-bar>-->

<!--      <v-navigation-drawer-->
<!--          v-model="drawer"-->
<!--          bottom-->
<!--          temporary-->
<!--      >-->
<!--        <v-list>-->
<!--          <v-list-item>-->
<!--            <v-list-item-avatar>-->
<!--              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>-->
<!--            </v-list-item-avatar>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-navigation-drawer>-->

<!--      <v-main>-->
<!--        <v-card-text>-->
<!--          The navigation drawer will appear from the bottom on smaller size screens.-->
<!--        </v-card-text>-->
<!--      </v-main>-->
<!--  </v-app>-->
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
<style>
.vapp {
  height: 100vh;
}
.toolbar {
  /*height: 48px !important;*/
}
</style>