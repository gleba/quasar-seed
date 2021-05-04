import { createApp } from 'vue';
import { createQuasar } from './quasar'
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'voie-pages';
import App from './App.vue';
// import './main.css';
import lang from 'quasar/lang/ru'
import iconSet from 'quasar/icon-set/svg-material-icons-outlined'

const quasar = createQuasar({
    iconSet,
    lang,
})

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)
    .use(router)
    .use(quasar)

app.mount('#app')


import * as a from "./thinks/z1";

console.log("+", a)
//@ts-ignore
const z = import.meta.glob('./thinks/*.ts')
console.log({z})

// const modules = {
//     './dir/foo.js': () => import("./thinks/z1"),
//     './dir/bar.js': () => import("./thinks/a2")
// }
