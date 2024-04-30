import {createRouter, createWebHashHistory} from 'vue-router'
import login from "../components/login.vue";
import registroTrabajadores from "../components/registroTrabajadores.vue";
import Usuarios from "../components/Usuarios.vue";
import cliente from "../components/cliente.vue";
import ingreso from '../components/ingreso.vue';
import inventario from '../components/inventario.vue';
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
    },
    {
        path: '/usuarios',
        name: 'registroUsuarios',
        component: Usuarios
    },
    {
        path: '/cliente',
        name: 'cliente',
        component: cliente
    },
    {
        path: '/ingreso',
        name: 'ingreso',
        component: ingreso
    },
    {
        path: '/inventario',
        name: 'inventario',
        component: inventario
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})