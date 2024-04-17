import {createRouter, createWebHashHistory} from 'vue-router'
import login from "../components/login.vue";
import registroTrabajadores from "../components/registroTrabajadores.vue";

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/registroTrabajadores',
        name: 'registroTrabajadores',
        component: registroTrabajadores
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})