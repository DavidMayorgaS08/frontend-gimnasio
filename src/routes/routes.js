import {createRouter, createWebHashHistory} from 'vue-router'
import login from "../components/login.vue";

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})