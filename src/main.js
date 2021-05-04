import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import routes from 'voie-pages';
import App from './App.vue';
import {quasar} from "~/boot/quasar";
import 'avuef'
import {LaSensPlugin} from "avuef/sens";

//@ts-ignore
const thinks = import.meta.globEager('./thinks/*.ts')

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)
    .use(router)
    .use(quasar)
    .use(LaSensPlugin)


app.mount('#app')
